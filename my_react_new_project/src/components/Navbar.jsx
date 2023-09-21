import React from 'react'

function Navbar() {
  return (
    <div className='fs-3'><nav className="navbar navbar-expand-lg">
    <div className="container-fluid ">
      <a className="navbar-brand fs-1" href="#">Cickle</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
      data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
      aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="#">Courses</a>
          </li>
          <form className="d-flex" role="search">
          <input className="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
          </form>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Corporate Training</a>
          </li>
         
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Training Calander</a>
          </li>
          <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">About Us</a>
          </li>
          </ul>
        <button className="btn btn-outline-success" type="submit">Login</button>
      </div>
    </div>
  </nav>
      
    </div>
  )
}

export default Navbar
