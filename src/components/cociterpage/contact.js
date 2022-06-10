import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Contact = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsCociter {
        texteContact
        imageContact {
          gatsbyImageData
          alt
        }
      }
    }
  `);
  return (
    <article className="  py-20   flex flex-col m-auto  gap-y-10 ">
      <section className="w-10/12 m-auto items-center flex flex-col gap-x-20 gap-y-10 md:grid grid-cols-2">
        <figure className="m-auto order-1 md:order-2  ">
          <GatsbyImage
            image={data.datoCmsCociter.imageContact.gatsbyImageData}
            alt={data.datoCmsCociter.imageContact.alt}
          />
        </figure>
        <div className=" fle flex-col gap-y-5 bg-secondary-color p-10 text-lg text-white order-2 md:order-1">
     
          <div
            className="paragraphe"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsCociter.texteContact,
            }}
          />
        </div>
      </section>
    </article>
  );
};

export default Contact;
