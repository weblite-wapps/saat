// modules
import { createAction } from 'redux-actions'
import { dispatch } from '../../../setup/redux'

// messages
export const SERVER_DISCONNECTED = 'ارتباط با سرور قطع شده است'

// actions
export const CHANGE_SNACKBAR_STAGE = 'CHANGE_SNACKBAR_STAGE'
const changeSnackbarStage = createAction(
  CHANGE_SNACKBAR_STAGE,
  (message, isError) => ({
    message,
    isError,
  }),
)
export const dispatchChangeSnackbarStage = (...args) =>
  dispatch(changeSnackbarStage(...args))
