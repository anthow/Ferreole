import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Caracteristique = () => {                                                     
  const data = useStaticQuery(graphql`
 {
    datoCmsProjetDeFerriere {
      titreCaracteristique
      titreSectionUnCaracteristique
      titreSectionDeuxCaracteristique
      paragrapheUnSectionUnCaracteristique
      paragrapheUnSectionDeuxCaracteristiqueCopy1
      paragrapheDeuxSectionUnCaracteristique
      paragrapheDeuxSectionDeuxCaracteristique
      imageSectionUnCaracteristique {
        alt
        gatsbyImageData
      }
      imageSectionDeuxCaracteristique {
        alt
        gatsbyImageData
      }
    }
  }
  `)
  return   <>      <article className="flex flex-col space-y-20">
  <h2 className="text-center text-secondary-color text-4xl">
{data.datoCmsProjetDeFerriere.titreCaracteristique}  </h2>
  <section className="w-10/12 m-auto  flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
    <figure className="">
  
      <GatsbyImage image={data.datoCmsProjetDeFerriere.imageSectionUnCaracteristique.gatsbyImageData}
      alt={data.datoCmsProjetDeFerriere.imageSectionUnCaracteristique.alt}
      className="h-full"/>
    </figure>
    <div className=" ">
      <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.paragrapheUnSectionUnCaracteristique
          }}
        /> 
    </div>
    <div className="flex flex-col paragraphe space-y-5 col-span-2"          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.paragrapheUnSectionDeuxCaracteristiqueCopy1
          }}
        /> 
  </section>
</article>

<article className="flex flex-col space-y-20">

  <section className="w-10/12 m-auto flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
    <figure className="md:order-2">
    
      <GatsbyImage image={data.datoCmsProjetDeFerriere.imageSectionDeuxCaracteristique.gatsbyImageData}
      alt={data.datoCmsProjetDeFerriere.imageSectionDeuxCaracteristique.alt}
      className="h-full"/>
        
    </figure>
    <div className=" flex flex-col md:order-1 space-y-10">
      <h3 className="text-3xl font-bold text-secondary-color">{data.datoCmsProjetDeFerriere.titreSectionDeuxCaracteristique}</h3>
      <div className="flex flex-col paragraphe space-y-5"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.paragrapheDeuxSectionUnCaracteristique
          }}
        /> 
    </div>
    <div className=" col-span-2 md:order-3 paragraphef flex flex-col space-y-5">
    <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.paragrapheDeuxSectionDeuxCaracteristique
          }}
        /> 
    </div>
  </section>
</article>
</>
}

export default Caracteristique



