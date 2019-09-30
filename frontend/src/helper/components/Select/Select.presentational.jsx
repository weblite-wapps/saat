// modules
import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
// components
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'
// style
import './Select.scss'

const BootstrapInput = withStyles(() => ({
  root: {
    marginTop: 15,
    width: '100%',
  },

  input: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    border: '1px solid #818181',
    color: '#818181',
    minHeight: 33,
    maxHeight: 33,
    fontSize: '12px',
    lineHeight: '21px',
    padding: '0 10px',
    fontFamily: 'iranyekan',
    borderRadius: '11px',
    '&:focus': {
      borderRadius: '11px',
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase)

const MySelect = ({ options, currentValue, onChange }) => (
  <Select
    value={currentValue}
    onChange={e => onChange(e.target.value)}
    input={<BootstrapInput name="age" id="age-customized-select" />}
  >
    {options.map(({ value, label }) => (
      <MenuItem
        value={value}
        className="select-option"
      >
        {label}
      </MenuItem>
    ))}
  </Select>
)

MySelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default MySelect
