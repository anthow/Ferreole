import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
      gatsbyImageData
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
}
  `)
  return       <article className="w-10/12 m-auto flex flex-col gap-y-20 py-20 ">
  <h2 className="text-2xl  text-center">REScoop Wallonie</h2>
  <section className="flex flex-col gap-20 md:grid grid-cols-2">

  <GatsbyImage image={data.datoCmsPageFerreole.imageQuEstCeQuUneCoopRativeAgrE.gatsbyImageData}
  alt={data.datoCmsPageFerreole.imageQuEstCeQuUneCoopRativeAgrE.gatsbyImageData} />
  <div className="flex flex-col gap-y-10">
      <h3 className="text-xl">{data.datoCmsPageFerreole.titreQuEstCeQuUneCooperativeAgree}</h3>
      <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteQuEstCeQuUneCooprrativeAgree
          }}
        /> 
      <button className=" bg-gray-600 text-white p-2 w-max">
    {" "}
    Bouton{" "}
  </button>
  </div>
  </section>

  <section className="flex flex-col gap-20 md:grid grid-cols-2">

  <GatsbyImage      className="md:order-2"
 image={data.datoCmsPageFerreole.imageLaCharteEnergieCitoyenne.gatsbyImageData}
  alt={data.datoCmsPageFerreole.imageLaCharteEnergieCitoyenne.gatsbyImageData} />
  <div className="flex flex-col gap-y-10 md:order-1">
      <h3 className="text-xl">{data.datoCmsPageFerreole.titreLaCharteEnergieCitoyenne}</h3>
      <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteLaCharteEnergieCitoyenne
          }}
        />       <button className=" bg-gray-600 text-white p-2 w-max">
    {" "}
    Bouton{" "}
  </button>
  </div>
  </section>
  <section className="flex flex-col gap-20 md:grid grid-cols-2">

    <GatsbyImage      className=""
 image={data.datoCmsPageFerreole.imageRescoopLaFederationDesCoopsDenergie.gatsbyImageData}
  alt={data.datoCmsPageFerreole.imageRescoopLaFederationDesCoopsDenergie.gatsbyImageData} />
  <div className="flex flex-col gap-y-10">
      <h3 className="text-xl">{data.datoCmsPageFerreole.titreRescoopLaFederationDesCoopsDEnergie} </h3>
      <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteRescoopLaFederationDesCoopsDenergie
          }}
        />       <button className=" bg-gray-600 text-white p-2 w-max">
    {" "}
    Bouton{" "}
  </button>
  </div>
  </section>
</article>
}

export default Rescoop



