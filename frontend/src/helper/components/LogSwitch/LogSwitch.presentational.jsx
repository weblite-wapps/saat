import React from 'react'
import PropTypes from 'prop-types'
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
import { cns, ab } from '../../../helper/functions/utils.helper'

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
  },
  typography: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
  totalTimeLabel: {
    textAlign: 'center',
    maxWidth: '50%',
    flexGrow: 2,
  },
  icon: {
    fill: 'white',
  },
}))

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
        <IconButton className={classes.button} onClick={onLeftClick}>
          <LeftIcon className={classes.icon} />
        </IconButton>
        <Typography className={classes.typography}>
          {currentTimeLabel}
        </Typography>
        <IconButton className={classes.button} onClick={onRightClick}>
          <RightIcon className={classes.icon} />
        </IconButton>
      </Paper>
      <Typography className={cns(classes.typography, classes.totalTimeLabel)}>
        {totalTimeLabel}
      </Typography>
    </Paper>
  )
}

LogSwitch.propTypes = {}

export default LogSwitch
