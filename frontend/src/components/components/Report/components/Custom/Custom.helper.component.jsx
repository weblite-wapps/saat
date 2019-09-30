// modules
import React from 'react'
import PropTypes from 'prop-types'
import { CSVDownload } from 'react-csv'
// components
import Button from '../../../../../helper/components/Button/Button.presentational'
// styles
import './Custom.scss'

export const Buttons = ({ onCalculation, onExport }) => (
  <div className="custom-buttons">
    <Button
      text="محاسبه و نمایش"
      variant="labeled"
      onClick={onCalculation}
      classesProp={{
        button: 'custom-button',
        typography: 'custom-button__typography',
      }}
    />
    <span style={{ margin: '5px' }} />
    <Button
      text="دانلود اکسل"
      variant="labeled"
      onClick={onExport}
      classesProp={{
        button: 'custom-button',
        typography: 'custom-button__typography',
      }}
    />
  </div>
)

Buttons.propTypes = {
  onCalculation: PropTypes.func.isRequired,
  onExport: PropTypes.func.isRequired,
}

export const CSVDownloader = ({ CSVData }) =>
  CSVData && <CSVDownload data={CSVData} separator=";" target="_self" />

CSVDownloader.propTypes = {
  CSVData: PropTypes.string.isRequired,
}
