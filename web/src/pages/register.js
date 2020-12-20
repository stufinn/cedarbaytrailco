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

const Register = ({ data }) => {
  const { logo } = data
  const { waiverBackground } = data
  return (
    <Layout>
      <SEO title="Waiver" />
      {/* <div className=" h-screen"> */}
      <BckgdImage
        className=" h-screen my-20 flex flex-col row-gap-10 items-center justify-center text-white"
        fluid={waiverBackground.childImageSharp.fluid}
      >
        <WaiverBox>Sign a Waiver</WaiverBox>
      </BckgdImage>
      {/* </div> */}
      <WaiverBox>
      <p>Welcome to the 2020-21 Fatbike season!  Registration is now open.</p>

<p>Our membership fees are as follows:<br/>
Single Fatbike                   $75.00<br/>
Family Fatbike                 $120.00<br/>
Single Snowshoe User      $20.00 <br/>
Snowshoe Family              $40.00</p>

<p>Registering for the season is a simple two step process.</p>
 1/  E-Transfer the annual fee to cedarbaytrailcompany@gmail.com
 2/  Sign the release at waiversign.   When completing the waiver you must tap on the "Initial" or "signature"  boxes to auto populate these areas. 
        <div>
          <ButtonLink
            href="https://app.waiversign.com/e/5f995bf516eb010019446497/doc/5f99742ad56fea00190cafa3?event=none"
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

export default Register