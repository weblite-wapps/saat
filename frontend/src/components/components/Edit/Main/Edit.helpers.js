// modules
import * as R from 'ramda'
import { areRangesOverlapping, isAfter, differenceInSeconds } from 'date-fns'
// helpers
import { getNow, getTimeZone } from '../../../../helper/functions/time.helper'
import { universlFormattedDate } from '../../../../helper/functions/date.helper'
// views
import { logsView } from '../../../Main/App.reducer'

export const areRangesOverlappingForTimes = (
  title,
  times,
  startOfRange,
  endOfRange,
) => {
  return R.reduce(
    R.or,
    false,
    R.map(time => {
      if (differenceInSeconds(startOfRange, new Date(time.end)) > -60)
        return false
      return areRangesOverlapping(
        startOfRange,
        endOfRange,
        new Date(time.start),
        new Date(time.end),
      )
    }, times),
  )
}
export const areTimesOverlapping = (logs, startOfRange, endOfRange) =>
  R.reduce(
    R.or,
    false,
    R.map(
      log =>
        areRangesOverlappingForTimes(
          log.title,
          log.times,
          startOfRange,
          endOfRange,
        ),
      logs,
    ),
  )

const getObject = (trueOption, message, permission) => {
  const isError = {
    title: false,
    date: false,
    startTime: false,
    endTime: false,
  }
  return trueOption
    ? { isError: R.assoc(trueOption, true, isError), message, permission }
    : { isError, message, permission }
}

export const checkBeforeEditLog = ({ times, log, log: { _id } }) => {
  const logId = _id
  const logs = R.filter(({ _id }) => _id !== logId, logsView())
  const now = getNow()
  const filterEnd = end => (end === 'running' ? now : end)
  return R.reduce(
    (acc, { date, start, end }) => {
      if (date && start && end) {
        if (isAfter(getTimeZone(date), now)) {
          return getObject('date', 'آینده هنوز فرا نرسیده !', false)
        } else if (date === universlFormattedDate(now) && isAfter(start, now)) {
          return getObject('startTime', 'آینده هنوز فرا نرسیده !', false)
        } else if (date === universlFormattedDate(now) && isAfter(end, now)) {
          return getObject('endTime', 'آینده هنوز فرا نرسیده !', false)
        } else if (isAfter(end, start) || end === 'running') {
          if (
            areTimesOverlapping(
              R.filter(eachLog => eachLog.date === date, logs),
              start,
              filterEnd(end),
            )
          ) {
            return getObject(
              'endTime',
              'بازه ها با دیگر شمارنده ها تداخل دارند',
              false,
            )
          }
        }
      } else if (!date) {
        return getObject('date', 'تاریخ را وارد کنید', false)
      } else if (!start) {
        return getObject('startTime', 'زمان شروع را وارد کنید', false)
      } else {
        return getObject('endTime', 'زمان پایان را وارد کنید', false)
      }
      return acc
    },
    getObject('', 'با موفقیت اضافه شد', true),
    times,
  )
}
