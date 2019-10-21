import React from 'react'
import PropTypes from 'prop-types'
import jMoment from 'moment-jalaali'
import JalaliUtils from '@date-io/jalaali'
import { withStyles } from '@material-ui/core/styles'
import { makeStyles } from '@material-ui/core/styles'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Typography } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
// styles
import styles from '../../style/appStyle'
// helpers
import { formattedDate } from '../../functions/date.helper'
import { cns } from '../../functions/utils.helper'

// TODO: persian digits
jMoment.loadPersian({ dialect: 'persian-modern' })

// style
const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    marginTop: '10px',
  },

  pickerComponent: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '5px',
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
  datePicker: {
    marginTop: 0,
    width: '100%',
    textAlign: 'right',
    fontSize: 16,
  },
  typography: {
    fontSize: 16,
    lineHeight: '21px',
    letterSpacing: -0.08,
    fontWeight: 500,
    color: '#000',
    textAlign: 'right',
  },
  input: {
    color: '#818181',
    fontFamily: 'iranyekan',
    textAlign: 'center',
  },
}))

const Picker = ({ label, value, onChange, style }) => {
  const classes = useStyles()
  return (
    <MuiPickersUtilsProvider utils={JalaliUtils} locale="fa">
      <div className={classes.root} style={style}>
        <Typography className={classes.typography}>{label}</Typography>
        <div className={classes.pickerComponent}>
          <div className={classes.pickerContainer}>
            <DatePicker
              className={classes.datePicker}
              clearable
              okLabel="تأیید"
              cancelLabel="لغو"
              clearLabel="پاک کردن"
              labelFunc={date => (date ? formattedDate(date) : '')}
              value={value}
              TextFieldComponent={InputBase}
              inputProps={{
                className: cns(classes.typography, classes.input),
              }}
              onChange={onChange}
            />
          </div>
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
