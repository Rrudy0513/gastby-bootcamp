import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../style/index.scss"
const HomePage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <span>I'm Rodolfo a full-stack developer living in Sunny Florida</span>
      <br />
      <span>
        Need a Full-Stack Developer <Link to="/contact">Contact me</Link>
      </span>
    </Layout>
  )
}

export default HomePage
