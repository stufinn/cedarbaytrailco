import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Layout from "../components/layout"
import BckgdImage from "../components/backgroundImage"
import ButtonLink from "../components/ButtonLink"

const WaiverBox = ({ children, className }) => {
  return (
    <div
      className={`grid items-center row-gap-5 text-4xl w-1/2 text-center  tracking-wide font-bold bg-black bg-opacity-50 rounded-md p-5 ${className}`}
    >
      {children}
    </div>
  )
}

const WaiverPage = ({ data }) => {
  const { logo } = data
  const { waiverBackground } = data
  return (
    <Layout>
      <SEO title="Waiver" />
      <BckgdImage
        className="flex flex-col row-gap-10 items-center justify-center text-white"
        fluid={waiverBackground.childImageSharp.fluid}
      >
        <WaiverBox>
          Before you can rock those trails, you'll need to sign and submit a
          waiver online.
          <div>
            <ButtonLink
              href="https://www.google.ca"
              text="Online Waiver"
              className=""
            />
          </div>
        </WaiverBox>
        <WaiverBox>
          Or download, sign, scan and send to waiver@example.com
          <div>
            <ButtonLink href="#" text="Download Form" />
          </div>
        </WaiverBox>
      </BckgdImage>
    </Layout>
  )
}

export const query = graphql`
  query WaiverQuery {
    logo: file(relativePath: { eq: "CBTCo_wh.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    waiverBackground: file(
      relativePath: { eq: "tim-foster-N7e4-ssLi9k-unsplash.jpg" }
    ) {
      id
      childImageSharp {
        fluid(maxWidth: 1800) {
          src
        }
      }
    }
  }
`

export default WaiverPage
