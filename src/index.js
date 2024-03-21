import React from 'react';
import ReactDOM from 'react-dom/client';
import ModalProvider from 'components/Modal/ModalProvider';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ModalProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ModalProvider>
);
