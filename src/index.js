//adding react library
import React from 'react';
import ReactDOM from 'react-dom';
//adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
//to use bootstrap
import $ from 'jquery';
import Popper from 'popper.js';


//adding local files
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <Header name="Header">
    <p>Header hai ye</p>
    </Header>
  </React.StrictMode>,
  document.getElementById('header')
);

ReactDOM.render(
  <React.StrictMode>
    <Body name="Body" />
  </React.StrictMode>,
  document.getElementById('body')
);
ReactDOM.render(
  
  <React.StrictMode>
  
    <Footer name="Footer">
      <b>Click on BUtton</b>
    </Footer>
  </React.StrictMode>,
  document.getElementById('footer')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
