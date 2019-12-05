// modules
import React from 'react'
import PropTypes from 'prop-types'
import MuiCollapse from '@material-ui/core/Collapse'
import { makeStyles, darken } from '@material-ui/core/styles'
// components
import Button from '../../../../helper/components/Button/Button.presentational'
import TextField from '../../../../helper/components/TextField/TextField.presentational'
import DatePicker from '../../../../helper/components/Picker/Picker.presentational'
import TimePicker from '../../../../helper/components/TimePicker/TimePicker.presentational'
import TagList from '../../../../helper/components/TagList/TagList.presentational'
// helpers
import { cns, ab } from '../../../../helper/functions/utils.helper'
// styles
import './Add.scss'

const useStyles = makeStyles(() => ({
  button: {
    marginTop: 15,
    width: '100%',
    height: 35,
  },
  greenButton: {
    background: '#84CE2D',
    '&:hover': {
      backgroundColor: darken('#84CE2D', 0.1),
    },
  },
  input: {
    minHeight: 35,
    padding: '0 12px',
    '&::placeholder': {
      fontSize: 12,
    },
  },
  buttonText: {
    fontSize: 12,
    lineHeight: '21px',
    fontWeight: 'bold',
  },
}))

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
  onStartTimeChange,
  onEndTimeChange,
  onDateChange,
  expanded,
  handleAddTag,
  onExpand,
  onAdd,
  onCustomAdd,
  onKeyDown,
}) => {
  const classes = useStyles()
  return (
    <div className="c--add_container scroll-bar">
      <TextField
        label="عنوان ساعت شمار"
        placeholder="مثلا: تست حرکت شناسی از خیلی سبز"
        value={title}
        onChange={e => onTitleChange(e.target.value)}
        isError={isError.title}
        inputProps={{
          className: classes.input,
        }}
      />

      <TextField
        label="برچسب‌ها"
        placeholder="مثلا: تست - خیلی سبز - حرکت‌ شناسی"
        value={queryTag}
        onChange={e => onQueryTagChange(e.target.value)}
        isError={isError.queryTag}
        inputProps={{
          onKeyDown: e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              handleAddTag()
            }
          },
          className: classes.input,
        }}
      />

      <TagList tags={tags} onTagClick={onTagClick} />

      <Button
        variant="labeled"
        text="وارد کردن زمان به صورت دستی"
        onClick={onExpand}
        classesProp={{
          button: cns(classes.button, ab(classes.greenButton)(expanded)),
          typography: classes.buttonText,
        }}
      />

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
        style={{ marginTop: '20px', width: '100%' }}
        variant="labeled"
        text="افزودن"
        onClick={() =>
          expanded
            ? onCustomAdd(title, selectedTags, date, startTime, endTime)
            : onAdd(title, selectedTags)
        }
      />
    </div>
  )
}

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
