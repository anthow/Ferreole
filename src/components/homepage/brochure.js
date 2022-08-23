import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

const Brochure = () => {
  const data = useStaticQuery(graphql`{
      datoCmsGeneral {
    urlBrochure
  }
      datoCmsPageDAccueil {
        imageBrochure {
          alt 
          gatsbyImageData (height : 800)
        }
        titreBrochure
        texteBrochure
      }
}
  `);
  return (
    <article className="   md:py-0 md:min-h-9/10 flex flex-col m-auto bg-white ">
      <section className="w-10/12 m-auto items-center py-20 flex flex-col gap-y-5  gap-x-4 md:grid grid-cols-2">
        <figure className="m-auto   order-1">
          <GatsbyImage
            image={data.datoCmsPageDAccueil.imageBrochure.gatsbyImageData}
            alt={data.datoCmsPageDAccueil.imageBrochure.alt}
          />
        </figure>
        <div className="order-2  flex flex-col space-y-10 ">
          <h2 className="text-3xl text-secondary-color  font-black ">
            {data.datoCmsPageDAccueil.titreBrochure}
          </h2>
          <div
            className="paragraphe"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageDAccueil.texteBrochure,
            }}
          />
          <a
            href={data.datoCmsGeneral.urlBrochure}
            rel="noreferrer"
            target="_blank"
          >
            <button className="bg-secondary-color text-white py-2 px-5 w-max text-xl font-black rounded">
              Découvrir la brochure
            </button>
          </a>
        </div>
      </section>
    </article>
  );
};

export default Brochure;
