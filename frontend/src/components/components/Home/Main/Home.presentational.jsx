// modules
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from '@material-ui/core/Dialog'
// components
import Summary from '../components/Summary/Summary.container.react'
import Button from '../../../../helper/components/Button/Button.presentational'
import Add from '../../Add/Main/Add.container.react'
// helpers
import { TodayWorkList } from './Home.helper.component'
import Transition from '../../../../helper/components/Transition/Transition'
import DialogToolbar from '../../../../helper/components/DialogToolbar/DialogToolbar.presentational'
// styles
import './Home.scss'

const Home = ({ logs, isOpen, onClose, onAdd }) => (
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

    <Dialog
      open={isOpen}
      fullScreen
      transitionDuration={300}
      TransitionComponent={Transition}
    >
      <DialogToolbar
        title="افزودن ساعت شمار جدید"
        onClose={onClose}
      />
      <Add />
    </Dialog>
  </div>
)

Home.propTypes = {
  logs: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAdd: PropTypes.func.isRequired,
}

export default Home
