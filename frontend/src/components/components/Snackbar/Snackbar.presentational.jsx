import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import { makeStyles } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'
// Icons
import ErrorIcon from '@material-ui/icons/Error'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
// helpers
import { cns } from '../../../helper/functions/utils.helper'

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
}

const useStyles = makeStyles(theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'right',
  },
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    margin: 0,
    left: 0,
    right: 0,
    top: 0,
    width: '100%',
    minHeight: '45px',
    height: '45px',
  },
}))

const AppSnackbar = ({ message, type, snackbarIsOpen, closeSnackbar }) => {
  const classes = useStyles()
  const Icon = type ? variantIcon[type] : () => null

  return (
    <Snackbar
      className={classes.root}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={snackbarIsOpen}
      autoHideDuration={2000}
      onClose={closeSnackbar}
    >
      <SnackbarContent
        className={classes[type]}
        aria-describedby="client-snackbar"
        message={
          <span
            className={classes.message}
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              fontFamily: 'iranyekan',
              lineHeight: '2۱px',
              letterSpacing: '-0.1px',
            }}
          >
            <Icon className={cns(classes.icon, classes.iconVariant)} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={closeSnackbar}
          >
            <CloseIcon className={classes.icon} />
          </IconButton>,
        ]}
      />
    </Snackbar>
  )
}

AppSnackbar.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  snackbarIsOpen: PropTypes.bool.isRequired,
  closeSnackbar: PropTypes.func.isRequired,
}

AppSnackbar.defaultProps = {
  type: 'success',
}

export default AppSnackbar
