import React from "react"
import BlockContentPrimary from "../components/block content/blockContentPrimary"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const CustomPageTemplate = ({ data }) => {
  const { title, _rawMainContent: rawMainContent } = data.sanityCustomPage

  return (
    <Layout>
      This is a custom page! The title is: {title}
      <section className="mt-10 w-full">
        <BlockContentPrimary blockData={rawMainContent} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query sanityCustomPageQuery($slug: String!) {
    sanityCustomPage(slug: { current: { eq: $slug } }) {
      id
      title
      _rawMainContent(resolveReferences: { maxDepth: 10 })
    }
  }
`

export default CustomPageTemplate
