// modules
import { combineEpics } from 'redux-observable'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
// local modules
import { dispatchChangeSnackbarStage } from '../../Snackbar/Snackbar.action'
// helpers
import { getRequest } from '../../../../helper/functions/request.helper'
import { getSecondsElapsed } from './Home.helper'
import {
  universlFormattedDate,
} from '../../../../helper/functions/date.helper'
// actions
import {
  SAVE_START_TIME,
  SAVE_END_TIME,
  CHANGE_TAB,
  dispatchSetIsLoading,
} from '../../../Main/App.action'
import { RESET_INPUTS } from '../../Add/Main/Add.action'
import {
  CHANGE_SELECTED_USER,
  PREVIOUS_PAGE,
} from '../../Report/Main/Report.action'
import {
  REFETCH_TOTAL_DURATION,
  COUNTINUE_COUNTING,
  CHECK_TO_SET_SECONDS_ELAPSED,
  dispatchIncrementSecondsElapsed,
  dispatchLoadTotalDurations,
  dispatchSetSecondsElapsed,
} from './Home.action'
// views
import { wisView, userIdView, logsView } from '../../../Main/App.reducer'
import { runningIdView } from '../../Home/Main/Home.reducer'
import { getNow, getParsedNow } from '../../../../helper/functions/time.helper'
// const
import { SERVER_DISCONNECTED } from '../../Snackbar/Snackbar.action'

const refetchTotalDurationEpic = action$ =>
  action$
    .ofType(RESET_INPUTS, REFETCH_TOTAL_DURATION)
    .do(() => dispatchSetIsLoading(true))
    .mergeMap(() =>
      getRequest('/fetchTotalDurations')
        .query({
          wis: wisView(),
          userId: userIdView(),
          today: universlFormattedDate(getNow()),
          now: getParsedNow(),
        })
        .on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage(SERVER_DISCONNECTED, true),
        ),
    )
    .do(() => dispatchSetIsLoading(false))
    .do(({ body }) => dispatchLoadTotalDurations(body))
    .ignoreElements()

const effectCountUpEpic = action$ =>
  action$.ofType(SAVE_START_TIME, COUNTINUE_COUNTING).mergeMap(() =>
    Observable.interval(1000)
      .do(() => dispatchIncrementSecondsElapsed())
      .takeUntil(
        action$.ofType(
          SAVE_END_TIME,
          CHANGE_TAB,
          CHANGE_SELECTED_USER,
          PREVIOUS_PAGE,
        ),
      )
      .ignoreElements(),
  )

const effectSetSecondsElapsed = action$ =>
  action$
    .ofType(CHECK_TO_SET_SECONDS_ELAPSED)
    .filter(runningIdView)
    .do(() =>
      dispatchSetSecondsElapsed(getSecondsElapsed(logsView(), runningIdView())),
    )
    .ignoreElements()

export default combineEpics(
  refetchTotalDurationEpic,
  effectCountUpEpic,
  effectSetSecondsElapsed,
)
