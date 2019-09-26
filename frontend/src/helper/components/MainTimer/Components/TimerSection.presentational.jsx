import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import Typography from '@material-ui/core/Typography'
// style
import { makeStyles } from '@material-ui/core/styles'
// helper
import { cns, toPersian } from '../../../functions/utils.helper'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  time: {
    fontSize: 45,
    lineHeight: '70px',
    letterSpacing: -0.32,
    fontWeight: 'bold',
  },
  typography: {
    display: 'flex',
    color: '#FFF',
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
    fontWeight: 'bold',
  },
  label: {
    borderRadius: 18,
    padding: '2px 21px',
  },
}))

const TimerSection = ({ time, color, label }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography className={classes.time}>{toPersian(time)}</Typography>
      <Typography
        className={cns(classes.typography, classes.label)}
        style={{ backgroundColor: color }}
      >
        {label}
      </Typography>
    </div>
  )
}

TimerSection.propTypes = {
  time: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
}

export default TimerSection
