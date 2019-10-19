import React from 'react'
import PropTypes from 'prop-types'
import jMoment from 'moment-jalaali'
import JalaliUtils from '@date-io/jalaali'
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
// styles
import styles from '../../style/appStyle'
// helper
import { cns, toPersian } from '../../functions/utils.helper'

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
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
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
      fontWeight: 500,
      padding: 6,
    },
  },
  small: {
    width: 85,
  },
  datePicker: {
    marginTop: 0,
    fontSize: 16,
  },
  typography: {
    color: '#818181',
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 500,
    letterSpacing: -0.08,
  },
  label: {
    color: '#000',
    textAlign: 'right',
    marginLeft: 7,
    marginBottom: 3,
  },
  input: {
    color: '#818181',
    fontFamily: 'iranyekan',
    textAlign: 'center',
  },
}))

const Picker = ({ label, isError, value, className, onChange, running }) => {
  const classes = useStyles()

  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <div
        className={cns(
          classes.pickerComponent,
          classes.timePickerComponent,
          className,
        )}
      >
        <Typography className={cns(classes.label, classes.typography)}>
          {label}
        </Typography>
        <div className={classes.pickerContainer}>
          {!running ? (
            <TimePicker
              className={classes.datePicker}
              clearable
              okLabel="تأیید"
              cancelLabel="لغو"
              clearLabel="پاک کردن"
              ampm={false}
              labelFunc={date => (date ? toPersian(date.format('hh:mm')) : '')}
              value={value}
              onChange={value => onChange(new Date(value))}
              inputProps={{
                className: cns(classes.typography, classes.input),
              }}
            />
          ) : (
            <Typography className={classes.typography} color="black">
              در حال اجرا
            </Typography>
          )}
        </div>
      </div>
    </MuiPickersUtilsProvider>
  )
}

Picker.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  running: PropTypes.bool,
}

Picker.defaultProps = {
  className: '',
  running: false,
}

export default withStyles(styles)(Picker)
