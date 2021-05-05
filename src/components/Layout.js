import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { convertToBgImage } from "gbimage-bridge"

export default function Layout({ children }) {
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
