// modules
import { connect } from 'react-redux'
// components
import Add from './Add.presentational'
// views
import { logsView, isLoadingView } from '../../../Main/App.reducer'
import {
  titleView,
  selectedTagsView,
  queryTagView,
  tagsView,
  dateView,
  startTimeView,
  endTimeView,
  isErrorView,
  expandedView,
} from './Add.reducer'
// actions
import { dispatchChangeTab } from '../../../Main/App.action'
import {
  dispatchChangeTitle,
  dispatchSetQueryInAdd,
  dispatchChangeSelectedTagsInAdd,
  dispatchChangeIsErrorInAdd,
  dispatchHandleAddTagInAdd,
  dispatchHandleAddLog,
  dispatchHandleAddCustomLog,
  dispatchToggleExpanded,
  dispatchChangeStartTime,
  dispatchChangeEndTime,
  dispatchChangeDate,
} from './Add.action'
// selectors
import { getAddFilteredSuggestions } from '../../../Main/App.selector'

const mapStateToProps = state => ({
  logs: logsView(),
  title: titleView(),
  selectedTags: selectedTagsView(),
  queryTag: queryTagView(),
  suggestions: getAddFilteredSuggestions(state),
  tags: tagsView(),
  date: dateView(),
  startTime: startTimeView(),
  endTime: endTimeView(),
  isError: isErrorView(),
  isLoading: isLoadingView(),
  expanded: expandedView(),
})

const mapDispatchToProps = () => ({
  onTitleChange: dispatchChangeTitle,
  onQueryTagChange: dispatchSetQueryInAdd,
  onTagClick: dispatchChangeSelectedTagsInAdd,
  changeTab: dispatchChangeTab,
  changeIsError: dispatchChangeIsErrorInAdd,
  handleAddTag: dispatchHandleAddTagInAdd,
  onAdd: dispatchHandleAddLog,
  onCustomAdd: dispatchHandleAddCustomLog,
  onExpand: dispatchToggleExpanded,
  onStartTimeChange: dispatchChangeStartTime,
  onEndTimeChange: dispatchChangeEndTime,
  onDateChange: dispatchChangeDate,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Add)
