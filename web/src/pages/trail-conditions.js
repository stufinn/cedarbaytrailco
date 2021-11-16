import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const TrailConditions = () => (
  <Layout>
    <SEO title="Trail Conditions" />
    <div className="">
      <h1>Trail Conditions</h1>

      <Link to="/" className="settings__mainButton success__button">
        Back to Home Page
      </Link>
    </div>
  </Layout>
)

export default TrailConditions
