import React from 'react'
// third-party-packages
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
// style
import { makeStyles } from '@material-ui/core/styles'
// icons
import LeftIcon from '@material-ui/icons/ChevronLeft'
import RightIcon from '@material-ui/icons/ChevronRight'
// helper
import { cns } from '../../../helper/functions/utils.helper'

const useStyles = makeStyles(theme => ({
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#CCC',
    height: 30,
  },
  currentTimeContainer: {
    flexGrow: 2,
    backgroundColor: '#818181',
    color: 'white',
    maxWidth: '55%',
    userSelect: 'none',
  },
  typography: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
  totalTimeLabel: {
    textAlign: 'center',
    flexGrow: 2,
    maxWidth: '45%',
    userSelect: 'none',
  },
  icon: {
    fill: 'white',
  },

  iconDisabled: {
    fill: '#a5a5a5',
  },
}))

const timeLabelMap = {
  Today: 'امروز',
  'This Week': 'این هفته',
  'This Month': 'این ماه',
}

const LogSwitch = ({
  currentTimeLabel,
  totalTimeLabel,
  onRightClick,
  onLeftClick,
}) => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper}>
      <Paper className={cns(classes.paper, classes.currentTimeContainer)}>
        <IconButton
          className={classes.button}
          onClick={onLeftClick}
          disabled={currentTimeLabel === 'Today'}
        >
          <LeftIcon
            className={
              currentTimeLabel === 'Today' ? classes.iconDisabled : classes.icon
            }
          />
        </IconButton>
        <Typography className={classes.typography}>
          {timeLabelMap[currentTimeLabel]}
        </Typography>
        <IconButton
          className={classes.button}
          onClick={onRightClick}
          disabled={currentTimeLabel === 'This Month'}
        >
          <RightIcon
            className={
              currentTimeLabel === 'This Month'
                ? classes.iconDisabled
                : classes.icon
            }
          />
        </IconButton>
      </Paper>
      <Typography className={cns(classes.typography, classes.totalTimeLabel)}>
        {totalTimeLabel}
      </Typography>
    </Paper>
  )
}

export default LogSwitch
