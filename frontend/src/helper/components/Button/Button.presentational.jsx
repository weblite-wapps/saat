// modules
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// style
import { makeStyles, withStyles, darken } from '@material-ui/core/styles'
// css
import styles from './Button.style'
// icons
import AddIcon from '@material-ui/icons/Add'

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    left: 0,
    bottom: 0,
    borderRadius: 0,
    backgroundColor: '#7dd9de',

    '&:hover': {
      backgroundColor: darken('#7dd9de', 0.1),
    },
  },
  typography: {
    color: '#fff',
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: -0.2,
  },
  plusIcon: {
    fill: '#fff',
    width: 20,
    height: 20,
  },
}))

const CustomizedButton = ({ label, onClick }) => {
  const classes = useStyles()
  return (
    <Button
      variant="contained"
      fullWidth
      className={classes.root}
      onClick={onClick}
    >
      <Typography className={classes.typography}>{label}</Typography>
      <AddIcon className={classes.plusIcon} />
    </Button>
  )
}

CustomizedButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
}

CustomizedButton.defaultProps = {
  onClick: Function.prototype,
  label: '',
}

export default withStyles(styles)(CustomizedButton)
