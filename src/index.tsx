import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EnthusiasmAction } from './actions';
import './index.css';
import { enthusiasm } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './Router';
import { IStoreState } from './types/index';


const store = createStore<IStoreState, EnthusiasmAction, null, null>(enthusiasm, {
  communities: [],
  currentUser: undefined
});


ReactDOM.render(
<Provider store={store}>

  <AppRouter />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
