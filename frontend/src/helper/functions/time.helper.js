// modules
import * as R from 'ramda'
import moment from 'moment-timezone'
import {
  getHours,
  getMinutes,
  setHours,
  setMinutes,
  setSeconds,
  differenceInSeconds,
} from 'date-fns'

export const addZeroToNumbers = num => {
  const floored = Math.floor(num)
  return floored < 10 ? `0${floored}` : String(floored)
}

export const breakDuration = duration => {
  const second = addZeroToNumbers(duration % 60)
  const minute = addZeroToNumbers((duration % 3600) / 60)
  const hour = addZeroToNumbers(duration / 3600)

  return { second, minute, hour }
}

export const getTimeZone = time =>
  new Date(
    moment(time)
      .tz('Asia/Tehran')
      .format(),
  )

export const getNow = () =>
  new Date(
    moment()
      .tz('Asia/Tehran')
      .format(),
  )

export const getParsedNow = () =>
  moment()
    .tz('Asia/Tehran')
    .format()

export const formatTime = time =>
  setHours(
    setMinutes(setSeconds(getNow(), R.slice(6, 8, time)), R.slice(3, 5, time)),
    R.slice(0, 2, time),
  )

export const sumTimes = times =>
  R.reduce(
    (acc, { start, end }) =>
      end === 'running' ? acc : acc + differenceInSeconds(end, start),
    0,
  )(times)

// export const formattedSeconds = seconds => {
//   if (Math.floor(seconds / 60) === 0) {
//     return `${seconds % 60}s`
//   } else if (Math.floor(seconds / 3600) === 0) {
//     return seconds % 60 === 0
//       ? `${Math.floor(seconds / 60)}m`
//       : `${Math.floor(seconds / 60)}m${seconds % 60}s`
//   }
//   return Math.floor(seconds % 3600 === 0)
//     ? `${Math.floor(seconds / 3600)}h`
//     : `${Math.floor(seconds / 3600)}h${Math.floor((seconds % 3600) / 60)}m`
// }

export const formattedSeconds = (seconds, withSpace) => {
  const splitter = withSpace ? ' ' : ''
  const { second, minute, hour } = breakDuration(seconds)
  return `${hour}${splitter}:${splitter}${minute}${splitter}:${splitter}${second}`
}

export const formattedMinutes = minutes => {
  if (Math.floor(minutes / 60) === 0) {
    return `${minutes % 60}m`
  }
  return minutes % 60 === 0
    ? `${Math.floor(minutes / 60)}h`
    : `${Math.floor(minutes / 60)}h${minutes % 60}m`
}

export const getCurrentTime = time =>
  `${getHours(time) > 9 ? getHours(time) : '0' + getHours(time)}:${
    getMinutes(time) > 9 ? getMinutes(time) : '0' + getMinutes(time)
  }`

export const checkEditTimesOrder = times =>
  R.prop(
    'val',
    R.reduce(
      (acc, item) =>
        item.start > item.end || item.start < acc.lastData
          ? {
              val: false,
              lastData: acc.lastData,
            }
          : {
              lastData: item.end,
              val: acc.val,
            },
      { val: true, lastData: '' },
      times,
    ),
  )
