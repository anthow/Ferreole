import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image";

const Projets = () => {
  const data = useStaticQuery(graphql`
      {
      datoCmsPageFerreole {
        imageProjetDeFerriRes {
          alt
          gatsbyImageData(height: 300, width: 400)
        }
        imageVentsDAutelbas {
          alt
          gatsbyImageData(height: 300, width: 400)
        }
        imageAutresProjets {
          alt
          gatsbyImageData(height: 300, width: 400)
        }
        titreProjetDeFerrieres
        titreVentsDAutelbas
        titresAutresProjets
        texteDeProjetDeFerriere
        texteVentsDAutelbas
        texteAutresProjets
      }
    }
  `)
  return   <> 
  <h2 className="text-2xl md:text-3xl font-black mb-10 pt-10 w-10/12 m-auto text-3xl text-secondary-color  font-black   ">Nos projets </h2>
  <article className="w-10/12 m-auto pb-10 flex flex-col md:grid grid-cols-2 gap-20 ">
    <section className="flex flex-col gap-y-5">
   
      <GatsbyImage image={data.datoCmsPageFerreole.imageProjetDeFerriRes.gatsbyImageData}
      alt={data.datoCmsPageFerreole.imageProjetDeFerriRes.alt}
      />
      <h3 className="text-xl font-black text-primary-color ">{data.datoCmsPageFerreole.titreProjetDeFerrieres}</h3>
   
      <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteDeProjetDeFerriere
          }}
        />
      
      <button className=" hover:opacity-70 bg-secondary-color w-max p-2 rounded font-black text-white">
        {" "}
        En savoir plus{" "}
      </button>
    </section>
    <section className="flex flex-col gap-y-5">
   
   <GatsbyImage image={data.datoCmsPageFerreole.imageVentsDAutelbas.gatsbyImageData}
   alt={data.datoCmsPageFerreole.imageVentsDAutelbas.alt}
   />
   <h3 className="text-xl font-black text-primary-color ">{data.datoCmsPageFerreole.titreVentsDAutelbas}</h3>

   <div className=""
       dangerouslySetInnerHTML={{
         __html: data.datoCmsPageFerreole.texteVentsDAutelbas
       }}
     />
   
 </section>
 <section className="col-span-2 flex flex-col md:grid gap-x-20 grid-cols-2 gap-y-5">
   
   <GatsbyImage image={data.datoCmsPageFerreole.imageAutresProjets.gatsbyImageData}
   alt={data.datoCmsPageFerreole.imageAutresProjets.alt}
   />
   <div className="flex flex-col gap-y-5">
   <h3 className="text-xl font-black text-primary-color ">{data.datoCmsPageFerreole.titresAutresProjets}</h3>

   <div className="paragraphe"
       dangerouslySetInnerHTML={{
         __html: data.datoCmsPageFerreole.texteAutresProjets
       }}
     />
</div>
 </section>
   
  </article>
  </>
}

export default Projets



