import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import Typography from '@material-ui/core/Typography'
// components
import TimerSection from './Components/TimerSection.presentational'
// style
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 300,
    margin: 'auto',
    marginBottom: '18px',
  },
  colon: {
    fontSize: '70px',
    lineHeight: '70px',
    letterSpacing: -0.49,
    fontWeight: 'bold',
  },
}))
const MainTimer = ({ hour, minute, second }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TimerSection color="#E6494F" time={hour} label="ساعت" />
      <Typography className={classes.colon}>:</Typography>
      <TimerSection color="#F2CB00" time={minute} label="دقیقه" />
      <Typography className={classes.colon}>:</Typography>
      <TimerSection color="#4FC4F4" time={second} label="ثانیه" />
    </div>
  )
}

MainTimer.propTypes = {
  hour: PropTypes.string,
  minute: PropTypes.string,
  second: PropTypes.string,
}

MainTimer.defaultProps = {
  hour: '00',
  minute: '00',
  second: '00',
}
export default MainTimer
