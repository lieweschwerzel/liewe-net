import React from 'react'
import { graphql } from "gatsby"
import * as styles from "../styles/about.module.css"
import Layout from '../components/Layout'
import Seo from "../components/Seo.js"
import { BgImage } from "gbimage-bridge"
import { getImage } from "gatsby-plugin-image"


export default function Home({ data })  {
    const pluginImage = getImage(data.background)

    return (
        <BgImage image={pluginImage} className="masthead">
        <Layout>
            <Seo title="About"/> 
            <div className={styles.test}>  
              <header>HEADER</header>     
              <main>About Me .... </main>
              <aside>SKILLS</aside>
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
  }
`