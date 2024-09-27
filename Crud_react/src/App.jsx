import React from 'react'
import {  BrowserRouter ,Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User from './components/User'
import CreateUser from './components/CreateUser'
import UpdateUser from './components/UpdateUser'
import DeleteUser from './components/DeleteUser'
import DisplayUser from './components/DisplayUser'

function App() {

  return (
    <>
  
     <BrowserRouter>
     <Routes>
      <Route path = "/"  element={<User/>}></Route>
      
      <Route path ="/create" element={<CreateUser/>} ></Route>
      <Route path ="/update/:id" element={<UpdateUser/>}></Route>
      <Route path ="/delete/:id" element={<DeleteUser/>}></Route>
      <Route path = "/readall" element={<DisplayUser/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
