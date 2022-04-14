import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function News() {
  return (
    <article className="  py-20 md:py-10 md:min-h-9/10 flex flex-col m-auto bg-white ">
          <h2 className="w-10/12 m-auto text-3xl text-secondary-color  font-black mb-5 md:mb-10"> Nos dernières informations </h2>
      <section className="w-10/12 m-auto items-center flex flex-col gap-y-10 gap-x-10 md:grid grid-cols-2">
        <div className="flex flex-col">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="mb-5"
          />
          <div>
            <h3 className="text-xl ">titre de l'article</h3>
            <p className="mb-10 italic text-xs"> articlé régider par... le ....</p>
            <p className="mb-2">
              Lorem Ipsum Generator Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="italic text-xs">lire la suite...</p>
          </div>
        </div>
        <div className="flex flex-col">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="mb-5"
          />
          <div>
            <h3 className="text-xl ">titre de l'article</h3>
            <p className="mb-10 italic text-xs"> articlé régider par... le ....</p>
            <p className="mb-2">
              Lorem Ipsum Generator Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="italic text-xs">lire la suite...</p>
          </div>
        </div>
        <div className="flex flex-col">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="mb-5"
          />
          <div>
            <h3 className="text-xl ">titre de l'article</h3>
            <p className="mb-10 italic text-xs"> articlé régider par... le ....</p>
            <p className="mb-2">
              Lorem Ipsum Generator Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="italic text-xs">lire la suite...</p>
          </div>
        </div>
        <div className="flex flex-col">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1638519084/pexels-johannes-plenio-1125776_azbvag.jpg"
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="mb-5"
          />
          <div>
            <h3 className="text-xl ">titre de l'article</h3>
            <p className="mb-10 italic text-xs"> articlé régider par... le ....</p>
            <p className="mb-2">
              Lorem Ipsum Generator Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p className="italic text-xs">lire la suite...</p>
          </div>
        </div>
      </section>
    </article>
  );
}
