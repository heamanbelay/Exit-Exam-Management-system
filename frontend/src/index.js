// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";
// import { Provider } from "react-redux";
// import store from './redux/store';

// import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

// ReactDOM.render(
 
//   <BrowserRouter>
//   <Provider store={store}>
//       <App />
//   </Provider>
// </BrowserRouter>,
//   document.getElementById("root")
// );
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import { useMemo } from "react";


// /** Redux Store */
// import store from './redux/store';
// import { Provider } from 'react-redux';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


/** Redux Store */
import store from './components/Examm/redux/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

