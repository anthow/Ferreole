import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsPageDAccueil {
        imagHautDePage {
          alt
          gatsbyImageData
        }
        titreQuiSommesNous
        texteQuiSommesNous
      }
    }
  `)
  return <article className=" py-20 md:min-h-9/10 flex flex-col m-auto bg-primary-color ">
   
  <section className="w-10/12 m-auto items-center flex flex-col gap-y-10 gap-x-20 md:grid grid-cols-2">
  <figure className="m-auto ">

    <GatsbyImage image={data.datoCmsPageDAccueil.imagHautDePage.gatsbyImageData} alt={data.datoCmsPageDAccueil.imagHautDePage.alt} />
  </figure>
    <div className="flex text-white flex-col gap-y-10    ">
    <h1 className="text-6xl font-black ">{data.datoCmsPageDAccueil.titreQuiSommesNous}</h1>
  
    <div className="text-lg"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageDAccueil.texteQuiSommesNous
          }}
        />
    <button className="bg-white text-primary-color py-2 px-5 w-max text-xl font-black rounded">Découvrir Ferréole</button>
    </div>
  
 
  </section>

     </article>
}

export default Home




