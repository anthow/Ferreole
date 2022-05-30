import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(graphql`
  {
    datoCmsDevenezCooperateur {
      titreHeader
      texteHeader
    }
  }
  `)
  return        <article className="cooperateur py-20 md:py-40 text-white">
  <section className=" w-10/12 md:grid grid-cols-2 m-auto ">
    <div className="col-span-1"></div>
    <div className=" flex flex-col gap-y-5 bg-primary-color py-4 px-4 opacity-90">
      <h1 className="text-4xl">{data.datoCmsDevenezCooperateur.titreHeader} </h1>
      <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsDevenezCooperateur.texteHeader
          }}
        /> 
    </div>
  </section>
</article>
}

export default Header



