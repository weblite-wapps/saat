// modules
import * as R from 'ramda'
import { differenceInSeconds } from 'date-fns'
// views
import {
  startDateView,
  endDateView,
} from '../../../components/Report/Main/Report.reducer'
// helpers
import { getNow } from '../../../../helper/functions/time.helper'

export const tooltipTitles = {
  workList: 'work list',
  export: 'export',
  showChart: 'own chart',
  leaderboard: 'leaderboard',
}

export const isTime = time => R.test(/^Total/, time)

export const sumTimes = times =>
  R.reduce(
    (acc, time) =>
      time.end === 'running'
        ? acc + differenceInSeconds(getNow(), time.start)
        : acc + differenceInSeconds(time.end, time.start),
    0,
  )(times)

export const sumLogs = logs =>
  R.reduce((acc, log) => acc + sumTimes(log.times), 0)(logs)

export const formattedSeconds = seconds => {
  if (Math.floor(seconds / 3600) === 0) {
    return `Total: ${Math.floor(seconds / 60)}m`
  }
  return Math.floor((seconds % 3600) / 60) === 0
    ? `Total: ${Math.floor(seconds / 3600)}h`
    : `Total: ${Math.floor(seconds / 3600)}h & ${Math.floor(
        (seconds % 3600) / 60,
      )}m`
}

const getObject = (trueOption, message, permission) => {
  const isError = { startDate: false, endDate: false }
  return trueOption
    ? { isError: R.assoc(trueOption, true, isError), message, permission }
    : { isError, message, permission }
}

export const checkBeforeAction = () => {
  const start = startDateView()
  const end = endDateView()

  if (start && end) {
    if (end >= start) {
      return getObject('', null, true)
    }
    return getObject(
      'startDate',
      'زمان شروع باید قبل از زمان پایان باشد',
      false,
    )
  } else if (!start) {
    return getObject('startDate', 'زمان شروع را وارد کنید', false)
  }
  return getObject('endDate', 'زمان پایان را وارد کنید', false)
}
