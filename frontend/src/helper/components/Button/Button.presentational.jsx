// modules
import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// style
import { makeStyles, darken } from '@material-ui/core/styles'
// icons
import AddIcon from '@material-ui/icons/Add'
// helper
import { cns, ab } from '../../functions/utils.helper'
import './Button.scss'

const useStyles = makeStyles(() => ({
  base: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: 11,
    '&:hover': {
      backgroundColor: darken('#4FC4F4', 0.1),
    },
  },
  fixedRoot: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    borderRadius: 0,
    backgroundColor: '#5ADBDF',
  },
  labeledRoot: {
    '--size': '8px',
    '--color': '#4FC4F4',
    backgroundColor: '#4FC4F4',
  },
  typography: {
    color: '#fff',
    fontSize: 16,
    lineHeight: '28px',
    letterSpacing: -0.2,
  },
  icon: {
    fill: '#fff',
    width: 20,
    height: 20,
  },

  labeledWrapper: {
    position: 'relative',
  },
  downArrow: {
    position: 'absolute',
    bottom: 0,
  },
}))

const CustomizedButton = ({
  variant,
  text,
  onClick,
  classesProp,
  selected,
  style,
  disableAddIcon,
}) => {
  const classes = useStyles()
  const fixed = variant === 'fixed'
  const labeled = variant === 'labeled'
  return (
    <Button
      variant="contained"
      fullWidth={fixed}
      className={cns(
        classes.base,
        ab(classes.fixedRoot)(fixed),
        ab('labeled--button')(labeled && selected),
        ab(classes.labeledRoot)(labeled),
        classesProp.button,
      )}
      onClick={onClick}
      style={style}
    >
      <Typography className={cns(classes.typography, classesProp.typography)}>
        {text}
      </Typography>
      {variant === 'fixed' && !disableAddIcon && (
        <AddIcon className={cns(classes.icon, classesProp.icon)} />
      )}
    </Button>
  )
}

/* if you want to style component pass your classesProp like material to this component */
CustomizedButton.propTypes = {
  classesProp: PropTypes.exact({
    button: PropTypes.string,
    typography: PropTypes.string,
    icon: PropTypes.string,
  }),
  disableAddIcon: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['fixed', 'labeled', 'normal']),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  text: PropTypes.string.isRequired,
}

CustomizedButton.defaultProps = {
  classesProp: {},
  className: '',
  variant: 'fixed',
  selected: false,
  onClick: Function.prototype,
  disableAddIcon: false,
}

export default CustomizedButton
