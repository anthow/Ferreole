import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Information = () => {
  const data = useStaticQuery(graphql`
   {
    datoCmsDevenezCooperateur {
      titreInformationPratiqueSectionUn
      titreInformationPratiqueSectionDeux
      paragrapheUnInformationPratiqueSectionUn
      paragrapheUnInformationPratiqueSectionDeux
      paragrapheDeuxInformationPratiqueSectionUn
      paragrapheDeuxInformationPratiqueSectionDeux
      imageInformationPratiqueSectionUn {
        alt
        gatsbyImageData
      }
      imageInformationPratiqueSectionDeux {
        alt
        gatsbyImageData
      }
    }
  }
  `)
  return        <article className="flex w-10/12 m-auto flex-col space-y-20">
  <h2 className="text-center text-4xl">information Pratiques </h2>
  <section className="flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
    <figure className="">
    
      <GatsbyImage image={data.datoCmsDevenezCooperateur.imageInformationPratiqueSectionUn.gatsbyImageData}
       alt={data.datoCmsDevenezCooperateur.imageInformationPratiqueSectionUn.alt}
      />
    </figure>
    <div className="flex flex-col gap-y-5">
      <h3 className="text-3xl"> {data.datoCmsDevenezCooperateur.titreInformationPratiqueSectionUn} </h3>
      <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsDevenezCooperateur.paragrapheUnInformationPratiqueSectionUn
          }}
        /> 
    </div>

    <div className="col-span-2"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsDevenezCooperateur.paragrapheDeuxInformationPratiqueSectionUn
          }}
        /> 
  </section>
  <section className="flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
    <figure className="order-1 md:order-2">
    <GatsbyImage image={data.datoCmsDevenezCooperateur.imageInformationPratiqueSectionDeux.gatsbyImageData}
       alt={data.datoCmsDevenezCooperateur.imageInformationPratiqueSectionDeux.alt}
      />
    </figure>
    <div className="flex order-2 md:order-1 flex-col gap-y-5">
      <h3 className="text-3xl">{data.datoCmsDevenezCooperateur.titreInformationPratiqueSectionDeux} </h3>
      <div className="col-span-2"
          dangerouslySetInnerHTML={{
            __html: 
            data.datoCmsDevenezCooperateur.paragrapheUnInformationPratiqueSectionDeux
          }}
        /> 
    </div>
    <div className="order-3 col-span-2"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsDevenezCooperateur.paragrapheDeuxInformationPratiqueSectionDeux
          }}
        /> 
  </section>
</article>
}

export default Information



