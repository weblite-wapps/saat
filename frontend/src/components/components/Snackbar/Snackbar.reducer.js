import * as R from 'ramda'
import { getState } from '../../../setup/redux'
// actions
import { CHANGE_SNACKBAR_STAGE } from './Snackbar.action'

// state
const initialState = {
  snackbarIsOpen: false,
  message: '',
  type: '',
}
//views
export const snackbarIsOpenView = () =>
  R.path(['Snackbar', 'snackbarIsOpen'])(getState())
export const messageView = () => R.path(['Snackbar', 'message'])(getState())
export const typeView = () => R.path(['Snackbar', 'type'])(getState())
// reducers
const reducers = {
  [CHANGE_SNACKBAR_STAGE]: (state, { message, isError }) => ({
    ...state,
    snackbarIsOpen: !!message,
    message,
    type: isError ? 'error' : 'success',
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
