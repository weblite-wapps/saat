// Modules
import React from 'react'
import PropTypes from 'prop-types'
// helpers
import AppBar from '../../helper/components/AppBar/AppBar.presentational'
import Tabs from '../../helper/components/Tabs/Tabs.presentational'
import { push } from '../../setup/redux'
// styles
import './App.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleWappMode = this._handleWappMode.bind(this)
    this.handleNormalMode = this._handleNormalMode.bind(this)
  }

  componentDidMount() {
    if (window.W && window.W.wisId) this.handleWappMode()
    else this.handleNormalMode()
    window.addEventListener('focus', () => {
      this.props.checkToSetSecondsElapsed()
    })
  }

  _handleWappMode() {
    const { setAPI, fetchTodayData } = this.props
    window.W.loadData().then(({ creator, user }) => {
      setAPI(creator, user)
      creator && push('/report')
      fetchTodayData()
    })
  }

  _handleNormalMode() {
    const { setAPI, fetchTodayData } = this.props
    setAPI(false, { name: 'Ali', id: '110' })
    fetchTodayData()
  }

  render() {
    return (
      <>
        <AppBar isLoading={this.props.isLoading} />
        {!this.props.creator ? <Tabs {...this.props} /> : null}
      </>
    )
  }
}

App.propTypes = {
  fetchTodayData: PropTypes.func.isRequired,
  setAPI: PropTypes.func.isRequired,
  checkToSetSecondsElapsed: PropTypes.func.isRequired,
}
