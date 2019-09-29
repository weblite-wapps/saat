// modules
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// components
import MainTimer from '../../../../../helper/components/MainTimer/MainTimer.presentational'
import LogSwitch from '../../../../../helper/components/LogSwitch/LogSwitch.presentational'
// styles
import './Summary.scss'
import styles from './Summary.style'

const Summary = ({
  hour,
  minute,
  second,
  timeLabel,
  onLeftClick,
  onRightClick,
}) => (
  <div className="summary-container">
    <MainTimer hour={hour} minute={minute} second={second} />
    <LogSwitch
      totalTimeLabel="مجموع زمان"
      currentTimeLabel={timeLabel}
      onLeftClick={onLeftClick}
      onRightClick={onRightClick}
    />
  </div>
)

export default withStyles(styles)(Summary)
