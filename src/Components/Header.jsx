import React from 'react';
import tender786Logo from '../tender_786.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div className="container-fluid container-fluid_">
      <div className="row pb-2 g-0 " style={{ minHeight: "140px" }}>

        <div className="col-3 d-flex pt-3">
          <img src={tender786Logo} className='HeaderFooterlogo' alt='logo' />
        </div>

        <div className='col-6 d-flex align-items-lg-end justify-content-center align-items-md-start align-items-sm-start p-md-3 p-sm-3 navItemColumn'>


          <nav className="navbar navbar-expand-lg p-0 ">

            <div className="collapse navbar-collapse" >

              <ul className="navbar-nav mx-auto gap-3">

                <li className="nav-item ">
                  <Link className="nav-link icons" to="/" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '3px' }}>
                      <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                    </svg>
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link icons" to="/tender">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                      <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                      <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                    </svg>
                    Tender
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link icons" to="/cities">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                      <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                      <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                    </svg>
                    Cities
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link icons" to="/categories">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                      <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                    </svg>
                    Categories
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link icons" to="/organization">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3 " viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                      <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v3a2 2 0 0 0 1.5 1.937v1.272a2.5 2.5 0 1 0 1 0V6.937A2 2 0 0 0 6 5V2a2 2 0 0 0-2-2zM5 6V2a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zM1.5 12.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm9-4.5A2 2 0 0 0 12 5V2a2 2 0 1 0-4 0v3a2 2 0 0 0 1.5 1.937v1.272a2.5 2.5 0 1 0 1 0V6.937A2 2 0 0 0 10.5 8zM11 6V2a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zm-2 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4-3.063v1.272a2.5 2.5 0 1 0 1 0V9.437A2 2 0 0 0 16 7.5V5a2 2 0 1 0-4 0v2.5a2 2 0 0 0 1.5 1.937zM15 5v2.5a1 1 0 0 1-2 0V5a1 1 0 1 1 2 0zm-7.5 8.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                    </svg>
                    Organization
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link icons" to="/blogs">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '0px' }}>
                      <path fillRule="evenodd" d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                    </svg>
                    Blogs
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link icons" to="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3 about_circle" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px', border: '1px solid white', borderRadius: "50px" }}>
                      <path fillRule="evenodd" d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link icons" to="/contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                      <path fillRule="evenodd" d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
                    </svg>
                    Contact
                  </Link>
                </li>

              </ul>

            </div>
          </nav>
        </div>

        <div className="col-3 d-flex justify-content-end align-items-start pt-3">
          <div className='d-flex  align-items-center'>

            <div className="whatsapp_inquirey me-2">

              <div className="d-flex flex-column text-white numbers_">
                <span> +9230978967 </span>
                <span>+9231644843</span>
              </div>

              <Link to="https://wa.me/+9237584398353" target="_blank" rel="noopener noreferrer" className="btn btn_ btn-outline-success text-white rounded-pill">
                <img width="30" height="30" className='whstapplogoInSmallScreen' src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="whatsapp--v1" />
                <span> Whatsapp </span>
              </Link>

            </div>

            <div class="vertical-line me-1 d-lg-none">  </div>


            <button class="btn hamburg_CloseIcon d-flex p-0 text-white d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
              </svg>
            </button>

            <div class="offcanvas offcanvas-end" style={{ width: "40%" }} tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div class="offcanvas-header">
                <button type="button" class="btn-close btn btn-light hamburg_CloseIcon" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className='row g-0 tenderLogoRow'>
                <div className="col-12 d-flex justify-content-center">
                  <img src={tender786Logo} className='logo_in_offcanvas' alt='logo' />
                </div>
              </div>

              <div className='row g-0 justify-content-center'>
                <div className="col-12 d-flex justify-content-center">
                  <Link className=" " to="/">
                    <button className='btn btn-light m-2 p-2 subcribe-transparent rounded-pill  ' > Subcribe </button>
                  </Link>
                </div>
              </div>

              <div class="offcanvas-body d-flex justify-content-start flex-column border-top p-0 m-0">

                <ul className="navbar-nav  gap-1">

                  <li className="nav-item ">
                    <Link className="nav-link " to="/">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '3px' }}>
                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                      </svg>
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/tender">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                        <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z" />
                        <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1" />
                      </svg>
                      Tender
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/cities">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                        <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                        <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                      </svg>
                      Cities
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/categories">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-boxes" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                        <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                      </svg>
                      Categories
                    </Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link className="nav-link " to="/organization">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3 " viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                        <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v3a2 2 0 0 0 1.5 1.937v1.272a2.5 2.5 0 1 0 1 0V6.937A2 2 0 0 0 6 5V2a2 2 0 0 0-2-2zM5 6V2a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zM1.5 12.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm9-4.5A2 2 0 0 0 12 5V2a2 2 0 1 0-4 0v3a2 2 0 0 0 1.5 1.937v1.272a2.5 2.5 0 1 0 1 0V6.937A2 2 0 0 0 10.5 8zM11 6V2a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0zm-2 6.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0zm4-3.063v1.272a2.5 2.5 0 1 0 1 0V9.437A2 2 0 0 0 16 7.5V5a2 2 0 1 0-4 0v2.5a2 2 0 0 0 1.5 1.937zM15 5v2.5a1 1 0 0 1-2 0V5a1 1 0 1 1 2 0zm-7.5 8.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0z" />
                      </svg>
                      Organization
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/blogs">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '0px' }}>
                        <path fillRule="evenodd" d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                      </svg>
                      Blogs
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/about">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3 about_circle" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px', border: '1px solid white', borderRadius: "50px" }}>
                        <path fillRule="evenodd" d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                      </svg>
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link " to="/contact">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3" viewBox="0 0 16 16" style={{ marginRight: '0.2em', marginBottom: '2px' }}>
                        <path fillRule="evenodd" d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1z" />
                      </svg>
                      Contact
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" row border-bottom border-top gx-lg-4 gx-md-4 g-sm-0 " >

        <div className="col-12 p-0">
          <marquee className="marquee_msg">
            WEBSITE IS LIVE NOW YOU SEE YOUR TENDERS ACCORDING TO YOUR CATEGORIES AND CITIES ---- FESCO ISSUED CORRIGENDUM AGAINST TENDERS NOS. NCB-609 TO 616 AND NCB-656 TO 664 DATE EXTENDED 12-08-2024-INSTEAD OF 25-07-2024
          </marquee>
        </div>
      </div>

    </div>
  );
};

export default Header;