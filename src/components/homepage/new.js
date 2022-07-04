import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const News = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsActualite(limit: 4, sort: {fields: meta___firstPublishedAt, order: DESC}) {
        edges {
          node {
            slug
            texteArticle
            auteurEtDate
            titreDeLArticle
            chapeauArticle
        
            imageArticle {
              alt
              gatsbyImageData (height:285, layout: FIXED)
            }
          }
        }
      }
    }
  `)
  return <article className="  py-20 md:py-10 md:min-h-9/10 flex flex-col m-auto bg-white ">
  <h2 className="w-10/12 m-auto text-3xl text-secondary-color  font-black mb-5 md:mb-10"> Actualités </h2>
<section className="w-10/12 m-auto items-top flex flex-col gap-y-10 gap-x-10 md:grid grid-cols-2">
  
{   
    
    data.allDatoCmsActualite.edges.map(({ node }) => {
return(


  <div className="flex flex-col gap-y-5 ">
        <GatsbyImage image={node.imageArticle.gatsbyImageData} alt={node.imageArticle.alt} className="self-center" />

  <div>
    <h3 className="text-xl font-black text-primary-color ">{node.titreDeLArticle}</h3>
    <p className="mb-10 italic text-xs"> {node.auteurEtDate} </p>
    <div className="mb-2"
          dangerouslySetInnerHTML={{
            __html: node.chapeauArticle
          }}
        />
    <a className="italic text-xs font-bold text-secondary-color ">      <Link to={"actu/" + node.slug}>  
lire la suite...     </Link>
</a>
  </div>
</div>
)})}



</section>
</article>
}

export default News


