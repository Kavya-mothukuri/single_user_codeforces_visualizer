import './App.css';
import Header from './components/Header/Header';
import SingleUser from './pages/SingleUser';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import React from 'react'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SingleUser />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


