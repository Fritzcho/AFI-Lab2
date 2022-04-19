import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.css';
import { App, Create, Feed, Subscribers, Add, Edit } from './routes';
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
      <Route path="subscribers" element={<Subscribers />}/>
      <Route path="subscribers/add" element={<Add/>}/>
      <Route path="subscribers/edit/:id" element={<Edit/>}/>
    </Routes>
  </BrowserRouter>, 
  rootElement
  );
