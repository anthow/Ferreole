import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Description = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsCociter {
        imageDescription {
          alt
          gatsbyImageData (height:500)
        }
        titreDescription
        texteDescription
      }
    }
  `);
  return (
    <article className="  py-20   flex flex-col m-auto  gap-y-10 ">
      <section className="w-10/12 m-auto items-center flex flex-col gap-x-20 gap-y-10 md:grid grid-cols-2">
        <figure className="m-auto order-1 md:order-2  ">
          <GatsbyImage
            image={data.datoCmsCociter.imageDescription.gatsbyImageData}
            alt={data.datoCmsCociter.imageDescription.alt}
          />
        </figure>
        <div className=" fle flex-col gap-y-5 bg-primary-color p-10 text-lg text-white order-2 md:order-1">
        <h2 className=" text-xl md:text-3xl  text-white  font-black ">
          {data.datoCmsCociter.titreDescription}
        </h2>
         <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsCociter.texteDescription    
          }} />
        </div>
      </section>
    </article>
  );
};

export default Description;
