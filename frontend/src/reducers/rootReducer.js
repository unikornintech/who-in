import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import events from './eventsReducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    events
  });
