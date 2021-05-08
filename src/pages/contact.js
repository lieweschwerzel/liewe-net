import React from "react"
import Layout from "../components/Layout"

import * as styles from "../styles/contact.module.css"

export default function contact() {
  return (
    <Layout>
      <div>
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
              First Name <br />
              <input type="text" name="first-name" />
            </label>
          </div>

          <div>
            <label htmlFor="email">
              <br />
              Email
            </label>
            <input id="email" type="email" name="email" />
          </div>

          <div>
            <label>
              <br />
              Message <br />
              <textarea name="comments" cols="60" rows="10"></textarea>
            </label>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Layout>
  )
}
