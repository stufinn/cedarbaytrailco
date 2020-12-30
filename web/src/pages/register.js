import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import ButtonLink from "../components/ButtonLink"

const linkStyle = "hover:text-yellow-500"

const H3 = ({ children, className }) => (
  <h3 className={`font-semibold mb-5 text-5xl text-center  ${className}`}>
    {children}
  </h3>
)

const Li = ({ children, className = "grid" }) => (
  <li className={`mt-2 mb-5 ${className}`}>{children}</li>
)

const ExternalLink = ({
  children = "EXTERNAL LINK TEXT",
  href = "#",
  className = "",
}) => (
  <a
    href={`${href}`}
    target="_blank"
    rel="noopener noreferrer"
    className={` underline hover:font-bold ${linkStyle} ${className}`}
  >
    {children}
  </a>
)

const Emph = ({ children, className = "" }) => (
  <div className={`font-bold mb-2 ${className}   mt-10 text-4xl p-3`}>
    {children}
    <div className="border-b-2 mt-1 w-full max-w-xl"></div>
  </div>
)

const PageSection = ({ children, className = "" }) => (
  <div className={` ${className}`}>
    <div className={`flex mx-10  lg:mx-32 justify-center`}>
      <div className="">{children}</div>
    </div>
  </div>
)

const IndentedItem = ({ children }) => <div className="ml-5">{children}</div>

const Register = ({ data }) => {
  const { logo } = data
  const { waiverBackground } = data
  return (
    <Layout>
      <div>
        <SEO title="Registration" />
        {/* <div className=" h-screen"> */}
        <BackgroundImage
          className="flex flex-col items-center justify-center text-white h-400px relative"
          fluid={waiverBackground.childImageSharp.fluid}
        >
          <h1 className="leading-none mt-20  font-semibold text-center mx-3">
            Register for Cedar Bay Trail Co.
          </h1>
        </BackgroundImage>
        {/* Main Content */}
        <div className="grid py-20">
          {/* Inner, "floating" container */}
          {/* <div className="m-20 lg:w-1/2 justify-self-center"> */}
          <PageSection className="mb-20">
            <h2 className="text-5xl text-center font-semibold">
              Welcome to the 2020-2021 Fatbike &amp; Snowshoe season!
            </h2>
            <h2 className="text-5xl text-center font-semibold pt-5">
              Registration is now open.
            </h2>
          </PageSection>
          <PageSection className="text-3xl bg-gray-500 text-white py-10">
            <div className="mt-5">
              <H3>Our 2020-2021 membership fees are as&nbsp;follows:</H3>
              <ul className="list-disc ml-16">
                <Li>Single Fatbike - $75.00</Li>
                <Li>Family Fatbike - $120.00</Li>
                <Li>Single Snowshoe User - $20.00</Li>
                <Li>Snowshoe Family - $40.00</Li>
              </ul>
            </div>
          </PageSection>
          <PageSection className="text-3xl py-10 ">
            <H3>Registering for the season is a simple two step process.</H3>
            <ol className="">
              <Li>
                <Emph>Step&nbsp;1</Emph>{" "}
                <IndentedItem>
                  E-Transfer the annual fee to{" "}
                  <ExternalLink href="mailto:cedarbaytrailcompany@gmail.com">
                    {/* Hidden space allows for line breaking of email address on smaller screens */}
                    <span className="">
                      cedarbaytrailcompany<span className="lg:hidden"> </span>
                      @gmail.com
                    </span>
                  </ExternalLink>
                </IndentedItem>
              </Li>
              <Li>
                <Emph>Step 2:</Emph>
                <IndentedItem>
                  Sign the release{" "}
                  <ExternalLink href="https://app.waiversign.com/e/5f995bf516eb010019446497/doc/5f99742ad56fea00190cafa3?event=none">
                    over at waiversign
                  </ExternalLink>
                  .<span className="text-red-600">*</span> <br />
                  <div className="ml-2 font-bold my-5">or</div>
                  <ExternalLink href="#">
                    Download and print the waiver form
                  </ExternalLink>
                  , sign it, scan it and send it to{" "}
                  <ExternalLink href="mailto:cedarbaytrailcompany@gmail.com">
                    {/* Hidden space allows for line breaking of email address on smaller screens */}
                    <span className="">
                      cedarbaytrailcompany<span className="lg:hidden"> </span>
                      @gmail.com
                    </span>
                  </ExternalLink>
                </IndentedItem>
                <div className="mt-12 text-2xl">
                  <span className="text-red-600 ">*</span>
                  <span className="italic">
                    When completing the online waiver you must tap on the
                    "Initial" or "Signature" boxes to auto populate these areas.
                  </span>
                </div>
              </Li>
              <Li>
                <Emph>Step 3 </Emph>{" "}
                <IndentedItem>
                  <p>Ok we lied, there's one more step:</p>
                  <p className="mt-10 ">
                    <span className="italic">Go hit those trails!</span> 🚲 ❄
                  </p>
                </IndentedItem>
              </Li>
            </ol>
          </PageSection>
          {/* <div>
              <ButtonLink
                href="https://app.waiversign.com/e/5f995bf516eb010019446497/doc/5f99742ad56fea00190cafa3?event=none"
                text="Online Waiver"
                className=""
              />
            </div> */}
          {/* </div> */}
        </div>
      </div>
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
