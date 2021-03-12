import App from './App';
import * as serviceWorker from './serviceWorker';
// import state, { newPostText, subscribe } from './redux/state';
// import { addPost } from './redux/state'
import store from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let rerender = (state) => {
	ReactDOM.render(<App
		state={state}
		dispatch={store.dispatch.bind(store)}
	/>,
		document.getElementById('root'));
}

rerender(store._state)
store.subscribe(rerender)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
