// modules
import React from 'react'
import PropTypes from 'prop-types'
// cores
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MuiAppBar from '@material-ui/core/AppBar'
import { withStyles } from '@material-ui/core/styles'
// icons
import CloseButton from '@material-ui/icons/Close'
// styles
import { default as style } from './DialogToolbar.style'
import './DialogToolbar.scss'

const DialogToolbar = ({ title, close, classes, isLoading }) => (
    <MuiAppBar style={{ position: 'fixed' }}>
        <Toolbar>
        <IconButton disabled={isLoading} className="icon" onClick={close}>
            <CloseButton classes={{ root: classes.svgIcon }} />
        </IconButton>
        <strong>{title}</strong>
        </Toolbar>
    </MuiAppBar>
)

DialogToolbar.propTypes = {
    close: PropTypes.func.isRequired,
    classes: PropTypes.shape({}).isRequired,
    isLoading: PropTypes.bool.isRequired,
  }

export default withStyles(style)(DialogToolbar)