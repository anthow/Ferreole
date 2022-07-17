import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    {
  datoCmsCociter {
    titreHeader
    imageHeader {
      gatsbyImageData
      alt
    }
  }
}
  `)
  return   <article  className=" bg-secondary-color items-center  py-32  flex flex-col m-auto  gap-y-10 ">
  <section className="w-10/12 m-auto items-center flex flex-col gap-x-20 gap-y-10 md:grid grid-cols-2">
    <figure className="m-auto order-1  ">
      <GatsbyImage image={data.datoCmsCociter.imageHeader.gatsbyImageData} alt={data.datoCmsCociter.imageHeader.alt} />
    </figure>
      <h2 className=" text-xl md:text-3xl order-2 text-white md:mt-10  font-black ">
        {data.datoCmsCociter.titreHeader}
      </h2>
  
  </section>
</article>
}

export default Header


