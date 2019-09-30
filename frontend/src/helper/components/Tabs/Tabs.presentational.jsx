import React from 'react'
import PropTypes from 'prop-types'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// Icons
import HomeIcon from '@material-ui/icons/Home'
import AssignmentIcon from '@material-ui/icons/Assignment'

const StyledTabs = withStyles({
  root: {
    backgroundColor: '#F0F0F0',
    minHeight: '35px',
    maxHeight: '35px',
  },
  indicator: {
    height: '100%',
    color: 'white',
    backgroundColor: '#CCCCCC',
  },
})(props => <Tabs {...props} />)

const StyledTab = withStyles({
  root: {
    color: '#000',
    fontSize: '12px',
    lineHeight: '21px',
    letterSpacing: '-0.08px',
    fontFamily: 'iranyekan',
    fontWeight: 'bold',
    padding: '0 12px',
    minHeight: '35px',
    maxHeight: '35px',
    minWidth: '50%',
    zIndex: 5,
  },
})(props => <Tab {...props} />)

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    minHeight: '35px',
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
    '&, &:active': {
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
    width: 20,
    height: 20,
    marginLeft: 3,
  },
}))

const HeaderTabs = ({ tabIndex, changeTab }) => {
  const classes = useStyles()
  return (
    <StyledTabs
      classes={classes}
      value={tabIndex}
      onChange={(_, value) => changeTab(value)}
    >
      <StyledTab
        dir="rtl"
        value="Report"
        label="گزارش"
        icon={<AssignmentIcon className={classes.icon} />}
      />
      <StyledTab
        dir="rtl"
        value="Home"
        label="خانه"
        icon={<HomeIcon className={classes.icon} />}
      />
    </StyledTabs>
  )
}
HeaderTabs.propTypes = {
  rightLabel: PropTypes.string,
  leftLabel: PropTypes.string,
  changeTab: PropTypes.func.isRequired,
}
HeaderTabs.defaultProps = {
  rightLabel: 'خانه',
  leftLabel: 'گزارش',
}

export default HeaderTabs
