// modules
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// helpers
import { ab, cns } from '../../functions/utils.helper'
// style
import './AppBar.scss'

const AppBar = ({ isLoading }) => (
  <MuiAppBar position="static" elevation={0}>
    <Toolbar className="c--appBar_toolbar">
      <img alt="appbar" src="./appbar.svg" />

      <div className="c--appBar_typo">
        <Typography variant="caption">TIMELOG</Typography>
        <Typography variant="h5">ســـــــاعـــــت</Typography>
      </div>
    </Toolbar>
    <div
      className={cns('c--appBar_colors', ab('appbar--animatable')(isLoading))}
    />
  </MuiAppBar>
)

AppBar.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
}

AppBar.defaultProps = {
  color: 'silver',
  label: '',
  fullWidth: false,
  isLoading: false,
  onClick: Function.prototype,
}

export default AppBar
