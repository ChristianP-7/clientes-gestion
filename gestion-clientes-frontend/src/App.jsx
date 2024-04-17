import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListClientesComponent from './components/ListClientesComponent'
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddClienteComponent from './components/AddClienteComponent'

function App() {

  return (
    <div>
      <BrowserRouter>
      <HeaderComponent></HeaderComponent>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<ListClientesComponent></ListClientesComponent>}></Route>
          <Route exact path='/clientes' element={<ListClientesComponent></ListClientesComponent>}></Route>
          <Route exact path='/add-cliente' element={<AddClienteComponent></AddClienteComponent>}></Route>
          <Route exact path='/edit-cliente/:id' element={<AddClienteComponent></AddClienteComponent>}></Route>
        </Routes>
      </div>
      <FooterComponent></FooterComponent>
      </BrowserRouter>
    </div>
  )
}

export default App
