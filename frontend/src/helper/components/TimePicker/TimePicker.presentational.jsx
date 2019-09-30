import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import jMoment from 'moment-jalaali'
import JalaliUtils from '@date-io/jalaali'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// styles
import styles from '../../style/appStyle'

jMoment.loadPersian({ dialect: 'persian-modern' })

// style
const useStyles = makeStyles(() => ({
  timePickerComponent: {
    marginTop: 15,
  },
  pickers: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  pickerComponent: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  pickerContainer: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #818181',
    borderRadius: 11,
    boxSizing: 'border-box',
    width: '100%',
    height: 35,
    '& input': {
      textAlign: 'center',
      color: '#CCC',
      fontWeight: 500,
      padding: 6,
    },
  },
  small: {
    width: 85,
  },
  datePicker: {
    marginTop: 0,
  },
  typography: {
    color: '#818181',
    marginLeft: 7,
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 500,
    letterSpacing: -0.08,
  },
  label: {
    color: '#000',
    textAlign: 'right',
    marginBottom: 3,
  },
}))

const Picker = ({ label, isError, value, style, onChange }) => {
  const classes = useStyles()
  const [selectedDate, handleDateChange] = useState(moment())

  const changeHandler = date => {
    handleDateChange(date)
    onChange(date)
  }
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <div className={classes.pickerComponent}>
        <div className={classes.pickerContainer}>
          <TimePicker
            className={classes.datePicker}
            clearable
            okLabel="تأیید"
            cancelLabel="لغو"
            clearLabel="پاک کردن"
            ampm={false}
            labelFunc={date => (date ? date.format('hh:mm') : '')}
            value={selectedDate}
            onChange={changeHandler}
          />
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

Picker.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

Picker.defaultProps = {
  style: {},
}

export default withStyles(styles)(Picker)
