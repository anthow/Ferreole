import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const News = () => {
  const data = useStaticQuery(graphql`
    {
      allDatoCmsActualite {
        edges {
          node {
            slug
            texteArticle
            titreDeLArticle
            chapeauArticle
            auteur {
              name
            }
            imageArticle {
              alt
              gatsbyImageData
            }
            meta {
              publishedAt(formatString: "DD/MM/YYYY")
            }
          }
        }
      }
    }
  `)
  return <article className="  py-20 md:py-10 md:min-h-9/10 flex flex-col m-auto bg-white ">
  <h2 className="w-10/12 m-auto text-3xl text-secondary-color  font-black mb-5 md:mb-10"> Nos dernières informations </h2>
<section className="w-10/12 m-auto items-top flex flex-col gap-y-10 gap-x-10 md:grid grid-cols-2">
  
{   
    
    data.allDatoCmsActualite.edges.map(({ node }) => {
return(


  <div className="flex flex-col gap-y-5">
        <GatsbyImage image={node.imageArticle.gatsbyImageData} alt={node.imageArticle.alt} />

  <div>
    <h3 className="text-xl font-black text-primary-color ">{node.titreDeLArticle}</h3>
    <p className="mb-10 italic text-xs"> articlé régider par {node.auteur.name} le {node.meta.publishedAt}</p>
    <p className="mb-2">
      Lorem Ipsum Generator Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
    </p>
    <div className="mb-2"
          dangerouslySetInnerHTML={{
            __html: node.chapeauArticle
          }}
        />
    <a className="italic text-xs font-bold text-secondary-color ">      <Link to={"blog/" + node.slug}>  
lire la suite...     </Link>
</a>
  </div>
</div>
)})}



</section>
</article>
}

export default News


