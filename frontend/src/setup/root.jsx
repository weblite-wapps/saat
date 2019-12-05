// Modules
import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { MuiThemeProvider } from '@material-ui/core/styles'
// Setup
import store, { history } from './redux'
// Component
import App from '../components/Main/App.container.react'
import Snackbar from '../components/components/Snackbar/Snackbar.container.react'
import Home from '../components/components/Home/Main/Home.container.react'
import Report from '../components/components/Report/Main/Report.container.react'
import Edit from '../components/components/Edit/Main/Edit.container.react'
// styles
import './root.scss'
import './fonts/fonts.scss'
import theme from '../helper/style/appTheme'

export default () => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <div className="app-container">
          <App />
          <Snackbar location={{ vertical: 'bottom', horizontal: 'right' }} />
          <div className="app-body">
            <Route exact path="/" render={() => <Home />} />
            <Route path="/Report" render={() => <Report />} />
            <Route path="/Edit" render={() => <Edit />} />
          </div>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>
)
