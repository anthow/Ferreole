import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    datoCmsProjetDeFerriere {
      titreHeader
      texteHeader
      imageHeader {
        gatsbyImageData
        alt
      }
    }
  }
  `)
  return        <article 
  className=" ferriere py-20 md:py-40 text-white">
  <section className=" w-10/12 m-auto  ">
    <div className="md:w-6/12 flex flex-col p-2 bg-primary-color opacity-80  gap-y-5 ">
      <h1 className="text-5xl">{data.datoCmsProjetDeFerriere.titreHeader}</h1>
      <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.texteHeader
          }}
        /> 
    </div>
  </section>
</article>
}

export default Header



