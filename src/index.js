import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {Theme} from './theme'
import { ThemeProvider } from '@mui/material/styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={Theme}>
  <App />
</ThemeProvider>
);
