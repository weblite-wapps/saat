// modules
import React from 'react'
import Divider from '@material-ui/core/Divider'
import startOfToday from 'date-fns/start_of_today'
import subDays from 'date-fns/sub_days'
// helpers
import {
  Pickers,
  BarChart,
} from '../../../../../helper/functions/common.helper.component'
import Select from '../../../../../helper/components/Select/Select.presentational'
import Button from '../../../../../helper/components/Button/Button.presentational'
import { getNow } from '../../../../../helper/functions/time.helper'
// styles
import './ShowChart.scss'

const updaters = {
  today: update => {
    const now = getNow()
    update(startOfToday(now), now)
  },
  last7: update => {
    const now = getNow()
    update(subDays(now, 6), now)
  },
  last30: update => {
    const now = getNow()
    update(subDays(now, 29), now)
  },
  custom: () => {},
}

const options = [
  {
    value: 'today',
    label: 'امروز',
  },
  {
    value: 'last7',
    label: 'این هفته',
  },
  {
    value: 'last30',
    label: 'این ماه',
  },
  {
    value: 'custom',
    label: 'بازه دلخواه',
  },
]

export default ({
  handleUpdate,
  update,
  dateMode,
  onChangeDateMode,
  ...props
}) => (
  <div className="showChart-root">
    <Select
      onChange={value => {
        updaters[value](update)
        onChangeDateMode(value)
      }}
      currentValue={dateMode}
      options={options}
    />
    <Pickers {...props} />
    <Button
      text="رسم نمودار"
      onClick={() => handleUpdate(props.startDate, props.endDate)}
      variant="labeled"
      classesProp={{ button: 'showChart-button' }}
    />
    <Divider />
    <BarChart {...props} XDataKey="name" YDataKey="duration" />
  </div>
)
