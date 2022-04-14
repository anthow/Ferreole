import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

const Cooperateurpage = () => {
  return (
    <Layout>
      <main className="flex flex-col space-y-20 mb-20">
        <article className="bg-gray-600 py-20 md:py-40 text-white">
          <section className=" w-10/12 md:grid grid-cols-3 m-auto ">
            <div className="col-span-2"></div>
            <div className=" flex flex-col gap-y-5 ">
              <h1 className="text-5xl">Devenez coopérateur !</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </section>
        </article>
        <article className="flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10 w-10/12 m-auto">
          <figure className="order-1 md:order-2">
            <StaticImage
              src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className=""
            />
          </figure>
          <section className="order-2 md:order-1 flex flex-col space-y-5">
            <h2 className="text-4xl">
              {" "}
              Commment devenir coopérateur de Ferréole
            </h2>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <button className=" bg-gray-600 text-white p-2 w-max">
              {" "}
              Bouton{" "}
            </button>
          </section>
        </article>
        <article className="flex w-10/12 m-auto flex-col space-y-20">
          <h2 className="text-center text-4xl">information Pratiques </h2>
          <section className="flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
            <figure className="">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className=""
              />
            </figure>
            <div className="flex flex-col gap-y-5">
              <h3 className="text-3xl"> titre 3 </h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
            </div>
            <p className="col-span-2">
              Ornare arcu odio ut sem nulla pharetra diam sit. Faucibus pulvinar
              elementum integer enim neque volutpat ac tincidunt vitae. Ipsum
              consequat nisl vel pretium lectus quam id. Hac habitasse platea
              dictumst quisque sagittis purus. Sagittis eu volutpat od io
              facilisis mauris sit. Enim lobortis scelerisque fermentum dui
              faucibus in. Nullam ac tortor vitae purus faucibus ornare
              suspendisse. Lectus arcu bibendum at varius. Hac habitasse platea
              dictumst quisque sagittis purus sit amet volutpat. Ut placerat
              orci nulla pellentesque dignissim enim sit. Pellentesque habitant
              morbi tristique senectus et netus. Fringilla phasellus faucibus
              scelerisque eleifend donec pretium.
            </p>
          </section>
          <section className="flex flex-col md:grid grid-cols-2 gap-x-20 gap-y-10">
            <figure className="order-1 md:order-2">
              <StaticImage
                src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt="A Gatsby astronaut"
                className=""
              />
            </figure>
            <div className="flex order-2 md:order-1 flex-col gap-y-5">
              <h3 className="text-3xl"> titre 3 </h3>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                  orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt
                </p>
            </div>
            <p className=" order-3 col-span-2">
              Ornare arcu odio ut sem nulla pharetra diam sit. Faucibus pulvinar
              elementum integer enim neque volutpat ac tincidunt vitae. Ipsum
              consequat nisl vel pretium lectus quam id. Hac habitasse platea
              dictumst quisque sagittis purus. Sagittis eu volutpat od io
              facilisis mauris sit. Enim lobortis scelerisque fermentum dui
              faucibus in. Nullam ac tortor vitae purus faucibus ornare
              suspendisse. Lectus arcu bibendum at varius. Hac habitasse platea
              dictumst quisque sagittis purus sit amet volutpat. Ut placerat
              orci nulla pellentesque dignissim enim sit. Pellentesque habitant
              morbi tristique senectus et netus. Fringilla phasellus faucibus
              scelerisque eleifend donec pretium.
            </p>
          </section>
        </article>
      </main>
    </Layout>
  );
};

export default Cooperateurpage;
