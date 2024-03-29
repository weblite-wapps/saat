// modules
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import MuiCollapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Divider from '@material-ui/core/Divider'
import Tooltip from '@material-ui/core/Tooltip'
// icons
import Play from '@material-ui/icons/PlayArrow'
import Pause from '@material-ui/icons/Pause'
import Lock from '@material-ui/icons/Lock'
import LockOpen from '@material-ui/icons/LockOpen'
// helpers
import { formattedSeconds, formattedName } from './TodayWork.helper'
// styles
import './TodayWork.scss'

export const PinButton = ({
  log: { _id, title, tags, isPinned, date },
  isLoading,
  onToggleIsPinned,
}) => (
  <IconButton
    style={{ marginRight: '5px' }}
    disabled={isLoading}
    onClick={() => onToggleIsPinned(_id, title, tags, !isPinned, date)}
  >
    <Tooltip
      title={isPinned ? 'UnPin' : 'Pin'}
      placement="bottom"
      enterDelay={150}
      leaveDelay={150}
    >
      {isPinned ? (
        <Lock className="todayWork-icon" />
      ) : (
        <LockOpen className="todayWork-icon" />
      )}
    </Tooltip>
  </IconButton>
)

PinButton.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  log: PropTypes.shape({}).isRequired,
  onToggleIsPinned: PropTypes.func.isRequired,
}

export const BriefInfo = ({ runningId, log: { _id, title }, workDuration }) => (
  <Typography variant="body1" dir="auto">
    {formattedName(title) === title ? (
      <span className="todayWork-title">{formattedName(title)}</span>
    ) : (
      <Tooltip
        title={title}
        placement="bottom"
        enterDelay={300}
        leaveDelay={300}
      >
        <span className="todayWork-title">{formattedName(title)}</span>
      </Tooltip>
    )}
    <span className="todayWork-time">
      &nbsp;| {runningId === _id ? 'Running' : workDuration}
    </span>
  </Typography>
)

BriefInfo.propTypes = {
  runningId: PropTypes.string.isRequired,
  log: PropTypes.shape({}).isRequired,
  workDuration: PropTypes.string.isRequired,
}

export const Collapse = ({ runningId, log: { _id }, secondsElapsed }) => (
  <MuiCollapse
    component="li"
    in={_id === runningId}
    timeout="auto"
    unmountOnExit
  >
    <Divider light variant="inset" />
    <div className="todayWork-stopwatch">
      <Typography variant="subtitle1">
        {formattedSeconds(secondsElapsed)}
      </Typography>
    </div>
  </MuiCollapse>
)

Collapse.propTypes = {
  runningId: PropTypes.string.isRequired,
  log: PropTypes.shape({}).isRequired,
  secondsElapsed: PropTypes.number.isRequired,
}
