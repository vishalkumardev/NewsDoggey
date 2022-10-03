import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link></li>
              <li className="nav-item"><NavLink className="nav-link fw-bold" to="/business">Business</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link fw-bold" to="/entertainment">Entertainment</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link fw-bold" to="/health">Health</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link fw-bold" to="/science">Science</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link fw-bold" to="/sports">Sports</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link fw-bold" to="/technology">Technology</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar