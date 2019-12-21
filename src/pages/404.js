import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Into the wild" />
      <h1>Page not found</h1>
      <p>
        <Link to="/">Start over</Link>
      </p>
    </Layout>
  )
}

export default NotFound
