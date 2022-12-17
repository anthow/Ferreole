import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Home from "../components/homepage/home"
import DevenirCooperateur from "../components/homepage/devenirCooperateur"
import Cociter from "../components/homepage/cociter"
import Brochure from "../components/homepage/brochure"
import News from "../components/homepage/new"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (<>

<Seo title= "Accueil"
description = {data.datoCmsSite.globalSeo.fallbackSeo.description}
/>


    <Layout>

      <Home />
      <DevenirCooperateur />
      <Cociter />
      <Brochure />
      <News />

    </Layout>
    </>
  )
}
export const query = graphql`
{
  datoCmsSite {
    globalSeo {
      siteName
      titleSuffix
      twitterAccount
      facebookPageUrl
      fallbackSeo {
        description
        title
        twitterCard
      }
    }
  }
}
`
export default IndexPage
