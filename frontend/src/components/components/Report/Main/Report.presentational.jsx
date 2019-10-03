// modules
import React from 'react'
// components
import SelectBar from '../components/SelectBar/SelectBar.container.react'
// helpers
import {
  ControlBar,
  ExportPanel,
  BarChartPanel,
  WorkListPanel,
  LeaderboardPanel,
} from './Report.helper.component'
// styles
import './Report.scss'

export default props => (
  <div className="report-container">
    <div className="report-dashboard">
      <SelectBar />
      <ControlBar {...props} />
    </div>
    <div className="report-content scroll-bar">
      <ExportPanel {...props} />
      <BarChartPanel {...props} />
      <WorkListPanel {...props} />
      <LeaderboardPanel {...props} />
    </div>
  </div>
)
