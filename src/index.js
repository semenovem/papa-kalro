import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './index.css';
injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();




