// modules
import { createSelector } from 'reselect'
import * as R from 'ramda'
// helpers
import { sumTimes, sumLogs } from './Report.helper'
import { universlFormattedDate } from '../../../../helper/functions/date.helper'

const getLogs = state => state.App.logs
const getStaffLogs = state => state.Report.staffLogs
const getCurrentPage = state => state.Report.currentPage
const getSelectedUser = state => state.Report.selectedUser
const getTabIndex = state => state.App.tabIndex

const getTotalDuration = createSelector(
  [getLogs, getCurrentPage, getSelectedUser, getTabIndex],
  (logs, currentPage) =>
    R.compose(
      sumLogs,
      R.filter(log => log.date === universlFormattedDate(currentPage)),
    )(logs),
)

const getStaffTotalDuration = createSelector(
  [getStaffLogs, getCurrentPage, getSelectedUser, getTabIndex],
  (logs, currentPage) =>
    R.compose(
      sumLogs,
      R.filter(log => log.date === universlFormattedDate(currentPage)),
    )(logs),
)

const getPieChartData = createSelector(
  [getLogs, getCurrentPage],
  (logs, currentPage) =>
    R.compose(
      R.map(log => ({ name: log.title, value: sumTimes(log.times) })),
      R.filter(log => log.date === universlFormattedDate(currentPage)),
    )(logs),
)

const getStaffPieChartData = createSelector(
  [getStaffLogs, getCurrentPage],
  (logs, currentPage) =>
    R.compose(
      R.map(log => ({ name: log.title, value: sumTimes(log.times) })),
      R.filter(log => log.date === universlFormattedDate(currentPage)),
    )(logs),
)

export {
  getTotalDuration,
  getStaffTotalDuration,
  getPieChartData,
  getStaffPieChartData,
}
