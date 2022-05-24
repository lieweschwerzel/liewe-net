import React from "react"
import { graphql, Link } from "gatsby"
import * as styles from "../styles/about.module.css"
import Layout from "../components/Layout"
import Seo from "../components/Seo.js"
import { BgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function Home({ data }) {
  const bgImage = getImage(data.background)
  const javaImg = getImage(data.java)
  const javascriptImg = getImage(data.javascript)
  const htmlImg = getImage(data.html)
  const cssImg = getImage(data.css)
  const gatsbyImg = getImage(data.gatsby)
  const reactImg = getImage(data.react)
  const mysqlImg = getImage(data.mysql)
  const gitImg = getImage(data.git)
  const pythonImg = getImage(data.python)
  const firebaseImg = getImage(data.firebase)
  const androidImg = getImage(data.android)
  const springbootImg = getImage(data.springboot)

  return (
    <BgImage image={bgImage} className="masthead">
      <Layout>
        <Seo title="About" />
        <div className={styles.test}>
          <header>About Me</header>
          <main>
            <p>
                Passionate about building software and learning new technologies. <br/> 
                I started my programming journey with Java in 2017 creating Android applications with REST api backends (Spring Boot, MySQL/Firebase). 
                I enjoy working with React and MongoDB (MERN stack, FARM stack and variations) either using JS or Python (FastAPI), HTML/CSS and Gatsby (with GraphQL).<br/>                
                <br/>
                Currently in my 4th year of HBO ICT Software Engineering (parttime) at the HVA in Amsterdam. 
                <br/>
                <br/>
                Check out my <Link to="/projects">Portfolio</Link> or <a href="https://github.com/lieweschwerzel" target="_blank"  rel="noreferrer">Github</a>
            </p>
          </main>
            <aside>
              <div className={styles.box}>
                <p>Java</p>
                <GatsbyImage image={javaImg} alt="Java" />
              </div> 
              <div className={styles.box}>
                <p>Javascript</p>
                <GatsbyImage image={javascriptImg} alt="Javascript" />
              </div>
              <div className={styles.box}>
                <p>Python</p>
                <GatsbyImage image={pythonImg} alt="Python" />
              </div>
              <div className={styles.box}>
                <p>MySQL</p>
                <GatsbyImage image={mysqlImg} alt="MySQL" />
              </div>
              <div className={styles.box}>
                <p>Spring Boot</p>
                <GatsbyImage image={springbootImg} alt="Spring Boot" />
              </div>             
              <div className={styles.box}>
                <p>HTML5</p>
                <GatsbyImage image={htmlImg} alt="HTML" />
              </div>
              <div className={styles.box}>
                <p>CSS3/SCSS</p>
                <GatsbyImage image={cssImg} alt="CSS/Scss" />
              </div>
              <div className={styles.box}>
                <p>React</p>
                <GatsbyImage image={reactImg} alt="React" />
              </div>
              <div className={styles.box}>
                <p>Gatsby</p>
                <GatsbyImage image={gatsbyImg} alt="Gatsby" />
              </div>
              <div className={styles.box}>
                <p>Git</p>
                <GatsbyImage image={gitImg} alt="Git" />
              </div>            
              <div className={styles.box}>
                <p>Firebase</p>
                <GatsbyImage image={firebaseImg} alt="Firebase" />
              </div>
              <div className={styles.box}>
                <p>Android</p>
                <GatsbyImage image={androidImg} alt="Android Studio" />
              </div>
            </aside>
          </div> 
      </Layout>
    </BgImage>
  )
}

export const query = graphql`
  query AboutBackground {
    background: file(relativePath: {eq: "about.jpg"}) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          breakpoints: [1920]
        )
      }
    }
    banner: file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    java: file(relativePath: { eq: "logos/java.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    javascript: file(relativePath: { eq: "logos/javascript.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    html: file(relativePath: { eq: "logos/html.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    css: file(relativePath: { eq: "logos/css.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    android: file(relativePath: { eq: "logos/android.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    gatsby: file(relativePath: { eq: "logos/gatsby.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    git: file(relativePath: { eq: "logos/git.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    python: file(relativePath: { eq: "logos/python.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    mysql: file(relativePath: { eq: "logos/mysql.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    react: file(relativePath: { eq: "logos/react.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    firebase: file(relativePath: { eq: "logos/firebase.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
    springboot: file(relativePath: { eq: "logos/springboot.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
