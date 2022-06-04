import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
  return     <>    <h2 className="text-2xl md:text-3xl text-secondary-color  font-black text-center"> Presse</h2>
    <article className="w-10/12 m-auto gap-x-20 gap-y-20 flex flex-col md:grid grid-cols-2 ">
  <figure className="">
      
      <GatsbyImage image={data.datoCmsContact.imageContactPresse.gatsbyImageData}
      alt={data.datoCmsContact.imageContactPresse.alt}
      />
    </figure>
    <section className="flex flex-col gap-y-5">
        <h3 className="text-xl font-black text-primary-color">{data.datoCmsContact.titreContactPresse}</h3>
        <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContact.texteContactPresse
          }}
        />         
    </section>
    <figure className="order-1 md:order-2">
    <GatsbyImage image={data.datoCmsContact.imageDossierPresse.gatsbyImageData}
      alt={data.datoCmsContact.imageDossierPresse.alt}
      />
    </figure>
    <section className="flex flex-col gap-y-5 order-2 md:order-1">
        <h3 className="text-xl font-black text-primary-color">{data.datoCmsContact.titreDossierDePresse}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContact.texteDossierDePresse
          }}
        />       
        <Link to="/info-presse">
           <button className=" bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
        {" "}
        Ensavoir plus{" "}
        
      </button>  
      </Link>
    </section>
  </article>
  </>
}

export default Presse



