import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const HeaderPresse = () => {
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
      datoCmsContact {
      titreSectionUn
      sectionUn
      imageSectionUn {
        alt
        gatsbyImageData
      }
      texteSectionDeux
    }
    }
  `)
  return <>  <article className="w-10/12 m-auto">
  <figure className="m-auto">
  
    <GatsbyImage image={data.datoCmsPageFerreole.imageHeader.gatsbyImageData} 
    alt={data.datoCmsPageFerreole.imageHeader.alt}
    />
  </figure>
</article>
 <article className="py-20 w-10/12 m-auto flex items-center flex-col gap-y-10 md:grid grid-cols-2 gap-x-20">
 <figure className="">
    <GatsbyImage image={data.datoCmsContact.imageSectionUn.gatsbyImageData}
      alt={data.datoCmsContact.imageSectionUn.alt}
      />
      </figure>     
      <section className=" flex flex-col gap-y-10"> 
<h1 className="text-xl font-black text-primary-color">{data.datoCmsContact.titreSectionUn}</h1>
<div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContact.texteSectionDeux
          }}
        /> 
        <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContact.sectionUn
          }}
        /> 
</section>
 </article>
 </>


}

export default HeaderPresse



