// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Autocomplete from '../components/Autocomplete/Autocomplete.presentational'
import TagList from '../components/TagList/TagList.presentational'
import Picker from '../components/Picker/Picker.presentational'
import CustomizedBarChart from '../../helper/components/BarCharts/BarChart.presentational'
import CustomizedDoubleBarChart from '../../helper/components/BarCharts/DoubleBarChart.presentational'
// styles
import './common.scss'

export const TagPanel = ({
  suggestions,
  queryTag,
  onQueryTagChange,
  tags,
  onTagClick,
  handleAddTag,
}) => (
  <>
    <div className="textField">
      <Autocomplete
        label="تگ مورد نظر خود را وارد کنید"
        suggestions={suggestions}
        inputValue={queryTag}
        onInputValueChange={e => onQueryTagChange(e.target.value)}
        onSelect={value => onQueryTagChange(value)}
        onAdd={handleAddTag}
      />
      {/*<CustomizedButton*/}
      {/*  text="ADD"*/}
      {/*  variant="labeled"*/}
      {/*  onClick={handleAddTag}*/}
      {/*  componentName="Add"*/}
      {/*/>*/}
    </div>
    <TagList tags={tags} onTagClick={tag => onTagClick(tag)} />
  </>
)

TagPanel.propTypes = {
  queryTag: PropTypes.string.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  tags: PropTypes.arrayOf(PropTypes.object).isRequired,
  onQueryTagChange: PropTypes.func.isRequired,
  onTagClick: PropTypes.func.isRequired,
  handleAddTag: PropTypes.func.isRequired,
}

export const Pickers = ({
  isError,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) => (
  <>
    <Picker
      label="تاریخ شروع"
      type="date"
      isError={isError.startDate}
      value={startDate}
      onChange={onStartDateChange}
    />
    <Picker
      label="تاریخ پایان"
      type="date"
      isError={isError.endDate}
      value={endDate}
      onChange={onEndDateChange}
    />
  </>
)

Pickers.propTypes = {
  isError: PropTypes.shape({}).isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  onStartDateChange: PropTypes.func.isRequired,
  onEndDateChange: PropTypes.func.isRequired,
}

export const BarChart = ({ data, XDataKey, YDataKey }) =>
  data.length ? (
    <div className="chart">
      <CustomizedBarChart
        barChartData={data}
        XDataKey={XDataKey}
        YDataKey={YDataKey}
      />
    </div>
  ) : null

BarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  XDataKey: PropTypes.string.isRequired,
  YDataKey: PropTypes.string.isRequired,
}

export const DoubleBarChart = ({ data, XDataKey, YDataKey }) =>
  data.length ? (
    <div className="chart">
      <CustomizedDoubleBarChart
        barChartData={data}
        XDataKey={XDataKey}
        YDataKey={YDataKey}
      />
    </div>
  ) : null

DoubleBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  XDataKey: PropTypes.string.isRequired,
  YDataKey: PropTypes.string.isRequired,
}
