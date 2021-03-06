import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/contact.module.css"
import Seo from "../components/Seo.js"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"


export default function contact({ data }) {
  const pluginImage = getImage(data.background)

  return (
    <BgImage image={pluginImage} className="masthead">
      <Layout>
        <Seo title="Contact" />
        <div className={styles.contact}>
          <form
            name="contact v1"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
            // action="/success/"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact v1" />

            <div hidden>
              <input type="bot-field" />
            </div>

            <div>
              <label>
                Name <br />
                <input type="text" name="first-name" required />
              </label>
            </div>

            <div>
              <label htmlFor="email">
                <br />
                Email <br/>
              </label>
              <input id="email" type="email" name="email" required/>
            </div>

            <div>
              <label>
                <br />
                Message <br />
                <textarea name="comments" cols="60" rows="10" required></textarea>
              </label>
            </div>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Layout>
    </BgImage>
  )
}

export const query = graphql`
  query ContactBackground {
    background: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          breakpoints:	[2560]
          placeholder: NONE
          formats: [AUTO, WEBP]          
        )
      }
    }    
  }
`
