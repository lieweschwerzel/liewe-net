import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/project-details.module.css"
import { graphql } from "gatsby"
import { BgImage } from "gbimage-bridge"
import Seo from "../components/Seo.js"

export default function ProjectDetails({ data }){
  const featuredImage = getImage(data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData)
  const { html } = data.markdownRemark
  const { title, stack } = data.markdownRemark.frontmatter
  const pluginImage = getImage(data.background)
  
  
  return (
    <BgImage image={pluginImage} className={styles.detailsmasthead}>
    <Layout>
      <Seo title={title}/>
      <div className={styles.details}>
        <div>          
          <h2>{title}</h2>
        </div>
        
        <h3>{stack}</h3>
        <div className={styles.featured}>
          <GatsbyImage image={featuredImage} alt="Banner" />
        </div>
        <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
    </BgImage>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP]
            )
          }
        }
      }
    }
    background: file(relativePath: { eq: "clouds.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: DOMINANT_COLOR
          formats: [AUTO, WEBP]          
        )
      }
    }
  }
`
