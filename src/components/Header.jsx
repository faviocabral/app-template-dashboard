import React from 'react'

export default function Header() {
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light  mb-0">
        <ul className="navbar-nav" >
        <a className="nav-link" href='#' data-widget="pushmenu"> <li className="nav-item"> <i className="pi pi-bars" style={{fontSize:'2rem'}} ></i> </li></a> 
        <a className="nav-link" href='#'> <li className="nav-item"> HOME </li></a> 
        </ul>
        <ul className="navbar-nav ml-auto">
          <a href="#" className="nav-link"> <li className="nav-item"> <i className="pi pi-sign-out" style={{fontSize:'2rem', marginRight:'10px'}}/></li> </a>
        </ul>        
      </nav>

    </>
  )
}
