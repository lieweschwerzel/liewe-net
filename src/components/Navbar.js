import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link className="navlogo" to="/">liewe_schwerzel</Link>
      </div>      
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
