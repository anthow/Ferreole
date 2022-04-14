import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const FerreolePage = () => {
  return (
    <Layout>
      <article>
        <figure className="m-auto  order-2 md:order-2">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="mb-5 max-h-96"
          />
        </figure>
        <section className="w-10/12 flex py-20 flex-col gap-y-10 m-auto">
          <h1 className="text-3xl text-secondary-color  font-black ">
            {" "}
            Qui sommes nous ?
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue
            mauris augue neque gravida. Diam maecenas sed enim ut sem viverra
            aliquet eget. Justo donec enim diam vulputate ut pharetra. Amet
            commodo nulla facilisi nullam. Duis convallis convallis tellus id
            interdum velit laoreet id. Vitae tortor condimentum lacinia quis vel
            eros. Tellus at urna condimentum mattis pellentesque id nibh.
            Viverra vitae congue eu consequat ac felis donec et. Ut ornare
            lectus sit amet. At lectus urna duis convallis convallis tellus.
            Integer malesuada nunc vel risus commodo viverra maecenas accumsan
            lacus. Mauris pharetra et ultrices neque.
          </p>
          <p>
            Id neque aliquam vestibulum morbi blandit cursus risus at. Cras sed
            felis eget velit aliquet sagittis. Ligula ullamcorper malesuada
            proin libero nunc. Ullamcorper dignissim cras tincidunt lobortis
            feugiat. Molestie a iaculis at erat pellentesque adipiscing commodo
            elit at. Arcu dictum varius duis at. Sed risus ultricies tristique
            nulla. Dignissim enim sit amet venenatis urna cursus eget nunc. Non
            arcu risus quis varius quam. Eros in cursus turpis massa tincidunt
            dui ut ornare lectus. Sed felis eget velit aliquet sagittis. Nulla
            aliquet enim tortor at auctor urna nunc id cursus. Bibendum est
            ultricies integer quis. Viverra adipiscing at in tellus integer
            feugiat scelerisque varius.
          </p>
        </section>
      </article>
      <article className="py-10 text-white bg-primary-color">
        <h2 className="text-2xl mb-10 text-white text-center">Nos valeurs </h2>

        <section className=" w-10/12 m-auto flex flex-col md:grid grid-cols-3 gap-20 items-center justify-center">
          <div className=" flex items-center  flex-col">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5 rounded-full"
              height={250}
              width={250}
            />
            <div className="text-white flex flex-col  gap-y-5 text-center">
              <h3 className="text-xl">Citoyenneté</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>

          <div className=" flex items-center flex-col">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5 rounded-full"
              height={250}
              width={250}
            />
            <div className="text-white flex flex-col  gap-y-5 text-center">
              <h3 className="text-xl">Citoyenneté</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>

          <div className=" flex items-center flex-col">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5 rounded-full"
              height={250}
              width={250}
            />
            <div className="text-white flex flex-col  gap-y-5 text-center">
              <h3 className="text-xl">Citoyenneté</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>

          <div className=" flex items-center flex-col">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5 rounded-full"
              height={250}
              width={250}
            />
            <div className="text-white flex flex-col  gap-y-5 text-center">
              <h3 className="text-xl">Citoyenneté</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>

          <div className=" flex items-center flex-col">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="mb-5 rounded-full"
              height={250}
              width={250}
            />
            <div className="text-white flex flex-col  gap-y-5 text-center">
              <h3 className="text-xl">Citoyenneté</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
            </div>
          </div>
        </section>
      </article>
      <h2 className="text-2xl mb-10 pt-10 w-10/12 m-auto  ">Nos projets </h2>
      <article className="w-10/12 m-auto pb-10 flex flex-col md:grid grid-cols-2 gap-20 ">
        <section className="flex flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Projet de Ferrières</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,{" "}
          </p>
          <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
        </section>
        <section className="flex flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Vents d’Autelbas</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,{" "}
          </p>
          <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
        </section>
        <section className="flex flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Nos autres projets</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,{" "}
          </p>
          <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
        </section>
      </article>
      <h2 className="text-2xl mb-10 pt-10 w-10/12 m-auto  ">L'équipe </h2>

      <article className="w-10/12 m-auto pb-10 flex flex-col md:grid grid-cols-3 gap-20 ">
        <section className="flex items-center flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Jean-François Cornet </h3>
          <h4 className="text-lg">Fonction</h4>
          <div className="flex flex-row gap-x-4">
            <span>icon mail</span>
            <span>icon phone</span>
          </div>
        </section>

        <section className="flex items-center flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Jean-François Cornet </h3>
          <h4 className="text-lg">Fonction</h4>
          <div className="flex flex-row gap-x-4">
            <span>icon mail</span>
            <span>icon phone</span>
          </div>
        </section>
        <section className="flex items-center flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Jean-François Cornet </h3>
          <h4 className="text-lg">Fonction</h4>
          <div className="flex flex-row gap-x-4">
            <span>icon mail</span>
            <span>icon phone</span>
          </div>
        </section>
        <section className="flex items-center flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Jean-François Cornet </h3>
          <h4 className="text-lg">Fonction</h4>
          <div className="flex flex-row gap-x-4">
            <span>icon mail</span>
            <span>icon phone</span>
          </div>
        </section>
        <section className="flex items-center flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Jean-François Cornet </h3>
          <h4 className="text-lg">Fonction</h4>
          <div className="flex flex-row gap-x-4">
            <span>icon mail</span>
            <span>icon phone</span>
          </div>
        </section>
        <section className="flex items-center flex-col gap-y-5">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <h3 className="text-xl ">Jean-François Cornet </h3>
          <h4 className="text-lg">Fonction</h4>
          <div className="flex flex-row gap-x-4">
            <span>icon mail</span>
            <span>icon phone</span>
          </div>
        </section>
      </article>
      <article className="py-20 text-white bg-primary-color">
        <section className="w-10/12 mb-20 m-auto flex flex-col md:grid gap-20 grid-cols-2">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <div className="flex flex-col gap-y-10">
            <h2 className="text-2xl  text-white ">Nos statuts </h2>
            <p className="tex-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,{" "}
            </p>
            <p className="tex-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,{" "}
            </p>
          </div>
        </section>
        <section className="flex flex-col gap-y-10 w-10/12 m-auto ">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <button className=" text-gray-600 bg-white p-2 w-max">
            Voir les statuts complets
          </button>
        </section>
      </article>
      <article className="w-10/12 m-auto flex flex-col gap-y-20 py-20 ">
          <h2 className="text-2xl  text-center">REScoop Wallonie</h2>
          <section className="flex flex-col gap-20 md:grid grid-cols-2">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <div className="flex flex-col gap-y-10">
              <h3 className="text-xl">Qu’est-ce qu’une coopérative agréée ?</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
          </div>
          </section>

          <section className="flex flex-col gap-20 md:grid grid-cols-2">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="md:order-2"
          />
          <div className="flex flex-col gap-y-10 md:order-1">
              <h3 className="text-xl">La Charte Energie Citoyenne</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
          </div>
          </section>
          <section className="flex flex-col gap-20 md:grid grid-cols-2">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className=""
          />
          <div className="flex flex-col gap-y-10">
              <h3 className="text-xl">REScoop, la fédération des coops d’énergie </h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <button className=" bg-gray-600 text-white p-2 w-max">
            {" "}
            Bouton{" "}
          </button>
          </div>
          </section>
      </article>
    </Layout>
  );
};

export default FerreolePage;
