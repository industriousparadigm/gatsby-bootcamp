import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <p>I am a developer working at The Stylist.</p>
      <p>
        <Link to="/contact">Want to chat with me? Reach out.</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
