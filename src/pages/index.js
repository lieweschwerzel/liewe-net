import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/Seo.js"
import { BgImage } from "gbimage-bridge"

export default function Home({ data }) {
   //get banner image from graphql query through data props
  const banner = getImage(data.banner)
  const pluginImage = getImage(data.background)

  return ( 
    <BgImage image={pluginImage} className="masthead">
    <Layout>
         
      <Seo title="Home"/>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p> Fullstack Software Developer based in Amsterdam</p>
          <Link className={btn} to="/projects">     
            My portfolio projects
          </Link>
        </div>
        {/* <GatsbyImage image={banner} alt="Banner" />  */}

      </section>
    </Layout>
    </BgImage>
  )
}


export const query = graphql`
query Images {
  background: file(relativePath: {eq: "forest.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
    }
  }
  banner: file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, formats: [AUTO, WEBP])
    }
  }
}
`
