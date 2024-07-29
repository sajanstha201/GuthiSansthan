import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/AppProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { HashRouter } from 'react-router-dom';
import { store } from './state/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
     <HashRouter>  {/* this is for routing */}
       <I18nextProvider i18n={i18n}> {/* this is for language translation */}
        <AppProvider>{/* this is for useContext */}
          <App />
        </AppProvider>
      </I18nextProvider>
    </HashRouter>
  </React.StrictMode>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
