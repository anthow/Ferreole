import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    datoCmsContact {
      imageContact {
        alt
        gatsbyImageData
      }
      texteContact
    }
  }
  `)
  return         <article className="w-10/12 m-auto  flex flex-col gap-y-10 gap-x-20 md:grid grid-cols-2 ">
  <figure className="">

    <GatsbyImage image={data.datoCmsContact.imageContact.gatsbyImageData} 
    alt={data.datoCmsContact.imageContact.alt}
    /> 
  </figure>
  <section className="flex flex-col gap-y-5">
    <h1 className="text-2xl md:text-3xl text-secondary-color  font-black">Ferréole</h1>
    <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsContact.texteContact
          }}
        /> 
  </section>
</article>
}

export default Header



