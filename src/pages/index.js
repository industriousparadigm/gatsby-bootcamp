import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>I'm Diogo, a humble boy living in somber but fun London.</h2>
      <p>
        Want to hear about life and things? <Link to="/contact">Tweet me</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage
