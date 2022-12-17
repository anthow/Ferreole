import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Seo from "../components/seo";

const ContactPage = ({ data }) => {
  return (
    <>
     <Seo 
  title = {data.datoCmsActualite.seo.title}
  description = {data.datoCmsActualite.seo.description}
  /> 
      <Layout>
        <main className="flex flex-col  mb-20 w-10/12 m-auto">
          <GatsbyImage
            className="mb-10 m-auto max-w-full"
            image={data.datoCmsActualite.imageArticle.gatsbyImageData}
            alt={data.datoCmsActualite.imageArticle.alt}
          />
          <article className="flex flex-col gap-y-10">
            <section>
              <h1 className="text-primary-color text-3xl">
                {data.datoCmsActualite.titreDeLArticle}
              </h1>
              <p className="text-xs text-primary-color italic">
                {data.datoCmsActualite.auteurEtDate}
              </p>
            </section>
            <div
              className="italic"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsActualite.chapeauArticle,
              }}
            />
            <div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsActualite.texteArticle,
              }}
            />
          </article>
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  query actuPageQuery($url: String) {
    datoCmsActualite(slug: { eq: $url }) {
      slug
      texteArticle
      titreDeLArticle
      auteurEtDate
      chapeauArticle
      seo {
        description
        title
        twitterCard
        image {
          gatsbyImageData
        }
      }
      imageArticle {
        alt
        gatsbyImageData(height: 600, layout: FIXED)
      }
    }
  }
`;

export default ContactPage;
