// modules
import { createAction } from 'redux-actions'
import { dispatch } from '../../../../setup/redux'

// actions
export const CHANGE_EXPAND_MODE = 'CHANGE_EXPAND_MODE'
export const changeExpandMode = createAction(CHANGE_EXPAND_MODE, value => ({
  value,
}))
export const dispatchChangeExpandMode = (...args) =>
  dispatch(changeExpandMode(...args))

export const SET_API = 'SET_API'
export const setAPI = createAction(SET_API, (creator, user) => ({
  creator,
  user,
}))
export const dispatchSetApi = (...args) => dispatch(setAPI(...args))

export const RESET_STAFF_LOGS = 'RESET_STAFF_LOGS'
export const resetStaffLogs = createAction(RESET_STAFF_LOGS, userId => ({
  userId,
}))
export const dispatchResetStaffLogs = (...args) =>
  dispatch(resetStaffLogs(...args))

export const LOAD_STAFF_LOGS = 'LOAD_STAFF_LOGS'
export const loadStaffLogs = createAction(LOAD_STAFF_LOGS, logs => ({ logs }))
export const dispatchLoadStaffLogs = (...args) =>
  dispatch(loadStaffLogs(...args))

export const LOAD_TAGS_DATA_IN_REPORT = 'LOAD_TAGS_DATA_IN_REPORT'
export const loadTagsDataInReport = createAction(
  LOAD_TAGS_DATA_IN_REPORT,
  tags => ({ tags }),
)
export const dispatchLoadTagsDataInReport = (...args) =>
  dispatch(loadTagsDataInReport(...args))

export const SET_QUERY = 'SET_QUERY'
export const setQuery = createAction(SET_QUERY, queryTag => ({ queryTag }))
export const dispatchSetQuery = (...args) => dispatch(setQuery(...args))

export const FETCH_TAGS = 'FETCH_TAGS'
export const fetchTags = createAction(FETCH_TAGS, tags => ({ tags }))
export const dispatchFetchTags = (...args) => dispatch(fetchTags(...args))

export const ADD_TAG = 'ADD_TAG'
export const addTag = createAction(ADD_TAG)
export const dispatchAddTag = (...args) => dispatch(addTag(...args))

export const CHANGE_SELECTED_TAGS = 'CHANGE_SELECTED_TAGS'
export const changeSelectedTags = createAction(CHANGE_SELECTED_TAGS, tag => ({
  tag,
}))
export const dispatchChangeSelectedTags = (...args) =>
  dispatch(changeSelectedTags(...args))

export const CHANGE_START_DATE = 'CHANGE_START_DATE'
export const changeStartDate = createAction(CHANGE_START_DATE, value => ({
  value,
}))
export const dispatchChangeStartDate = (...args) =>
  dispatch(changeStartDate(...args))

export const CHANGE_END_DATE = 'CHANGE_END_DATE'
export const changeEndDate = createAction(CHANGE_END_DATE, value => ({ value }))
export const dispatchChangeEndDate = (...args) =>
  dispatch(changeEndDate(...args))

export const CALCULATE_TOTAL_DURATION = 'CALCULATE_TOTAL_DURATION'
export const calculateTotalDuration = createAction(CALCULATE_TOTAL_DURATION)
export const dispatchCalculateTotalDuration = (...args) =>
  dispatch(calculateTotalDuration(...args))

export const RESTORE_TOTAL_DUARTION = 'RESTORE_TOTAL_DUARTION'
export const restoreTotalDuration = createAction(
  RESTORE_TOTAL_DUARTION,
  totalDuration => ({ totalDuration }),
)
export const dispatchRestoreTotalDuration = (...args) =>
  dispatch(restoreTotalDuration(...args))

export const CONVERT_JSON_TO_CSV = 'CONVERT_JSON_TO_CSV'
export const convertJSONToCSV = createAction(CONVERT_JSON_TO_CSV)
export const dispatchConvertJSONToCSV = (...args) =>
  dispatch(convertJSONToCSV(...args))

export const RESTORE_CSV = 'RESTORE_CSV'
export const restoreCSV = createAction(RESTORE_CSV, CSV => ({ CSV }))
export const dispatchRestoreCSV = (...args) => dispatch(restoreCSV(...args))

export const RESET_CSV = 'RESET_CSV'
export const resetCSV = createAction(RESET_CSV)
export const dispatchResetCSV = (...args) => dispatch(resetCSV(...args))

export const CHANGE_SELECTED_USER = 'CHANGE_SELECTED_USER'
export const changeSelectedUser = createAction(CHANGE_SELECTED_USER, value => ({
  value,
}))
export const dispatchChangeSelectedUser = (...args) =>
  dispatch(changeSelectedUser(...args))

