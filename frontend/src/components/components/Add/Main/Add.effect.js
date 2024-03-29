// modules
import { combineEpics } from 'redux-observable'
import 'rxjs'
// local modules
import { dispatchChangeSnackbarStage } from '../../Snackbar/Snackbar.action'
// helpers
import {
  getRequest,
  postRequest,
} from '../../../../helper/functions/request.helper'
import { universlFormattedDate } from '../../../../helper/functions/date.helper'
import { getNow } from '../../../../helper/functions/time.helper'
import { checkBeforeAddTag } from '../../../Main/App.helper'
import { checkBeforeAddLog, checkBeforeAddCustomLog } from './Add.helper'
// actions
import {
  dispatchAddLog,
  dispatchChangeTab,
  dispatchSetIsLoading,
  ADD_LOG,
} from '../../../Main/App.action'
import {
  SET_QUERY_IN_ADD,
  HANDLE_ADD_TAG_IN_ADD,
  HANDLE_ADD_LOG,
  HANDLE_ADD_CUSTOM_LOG,
  dispatchFetchTagsInAdd,
  dispatchAddTagInAdd,
  dispatchChangeIsErrorInAdd,
  dispatchResetInputs,
  dispatchLoadTagsDataInAdd,
  ADD_LOG_REALTIME,
} from './Add.action'
// views
import { wisView, userIdView } from '../../../Main/App.reducer'
import { queryTagView, tagsView } from './Add.reducer'
import { pulse } from '../../../../helper/functions/realTime.helper'
import { dispatchSetIsOpenDialog } from '../../Home/Main/Home.action'
// const
import { SERVER_DISCONNECTED } from '../../Snackbar/Snackbar.action'

const { W } = window

const effectSearchTagsEpic = action$ =>
  action$
    .ofType(SET_QUERY_IN_ADD)
    .pluck('payload')
    .filter(payload => payload.queryTag.trim() !== '')
    .debounceTime(250)
    .do(() => dispatchSetIsLoading(true))
    .switchMap(payload =>
      getRequest('/searchTags')
        .query({
          wis: wisView(),
          userId: userIdView(),
          label: payload.queryTag,
        })
        .on(
          'error',
          err =>
            err.status !== 304 &&
            dispatchChangeSnackbarStage(SERVER_DISCONNECTED, true),
        ),
    )
    .do(() => dispatchSetIsLoading(false))
    .do(({ body }) => dispatchFetchTagsInAdd(body))
    .ignoreElements()

const effectHandleAddTag = action$ =>
  action$
    .ofType(HANDLE_ADD_TAG_IN_ADD)
    .map(() => ({ ...checkBeforeAddTag(queryTagView(), tagsView()) }))
    .do(({ permission }) => permission && dispatchAddTagInAdd())
    .do(
      ({ permission, message }) =>
        !permission && dispatchChangeSnackbarStage(message, true),
    )
    .ignoreElements()

const effectHandleAddLog = action$ =>
  action$
    .ofType(HANDLE_ADD_LOG)
    .pluck('payload')
    .map(payload => ({ ...payload, ...checkBeforeAddLog(payload) }))
    .do(
      ({ permission, message }) =>
        !permission && dispatchChangeSnackbarStage(message, true),
    )
    .do(({ isError }) => dispatchChangeIsErrorInAdd(isError))
    .filter(({ permission }) => permission)
    .do(
      ({ tags }) => !!tags.length && window.W && window.W.analytics('ADD_TAG'),
    )
    .do(() => dispatchSetIsLoading(true))
    .mergeMap(({ title, tags }) =>
      Promise.all([
        postRequest('/saveLog')
          .send({
            title,
            tags,
            date: universlFormattedDate(getNow()),
            times: [],
            isPinned: false,
            userId: userIdView(),
            wis: wisView(),
          })
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage(SERVER_DISCONNECTED, true),
          ),
        postRequest('/saveTags')
          .send({
            tags,
            userId: userIdView(),
            wis: wisView(),
          })
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage(SERVER_DISCONNECTED, true),
          ),
      ]),
    )
    .do(success => pulse(ADD_LOG, success[0].body))
    .do(success => dispatchLoadTagsDataInAdd(success[1].body))
    .do(() => dispatchSetIsLoading(false))
    .do(() => dispatchChangeTab('Home'))
    .do(() => dispatchChangeSnackbarStage('شمارنده با موفقیت اضافه شد'))
    .do(() => dispatchSetIsOpenDialog(false))
    .do(() => W && W.analytics('ADD_LOG', { custom: false }))
    .ignoreElements()

const effectHandleAddCustomLog = action$ =>
  action$
    .ofType(HANDLE_ADD_CUSTOM_LOG)
    .pluck('payload')
    .map(payload => ({ ...payload, ...checkBeforeAddCustomLog(payload) }))
    .do(
      ({ message, permission }) =>
        !permission && dispatchChangeSnackbarStage(message, true),
    )
    .do(({ isError }) => dispatchChangeIsErrorInAdd(isError))
    .filter(({ permission }) => permission)
    .do(() => dispatchSetIsLoading(true))
    .mergeMap(({ title, tags, start, end, date }) =>
      Promise.all([
        postRequest('/saveCustomLog')
          .send({
            title,
            tags,
            times: [{ start, end }],
            date: universlFormattedDate(date),
            isPinned: false,
            userId: userIdView(),
            wis: wisView(),
          })
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage(SERVER_DISCONNECTED, true),
          ),
        postRequest('/saveTags')
          .send({
            tags,
            userId: userIdView(),
            wis: wisView(),
          })
          .on(
            'error',
            err =>
              err.status !== 304 &&
              dispatchChangeSnackbarStage(SERVER_DISCONNECTED, true),
          ),
      ]),
    )
    .do(success => pulse(ADD_LOG, success[0].body))
    .do(success => dispatchLoadTagsDataInAdd(success[1].body))
    .do(() => dispatchChangeSnackbarStage('شمارنده با موفقیت اضافه شد'))
    .do(() => dispatchChangeTab('Home'))
    .do(() => dispatchSetIsOpenDialog(false))
    .do(() => W && W.analytics('ADD_LOG', { custom: true }))
    .ignoreElements()

const effectAddLogRealTime = action$ =>
  action$
    .ofType(ADD_LOG_REALTIME)
    .pluck('payload')
    .do(() => dispatchSetIsLoading(true))
    .do(dispatchAddLog)
    .do(() => dispatchResetInputs())
    .do(() => dispatchSetIsLoading(false))
    .ignoreElements()

export default combineEpics(
  effectSearchTagsEpic,
  effectHandleAddTag,
  effectHandleAddLog,
  effectHandleAddCustomLog,
  effectAddLogRealTime,
)
