import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import rootReducers from './reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { addCharacterById } from './action';

const store = createStore(rootReducers);
//console.log('store.getState()', store.getState());
store.subscribe(()=> console.log('store',store.getState()));
store.dispatch(addCharacterById(3));

ReactDom.render(
    <Provider store= { store }>
        <App/>
    </Provider>
 ,document.getElementById('root'));