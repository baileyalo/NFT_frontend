import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MnFT from './component/NFT';

ReactDOM.render(
  <React.StrictMode>
    <div> <App /><MnFT/> </div>  
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
