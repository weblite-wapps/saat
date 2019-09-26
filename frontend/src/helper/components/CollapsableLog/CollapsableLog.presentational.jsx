import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import Paper from '@material-ui/core/paper'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
// style
import { makeStyles, darken } from '@material-ui/core/styles'
// components
import LogItem from '../LogItem/LogItem.presentational'
import Badge from '../Badge/Badge.presentational'
import Button from '../Button/Button.presentational'
//

const useStyles = makeStyles(() => ({
  innerPaper: {
    overflow: 'hidden',
    borderRadius: '25px !important',
    backgroundColor: '#F0F0F0',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
  },
  expanded: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  tagsContainer: {
    display: 'flex',
    userSelect: 'none',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: '#F0F0F0',
    marginTop: 10,
  },
  rightBtn: {
    flex: '2 2 auto',
    backgroundColor: '#EDCB11',
    borderRadius: 0,
    borderTop: '5px solid #fff',
    borderLeft: '2.5px solid #fff',
    '&:hover': {
      backgroundColor: darken('#EDCB11', 0.1),
    },
  },
  leftBtn: {
    flex: '2 2 auto',
    borderRadius: 0,
    backgroundColor: '#D65555',
    borderTop: '5px solid #fff',
    borderRight: '2.5px solid #fff',
    '&:hover': {
      backgroundColor: darken('#D65555', 0.1),
    },
  },
  buttonContainer: {
    display: 'flex',
    marginTop: 5,
  },
}))

const CollapsableLog = ({
  tags,
  onLeftClick,
  onRightClick,
  logName,
  logTime,
}) => {
  const classes = useStyles()
  return (
    <ExpansionPanel classes={{ root: classes.innerPaper }}>
      <ExpansionPanelSummary
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <LogItem name={logName} time={logTime} disableHandler />
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.expanded}>
          <div className={classes.tagsContainer}>
            {tags.map(({ label, id }) => (
              <Badge key={id} label={label} disableHandler />
            ))}
          </div>

          <div className={classes.buttonContainer}>
            <Button
              text="حذف"
              onClick={onLeftClick}
              variant="normal"
              classesProp={{ button: classes.leftBtn }}
            />
            <Button
              text="ویرایش"
              variant="normal"
              onClick={onRightClick}
              classesProp={{ button: classes.rightBtn }}
            />
          </div>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

CollapsableLog.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
    }),
  ),
  onLeftClick: PropTypes.func.isRequired,
  onRightClick: PropTypes.func.isRequired,
  logName: PropTypes.string.isRequired,
  logTime: PropTypes.string.isRequired,
}
CollapsableLog.defaultProps = {
  tags: [],
}

export default CollapsableLog
