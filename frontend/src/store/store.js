import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers/rootReducer';

export const history = createBrowserHistory();

const configureStore = (initialState = {}) => {
  return createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(thunk, routerMiddleware(history)))
  );
};

export default configureStore;
