import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageFerreole {
        imageHeader {
            gatsbyImageData(height: 1000, width: 3000) 
          alt
        }
        texteHeader
        titreHeader
      }
    }
  `)
  return <article>
  <figure className="m-auto  order-2 md:order-2">
  
    <GatsbyImage image={data.datoCmsPageFerreole.imageHeader.gatsbyImageData} 
    alt={data.datoCmsPageFerreole.imageHeader.alt}
    />
  </figure>
  <section id="quisommesnous" className="w-10/12 flex py-20 flex-col gap-y-10 m-auto">
    <h1 className="text-3xl text-secondary-color  font-black ">
      {" "}
      {data.datoCmsPageFerreole.titreHeader}
    </h1>
    <div className="paragraphe w-9/12 m-auto"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteHeader
          }}
        />
  </section>
</article>
}

export default Header



