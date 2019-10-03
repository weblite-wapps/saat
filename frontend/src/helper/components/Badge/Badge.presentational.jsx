// modules
import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// style
import { makeStyles } from '@material-ui/core/styles'
// icons
import Add from '@material-ui/icons/Add'
import Remove from '@material-ui/icons/Remove'
// helper
import { getDirection, ab, cns } from '../../functions/utils.helper'

const useStyles = makeStyles(() => ({
  root: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: 200,
    borderRadius: 11,
    minHeight: 30,
    backgroundColor: '#818181',
    color: '#fff',
    overflow: 'hidden',
    margin: '10px 0 0 5px',
    cursor: 'pointer',
  },

  rootWithoutHandler: {
    margin: '10px 5px 0',
  },

  selectedRoot: {
    backgroundColor: '#84CE2C',
  },
  button: {
    borderRadius: 0,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typography: {
    fontSize: 12,
    lineHeight: '30px',
    letterSpacing: -0.08,
    marginRight: 10,
    marginLeft: 12,
  },
  icon: {
    fill: '#fff',
    height: 15,
    width: 15,
  },
}))

const Badge = ({ label, disableHandler, isSelected, onClick }) => {
  const classes = useStyles()
  const direction = getDirection(label)

  return (
    <Paper
      className={cns(
        classes.root,
        ab(classes.rootWithoutHandler)(disableHandler),
        ab(classes.selectedRoot)(isSelected),
      )}
      onClick={onClick}
    >
      {!disableHandler && (
        <IconButton className={classes.button}>
          {isSelected ? (
            <Remove className={classes.icon} />
          ) : (
            <Add className={classes.icon} />
          )}
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
  isSelected: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

Badge.defaultProps = {
  disableHandler: false,
  isSelected: false,
  label: '',
  onClick: Function.prototype,
}

export default Badge
