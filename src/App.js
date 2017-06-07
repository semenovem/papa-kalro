import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Desktop from './layout/Desktop.js';
import store from './store';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
    <Provider store={store}>
        <MuiThemeProvider>
            <Desktop/>
        </MuiThemeProvider>
    </Provider>
);

export default App;

