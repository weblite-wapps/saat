// modules
import { connect } from 'react-redux'
// components
import App from './App.presentational'
// views
import { isLoadingView, tabIndexView, creatorView } from './App.reducer'
// actions
import { dispatchCheckToSetSecondsElapsed } from '../components/Home/Main/Home.action'
import {
  dispatchChangeTab,
  dispatchSetApi,
  dispatchFetchTodayData,
} from './App.action'

const mapStateToProps = () => ({
  isLoading: isLoadingView(),
  tabIndex: tabIndexView(),
  creator: creatorView(),
})

const mapDispatchToProps = () => ({
  changeTab: dispatchChangeTab,
  setAPI: dispatchSetApi,
  fetchTodayData: dispatchFetchTodayData,
  checkToSetSecondsElapsed: dispatchCheckToSetSecondsElapsed,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
