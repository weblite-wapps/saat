// modules
import React from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { makeStyles } from '@material-ui/core/styles'
// cores
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'
import MuiAppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
// icons
import CloseIcon from '@material-ui/icons/Close'
// components
import Popover from '../../../../helper/components/Popover/Popover.presentational'
import TagList from '../../../../helper/components/TagList/TagList.presentational'
import Button from '../../../../helper/components/Button/Button.presentational'
import TimePicker from '../../../../helper/components/TimePicker/TimePicker.presentational'
// helpers
import { cns, toPersian } from '../../../../helper/functions/utils.helper'
import TextField from '../../../../helper/components/TextField/TextField.presentational'
import { isPhoneOrTablet } from '../../../../helper/functions/device.helper'
// classes
import './Edit.scss'
import { default as style } from './Edit.style'

const AppBar = ({ close, classes, isLoading }) => (
  <MuiAppBar style={{ position: 'fixed' }}>
    <Toolbar>
      <IconButton disabled={isLoading} className="icon" onClick={close}>
        <CloseIcon classes={{ root: classes.svgIcon }} />
      </IconButton>
      <strong className="edit-appbar">ویرایش</strong>
    </Toolbar>
  </MuiAppBar>
)

AppBar.propTypes = {
  submit: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export const AppBarWithStyle = withStyles(style)(AppBar)

const useStyles = makeStyles(() => ({
  input: {
    minHeight: 35,
    padding: '0 12px',
  },
  list: {
    padding: 0,
  },
}))

export const Content = ({
  title,
  onTitleChange,
  tags,
  times,
  isError,
  queryTag,
  onTagClick,
  handleAddTag,
  onQueryTagChange,
  submit,
  ...others
}) => {
  const classes = useStyles()
  return (
    <div className="intervalList scroll-bar">
      <div className="title-panel">
        <TextField
          label="عنوان ساعت شمار"
          value={title}
          onChange={onTitleChange}
          isError={isError && isError.title}
        />
      </div>

      <TextField
        label="تگ‌ها"
        placeholder="تگ مورد نظر را وارد کنید"
        value={queryTag}
        onChange={e => onQueryTagChange(e.target.value)}
        inputProps={{
          onKeyDown: e => {
            if (e.key === 'Enter' && !e.shiftKey && !isPhoneOrTablet) {
              e.preventDefault()
              handleAddTag()
            }
          },
          className: classes.input,
        }}
      />
      <TagList tags={tags} onTagClick={onTagClick} />
      <List className={classes.list}>
        {times.map((time, index) => (
          <IntervalItem {...others} index={index} time={time} key={time._id} />
        ))}
      </List>
      <Button variant="fixed" text="ذخیره" onClick={submit} disableAddIcon />
    </div>
  )
}

Content.propTypes = {
  times: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  title: PropTypes.string.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  isError: PropTypes.shape({}).isRequired,
}

export const ContentWithStyle = withStyles(style)(Content)

const useIntervalItemStyles = makeStyles(() => ({
  itemInterval: {
    flexDirection: 'column',
    padding: 0,
  },
  timePicker: {
    width: 100,
    marginTop: 0,
    marginLeft: 10,
  },
  closeButton: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: '#D65555',
    '&:hover': {
      backgroundColor: '#be2f2f',
    },
  },
  closeIcon: {
    width: 18,
    height: 18,
    fill: '#fff',
  },
  counter: {
    width: 35,
    height: 35,
    borderRadius: 11,
    backgroundColor: '#CCC',
    fontSize: 20,
    lineHeight: '35px',
    letterSpaceing: -0.04,
    flexShrink: 0,
    color: '#fff',
    display: 'inline-flex',
    justifyContent: 'center',
    marginLeft: 15,
  },
  separator: {
    border: 'none',
    height: 1,
    backgroundColor: '#CCC',
    width: '100%',
  },
  up: {
    margin: 0,
    marginBottom: 8,
  },
  down: {
    margin: '15px 0 8px',
  },
}))

const IntervalItem = props => {
  const _handleOpenPopOver = (e, id) => {
    const { changeAnchorEl, changePopoverId } = props
    changeAnchorEl(e.target)
    changePopoverId(id)
  }

  const {
    time: { _id, start, end },
    index,
    onStartTimeChange,
    onEndTimeChange,
    removeInterval,
    anchorEl,
    popoverId,
  } = props

  const classes = useIntervalItemStyles()

  return (
    <ListItem className={classes.itemInterval} key={_id}>
      {index === 0 && <hr className={cns(classes.separator, classes.up)} />}
      <div className="interval-panel">
        <div className="deletePanel">
          {end !== 'running' ? (
            <>
              <IconButton
                className={classes.closeButton}
                onClick={e => _handleOpenPopOver(e, _id)}
              >
                <CloseIcon className={classes.closeIcon} />
              </IconButton>
              <Popover
                popoverIsOpen={popoverId === _id}
                anchorEl={anchorEl}
                anchorReference="anchorEl"
                onClose={_handleOpenPopOver}
                onYep={() => removeInterval(_id)}
                onNop={_handleOpenPopOver}
              />
            </>
          ) : (
            <div
              style={{
                width: 35,
                height: 35,
              }}
            />
          )}
        </div>
        <TimePicker
          label="ساعت پایان"
          running={end === 'running'}
          className={classes.timePicker}
          onChange={value => onEndTimeChange({ value, id: _id })}
          value={end}
        />
        <TimePicker
          className={classes.timePicker}
          label="ساعت شروع"
          onChange={value => onStartTimeChange({ value, id: _id })}
          value={start}
        />
        <Typography className={classes.counter}>
          {toPersian(index + 1)}
        </Typography>
      </div>
      <hr className={cns(classes.separator, classes.down)} />
    </ListItem>
  )
}

IntervalItem.propTypes = {
  onStartTimeChange: PropTypes.func.isRequired,
  onEndTimeChange: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  removeInterval: PropTypes.func.isRequired,
}
