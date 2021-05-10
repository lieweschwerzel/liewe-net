import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { Helmet } from "react-helmet"
import favicon from "../images/favicon.ico"

export default function Layout({ children }) {
  <Helmet>
    <link rel="icon" href={favicon} />
  </Helmet>
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{children}</div>
      <footer>
        <p>Copyright 2021 Liewe </p>
      </footer>
    </div>
  )
}
