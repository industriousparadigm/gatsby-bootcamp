import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello.</h1>
      <h2>
        I'm Diogo, a full-stack developer living in somber but fun London.
      </h2>
      <p>
        Need a developer? <Link to="/contact">Contact me</Link>.
      </p>
    </Layout>
  )
}

export default IndexPage
