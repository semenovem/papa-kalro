import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Desktop from './layout/Desktop.js';

const App = () => (
  <MuiThemeProvider>
    <Desktop />
  </MuiThemeProvider>
);

export default App;

