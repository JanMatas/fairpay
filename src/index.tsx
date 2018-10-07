import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { EnthusiasmAction, loadAll } from './actions';
import './index.css';
import { enthusiasm } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { AppRouter } from './Router';
import { IStoreState } from './types/index';


const store = createStore<IStoreState, EnthusiasmAction, null, null>(enthusiasm, {
  "communities": [{
    "communityName": "Beer Squad",
    "members": [
      {
        "userId": 1
      },
      {
        "userId": 2
      },
      {
        "userId": 3
      },
      {
        "userId": 4
      }
    ],
    "icon": "039-beer.png",
    "spending": 156,
    "budget": 400,
    "transactions": [],
    communityId: 0
  },

    {
      "communityName": "Epic trip",
      "members": [
        {
          "userId": 1
        },
        {
          "userId": 3
        }
      ],
      "icon": "032-palm-tree.png",
      "spending": 18,
      "budget": 20,
      "transactions": [
      ],
      communityId: 1
    }
  ],
  currentUser:     {
    "userId": 4
  }
});
setInterval(() => {
  fetch('/get_all_transactions', {
    headers: {'Content-Type':'application/json'},
   }).then((response)=> {
     response.json().then(data => {
  
       store.dispatch(loadAll(data));
     }
      )
   });
}, 2000);


ReactDOM.render(
<Provider store={store}>

  <AppRouter />
</Provider>
, document.getElementById('root'));
registerServiceWorker();
