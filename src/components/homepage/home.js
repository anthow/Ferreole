import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby"
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
  return <article className=" py-20  flex flex-col m-auto bg-primary-color ">
   
  <section className="w-10/12 m-auto items-center flex flex-col gap-y-10 gap-x-20 md:grid grid-cols-2">
  <figure className="m-auto w- ">

    <GatsbyImage image={data.datoCmsPageDAccueil.imagHautDePage.gatsbyImageData} alt={data.datoCmsPageDAccueil.imagHautDePage.alt} />
  </figure>
    <div className="flex text-white flex-col gap-y-10    ">
    <h1 className="text-6xl font-black ">{data.datoCmsPageDAccueil.titreQuiSommesNous}</h1>
  
    <div className="text-xl font-black"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageDAccueil.texteQuiSommesNous
          }}
        />
        <div className="flex flex-col md:flex-row gap-x-10 gap-y-10">
        <Link to="/ferreole">
    <button className="bg-white text-primary-color hover:opacity-90 py-2 px-5 w-max text-xl font-black rounded">Découvrir Ferréole</button>
    </Link>
    <a href="https://www.cociter.be/" target="_blank" rel="noreferrer" >
    <button className="bg-white text-primary-color hover:opacity-90 py-2 px-5 w-max text-xl font-black rounded">Découvrir Cociter</button>
    </a>
    </div>

    </div>
  
 
  </section>

     </article>
}

export default Home




