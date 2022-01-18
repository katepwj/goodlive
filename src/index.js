import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import './assets/icofont/icofont.css';
import { Provider } from "react-redux" ;
import myStore from './redux/store/store';
import "./index.css"



ReactDOM.render(
  <Provider store={myStore}>
  <AppRouter />
  </Provider>
  ,
  document.getElementById('root')
);


