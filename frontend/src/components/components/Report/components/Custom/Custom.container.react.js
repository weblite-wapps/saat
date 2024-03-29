// modules
import { connect } from 'react-redux'
// components
import Custom from './Custom.presentational'
// views
import {
  queryTagView,
  tagsView,
  CSVView,
  startDateView,
  endDateView,
  isErrorView,
} from '../../Main/Report.reducer'
// actions
import {
  dispatchSetQuery,
  dispatchChangeSelectedTags,
  dispatchAddTag,
  dispatchCalculateTotalDuration,
  dispatchConvertJSONToCSV,
  dispatchChangeStartDate,
  dispatchChangeEndDate,
  dispatchHandleAddTag,
  dispatchHandleCalculation,
  dispatchHandleExport,
  dispatchChangeBarChartDateMode,
} from '../../Main/Report.action'
// selector
import { getReportFilteredSuggestions } from '../../../../Main/App.selector'

const mapStateToProps = state => ({
  queryTag: queryTagView(),
  tags: tagsView(),
  suggestions: getReportFilteredSuggestions(state),
  CSVData: CSVView(),
  startDate: startDateView(),
  endDate: endDateView(),
  isError: isErrorView(),
})

const mapDispatchToProps = () => ({
  onQueryTagChange: dispatchSetQuery,
  onTagClick: dispatchChangeSelectedTags,
  addTag: dispatchAddTag,
  calculateTotalDuration: dispatchCalculateTotalDuration,
  convertJSONToCSV: dispatchConvertJSONToCSV,
  onStartDateChange: value => {
    dispatchChangeStartDate(value)
    dispatchChangeBarChartDateMode('custom')
  },
  onEndDateChange: value => {
    dispatchChangeEndDate(value)
    dispatchChangeBarChartDateMode('custom')
  },
  handleAddTag: dispatchHandleAddTag,
  onCalculation: dispatchHandleCalculation,
  onExport: dispatchHandleExport,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Custom)
