// modules
import React from 'react'
import PropTypes from 'prop-types'
// components
import Summary from '../components/Summary/Summary.container.react'
import Button from '../../../../helper/components/Button/Button.presentational'
// helpers
import { TodayWorkList, FabButton } from './Home.helper.component'
// styles
import './Home.scss'

const Home = ({ logs, onAdd }) => (
  <div className="home-normal">
    <Summary />
    <span className="home-logs-list">
      <TodayWorkList logs={logs} />
    </span>
    <Button
      text="ساعت شمار جدید"
      variant="fixed"
      onClick={() => onAdd('work', [], true)}
    />
  </div>
)

Home.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
}

export default Home
