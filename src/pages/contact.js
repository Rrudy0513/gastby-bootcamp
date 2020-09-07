import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact Page </h1>
      <p>
        The best way to reach me is
        <Link to="https://twitter.com/@Rudy_webdesign" target="_blank">
          @Rudy_webdesign
        </Link>{" "}
        on Twitter
      </p>
    </Layout>
  )
}

export default ContactPage
