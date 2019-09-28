// modules
import { connect } from 'react-redux'
// components
import Summary from './Summary.presentational'
// views
import { textSliderView } from '../../Main/Home.reducer'
// actions
import { dispatchChangeTextSlider } from '../../Main/Home.action'
// selectors
import { getTotalDuration } from './Summary.selector'
// helpers
import { breakDuration } from '../../../../../helper/functions/time.helper'

const mapStateToProps = state => {
  const duration = getTotalDuration(state)
  return {
    timeLabel: textSliderView().name,
    ...breakDuration(duration),
  }
}

const mapDispatchToProps = () => ({
  onLeftClick: () => dispatchChangeTextSlider('Back'),
  onRightClick: () => dispatchChangeTextSlider('Next'),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Summary)
