// modules
import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import MuiAppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// style
import './AppBar.scss'

const AppBar = () => (
  <MuiAppBar position="static" elevation={0}>
    <Toolbar className="c--appBar_toolbar">
      <img alt="appbar" src="./appbar.svg" />

      <div className="c--appBar_typo">
        <Typography variant="caption">TIMELOG</Typography>
        <Typography variant="h5">ســـــــاعـــــت</Typography>
      </div>
    </Toolbar>
  </MuiAppBar>
)

AppBar.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
}

AppBar.defaultProps = {
  color: 'silver',
  label: '',
  fullWidth: false,
  onClick: Function.prototype,
}

export default AppBar
