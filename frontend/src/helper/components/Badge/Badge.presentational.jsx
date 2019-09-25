// modules
import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// style
import { makeStyles } from '@material-ui/core/styles'
// icons
import CloseIcon from '@material-ui/icons/Close'
// helper
import { getDirection } from '../../functions/utils.helper'

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 200,
    borderRadius: 11,
    minHeight: 30,
    margin: 5,
    backgroundColor: '#818181',
    color: '#fff',
    overflow: 'hidden',
  },
  button: {
    borderRadius: 0,
  },
  typography: {
    fontSize: 12,
    lineHeight: '30px',
    letterSpacing: -0.08,
    marginRight: 10,
    marginLeft: 12,
  },
  icon: {
    marginLeft: 10,
    fill: '#fff',
    height: 15,
    width: 15,
  },
}))

const Badge = ({ label, onClick, disableHandler }) => {
  const classes = useStyles()
  const direction = getDirection(label)
  return (
    <Paper className={classes.root}>
      {!disableHandler && (
        <IconButton onClick={onClick} className={classes.button}>
          <CloseIcon className={classes.icon} />
        </IconButton>
      )}
      <Typography className={classes.typography} style={{ direction }}>
        {label}
      </Typography>
    </Paper>
  )
}

Badge.propTypes = {
  disableHandler: PropTypes.bool,
  onClick: PropTypes.func,
  label: PropTypes.string,
}

Badge.defaultProps = {
  disableHandler: false,
  onClick: Function.prototype,
  label: '',
}

export default Badge
