import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"


const GbiBridged = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "home.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 3600
              layout: FIXED
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )



  const pluginImage = getImage(placeholderImage)

  return (
    <BgImage image={pluginImage} className="masthead">
        Test
    </BgImage>
  )
}
export default GbiBridged
