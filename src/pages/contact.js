import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>
        Find me musing around on the twitter{" "}
        <a
          href="https://twitter.com/@diogocosta_eu"
          target="_blank"
          rel="noopener noreferrer"
        >
          @diogocosta_eu
        </a>{" "}
      </p>
    </Layout>
  )
}

export default ContactPage
