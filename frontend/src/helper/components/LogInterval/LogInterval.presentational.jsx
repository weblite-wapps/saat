// modules
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// style
import { makeStyles } from '@material-ui/core/styles'
// icons
import CloseIcon from '@material-ui/icons/Close'
// components
// import TimePicker from './components/TimePicker'

const useStyles = makeStyles(() => ({}))

const LogInterval = ({
  label,
  onDelete,
  index,
  onStartTimeChange,
  onEndTimeChange,
  startTime,
  endTime,
  running,
}) => {
  const classes = useStyles()
  return (
    <div>
      <Button>
        <CloseIcon />
      </Button>
      <TimePicker label="ساعت شروع" />
      <TimePicker label="ساعت پایان" />
      <Button>
        <Typography>{index}</Typography>
      </Button>
    </div>
  )
}

LogInterval.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
}

LogInterval.defaultProps = {
  onClick: Function.prototype,
  label: '',
}

export default LogInterval
