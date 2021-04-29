import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
   //get banner image from graphql query through data props
  const image = getImage(data.file)

  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p> Fullstack Software Developer based in Amsterdam</p>
          <Link className={btn} to="/projects">     
            My portfolio projects
          </Link>
        </div>
        <GatsbyImage image={image} alt="Banner" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, AVIF]
        )
      }
    }
  }
`
