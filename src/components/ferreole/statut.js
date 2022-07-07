import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Statut = () => {
  const data = useStaticQuery(graphql`
      {
    datoCmsPageFerreole {
      texteStatut
      introductionStatut
      titreStatuts
      imageStatut {
        alt
        gatsbyImageData ( width:1000 layout: CONSTRAINED)

      }
    }
  }
  `)
  return    <>  <article id="statuts" className="py-20 text-white bg-primary-color">
  <section className="w-10/12 mb-20 m-auto flex flex-col md:grid gap-20 grid-cols-2">
  
    <GatsbyImage image={data.datoCmsPageFerreole.imageStatut.gatsbyImageData} />
    <div className="flex flex-col gap-y-10">
      <h2 className="text-2xl  text-white ">{data.datoCmsPageFerreole.titreStatuts} </h2>
      
      <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.introductionStatut
          }}
        />
    </div>
  </section>
  <section className="flex flex-col gap-y-10 w-10/12 m-auto ">
  <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteStatut
          }}
        />    <Link to="/statuts">
    <button className=" bg-white text-primary-color py-2 px-5 md:w-max text-xl font-black rounded">
    Statuts complets  2012 + modifications 2019
    </button>
    </Link>
  </section>
</article>
</>
}

export default Statut



