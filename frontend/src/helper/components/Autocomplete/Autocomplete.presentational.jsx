import React from 'react'
import PropTypes from 'prop-types'
import Autocomplete from 'react-autocomplete'
import { withStyles } from '@material-ui/core'
import InputBase from '@material-ui/core/InputBase'
// styles
import './Autocomplete.scss'

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
    },
  },
}))(InputBase)

const CustomizedAutocomplete = ({
  label,
  suggestions,
  inputValue,
  onInputValueChange,
  onSelect,
  onAdd,
}) => (
  <Autocomplete
    getItemValue={item => item.label}
    items={suggestions}
    renderItem={(item, isHighlighted) => (
      <div
        style={{ background: isHighlighted ? 'lightgray' : 'white' }}
        key={item._id}
      >
        {item.label}
      </div>
    )}
    renderInput={props => (
      <div className="autoComplete-group">
        <BootstrapInput
          {...props}
          inputProps={{
            onKeyPress: ev => {
              if (ev.key === 'Enter') {
                onAdd()
                ev.preventDefault()
              }
            },
          }}
        />
        <span className="autoComplete-highlight" />
        <span className="autoComplete-bar" />
        <span className="autoComplete-label">{label}</span>
      </div>
    )}
    wrapperStyle={{ zIndex: '1', width: '100%' }}
    value={inputValue}
    onChange={onInputValueChange}
    onSelect={onSelect}
  />
)

CustomizedAutocomplete.propTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  onInputValueChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
}

export default CustomizedAutocomplete
