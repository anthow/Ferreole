import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
  
const Equipe = () => {
  const data = useStaticQuery(graphql`
        {
      allDatoCmsEquipe (sort: { order: ASC, fields: id }) {
        edges {
          node {
            name
            fonction
            image {
              alt
              gatsbyImageData(height: 150, width: 150)
            }
          }
        }
      }
    }
  `)
  return    <> <h2 id="equipe" className=" mb-10 pt-10 w-10/12 m-auto  text-center text-3xl text-secondary-color  font-black   ">L'équipe </h2>

  <article className="w-10/12 m-auto pb-10 flex flex-col md:grid grid-cols-3 gap-20 ">
  {   
    
    data.allDatoCmsEquipe.edges.map(({ node }) => {
return(
    <section className="flex items-center flex-col gap-y-5">

      <GatsbyImage image={node.image.gatsbyImageData} alt={node.image.alt} className="rounded-full" />
      <h3 className="text-xl font-black text-primary-color ">{node.name} </h3>
      <h4 className="text-lg">{node.fonction}</h4>
      <div className="flex flex-row gap-x-4">
      </div>
    </section>)})}
</article>
</>
}

export default Equipe



