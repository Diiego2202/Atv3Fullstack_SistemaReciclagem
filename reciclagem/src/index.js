import React from 'react';
import ReactDOM from 'react-dom/client';
import { Rotas } from "./Rotas";
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <Rotas/>   
  </div>
);

reportWebVitals();