import React from 'react';
import Home from '../home/home';
import { Routes, Route } from 'react-router-dom';


export default function routing() {
  return (
   <Routes>
      <Route path='' element={<Home/>}/>
   </Routes>
  )
}
