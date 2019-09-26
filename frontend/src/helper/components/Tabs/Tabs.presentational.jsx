import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Tabs from '@material-ui/core/Tabs'
// Icons
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIcon from '@material-ui/icons/Assignment'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    width: '100%',
    height: '100%',
    borderRadius: 0,
    backgroundColor: '#F0F0F0',
    alignItems: 'center',

    '&:hover': {
      backgroundColor: '#CCCCCC',
    },
    '&, &:avtive': {
      boxShadow: 'none',
    },
  },
  typography: {
    fontSize: 12,
    lineHeight: '21px',
    letterSpacing: -0.08,
    marginRight: 5,
  },
  icon: {
    width: 15,
    height: 15,
  },
}))

const HeaderTabs = ({ rightLabel, leftLabel }) => {
  const classes = useStyles()

  return (
    <Tabs
      // value={value}
      // onChange={handleChange}
      aria-label="simple tabs example"
    >
      <Button variant="contained" className={classes.button}>
        <Typography className={classes.typography}>{leftLabel}</Typography>
        <AssignmentIcon className={classes.icon} />
      </Button>
      <Button variant="contained" className={classes.button}>
        <Typography className={classes.typography}>{rightLabel}</Typography>
        <HomeIcon className={classes.icon} />
      </Button>
    </Tabs>
  )
}
HeaderTabs.propTypes = {
  rightLabel: PropTypes.string,
  leftLabel: PropTypes.string,
}
HeaderTabs.defaultProps = {
  rightLabel: 'خانه',
  leftLabel: 'گزارش',
}

export default HeaderTabs
