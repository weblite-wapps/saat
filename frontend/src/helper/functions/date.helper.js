// modules
import moment from 'jalali-moment'
import { toPersian } from './utils.helper'
import { getNow } from './time.helper'
import { addDays, subDays } from 'date-fns'

export const formattedDate = date =>
  toPersian(
    moment(date)
      .locale('fa')
      .format('YYYY/MM/DD'),
  )

export const universlFormattedDate = date =>
  moment(date)
    .locale('fa')
    .format('YYYY/MM/DD')

export const previousDay = date => subDays(date, 1)

export const nextDay = date => addDays(date, 1)

export const getYesterday = () => formattedDate(previousDay(getNow()))

export const getToday = () => formattedDate(getNow())
