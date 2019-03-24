import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers/rootReducer';

export const history = createBrowserHistory();

const configureStore = (initialState = {}) => {
  const middleWares = [thunk, routerMiddleware(history)];
  return createStore(
    rootReducer(history),
    initialState,
    compose(applyMiddleware(...middleWares))
  );
};

export default configureStore;
