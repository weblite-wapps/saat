// modules
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import { differenceInSeconds } from 'date-fns'
// components
import Popover from '../../../../../../helper/components/Popover/Popover.presentational'
import CollapsableLog from '../../../../../../helper/components/CollapsableLog/CollapsableLog.presentational'
// helpers
import {
  sumTimes,
  getNow,
  formattedSeconds,
} from '../../../../../../helper/functions/time.helper'
// styles
import './WorkList.scss'
import styles from '../../../../../../helper/components/Button/Button.style'

class WorkList extends React.Component {
  constructor(props) {
    super(props)
    this.state = { anchorEl: null }
    this._handleOpenPopover = this._handleOpenPopover.bind(this)
    this._changeAnchorEl = this._changeAnchorEl.bind(this)
  }

  componentWillMount() {
    const {
      log: { _id, times },
      setSecondsElapsed,
      continueCounting,
    } = this.props
    const len = times.length

    if (len && times[len - 1].end === 'running') {
      setSecondsElapsed(
        sumTimes(times) + differenceInSeconds(getNow(), times[len - 1].start),
      )
      continueCounting(_id)
    }
  }

  _changeAnchorEl(anchorEl) {
    this.setState({ anchorEl })
  }

  _handleOpenPopover(e) {
    const {
      changePopoverId,
      log: { _id },
    } = this.props
    this._changeAnchorEl(e.target)
    changePopoverId(_id)
  }

  render() {
    const {
      userId,
      selectedUser,
      log: { _id, times, title, tags },
      log,
      popoverId,
      changePopoverId,
      handleDeleteLog,
      editClick,
      workDuration,
      secondsElapsed,
    } = this.props
    const len = times.length
    const anchorEl = this.state.anchorEl
    const playing = !!(len && log.times[len - 1].end === 'running')

    return (
      <div>
        <div className="workList-root">
          <CollapsableLog
            onDeleteClick={this._handleOpenPopover}
            onEditClick={() => editClick(log)}
            logTime={playing ? formattedSeconds(secondsElapsed) : workDuration}
            logName={title}
            tags={tags}
            showButtons={selectedUser === userId}
          />
        </div>
        {selectedUser === userId && (
          <Popover
            popoverIsOpen={_id === popoverId}
            anchorEl={anchorEl}
            anchorReference="anchorEl"
            onClose={() => changePopoverId('')}
            onYep={handleDeleteLog}
            onNop={() => changePopoverId('')}
          />
        )}
      </div>
    )
  }
}

WorkList.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  log: PropTypes.shape({}).isRequired,
  userId: PropTypes.string.isRequired,
  selectedUser: PropTypes.string.isRequired,
  popoverId: PropTypes.string.isRequired,
  handleDeleteLog: PropTypes.func.isRequired,
  changePopoverId: PropTypes.func.isRequired,
  setSecondsElapsed: PropTypes.func.isRequired,
  continueCounting: PropTypes.func.isRequired,
  editMode: PropTypes.bool,
}

WorkList.defaultProps = {
  editMode: false,
}

export default withStyles(styles)(WorkList)
