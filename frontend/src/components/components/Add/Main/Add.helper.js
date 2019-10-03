// modules
import * as R from 'ramda'
import { areRangesOverlapping, isAfter } from 'date-fns'
// helpers
import { getNow, getTimeZone } from '../../../../helper/functions/time.helper'
import {
  formattedDate,
  universlFormattedDate,
} from '../../../../helper/functions/date.helper'
// views
import { logsView } from '../../../Main/App.reducer'

export const areRangesOverlappingForTimes = (times, startOfRange, endOfRange) =>
  R.reduce(
    R.or,
    false,
    R.map(
      time =>
        areRangesOverlapping(startOfRange, endOfRange, time.start, time.end),
      times,
    ),
  )

export const areTimesOverlapping = (logs, startOfRange, endOfRange) =>
  R.reduce(
    R.or,
    false,
    R.map(
      log => areRangesOverlappingForTimes(log.times, startOfRange, endOfRange),
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

export const checkBeforeAddLog = ({ title, quickMode = false }) => {
  if (quickMode || title) {
    return getObject('', 'شمارنده با موفقیت اضافه شد', true)
  }
  return getObject('title', 'عنوان شمارنده را وارد کنید', false)
}

export const checkBeforeAddCustomLog = ({ title, date, start, end }) => {
  const logs = logsView()
  const now = getNow()
  if (title && date && start && end) {
    if (isAfter(getTimeZone(date), now))
      return getObject('date', 'آینده هنوز فرا نرسیده !', false)
    else if (formattedDate(date) === formattedDate(now) && isAfter(start, now))
      return getObject('startTime', 'آینده هنوز فرا نرسیده !', false)
    else if (formattedDate(date) === formattedDate(now) && isAfter(end, now))
      return getObject('endTime', 'آینده هنوز فرا نرسیده !', false)
    else if (isAfter(end, start)) {
      if (
        areTimesOverlapping(
          R.filter(
            eachLog => eachLog.date === universlFormattedDate(date),
            logs,
          ),
          start,
          end,
        )
      )
        return getObject('endTime', 'زمان ها با هم تداخل دارند', false)

      return getObject('', 'شمارنده با موفقیت اضافه شد', true)
    }
    return getObject(
      'startTime',
      'زمان شروع باید قبل از زمان پایان باشد',
      false,
    )
  } else if (!title) return getObject('title', 'عنوان را وارد کنید', false)
  else if (!date) return getObject('date', 'تاریخ شمارنده را وارد کنید', false)
  else if (!start)
    return getObject('startTime', 'زمان شروع را وارد کنید', false)

  return getObject('endTime', 'زمان پایان را وارد کنید', false)
}
