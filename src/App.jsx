import React , {useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte.min.js'
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import 'react-toastify/dist/ReactToastify.css'

import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css";  
import 'primeicons/primeicons.css';
import Dashboard from './components/Dashboard'


function App() {

  return (
    <>

      <Dashboard />

    </>
  )
}

export default App