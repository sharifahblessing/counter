import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import store from "./store/index";
import {Provider} from 'react-redux';
// import { add,subtract} from "./action/index";

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, document.getElementById('root'));



window.store = store;
// window.add = add;




