import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Presse = () => {
  const data = useStaticQuery(graphql`
    {
    datoCmsContact {
      titreDossierDePresse
      titreContactPresse
      texteDossierDePresse
      texteContactPresse
      imageContactPresse {
        alt
        gatsbyImageData
      }
      imageDossierPresse {
        alt
        gatsbyImageData
      }
    }
  }
  `)
  return     <>    <h2 className="text-4xl text-center"> Presse</h2>
    <article className="w-10/12 m-auto gap-x-20 gap-y-20 flex flex-col md:grid grid-cols-2 ">
  <figure className="">
      
      <GatsbyImage image={data.datoCmsContact.imageContactPresse.gatsbyImageData}
      alt={data.datoCmsContact.imageContactPresse.alt}
      />
    </figure>
    <section className="flex flex-col gap-y-5">
        <h3 className="text-3xl">{data.datoCmsContact.titreContactPresse}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContact.texteDossierDePressega
          }}
        />         <button className=" bg-gray-600 text-white p-2 w-max">
        {" "}
        Bouton{" "}
      </button>  
    </section>
    <figure className="order-1 md:order-2">
    <GatsbyImage image={data.datoCmsContact.imageDossierPresse.gatsbyImageData}
      alt={data.datoCmsContact.imageDossierPresse.alt}
      />
    </figure>
    <section className="flex flex-col gap-y-5 order-2 md:order-1">
        <h3 className="text-3xl">{data.datoCmsContact.titreDossierDePresse}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContact.texteDossierDePresse
          }}
        />          <button className=" bg-gray-600 text-white p-2 w-max">
        {" "}
        Bouton{" "}
      </button>  
    </section>
  </article>
  </>
}

export default Presse



