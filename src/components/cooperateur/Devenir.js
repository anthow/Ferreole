import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Devenir = () => {
  const data = useStaticQuery(graphql`
 {
    datoCmsDevenezCooperateur {
      titreCooperateur
      texteCommentDevenirCooperateur
      imageCommentDevenirCooperateur {
        alt
        gatsbyImageData
      }
    }
  }
  `)
  return              <article className="flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10 w-10/12 m-auto">
  <figure className="order-1 md:order-2">

    <GatsbyImage image={data.datoCmsDevenezCooperateur.imageCommentDevenirCooperateur.gatsbyImageData} 
    alt={data.datoCmsDevenezCooperateur.imageCommentDevenirCooperateur.alt} />
  </figure>
  <section className="order-2 md:order-1 flex flex-col space-y-5">
    <h2 className="text-4xl">
      {" "}
{data.datoCmsDevenezCooperateur.titreCooperateur}    </h2>
<div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsDevenezCooperateur.texteCommentDevenirCooperateur
          }}
        /> 
        <Link to="../comment-devenir-cooperateur">
    <button className=" bg-gray-600 text-white p-2 w-max">
      {" "}
      voir les informations complètes{" "}
    </button>
    </Link>
  </section>
</article>
}

export default Devenir



