import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const ContactPage = () => {
  return (
    <Layout>
      <main className="flex flex-col space-y-20 mb-20">
        <article className="w-10/12 m-auto  flex flex-col gap-y-10 gap-x-20 md:grid grid-cols-2 ">
          <figure className="">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className=""
            />
          </figure>
          <section className="flex flex-col gap-y-5">
            <h1 className="text-4xl">Ferréole</h1>
            <p>
              FERREOLE scrl <br />
              N° d’entreprise : 0501.842.069
              <br />
              Siège social : Burnontige, 20, 4190 Ferrières
              <br />
              Tél. 086 43 37 46
              <br />
              Pour COCITER scrl :<br />
              Contact clients : Fabienne MUELLER : 080 68 57 38 –
              fabienne.mueller@cociter.be
              <br />
              Personne relais-COCITER chez Ferréole : Bernadette HOSTE : 086
              43.37.46 – bernadette.hoste@ferreole.be
              <br />
            </p>
          </section>
        </article>
        <article className=" w-10/12 md:w-6/12 flex flex-col m-auto gap-y-10">
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
        <h2 className="text-4xl text-center"> Presse</h2>
        <article className="w-10/12 m-auto gap-x-20 gap-y-20 flex flex-col md:grid grid-cols-2 ">
        <figure className="">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className=""
            />
          </figure>
          <section className="flex flex-col gap-y-5">
              <h3 className="text-3xl">Nous contacter</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button className=" bg-gray-600 text-white p-2 w-max">
              {" "}
              Bouton{" "}
            </button>  
          </section>
          <figure className="order-1 md:order-2">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className=""
            />
          </figure>
          <section className="flex flex-col gap-y-5 order-2 md:order-1">
              <h3 className="text-3xl">Dossier de presse</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button className=" bg-gray-600 text-white p-2 w-max">
              {" "}
              Bouton{" "}
            </button>  
          </section>
        </article>
      </main>
    </Layout>
  );
};

export default ContactPage;
