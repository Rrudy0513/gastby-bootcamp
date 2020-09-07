import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>Rodolfo Romero</h1>
      <p>I'm currently student to become a full-stack developer,</p>
      <p>
        <Link to="/contact">Want to work with me ? Reach out </Link>
      </p>
    </Layout>
  )
}

export default AboutPage
