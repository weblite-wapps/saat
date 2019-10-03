import React from 'react'
import PropTypes from 'prop-types'
// components
import Select from '../../../../../helper/components/Select/Select.presentational'
// styles
import './SelectBar.scss'

const SelectBar = ({ creator, selectedUser, users, changeSelectedUser }) => (
  <div className="selectBar-container">
    {creator ? (
      <Select
        onChange={changeSelectedUser}
        currentValue={selectedUser}
        options={users.map(({ id, username }) => ({
          value: id,
          label: username,
        }))}
      />
    ) : null}
  </div>
)

SelectBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  creator: PropTypes.bool.isRequired,
  selectedUser: PropTypes.string.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeSelectedUser: PropTypes.func.isRequired,
}

export default SelectBar
