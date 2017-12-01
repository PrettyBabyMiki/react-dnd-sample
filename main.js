
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';





import reducer from './reducers';
import { indexUrl, aboutUrl } from './constants/appUrls';
import App from './components/App.jsx';





const browserHistoryMiddlware = routerMiddleware(browserHistory);
const store = createStore(
                          reducer,
                          composeWithDevTools(applyMiddleware(thunk, browserHistoryMiddlware))
);
const history = syncHistoryWithStore(hashHistory, store);



ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={indexUrl} component={App} />
    </Router>
  </Provider>,
  document.getElementById('app'));


export default store;
