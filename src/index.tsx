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
  communities: [
    {
      communityName: "Epic trip",
      members: [
        {
          "username": "jano"
        },
        {
          "username": "filip"
        },
      ],
      icon: "032-palm-tree.png",
      spending: 18,
      budget: 20,
      transactions: [
        {
          "user": {
            "username": "jano"
          },
          "value": 12.80,
          "date": new Date(0),
          "location": "Tesco Stores"
        },
        {
          "user": {
            "username": "jano"
          },
          "value": 27.50,
          "date": new Date(0),
          "location": "Zil Verne"
        },
      ]
    },
    {
      communityName: "Beer Squad",
      members: [
        {
          "username": "jano"
        },
        {
          "username": "andrej"
        },
        {
          "username": "filip"
        },
        {
          "username": "matej"
        },
      ],
      icon: "039-beer.png",
      spending: 156,
      budget: 400,
      transactions: [
        {
          "user": {
            "username": "jano"
          },
          "value": 12.85,
          "date": new Date(0),
          "location": "Tesco Stores"
        },
        {
          "user": {
            "username": "jano"
          },
          "value": 37.12,
          "date": new Date(0),
          "location": "Zil Verne"
        },
      ]
    },
  ],
  currentUser: undefined
});


ReactDOM.render(
<Provider store={store}>

  <AppRouter />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
