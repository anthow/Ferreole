import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEnvelope,
    faPhone,
    faAddressBook,
    faAirFreshener,
    faAmbulance,
    faAtom,
    faBus,
    faCoins,
    faDice,
  } from '@fortawesome/free-solid-svg-icons'
  
const Equipe = () => {
  const data = useStaticQuery(graphql`
        {
      allDatoCmsEquipe {
        edges {
          node {
            adresseMail
            name
            telephone
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
  return    <> <h2 className=" mb-10 pt-10 w-10/12 m-auto  text-center text-3xl text-secondary-color  font-black   ">L'équipe </h2>

  <article className="w-10/12 m-auto pb-10 flex flex-col md:grid grid-cols-3 gap-20 ">
  {   
    
    data.allDatoCmsEquipe.edges.map(({ node }) => {
return(
    <section className="flex items-center flex-col gap-y-5">

      <GatsbyImage image={node.image.gatsbyImageData} alt={node.image.alt} className="rounded-full" />
      <h3 className="text-xl ">{node.name} </h3>
      <h4 className="text-lg">{node.fonction}</h4>
      <div className="flex flex-row gap-x-4">
     <a target="_blank" href={`mailto:${node.adresseMail}`}>
     <FontAwesomeIcon icon={faEnvelope} size="1x" />        </a>
        <a href={`tel:${node.telephone}`}>
        <FontAwesomeIcon icon={faPhone} size="1x" />        </a>
      </div>
    </section>)})}
</article>
</>
}

export default Equipe



