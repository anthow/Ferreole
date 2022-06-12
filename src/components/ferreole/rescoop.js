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
  return       <article id="rescoop" className="w-10/12 m-auto  flex flex-col gap-y-20 py-20 ">
  <h2 className="text-2xl md:text-3xl text-secondary-color  font-black  text-center">REScoop Wallonie</h2>
  <section className="flex flex-col gap-20 md:grid grid-cols-2">

  <GatsbyImage image={data.datoCmsPageFerreole.imageQuEstCeQuUneCoopRativeAgrE.gatsbyImageData}
  alt={data.datoCmsPageFerreole.imageQuEstCeQuUneCoopRativeAgrE.gatsbyImageData} />
  <div className="flex flex-col gap-y-10">
      <h3 className="text-xl font-black text-primary-color">{data.datoCmsPageFerreole.titreQuEstCeQuUneCooperativeAgree}</h3>
      <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteQuEstCeQuUneCooprrativeAgree
          }}
        /> 
      <button className=" bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
    {" "}
    En savoir plus{" "}
  </button>
  </div>
  </section>

  <section className="flex flex-col gap-20 md:grid grid-cols-2">

  <GatsbyImage      className="md:order-2"
 image={data.datoCmsPageFerreole.imageLaCharteEnergieCitoyenne.gatsbyImageData}
  alt={data.datoCmsPageFerreole.imageLaCharteEnergieCitoyenne.gatsbyImageData} />
  <div className="flex flex-col gap-y-10 md:order-1">
      <h3 className="text-xl font-black text-primary-color">{data.datoCmsPageFerreole.titreLaCharteEnergieCitoyenne}</h3>
      <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteLaCharteEnergieCitoyenne
          }}
        />     
        <Link to="../charte">
          <button className=" bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
    {" "}
    En savoir plus{" "}
  </button>
  </Link>
  </div>
  </section>
</article>
}

export default Rescoop



