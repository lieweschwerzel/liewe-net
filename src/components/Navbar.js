import { Link } from "gatsby"
import React from "react"
import logo from "../images/logo.png"

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link className="navlogo" to="/">
        <img src={logo} width="40px" alt="Logo" />
        </Link>
      </div>      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}
