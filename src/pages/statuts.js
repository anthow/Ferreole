import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { SEO } from "../components/seo"

const Statuts = ({ data }) =>
<Layout>

    <article className="w-10/12 m-auto flex flex-col gap-y-10">
    <h1 className="text-3xl text-secondary-color"> {data.datoCmsStatutsComplet.titreStatutsComplets}</h1>
    <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsStatutsComplet.texteStatutsComplet
          }}
        />
        </article>
</Layout>

export const query = graphql`
  {
    datoCmsStatutsComplet {
      texteStatutsComplet
      titreStatutsComplets
    }
  }
`

export default Statuts
export const Head = () => (
<SEO title=" statuts" />
  )
