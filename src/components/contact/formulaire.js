import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Formulaire = () => {

  return          <article className=" w-10/12 md:w-6/12 flex flex-col m-auto gap-y-10">
  <h2 className="text-4xl text-center"> Formulaire de contact</h2>
  <form className="flex flex-col gap-y-5">
    <div className="flex flex-col gap-y-2" >
      {" "}
      <label> nom </label>
      <input type="text" className="w-max border"></input>
    </div>
    <div className="flex flex-col gap-y-2" >
      {" "}
      <label> adresse mail </label>
      <input type="mail" className=" w-max border"></input>
    </div>
    <div className="flex flex-col gap-y-2" >
      {" "}
      <label> message </label>
      <textarea className="w-full border" rows='10'></textarea>
    </div>
    <button className=" bg-gray-600 text-white p-2 w-max">
      {" "}
      Bouton{" "}
    </button>   
  </form>
</article>
}

export default Formulaire



