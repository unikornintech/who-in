import * as types from './actionTypes';
import { getEvents } from '../api';

export const fetchEventsRequest = () => ({ type: types.FETCH_EVENTS_REQUEST });
export const fetchEventsSuccess = payload => ({
  type: types.FETCH_EVENTS_SUCCESS,
  payload
});
export const fetchEventsError = payload => ({
  type: types.FETCH_EVENTS_ERROR,
  payload
});

export const fetchEvents = () => async dispatch => {
  dispatch(fetchEventsRequest());
  try {
    const payload = await getEvents();
    dispatch(fetchEventsSuccess(payload.data));
  } catch (err) {
    dispatch(fetchEventsError(err));
    throw err;
  }
};
