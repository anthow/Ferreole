import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Timeline from "../../components/ferrieres/timeline";

const FerrierePage = () => {
  return (
    <Layout>
      <main className="flex flex-col space-y-20 mb-20">
      <article className="bg-gray-600 py-20 md:py-40 text-white">
          <section className=" w-10/12 m-auto ">
            <div className="md:w-6/12 flex flex-col gap-y-5 ">
              <h1 className="text-5xl">Projet de Ferrières</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </section>
        </article>
        <article className="flex flex-col space-y-20">
          <h2 className="text-center text-4xl">
            Les caractérisitiques du projet
          </h2>
          <section className="w-10/12 m-auto flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
            <figure className="">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5 max-h-96"
              />
            </figure>
            <div className=" flex flex-col space-y-10">
              <h3 className="text-3xl">Titre</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
            <div className=" col-span-2 flex flex-col space-y-5">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
          </section>
        </article>

        <article className="flex flex-col space-y-20">
          <h2 className="text-center text-4xl">
            L'avancée du projet
          </h2>
          <section className="w-10/12 m-auto flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
            <figure className="md:order-2">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className="mb-5 max-h-96"
              />
            </figure>
            <div className=" flex flex-col md:order-1 space-y-10">
              <h3 className="text-3xl">Titre</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
            <div className=" col-span-2 md:order-3 flex flex-col space-y-5">
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. orem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </div>
          </section>
        </article>
        <article className="flex flex-col space-y-20">
          <h2 className="text-center text-4xl">L’avancée du projet </h2>
          <Timeline />
        </article>
        <article className="flex flex-col space-y-20">
          <h2 className="text-center text-4xl">
            Vous souhaitez en savoir plus ?
          </h2>
          <section className="flex w-10/12 m-auto flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
            <div className="flex flex-col gap-y-5 ">
              <figure className="">
                <StaticImage
                  src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  className="mb-5 max-h-96"
                />
              </figure>
              <h3 className="text-3xl">Etude d’incidences</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
              </p>
              <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
            </div>
            <div className="flex flex-col gap-y-5 ">
              <figure className="">
                <StaticImage
                  src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
                  quality={95}
                  formats={["auto", "webp", "avif"]}
                  alt="A Gatsby astronaut"
                  className="mb-5 max-h-96"
                />
              </figure>
              <h3 className="text-3xl">Titre</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam,{" "}
              </p>
              <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
            </div>
          </section>
        </article>
        <section></section>
      </main>
    </Layout>
  );
};

export default FerrierePage;
