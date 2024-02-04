import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"
import swiss from "../../assets/swiss.mp4"

const GbiBridged = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 3840) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )



  const pluginImage = getImage(placeholderImage)

  return (
   <video controls>
      <source src={swiss} type="video/mp4" />
    </video>
  )
}
export default GbiBridged
