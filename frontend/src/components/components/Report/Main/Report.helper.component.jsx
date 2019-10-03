// modules
import * as R from 'ramda'
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// Mui components
import MuiCollapse from '@material-ui/core/Collapse'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
// icons
import FlagIcon from '@material-ui/icons/Flag'
import ListAltIcon from '@material-ui/icons/ListAlt'
import ImportExportIcon from '@material-ui/icons/ImportExport'
import InsertChartOutlinedIcon from '@material-ui/icons/InsertChartOutlined'
// components
import Navigator from '../components/Navigator/Navigator.container.react'
import Button from '../../../../helper/components/Button/Button.presentational'
import ShowChart from '../components/ShowChart/ShowChart.container.react'
import Custom from '../components/Custom/Custom.container.react'
import WorkList from '../components/WorkList/Main/WorkList.container.react'
import Leaderboard from '../components/Leaderboard/Leaderboard.container.react'
// selectors
import {
  getWorksDuration,
  getStaffWorksDuration,
} from '../../../../helper/selectors/workDuration.selector'
// helpers
import { toPersian, cns, ab } from '../../../../helper/functions/utils.helper'
import {
  universlFormattedDate
} from '../../../../helper/functions/date.helper'
import { formattedSeconds } from '../../../../helper/functions/time.helper'
import { tooltipTitles } from './Report.helper'
// styles
import './Report.scss'

const Collapse = withStyles({
  container: {
    height: '100%',
  },
  wrapper: {
    height: '100%',
  },
})(props => <MuiCollapse classes={props.classes} {...props} />)

const IconButton = ({ expandMode, changeExpandMode, mode }) => (
  <Tooltip
    title={tooltipTitles[mode]}
    placement="bottom"
    enterDelay={150}
    leaveDelay={150}
  >
    <Button
      variant={expandMode === mode ? 'contained' : 'outlined'}
      onClick={() => changeExpandMode(mode)}
      componentName="Report"
    >
      {mode === 'workList' && <ListAltIcon />}
      {mode === 'export' && <ImportExportIcon />}
      {mode === 'showChart' && <InsertChartOutlinedIcon />}
      {mode === 'leaderboard' && <FlagIcon />}
    </Button>
  </Tooltip>
)

IconButton.propTypes = {
  expandMode: PropTypes.string.isRequired,
  changeExpandMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
}

const controls = [
  {
    mode: 'leaderboard',
    label: 'لیدربرد',
    filter: R.prop('creator'),
  },
  {
    mode: 'export',
    label: 'خروجی',
    filter: () => true,
  },
  {
    mode: 'showChart',
    label: 'نمودار',
    filter: () => true,
  },
  {
    mode: 'workList',
    label: 'لیست موارد',
    filter: () => true,
  },
]

export const ControlBar = props => (
  <div className="report-controlBar">
    {R.map(
      ({ mode, label, filter }) =>
        filter(props) ? (
          <Button
            text={label}
            onClick={() => props.changeExpandMode(mode)}
            selected={mode === props.expandMode}
            variant="labeled"
            classesProp={{
              typography: 'report-controlBar__typography',
              button: cns(
                'report-controlBar__button',
                ab('small-button')(props.creator),
              ),
            }}
          />
        ) : null,
      controls,
    )}
  </div>
)

ControlBar.propTypes = {
  expandMode: PropTypes.string.isRequired,
}

export const ExportPanel = ({ expandMode, totalDurationFromServer }) => (
  <Collapse
    component="div"
    in={expandMode === 'export'}
    timeout="auto"
    unmountOnExit
  >
    <div className="report-export">
      <Custom />
      <div className="report-text">
        {totalDurationFromServer && (
          <Typography className="report-text__typography">
            {totalDurationFromServer === 'calc'
              ? 'در حال محاسبه'
              : 'مقدار مورد نظر :'}
          </Typography>
        )}
        {totalDurationFromServer && totalDurationFromServer !== 'calc' && (
          <Typography
            className="report-text__typography"
            style={{ marginTop: 5, direction: 'ltr' }}
          >
            {toPersian(totalDurationFromServer)}
          </Typography>
        )}
      </div>
    </div>
  </Collapse>
)

ExportPanel.propTypes = {
  expandMode: PropTypes.string.isRequired,
  totalDurationFromServer: PropTypes.string.isRequired,
}

export const BarChartPanel = ({ expandMode }) => (
  <Collapse
    component="div"
    in={expandMode === 'showChart'}
    timeout="auto"
    unmountOnExit
  >
    <ShowChart />
  </Collapse>
)

BarChartPanel.propTypes = {
  expandMode: PropTypes.string.isRequired,
}

export const LeaderboardPanel = ({ expandMode }) => (
  <Collapse
    component="div"
    in={expandMode === 'leaderboard'}
    timeout="auto"
    unmountOnExit
  >
    <Leaderboard />
  </Collapse>
)

LeaderboardPanel.propTypes = {
  expandMode: PropTypes.string.isRequired,
}

export const WorkListPanel = ({
  selectedUser,
  userId,
  expandMode,
  totalDuration,
  staffTotalDuration,
  pieChartData,
  staffPieChartData,
  logs,
  staffLogs,
  currentPage,
}) => {
  const getDuration =
    selectedUser === userId ? getWorksDuration : getStaffWorksDuration
  const totalTime = selectedUser === userId ? totalDuration : staffTotalDuration

  return (
    <Collapse
      component="div"
      in={expandMode === 'workList'}
      timeout="auto"
      unmountOnExit
    >
      <Navigator />
      <div className="report-worklist__statics">
        <Typography
          className="report-worklist__text"
          style={{ direction: 'ltr' }}
        >
          {toPersian(formattedSeconds(totalTime, true))}
        </Typography>
        <Typography className="report-worklist__text">
          {'مجموع زمان :'}
        </Typography>
      </div>
      {(selectedUser === userId ? logs : staffLogs)
        .filter(log => log.date === universlFormattedDate(currentPage))
        .map(log => (
          <WorkList key={log._id} log={log} getDuration={getDuration} />
        ))}
      <div
        style={{
          height: 15,
        }}
      />
    </Collapse>
  )
}

WorkListPanel.propTypes = {
  userId: PropTypes.string.isRequired,
  logs: PropTypes.arrayOf(PropTypes.object).isRequired,
  staffLogs: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentPage: PropTypes.instanceOf(Date).isRequired,
  totalDuration: PropTypes.string.isRequired,
  staffTotalDuration: PropTypes.string.isRequired,
  pieChartData: PropTypes.arrayOf(PropTypes.object).isRequired,
  staffPieChartData: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedUser: PropTypes.string.isRequired,
  expandMode: PropTypes.string.isRequired,
}
