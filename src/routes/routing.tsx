import React from 'react';
import Home from '../components/home/home';
import { Routes, Route } from 'react-router-dom';
// import Layout from '../components/layout/layout';
// import About from '../components/about/about';
// import Contact from '../components/contact/contact';
// import Skill from '../components/skills/skill';
// import Project from '../components/project/project';


export default function routing() {
  return (
   <Routes>
     {/* <Route element={<Layout />}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/projects' element={<Project/>}/>
    <Route path='/skills' element={<Skill/>}/>
    <Route path='/contact' element={<Contact />}/>
    </Route> */}
      <Route path='' element={<Home/>}/>
   </Routes>
  )
}
