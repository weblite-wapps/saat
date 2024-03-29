// modules
import { connect } from 'react-redux'
// components
import Edit from './Edit.presentational'
// actions
import {
  dispatchSubmitEdit,
  dispatchChangeEditStartTime,
  dispatchChangeEditEndTime,
  dispatchCloseEdit,
  dispatchChangeEditTitle,
  dispatchRemoveInterval,
  dispatchChangeEditPopOverId,
  dispatchChangeEditAnchorEl,
  dispatchSetTagQueryInEdit,
  dispatchChangeSelectedTagsInEdit,
  dispatchHandleAddTagInEdit,
} from './Edit.action'
// views
import {
  logView,
  timesView,
  titleView,
  isErrorView,
  anchorElView,
  popoverIdView,
  isOpenDialogView,
  selectedTagsView,
  queryTagView,
  tagsView,
} from './Edit.reducer'
import { isLoadingView } from '../../../Main/App.reducer'
// selectors
import { getEditFilteredSuggestions } from '../../../Main/App.selector'

const mapStateToProps = state => ({
  log: logView(),
  times: timesView(),
  title: titleView(),
  isError: isErrorView(),
  anchorEl: anchorElView(),
  isOpen: isOpenDialogView(),
  popoverId: popoverIdView(),
  isLoading: isLoadingView(),
  selectedTags: selectedTagsView(),
  queryTag: queryTagView(),
  suggestions: getEditFilteredSuggestions(state),
  tags: tagsView(),
})

const mapDispatchToProps = () => ({
  submit: () =>
    dispatchSubmitEdit({
      times: timesView(),
      log: logView(),
      title: titleView(),
      tags: selectedTagsView(),
    }),
  onStartTimeChange: dispatchChangeEditStartTime,
  onEndTimeChange: dispatchChangeEditEndTime,
  close: () => dispatchCloseEdit(),
  onTitleChange: ({ target: { value } }) => dispatchChangeEditTitle(value),
  removeInterval: dispatchRemoveInterval,
  changePopoverId: dispatchChangeEditPopOverId,
  changeAnchorEl: dispatchChangeEditAnchorEl,
  onQueryTagChange: dispatchSetTagQueryInEdit,
  onTagClick: dispatchChangeSelectedTagsInEdit,
  handleAddTag: e => dispatchHandleAddTagInEdit(),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Edit)
