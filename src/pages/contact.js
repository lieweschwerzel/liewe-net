import React from "react"
import * as styles from "../styles/contact.module.css"

export default function contact() {
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
        <p>
          <label for="name">Name</label>
          <input type="text" id="name" name="name" />
        </p>
        <p>
          <label for="email">Email</label>
          <input type="text" id="email" name="email" />
        </p>
        <p>
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}
