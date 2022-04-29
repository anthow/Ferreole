import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Cociter = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageDAccueil {
        texteCociter
        titreCociter
        imageCociter {
          alt
          gatsbyImageData
        }
      }
    }
  `)
  return   <article  className=" bg-secondary-color  py-20  md:min-h-9/10 flex flex-col m-auto  gap-y-10 ">
  <section className="w-10/12 m-auto items-center flex flex-col gap-x-20 gap-y-10 md:grid grid-cols-2">
    <figure className="m-auto order-1 md:order-2 ">
      <GatsbyImage image={data.datoCmsPageDAccueil.imageCociter.gatsbyImageData} alt={data.datoCmsPageDAccueil.imageCociter.alt} />
    </figure>
    <div className=" bg-white w-10/12 md:w-12/12 p-4 md:p-20 order-2 md:order-1 flex flex-col gap-y-10 items-center md:order-1">
      <h2 className="text-3xl text-secondary-color  font-black ">
        {data.datoCmsPageDAccueil.titreCociter}
      </h2>
     
      <div className="text-lg"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageDAccueil.texteCociter
          }}
        />
      <button className="bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
      Découvrir Cociter</button>
    </div>
  </section>
</article>
}

export default Cociter