export const PREVIOUS_PAGE = 'PREVIOUS_PAGE'
export const previousPage = createAction(PREVIOUS_PAGE)
export const dispatchPreviousPage = (...args) => dispatch(previousPage(...args))

export const NEXT_PAGE = 'NEXT_PAGE'
export const nextPage = createAction(NEXT_PAGE)
export const dispatchNextPage = (...args) => dispatch(nextPage(...args))

export const ADD_PAGE = 'ADD_PAGE'
export const addPage = createAction(ADD_PAGE, (date, user) => ({ date, user }))
export const dispatchAddPage = (...args) => dispatch(addPage(...args))

export const REMOVE_PAGE = 'REMOVE_PAGE'
export const removePage = createAction(REMOVE_PAGE, (date, user) => ({
  date,
  user,
}))
export const dispatchRemovePage = (...args) => dispatch(removePage(...args))

export const UPDATE_CHART = 'UPDATE_CHART'
export const updateChart = createAction(UPDATE_CHART, (startDate, endDate) => ({
  startDate,
  endDate,
}))
export const dispatchUpdateChart = (...args) => dispatch(updateChart(...args))

export const UPDATE_LEADERBOARD = 'UPDATE_LEADERBOARD'
export const updateLeaderboard = createAction(
  UPDATE_LEADERBOARD,
  (startDate, endDate) => ({ startDate, endDate }),
)
export const dispatchUpdateLeaderboard = (...args) =>
  dispatch(updateLeaderboard(...args))

export const RESTORE_BAR_CHART_DATA = 'RESTORE_BAR_CHART_DATA'
export const restoreBarChartData = createAction(
  RESTORE_BAR_CHART_DATA,
  data => ({ data }),
)
export const dispatchRestoreBarChartData = (...args) =>
  dispatch(restoreBarChartData(...args))

export const CHANGE_BAR_CHART_DATE_MODE = 'CHANGE_BAR_CHART_DATE_MODE'
export const dispatchChangeBarChartDateMode = (...args) =>
  dispatch(createAction(CHANGE_BAR_CHART_DATE_MODE)(...args))

export const RESTORE_LEADERBOARD_DATA = 'RESTORE_LEADERBOARD_DATA'
export const restoreLeaderboardData = createAction(
  RESTORE_LEADERBOARD_DATA,
  data => ({ data }),
)
export const dispatchRestoreLeaderboardData = (...args) =>
  dispatch(restoreLeaderboardData(...args))

export const CHANGE_IS_ERROR = 'CHANGE_IS_ERROR'
export const changeIsError = createAction(CHANGE_IS_ERROR, value => ({ value }))
export const dispatchChangeIsError = (...args) =>
  dispatch(changeIsError(...args))

// effects
export const HANDLE_ADD_TAG = 'HANDLE_ADD_TAG'
export const handleAddTag = createAction(HANDLE_ADD_TAG)
export const dispatchHandleAddTag = (...args) => dispatch(handleAddTag(...args))

export const HANDLE_CALCULATION = 'HANDLE_CALCULATION'
export const handleCalculation = createAction(HANDLE_CALCULATION)
export const dispatchHandleCalculation = (...args) =>
  dispatch(handleCalculation(...args))

export const HANDLE_EXPORT = 'HANDLE_EXPORT'
export const handleExport = createAction(HANDLE_EXPORT)
export const dispatchHandleExport = (...args) => dispatch(handleExport(...args))

export const HANDLE_UPDATE_CHART = 'HANDLE_UPDATE_CHART'
export const handleUpdateChart = createAction(
  HANDLE_UPDATE_CHART,
  (startDate, endDate) => ({ startDate, endDate }),
)
export const dispatchHandleUpdateChart = (...args) =>
  dispatch(handleUpdateChart(...args))

export const HANDLE_UPDATE_LEADERBOARD = 'HANDLE_UPDATE_LEADERBOARD'
export const handleUpdateLeaderboard = createAction(
  HANDLE_UPDATE_LEADERBOARD,
  (startDate, endDate) => ({ startDate, endDate }),
)
export const dispatchHandleUpdateLeaderboard = (...args) =>
  dispatch(handleUpdateLeaderboard(...args))

export const EDIT_BUTTON_CLICK = 'EDIT_BUTTON_CLICK'
export const editClick = createAction(EDIT_BUTTON_CLICK, value => ({ value }))
export const dispatchEditClick = (...args) => dispatch(editClick(...args))
