import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">liewe_schwerzel</Link>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Portfolio Projects</Link>
      </div>
    </nav>
  )
}
