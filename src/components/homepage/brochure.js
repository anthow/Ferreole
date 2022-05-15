import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"

const Brochure = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageDAccueil {
        imageBrochure {
          alt
          gatsbyImageData
        }
        titreBrochure
        texteBrochure
      }
    }
  `)
  return     <article className="  py-20 md:py-0 md:min-h-9/10 flex flex-col m-auto bg-white ">
  <section className="w-10/12 m-auto items-center flex flex-col gap-x-4 md:grid grid-cols-2">
    <figure className="m-auto order-2 md:order-2">
  
            <GatsbyImage image={data.datoCmsPageDAccueil.imageBrochure.gatsbyImageData} alt={data.datoCmsPageDAccueil.imageBrochure.alt} />

    </figure>
    <div className="order-2  flex flex-col space-y-10 md:order-1">
      <h2 className="text-3xl text-secondary-color  font-black ">
      {data.datoCmsPageDAccueil.titreBrochure}
      </h2>
      <div className="text-lg"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageDAccueil.texteBrochure
          }}
        />
        <a href="https://www.rescoop-wallonie.be/wp-content/uploads/2020/07/eolien-rumeurs-et-realites.pdf"  rel="noreferrer" target="_blank" >
      <button className="bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
      Découvrir la brochure</button></a>
    </div>
  </section>
</article>
}

export default Brochure




