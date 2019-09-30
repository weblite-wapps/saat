// modules
import * as R from 'ramda'
// local modules
import { getState } from '../../../../setup/redux'
// actions
import {
  SET_TODAY,
  CHANGE_TEXT_SLIDER,
  LOAD_TOTAL_DURATIONS,
  SET_SECONDS_ELAPSED,
  INCREMENT_SECONDS_ELAPSED,
  CHANGE_RUNNING_ID,
  SET_IS_OPEN_DIALOG,
} from './Home.action'
// helpers
import { NextName, NextDuration } from './Home.helper'
// state
const initialState = {
  textSlider: { name: 'Today', duration: 0 },
  homeTotalDuration: { today: 0, thisWeek: 0, thisMonth: 0 },
  secondsElapsed: 0,
  runningId: '',
  isOpen: false,
}

// lenses
const durationLens = R.lensProp('duration')
const secondsElapsedLens = R.lensProp('secondsElapsed')
const runningIdLens = R.lensProp('runningId')
const isOpenLens = R.lensProp('isOpen')
// views
export const textSliderView = () => R.path(['Home', 'textSlider'])(getState())
export const secondsElapsedView = () =>
  R.path(['Home', 'secondsElapsed'])(getState())
export const runningIdView = () => R.path(['Home', 'runningId'])(getState())
export const isOpenView = () => R.path(['Home', 'isOpen'])(getState())

// reducers
const reducers = {
  [SET_TODAY]: (state, value) => ({
    ...state,
    textSlider: {
      name: 'Today',
      duration: value,
    },
  }),

  [CHANGE_TEXT_SLIDER]: (state, { value }) => ({
    ...state,
    textSlider: {
      name: NextName(state.textSlider.name, value),
      duration:
        state.homeTotalDuration[NextDuration(state.textSlider.name, value)],
    },
  }),

  [LOAD_TOTAL_DURATIONS]: (state, { totalDurations }) => ({
    ...state,
    homeTotalDuration: totalDurations,
    textSlider: R.set(durationLens, totalDurations.today, state.textSlider),
  }),

  [SET_SECONDS_ELAPSED]: (state, { value }) =>
    R.set(secondsElapsedLens, value, state),

  [INCREMENT_SECONDS_ELAPSED]: state =>
    R.set(secondsElapsedLens, R.inc(state.secondsElapsed), state),

  [CHANGE_RUNNING_ID]: (state, { _id }) => R.set(runningIdLens, _id, state),

  [SET_IS_OPEN_DIALOG]: (state, isOpen) => R.set(isOpenLens, isOpen, state),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
