import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const DevenirCooperateur = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageDAccueil {
        titreDevenezCooperateur
        texteDevenezCooperateur
        imageDevenezCooperateur {
          gatsbyImageData
          alt
        }
      }
    }
  `)
  return <article className="  py-20 md:py-0 md:min-h-9/10 flex flex-col m-auto bg-white ">
  <section className="w-10/12 gap-y-10 m-auto items-center flex flex-col gap-x-20 md:grid grid-cols-2">
    <figure className="m-auto order-2 md:order-2">
     
      <GatsbyImage image={data.datoCmsPageDAccueil.imageDevenezCooperateur.gatsbyImageData} />
    </figure>
    <div className=" flex flex-col gap-y-10 order-2 md:order-1">
      <h2 className="text-2xl md:text-3xl text-secondary-color  font-black ">
{data.datoCmsPageDAccueil.titreDevenezCooperateur}      </h2>
<div className="text-xl md:w-8/12"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageDAccueil.texteDevenezCooperateur
          }}
        />
                <Link to="/devenir-cooperateur">

      <button className="bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
      Devenir Coopérateur</button></Link>
    </div>

  </section>
</article>
}

export default DevenirCooperateur






