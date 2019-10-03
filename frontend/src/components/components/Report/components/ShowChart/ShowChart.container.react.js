// modules
import { connect } from 'react-redux'
// components
import ShowChart from './ShowChart.presentational'
// views
import {
  startDateView,
  endDateView,
  barChartDataView,
  barChartDateModeView,
  isErrorView,
} from '../../Main/Report.reducer'
// actions
import {
  dispatchChangeStartDate,
  dispatchChangeEndDate,
  dispatchHandleUpdateChart,
  dispatchChangeBarChartDateMode,
} from '../../Main/Report.action'

const mapStateToProps = () => ({
  startDate: startDateView(),
  endDate: endDateView(),
  dateMode: barChartDateModeView(),
  isError: isErrorView(),
  data: barChartDataView(),
})

const mapDispatchToProps = () => ({
  update: (startDate, endDate) => {
    dispatchChangeStartDate(startDate)
    dispatchChangeEndDate(endDate)
  },
  onChangeDateMode: dispatchChangeBarChartDateMode,
  onStartDateChange: value => {
    dispatchChangeStartDate(value)
    dispatchChangeBarChartDateMode('custom')
  },
  onEndDateChange: value => {
    dispatchChangeEndDate(value)
    dispatchChangeBarChartDateMode('custom')
  },
  handleUpdate: dispatchHandleUpdateChart,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShowChart)
