import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// components
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
// icons
import LeftIcon from '@material-ui/icons/ChevronLeft'
import RightIcon from '@material-ui/icons/ChevronRight'
// helpers
import {
  formattedDate,
  getToday,
} from '../../../../../helper/functions/date.helper'
// styles
import './Navigator.scss'
import { cns } from '../../../../../helper/functions/utils.helper'

const styles = {
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#CCC',
    height: 30,
    minWidth: '100%',
  },
  currentTimeContainer: {
    flexGrow: 2,
    backgroundColor: '#818181',
    color: 'white',
    maxWidth: '55%',
    userSelect: 'none',
  },
  typography: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
  },
  icon: {
    fill: 'white',
  },
  iconDisabled: {
    fill: '#a5a5a5',
  },
}

const Navigator = ({ classes, onPreviousClick, onNextClick, currentPage }) => (
  <div className="navigator-container">
    <Paper className={cns(classes.paper, classes.currentTimeContainer)}>
      <IconButton
        onClick={onNextClick}
        disabled={formattedDate(currentPage) === formattedDate(getToday())}
      >
        <LeftIcon
          className={
            formattedDate(currentPage) === formattedDate(getToday())
              ? classes.iconDisabled
              : classes.icon
          }
        />
      </IconButton>
      <Typography className={classes.typography}>
        {formattedDate(currentPage)}
      </Typography>
      <IconButton onClick={onPreviousClick}>
        <RightIcon className={classes.icon} />
      </IconButton>
    </Paper>
  </div>
)

export default withStyles(styles)(Navigator)
