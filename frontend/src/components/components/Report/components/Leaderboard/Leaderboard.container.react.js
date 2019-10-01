// modules
import { connect } from 'react-redux'
// components
import Leaderbord from './Leaderboard.presentational'
// views
import {
  startDateView,
  endDateView,
  isErrorView,
  barChartDateModeView,
} from '../../Main/Report.reducer'
// actions
import {
  dispatchChangeStartDate,
  dispatchChangeEndDate,
  dispatchUpdateLeaderboard,
  dispatchHandleUpdateLeaderboard,
  dispatchChangeBarChartDateMode,
} from '../../Main/Report.action'
// selectors
import { getLeaderboardData } from './Leaderboard.selector'

const mapStateToProps = state => ({
  startDate: startDateView(),
  endDate: endDateView(),
  isError: isErrorView(),
  dateMode: barChartDateModeView(),
  data: getLeaderboardData(state),
})

const mapDispatchToProps = () => ({
  // update: dispatchUpdateLeaderboard,
  update: (startDate, endDate) => {
    dispatchChangeStartDate(startDate)
    dispatchChangeEndDate(endDate)
  },
  onStartDateChange: value => {
    dispatchChangeStartDate(value)
    dispatchChangeBarChartDateMode('custom')
  },
  onEndDateChange: value => {
    dispatchChangeEndDate(value)
    dispatchChangeBarChartDateMode('custom')
  },
  onChangeDateMode: dispatchChangeBarChartDateMode,
  handleUpdate: dispatchHandleUpdateLeaderboard,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Leaderbord)
