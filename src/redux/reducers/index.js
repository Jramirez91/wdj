import { combineReducers } from 'redux'
import inboxReducer from './inbox'

export default combineReducers({
  inbox: inboxReducer
})