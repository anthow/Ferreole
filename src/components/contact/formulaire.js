import React, { useEffect, useRef } from "react";

const Formulaire = () => {
  const siteKey =
    process.env.GATSBY_RECAPTCHA_SITE_KEY ||
    "6LcuCrwsAAAAAI7Fvg4_4iIseXRHHSVyGBxobRiT";
  const captchaRef = useRef(null);
  const captchaRenderedRef = useRef(false);

  useEffect(() => {
    const renderRecaptcha = () => {
      if (captchaRenderedRef.current || !captchaRef.current) return;
      if (!window.grecaptcha || !window.grecaptcha.render) return;

      window.grecaptcha.ready(() => {
        if (captchaRenderedRef.current || !captchaRef.current) return;
        window.grecaptcha.render(captchaRef.current, { sitekey: siteKey });
        captchaRenderedRef.current = true;
      });
    };

    if (window.grecaptcha && window.grecaptcha.render) {
      renderRecaptcha();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://www.google.com/recaptcha/api.js"]'
    );

    if (existingScript) {
      existingScript.addEventListener("load", renderRecaptcha);
      return () => existingScript.removeEventListener("load", renderRecaptcha);
    }

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderRecaptcha);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", renderRecaptcha);
  }, [siteKey]);

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
        <div ref={captchaRef}></div>
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
