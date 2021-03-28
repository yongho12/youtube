import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube';


const youtube = new Youtube('AIzaSyAq_qzMHEBT1F-zo-dPxI-5rIJ0tRrss6s');
ReactDOM.render(
  <React.StrictMode>
    <App youtube = { youtube }  />
  </React.StrictMode>,
  document.getElementById('root')
);
