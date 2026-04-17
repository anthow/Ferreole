import React from "react";

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
        name="contactfereole"
        method="POST"
        action="/contact?success=1"
        data-netlify="true"
        data-netlify-recaptcha="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contactfereole" />
        <p hidden>
          <label>
            Ne pas remplir ce champ: <input name="bot-field" />
          </label>
        </p>
        <div className="flex flex-col gap-y-2">
          {" "}
          <label className="text-primary-color"> Nom </label>
          <input type="text" name="Nom" required className="w-max border"></input>
        </div>
        <div className="flex flex-col gap-y-2">
          {" "}
          <label className="text-primary-color"> Adresse mail </label>
          <input type="email" name="mail" required className=" w-max border"></input>
        </div>
        <div className="flex flex-col gap-y-2">
          {" "}
          <label className="text-primary-color"> Message </label>
          <textarea className="w-full border" name="message" required rows="10"></textarea>
        </div>
        <div data-netlify-recaptcha="true"></div>
        <br/>
        <button type="submit" className=" bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
          {" "}
          Envoyer{" "}
        </button>
      </form>
    </article>
  );
};


export default Formulaire;
