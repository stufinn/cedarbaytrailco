import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import TrailConditionsWidget from "../components/trailConditions/TrailConditionsWidget"

const trails = [
  {
    name: "Candy Land",
    status: "yellow",
    notes: "Some notes",
    updated: "November 16, 10:21pm",
  },
]

const TrailConditions = () => (
  <Layout>
    <SEO title="Trail Conditions" />
    <div className="">
      <h1>Trail Conditions</h1>
      <TrailConditionsWidget />

      <Link to="/" className="settings__mainButton success__button">
        Back to Home Page
      </Link>
    </div>
  </Layout>
)

export default TrailConditions
