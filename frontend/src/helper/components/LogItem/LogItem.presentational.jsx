import React from 'react'
import PropTypes from 'prop-types'
// third-party-packages
import Paper from '@material-ui/core/Paper'
import Fab from '@material-ui/core/Fab'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
// icons
import PlayIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import LockIcon from '@material-ui/icons/Lock'
import OpenIcon from '@material-ui/icons/LockOpen'
// helpers
import { cns, ab, toPersian } from '../../functions/utils.helper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: '#CCC',
    overflow: 'hidden',
    height: 75,
  },
  logHelper: {
    backgroundColor: '#F0F0F0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 50,
    borderRadius: 25,
    boxSizing: 'border-box',
  },
  fab: {
    backgroundColor: '#FFF',
    color: '#818181',
    flexShrink: 0,
    width: 30,
    height: 30,
    minHeight: 30,
    transition: theme.transitions.create(['background-color', 'color']),
    '&:hover': {
      color: '#fff',
      backgroundColor: '#00adb5',
    },
  },
  fabPinned: {
    color: '#000',
  },
  fabIcon: {
    width: 17,
    height: 17,
  },
  logName: {
    flexGrow: 2,
    marginRight: 10,
    textAlign: 'right',
    fontSize: 14,
    lineHeight: '25px',
    letterSpacing: '-0.1px',
    fontWeight: 'bold',
  },
  logTime: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: 1.8,
    margin: '2px 0',
    fontWeight: 'bold',
  },
}))

const LogItem = ({ play, pinned, name, time, disableHandler }) => {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.logHelper}>
        {!disableHandler && (
          <Fab
            size="small"
            aria-label="playPause"
            className={cns(classes.fab, ab(classes.fabPinned)(play))}
          >
            {play ? (
              <PauseIcon className={classes.fabIcon} />
            ) : (
              <PlayIcon className={classes.fabIcon} />
            )}
          </Fab>
        )}{' '}
        <Typography className={classes.logName}>{toPersian(name)}</Typography>
        {!disableHandler && (
          <Fab
            size="small"
            aria-label="pin"
            className={cns(classes.fab, ab(classes.fabPinned)(pinned))}
          >
            {pinned ? (
              <LockIcon className={classes.fabIcon} />
            ) : (
              <OpenIcon className={classes.fabIcon} />
            )}
          </Fab>
        )}
      </div>
      <Typography className={classes.logTime}>{toPersian(time)}</Typography>
    </Paper>
  )
}

LogItem.propTypes = {
  play: PropTypes.bool,
  pinned: PropTypes.bool,
}
LogItem.defaultProps = {
  play: false,
  pinned: false,
}

export default LogItem
