// modules
import * as R from 'ramda'
// local modules
import { getState } from '../../setup/redux'
// actions
import {
  SET_API,
  SET_ISLOADING,
  CHANGE_TAB,
  LOAD_USERS_DATA,
  LOAD_LOGS_DATA,
  CHANGE_POPOVER_ID,
  ADD_LOG,
  DELETE_LOG,
  SAVE_START_TIME,
  SAVE_END_TIME,
  TOGGLE_IS_PINNED,
  SET_EDITED_LOG,
  SORT_ON_FREQUENTLY_USAGE,
} from './App.action'

// state
const initialState = {
  tabIndex: 'Home',
  isLoading: false,
  popoverId: '',
  logs: [],
  users: [],
  user: {},
  wis: (window.W && window.W.wisId) || '110',
  creator: true,
}

// lens
const isLoadingLens = R.lensProp('isLoading')
const tabIndexLens = R.lensProp('tabIndex')
const endLens = R.lensProp('end')
const popoverIdLens = R.lensProp('popoverId')
// views
export const wisView = () => R.path(['App', 'wis'])(getState())
export const creatorView = () => R.path(['App', 'creator'])(getState())
export const userIdView = () => R.path(['App', 'user', 'id'])(getState())
export const userNameView = () => R.path(['App', 'user', 'name'])(getState())
export const logsView = () => R.path(['App', 'logs'])(getState())
export const usersView = () => R.path(['App', 'users'])(getState())
export const popoverIdView = () => R.path(['App', 'popoverId'])(getState())
export const isLoadingView = () => R.path(['App', 'isLoading'])(getState())
export const tabIndexView = () => R.path(['App', 'tabIndex'])(getState())

// reducers
const reducers = {
  [SET_API]: (state, { user, creator }) => ({ ...state, user, creator }),

  [SET_ISLOADING]: (state, { value }) => R.set(isLoadingLens, value, state),

  [CHANGE_TAB]: (state, { value }) => R.set(tabIndexLens, value, state),

  [LOAD_USERS_DATA]: (state, { users }) => ({
    ...state,
    users: R.uniq(R.concat(state.users, users)),
  }),

  [LOAD_LOGS_DATA]: (state, { logs }) => ({
    ...state,
    logs: R.uniq(R.concat(state.logs, logs)),
  }),

  [CHANGE_POPOVER_ID]: (state, { value }) => R.set(popoverIdLens, value, state),

  [ADD_LOG]: (state, { log }) => ({
    ...state,
    logs: R.prepend(log, state.logs),
  }),

  [DELETE_LOG]: (state, { _id }) => ({
    ...state,
    logs: R.remove(
      R.findIndex(R.propEq('_id', _id))(state.logs),
      1,
      state.logs,
    ),
  }),

  [SAVE_START_TIME]: (state, { _id, start, runningTimeId }) => ({
    ...state,
    logs: R.map(
      log =>
        log._id === _id
          ? {
              ...log,
              times: R.append(
                { _id: runningTimeId, start, end: 'running' },
                log.times,
              ),
            }
          : log,
      state.logs,
    ),
  }),

  [SAVE_END_TIME]: (state, { _id, end }) => ({
    ...state,
    logs: R.map(
      log =>
        log._id === _id
          ? {
              ...log,
              times: R.map(
                time =>
                  time.end === 'running' ? R.set(endLens, end, time) : time,
                log.times,
              ),
            }
          : log,
      state.logs,
    ),
  }),

  [TOGGLE_IS_PINNED]: (state, { _id, value }) => ({
    ...state,
    logs: R.map(
      log => (log._id === _id ? { ...log, isPinned: value } : log),
      state.logs,
    ),
  }),

  [SET_EDITED_LOG]: (state, newlog) => ({
    ...state,
    logs: R.map(log => (log._id === newlog._id ? newlog : log), state.logs),
  }),

  [SORT_ON_FREQUENTLY_USAGE]: state => ({
    ...state,
    logs: R.sort((a, b) => b.times.length - a.times.length, state.logs),
  }),
}

export default (state = initialState, { type, payload }) =>
  reducers[type] ? reducers[type](state, payload) : state
