import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './routes/start/App';
import './index.css';
import { Create, Feed } from './routes';
import { Navbar } from './components'

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
      <div className='gradient__bg'>
        <Navbar/>
      </div>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="create" element={<Create />} />
      <Route path="feed" element={<Feed />} />
    </Routes>
  </BrowserRouter>, 
  rootElement
  );
