import React from 'react'
import { graphql } from "gatsby"
import * as styles from "../styles/about.module.css"
import Layout from '../components/Layout'
import Seo from "../components/Seo.js"
import { BgImage } from "gbimage-bridge"
import { GatsbyImage, getImage } from "gatsby-plugin-image"


export default function Home({ data })  {
  const bgImage = getImage(data.background)
  const javaImg = getImage(data.java)
  const javascriptImg = getImage(data.javascript)
  const htmlImg = getImage(data.html)
  const cssImg = getImage(data.css)
  const gatsbyImg = getImage(data.gatsby)
  const mysqlImg = getImage(data.mysql)
  const gitImg = getImage(data.git)
  const pythonImg = getImage(data.python)
  const firebaseImg = getImage(data.firebase)
  const androidImg = getImage(data.android)
  const springbootImg = getImage(data.springboot)


    return (    
    <BgImage image={bgImage} className="masthead">
        <Layout>
            <Seo title="About"/> 
            <div className={styles.test}>  
              <header>About Me </header>     
              <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odio ex adipisci iusto illum est ad nihil, voluptas ab maiores tempore modi eum. Ipsa ullam molestias debitis perferendis quae commodi!</p></main>
              <aside>
                <div className={styles.box}> 
                <p>Java</p>
                <GatsbyImage image={javaImg} alt="Java" />
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
                  <p>Javascript</p>
                <GatsbyImage image={javascriptImg} alt="Javascript" />
                </div>
                <div className={styles.box}>
                 <p>HTML5</p>
                <GatsbyImage image={htmlImg} alt="HTML" />
                </div>
                <div className={styles.box}>
                 <p>CSS3/SCSS</p>
                <GatsbyImage image={cssImg} alt="Css/Scss" />
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
                  <p>Python</p>
                  <GatsbyImage image={pythonImg} alt="Python" />
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
                {/* <div>
                    <h1>About page</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsum corrupti nostrum iure ipsam, unde eveniet temporibus eaque distinctio porro, accusamus, cum officia! Numquam, quam dolores praesentium quae sapiente tenetur minima officia reprehenderit cupiditate minus ad animi, sit, cumque omnis earum totam sint maxime? Eveniet voluptatum officiis minus, debitis consectetur voluptas numquam animi magni sequi corporis ipsum odio voluptatibus nulla tempora, sunt aliquid? Ea qui recusandae eius nostrum dolorum saepe laboriosam dolorem molestiae, blanditiis expedita odit obcaecati, amet quia deserunt! Repellat at suscipit expedita vel nam, odit molestiae quo pariatur quod alias, explicabo quibusdam nostrum illo eum fugiat iusto corporis doloremque tempore! Eum molestias fuga dolor praesentium vitae, quaerat doloribus, aspernatur quas fugiat illo voluptate reiciendis amet aperiam ratione vero? A expedita, recusandae laboriosam deserunt aperiam nostrum, temporibus corrupti hic vero atque numquam nobis sed, magnam id ipsa quis animi quos pariatur alias quae! Accusamus labore non incidunt quasi debitis perspiciatis fugiat, excepturi exercitationem perferendis quas similique culpa impedit natus facilis hic dicta dolorum qui quis molestiae? Aperiam non delectus reprehenderit modi ipsa, necessitatibus fugit consequuntur maiores neque nihil velit provident, voluptates eius soluta accusamus ipsum harum id architecto sapiente, nemo ad rerum expedita? Quasi dolore dolores id omnis a.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsum corrupti nostrum iure ipsam, unde eveniet temporibus eaque distinctio porro, accusamus, cum officia! Numquam, quam dolores praesentium quae sapiente tenetur minima officia reprehenderit cupiditate minus ad animi, sit, cumque omnis earum totam sint maxime? Eveniet voluptatum officiis minus, debitis consectetur voluptas numquam animi magni sequi corporis ipsum odio voluptatibus nulla tempora, sunt aliquid? Ea qui recusandae eius nostrum dolorum saepe laboriosam dolorem molestiae, blanditiis expedita odit obcaecati, amet quia deserunt! Repellat at suscipit expedita vel nam, odit molestiae quo pariatur quod alias, explicabo quibusdam nostrum illo eum fugiat iusto corporis doloremque tempore! Eum molestias fuga dolor praesentium vitae, quaerat doloribus, aspernatur quas fugiat illo voluptate reiciendis amet aperiam ratione vero? A expedita, recusandae laboriosam deserunt aperiam nostrum, temporibus corrupti hic vero atque numquam nobis sed, magnam id ipsa quis animi quos pariatur alias quae! Accusamus labore non incidunt quasi debitis perspiciatis fugiat, excepturi exercitationem perferendis quas similique culpa impedit natus facilis hic dicta dolorum qui quis molestiae? Aperiam non delectus reprehenderit modi ipsa, necessitatibus fugit consequuntur maiores neque nihil velit provident, voluptates eius soluta accusamus ipsum harum id architecto sapiente, nemo ad rerum expedita? Quasi dolore dolores id omnis a.</p>
                </div> */}
        </Layout>
        </BgImage>
    );
   

}


export const query = graphql`
  query AboutBackground {
    background: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: NONE
          formats: [AUTO, WEBP]          
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