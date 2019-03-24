import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
    case types.FETCH_EVENTS_SUCCESS:
      return [...action.payload];
    case types.FETCH_EVENTS_REQUEST:
    case types.FETCH_EVENTS_ERROR:
    default:
      return state;
  }
}
