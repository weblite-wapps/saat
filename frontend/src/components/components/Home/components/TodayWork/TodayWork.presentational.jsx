// modules
import React from 'react'
import PropTypes from 'prop-types'
import { isWithinRange, differenceInSeconds } from 'date-fns'
// components
import LogItem from '../../../../../helper/components/LogItem/LogItem.presentational'
// helpers
import {
  formatTime,
  sumTimes,
  getNow,
  getTimeZone,
  formattedSeconds,
} from '../../../../../helper/functions/time.helper'
import {
  previousDay,
  universlFormattedDate,
} from '../../../../../helper/functions/date.helper'
// styles
import './TodayWork.scss'

export default class TodayWork extends React.Component {
  constructor(props) {
    super(props)
    this.handleStartClick = this._handleStartClick.bind(this)
    this.handleStopClick = this._handleStopClick.bind(this)
  }

  componentWillMount() {
    const {
      log: { _id, times },
      setSecondsElapsed,
      continueCounting,
      changeRunningId,
    } = this.props
    const len = times.length

    if (len && times[len - 1].end === 'running') {
      setSecondsElapsed(
        sumTimes(times) +
          differenceInSeconds(getNow(), getTimeZone(times[len - 1].start)),
      )
      continueCounting(_id)
      changeRunningId(_id)
    }
  }

  _handleStartClick() {
    const {
      log: { _id, times },
      runningId,
      onStartClick,
      onStopClick,
    } = this.props
    if (runningId) {
      onStopClick(runningId, getNow(), _id, times)
    } else {
      onStartClick(_id, sumTimes(times))
    }
  }

  _handleStopClick() {
    const now = getNow()
    const {
      log: { _id, times },
      addLogToNextDay,
      onStopClick,
    } = this.props
    const len = times.length
    if (
      isWithinRange(
        previousDay(formatTime('24:00:00')),
        times[len - 1].start,
        now,
      )
    ) {
      addLogToNextDay(now, universlFormattedDate(now))
      onStopClick(_id, previousDay(formatTime('24:00:00')), null, null)
    } else {
      onStopClick(_id, getNow(), null, null)
    }
  }

  render() {
    const { log, onToggleIsPinned, workDuration, secondsElapsed } = this.props
    const len = log.times.length
    const playing = !!(len && log.times[len - 1].end === 'running')

    return (
      <div className="todayWork-root">
        {/*<List dense disablePadding className="list">*/}
        {/*  <ListItem dense disableGutters>*/}
        {/*    <PinButton {...this.props} />*/}
        {/*    <BriefInfo {...this.props} />*/}
        {/*    <ActionButtons*/}
        {/*      {...this.props}*/}
        {/*      len={len}*/}
        {/*      onStart={this.handleStartClick}*/}
        {/*      onStop={this.handleStopClick}*/}
        {/*    />*/}
        {/*  </ListItem>*/}
        {/*  <Collapse {...this.props} />*/}
        {/*</List>*/}
        <LogItem
          name={log.title}
          pinned={log.isPinned}
          playing={playing}
          time={playing ? formattedSeconds(secondsElapsed) : workDuration}
          onTogglePin={onToggleIsPinned}
          onPause={this.handleStopClick}
          onPlay={this.handleStartClick}
        />
      </div>
    )
  }
}

TodayWork.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  runningId: PropTypes.string.isRequired,
  secondsElapsed: PropTypes.number.isRequired,
  log: PropTypes.shape({}).isRequired,
  workDuration: PropTypes.string.isRequired,
  onStartClick: PropTypes.func.isRequired,
  onStopClick: PropTypes.func.isRequired,
  addLogToNextDay: PropTypes.func.isRequired,
  changeRunningId: PropTypes.func.isRequired,
  setSecondsElapsed: PropTypes.func.isRequired,
  continueCounting: PropTypes.func.isRequired,
}
