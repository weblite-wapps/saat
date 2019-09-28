// modules
import React from 'react'
import PropTypes from 'prop-types'
import MuiCollapse from '@material-ui/core/Collapse'
// components
import Button from '../../../../helper/components/Button/Button.presentational'
// import Picker from '../../../../../helper/components/Picker/Picker.presentational'
import TextField from '../../../../helper/components/TextField/TextField.presentational'
import Autocomplete from '../../../../helper/components/Autocomplete/Autocomplete.presentational'
import DatePicker from '../../../../helper/components/Picker/Picker.presentational'
import TimePicker from '../../../../helper/components/TimePicker/TimePicker.presentational'
// styles
import './Add.scss'

const Add = ({
  isLoading,
  logs,
  title,
  selectedTags,
  queryTag,
  suggestions,
  tags,
  date,
  startTime,
  endTime,
  isError,

  onTitleChange,
  onQueryTagChange,
  onTagClick,
  changeTab,
  changeIsError,
  onStartTimeChange,
  onEndTimeChange,
  onDateChange,
  expanded,
  handleAddTag,
  onExpand,
  onAdd,
  onCustomAdd,
}) => (
  <div className="add-container">
    <TextField
      label="عنوان ساعت شمار"
      placeholder="عنوان ساعت شمار را وارد کنید"
      value={title}
      onChange={e => onTitleChange(e.target.value)}
      isError={isError.title}
    />
    <Autocomplete
      label="تگ‌ها"
      suggestions={suggestions}
      inputValue={queryTag}
      onInputValueChange={e => onQueryTagChange(e.target.value)}
      onSelect={value => onQueryTagChange(value)}
      onAdd={handleAddTag}
    />
    <Button
      text="+"
      onClick={handleAddTag}
      componentName="Add"
    />

    <Button
      variant="labeled"
      text="وارد کردن زمان به صورت دستی"
      onClick={onExpand}
    />
    {/* <Button
      disabled={isLoading}
      text="Add"
      onClick={() => onAdd(title, selectedTags)}
      componentName="Add"
    /> */}

    <MuiCollapse component="li" in={expanded} timeout="auto" unmountOnExit>
      <DatePicker
        label="تاریخ"
        type="date"
        isError={isError.date}
        value={date}
        onChange={onDateChange}
      />
      <TimePicker
        label="ساعت شروع"
        type="time"
        isError={isError.startTime}
        value={startTime}
        onChange={onStartTimeChange}
      />
      <DatePicker
        label="ساعت پایان"
        type="time"
        isError={isError.endTime}
        value={endTime}
        onChange={onEndTimeChange}
      />
    </MuiCollapse>

    <Button
      variant="fixed"
      text="افزودن"
      onClick={() =>
        onCustomAdd(title, selectedTags, date, startTime, endTime)
      }
    />
  </div>
)


Add.propTypes = {
  title: PropTypes.string.isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  isError: PropTypes.shape({}).isRequired,
  onStartTimeChange: PropTypes.func.isRequired,
  onEndTimeChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
  onCustomAdd: PropTypes.func.isRequired,
  onTitleChange: PropTypes.func.isRequired,
}

export default Add
