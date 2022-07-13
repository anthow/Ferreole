import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Greenpeace = () => {
  const data = useStaticQuery(graphql`{
  datoCmsCociter {
    imageGreenpeace {
      gatsbyImageData
      alt
    }
    paragrapheUnGreenpeace
    paragrapheDeuxGreenpeaceCopy1
  }
}

  `);
  return (
    <article className="  py-32 bg-primary-color text-white  flex flex-col m-auto  gap-y-10 ">
      <section className="w-10/12 m-auto items-center flex flex-col gap-x-20 gap-y-10 md:grid grid-cols-2">
        <figure className="m-auto order-1   ">
          <GatsbyImage
            image={data.datoCmsCociter.imageGreenpeace.gatsbyImageData}
            alt={data.datoCmsCociter.imageGreenpeace.alt}
          />
        </figure>
    
         <div className="order-2 text-lg paragraphe font-black"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsCociter.paragrapheUnGreenpeace    
          }} />
            <div className=" order-3 pargraphe col-span-2"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsCociter.paragrapheDeuxGreenpeaceCopy1    
          }} />
      </section>
    </article>
  );
};

export default Greenpeace;
