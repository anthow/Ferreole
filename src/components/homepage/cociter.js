import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function Cociter() {
  return (
    <article  className=" bg-cociter bg-cover bg-center  py-20 md:py-0 md:min-h-9/10 flex flex-col m-auto bg-white ">
      <section className="w-10/12 m-auto items-center flex flex-col gap-x-4 md:grid grid-cols-2">
        <figure className="m-auto ">
          <StaticImage
            src="https://res.cloudinary.com/liono/image/upload/v1647268513/c83b1dcc-eb63-11e9-8783-0177171552f0_original_kxvfhq.jpg"
            quality={95}
            width={500}
            height={500}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="mb-5 rounded-full"
          />
        </figure>
        <div className=" bg-white p-10 opacity-80 md:order-1">
          <h2 className="text-3xl text-secondary-color  font-black mb-2 md:mb-5">
            Cociter
          </h2>
         
          <p className="">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </article>
  );
}
