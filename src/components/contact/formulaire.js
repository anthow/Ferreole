import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

const Formulaire = () => {
  return (
    <article
      id="contact"
      className=" w-10/12 md:w-6/12 flex flex-col m-auto gap-y-10"
    >
      <h2 className="text-2xl md:text-3xl text-secondary-color  font-black text-center">
        {" "}
        Formulaire de contact
      </h2>
      
      <form
        className="flex flex-col gap-y-5"
        action="https://formspree.io/f/mrgjnkez"
        method="POST"
      >
        <div className="flex flex-col gap-y-2">
          {" "}
          <label className="text-primary-color"> Nom </label>
          <input type="text" className="w-max border"></input>
        </div>
        <div className="flex flex-col gap-y-2">
          {" "}
          <label className="text-primary-color"> Adresse mail </label>
          <input type="mail" className=" w-max border"></input>
        </div>
        <div className="flex flex-col gap-y-2">
          {" "}
          <label className="text-primary-color"> Message </label>
          <textarea className="w-full border" rows="10"></textarea>
        </div>
        <div class="g-recaptcha" data-sitekey="6Lf22gchAAAAAKmJCEmeuqKiLBD3YLWgROHSTWs6"></div>
        <br/>
        <button className=" bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
          {" "}
          Envoyer{" "}
        </button>
      </form>
    </article>
  );
};


export default Formulaire;
