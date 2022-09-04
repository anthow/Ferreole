import * as React from "react"
import Layout from "../components/layout"
import Home from "../components/homepage/home"
import DevenirCooperateur from "../components/homepage/devenirCooperateur"
import Cociter from "../components/homepage/cociter"
import Brochure from "../components/homepage/brochure"
import News from "../components/homepage/new"
import { SEO } from "../components/seo"

const IndexPage = () => {
  return (
    <Layout>

      <Home />
      <DevenirCooperateur />
      <Cociter />
      <Brochure />
      <News />

    </Layout>
  )
}

export default IndexPage
export const Head = () => (
  <SEO title=" Accueil Ferréole" />
  )