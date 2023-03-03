import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import { orange, red } from '@mui/material/colors';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme = createTheme({
  palette: {
    primary: {
      main: '#ccc',
    },
    secondary: {
      main: orange['A700'],
    },
    myCustomColor: {
      main: red[400],
      superark: red[800],
      superLight: red[100],
    },
  },
  typography: {
    myVariant: {
      fontFamily: 'times new roman',
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      color: orange[500],
    },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
