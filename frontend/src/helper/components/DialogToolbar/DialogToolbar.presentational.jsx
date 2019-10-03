// modules
import React from 'react'
import PropTypes from 'prop-types'
// cores
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MuiAppBar from '@material-ui/core/AppBar'
import { withStyles, makeStyles } from '@material-ui/core/styles'
// icons
import CloseButton from '@material-ui/icons/Close'
// styles
import { default as style } from './DialogToolbar.style'
import './DialogToolbar.scss'

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 12,
    lineHeight: '21px',
    fontFamily: 'iranyekan',
    userSelect: 'none',
  },
  toolbar: {
    minHeight: 40,
    height: 40,
    [theme.breakpoints.up('md')]: {
      minHeight: 40,
    },
  },
}))

const DialogToolbar = ({ title, onClose, classes, isLoading }) => {
  const defaultClasses = useStyles()
  return (
    <MuiAppBar
      style={{ position: 'static', backgroundColor: '#818181' }}
      elevation={0}
    >
      <Toolbar className={defaultClasses.toolbar}>
        <IconButton className="icon" onClick={onClose}>
          <CloseButton classes={{ root: classes.svgIcon }} />
        </IconButton>
        <strong className={defaultClasses.title}>{title}</strong>
      </Toolbar>
    </MuiAppBar>
  )
}

DialogToolbar.propTypes = {
  close: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  // isLoading: PropTypes.bool.isRequired,
}

export default withStyles(style)(DialogToolbar)
