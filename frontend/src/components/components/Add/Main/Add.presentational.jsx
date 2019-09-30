// modules
import React from 'react'
import PropTypes from 'prop-types'
import MuiCollapse from '@material-ui/core/Collapse'
// components
import Button from '../../../../helper/components/Button/Button.presentational'
// import Picker from '../../../../../helper/components/Picker/Picker.presentational'
import TextField from '../../../../helper/components/TextField/TextField.presentational'
import DatePicker from '../../../../helper/components/Picker/Picker.presentational'
import TimePicker from '../../../../helper/components/TimePicker/TimePicker.presentational'
import TagList from '../../../../helper/components/TagList/TagList.presentational'
// helpers
import { isPhoneOrTablet } from '../../../../helper/functions/device.helper'
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
  onKeyDown,
}) => (
  <div className="c--add_container">
    <TextField
      label="عنوان ساعت شمار"
      placeholder="عنوان ساعت شمار را وارد کنید"
      value={title}
      onChange={e => onTitleChange(e.target.value)}
      isError={isError.title}
    />

    <TextField
      label="تگ‌ها"
      placeholder="تگ مورد نظر را وارد کنید"
      value={queryTag}
      onChange={e => onQueryTagChange(e.target.value)}
      isError={isError.queryTag}
      inputProps={{
        onKeyDown: e => {
          if (e.key === 'Enter' && !e.shiftKey && !isPhoneOrTablet) {
            e.preventDefault()
            handleAddTag()
          }
        },
        style: {
          minHeight: 30,
          fontSize: '12px',
          lineHeight: '21px',
          letterSpacing: '-0.08px',
          fontFamily: 'iranyekan',
        },
      }}
    />

    <TagList tags={tags} onTagClick={onTagClick} />

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

    <MuiCollapse in={expanded} timeout="auto" unmountOnExit>
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
      <TimePicker
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
      onClick={() => onCustomAdd(title, selectedTags, date, startTime, endTime)}
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
