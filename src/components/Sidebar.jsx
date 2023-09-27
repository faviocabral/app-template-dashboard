import React from 'react'


export default function Sidebar() {
  return (
    <>
      <aside className="main-sidebar sidebar-light-indigo  elevation-4">
          <a data-widget="pushmenu" href="#" role="button" className="brand-link d-flex justify-content-between align-items-center pl-3 pr-3 bg-indigo" >
            <span className="brand-text font-weight text-center"> <strong>APP TEMPLATE</strong></span>
          </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="info">
              <strong>  <a href="#" className="d-block"> <i className="pi pi-user" style={{fontSize:'1.6rem', marginRight:'5px'}}/> USUARIO</a> </strong>
            </div>
          </div>

          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"  style={{height:"40px"}}/>
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="pi pi-filter" />
              </button>
            </div>
          </div>


          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column nav-child-indent" data-widget="treeview" role="menu" data-accordion="false">

              <li className="nav-item" style={{marginLeft:'0px'}}>
                <a href="#" className="nav-link active">
                  <i className="nav-icon pi pi-shopping-bag" style={{fontSize:"1.6rem", marginRight:'10px'}}/>
                  <p >
                    <strong>MENU 1</strong>
                    <i className="right pi pi-chevron-left" style={{top:"30%"}}/>
                  </p>
                </a>
                <ul className="nav nav-treeview" >
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>


              <li className="nav-item" style={{marginLeft:'0px'}}>
                <a href="#" className="nav-link active">
                  <i className="nav-icon pi pi-wrench" style={{fontSize:"1.6rem", marginRight:'10px'}}/>
                  <p>
                    <strong>MENU 2 </strong>
                    <i className=" right pi pi-chevron-left" style={{top:'auto'}} />
                  </p>
                </a>
                <ul className="nav nav-treeview" >
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>




              <li className="nav-item" style={{marginLeft:'0px'}}>
                <a href="#" className="nav-link active">
                  <i className="nav-icon pi pi-shield" style={{fontSize:"1.6rem", marginRight:'10px'}}/>
                  <p>
                    <strong>MENU 3 </strong>
                    <i className=" right pi pi-chevron-left" style={{top:'auto'}} />
                  </p>
                </a>
                <ul className="nav nav-treeview" >
                  <li className="nav-item">
                    <a href="#" className="nav-link ">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="pi pi-stop nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li>





            </ul>
          </nav>
        </div>
      </aside>

    </>
  )
}
