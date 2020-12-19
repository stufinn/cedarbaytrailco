import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Layout from "../components/layout"
import BckgdImage from "../components/backgroundImage"
import ButtonLink from "../components/ButtonLink"

const IndexPage = ({ data }) => {
  const { logo } = data
  return (
    <Layout>
      <SEO title="Home" />
      <BckgdImage className="h-screen flex flex-col row-gap-4 items-center justify-center text-white">
        <div className="w-3/4 md:w-1/2 lg:w-1/3 ">
          <Img fluid={logo.childImageSharp.fluid} className=" w-full" />
        </div>
        <div className="mt-10">
          <ButtonLink to="/waiver" className="font-bold" text="Sign a Waiver" />
        </div>
      </BckgdImage>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    logo: file(relativePath: { eq: "CBTCo_wh.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
