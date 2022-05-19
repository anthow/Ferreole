import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image"

const Savoir = () => {
  const data = useStaticQuery(graphql`
 {
      datoCmsProjetDeFerriere {
        titreEtudeDIncidence
        titreSectionDeux
        texteSectionDeux
        texteImageDIncidence
        imageEtudeDIncidence {
            gatsbyImageData( height: 250)
          alt
        }
        imageSectionDeux {
          alt
          gatsbyImageData( height: 250)
        }
      }
    }
  `)
  return     <>   <article className="flex flex-col space-y-20">
  <h2 className="text-center text-secondary-color text-4xl">
    Vous souhaitez en savoir plus ?
  </h2>
  <section className="flex w-10/12 m-auto flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
    <div className="flex flex-col gap-y-5 ">
      <figure className="">

        <GatsbyImage           className="mb-5 max-h-96"
 image={data.datoCmsProjetDeFerriere.imageEtudeDIncidence.gatsbyImageData}
        alt={data.datoCmsProjetDeFerriere.imageEtudeDIncidence.data} />
      </figure>
      <h3 className="text-3xl text-primary-color">{data.datoCmsProjetDeFerriere.titreEtudeDIncidence}</h3>
     <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.texteImageDIncidence
          }}
        /> 
      <button className=" hover:opacity-70 bg-secondary-color w-max p-2 rounded font-black text-white">
    {" "}
    Bouton{" "}
  </button>
    </div>
    <div className="flex flex-col gap-y-5 ">
      <figure className="">
      <GatsbyImage           className="mb-5 max-h-96"
 image={data.datoCmsProjetDeFerriere.imageSectionDeux.gatsbyImageData}
        alt={data.datoCmsProjetDeFerriere.imageSectionDeux.data} />
      </figure>
      <h3 className="text-3xl text-primary-color">{data.datoCmsProjetDeFerriere.titreSectionDeux}</h3>
      <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.texteSectionDeux
          }}
        /> 
      <button className=" hover:opacity-70 bg-secondary-color w-max p-2 rounded font-black text-white">
    {" "}
    Bouton{" "}
  </button>
    </div>
  </section>
</article>
<section></section>
</>
}

export default Savoir



