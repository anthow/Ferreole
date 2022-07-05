import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Rescoop = () => {
  const data = useStaticQuery(graphql`
     {

    datoCmsPageFerreole {
      titreQuEstCeQuUneCooperativeAgree
      titreRescoopLaFederationDesCoopsDEnergie
      titreLaCharteEnergieCitoyenne
      texteLaCharteEnergieCitoyenne
      texteRescoopLaFederationDesCoopsDenergie
      texteQuEstCeQuUneCooprrativeAgree
      imageLaCharteEnergieCitoyenne {
        alt
        gatsbyImageData(width: 500, layout: CONSTRAINED)
      }
      imageQuEstCeQuUneCoopRativeAgrE {
        alt
        gatsbyImageData
      }
      imageRescoopLaFederationDesCoopsDenergie {
        alt
        gatsbyImageData
      }
    }
    datoCmsPageCharteEnergieCitoyenne {
      imageHeader {
        alt
        gatsbyImageData 
      }
      titreDeLaPage
      titrePrincipes
      textePrincipe
      titreConstat
      texteConstat
      titreVision
      texteVision
      titreMission
      texteMission
      titreEngagement
      texteEngagement
    }
  }

  `)
  return       <article id="rescoop" className="w-10/12 m-auto  flex flex-col gap-y-20 py-20 ">
  <h2 className="text-2xl md:text-3xl text-secondary-color  font-black  text-center">REScoop Wallonie</h2>
  <section className="flex flex-col gap-20 ">
<figure className="w-1/2 m-auto self-center">
  <GatsbyImage image={data.datoCmsPageFerreole.imageQuEstCeQuUneCoopRativeAgrE.gatsbyImageData}
  alt={data.datoCmsPageFerreole.imageQuEstCeQuUneCoopRativeAgrE.gatsbyImageData} className /></figure>
  <div className="flex flex-col gap-y-10">
      <h3 className="text-xl font-black text-primary-color">{data.datoCmsPageFerreole.titreQuEstCeQuUneCooperativeAgree}</h3>
      <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteQuEstCeQuUneCooprrativeAgree
          }}
        /> 
        <a href="http://www.rescoop-wallonie.be" target="_blank">
      <button className=" bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
    En savoir plus{" "}
  </button>
  </a>
  </div>
  </section>

  <section className="flex flex-col  ">
  <h3 className="text-2xl font-black text-primary-color">{data.datoCmsPageFerreole.titreLaCharteEnergieCitoyenne}</h3>

  <GatsbyImage      className="mb-10 w-1/2"
 image={data.datoCmsPageFerreole.imageLaCharteEnergieCitoyenne.gatsbyImageData}
  alt={data.datoCmsPageFerreole.imageLaCharteEnergieCitoyenne.gatsbyImageData} />
  <div className="flex flex-col gap-y-10 ">
      <section className="flex-flex-col gap-y-10">
          <h2 className="text-xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titrePrincipes}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.textePrincipe
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreConstat}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteConstat
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreVision}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteVision
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreMission}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteMission
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreEngagement}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteEngagement
          }}
        />
        </section>
  </div>
  </section>
</article>
}

export default Rescoop



