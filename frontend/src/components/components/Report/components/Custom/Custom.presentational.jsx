// modules
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// components
import TagList from '../../../../../helper/components/TagList/TagList.presentational'
import TextField from '../../../../../helper/components/TextField/TextField.presentational'
// helpers
import { Pickers } from '../../../../../helper/functions/common.helper.component'
import { Buttons, CSVDownloader } from './Custom.helper.component'

const useStyles = makeStyles(() => ({
  button: {
    width: '100%',
  },
  input: {
    minHeight: 35,
    padding: '0 12px',
    '&::placeholder': {
      fontSize: 12,
    },
  },
}))

export default ({
  tags,
  queryTag,
  handleAddTag,
  onTagClick,
  onQueryTagChange,
  ...props
}) => {
  const classes = useStyles()
  return (
    <>
      <Pickers {...props} />
      <TextField
        label="تگ‌ها"
        placeholder="تگ مورد نظر را وارد کنید"
        value={queryTag}
        onChange={e => onQueryTagChange(e.target.value)}
        inputProps={{
          onKeyDown: e => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleAddTag()
            }
          },
          className: classes.input,
        }}
      />

      <TagList tags={tags} onTagClick={onTagClick} />

      <Buttons {...props} />
      <CSVDownloader {...props} />
    </>
  )
}
