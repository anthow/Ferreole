import * as React from "react";
import Layout from "../components/layout";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <main className="flex flex-col  mb-20 w-10/12 m-auto">
        <GatsbyImage className="mb-10" image={data.datoCmsActualite.imageArticle.gatsbyImageData} alt={data.datoCmsActualite.imageArticle.alt} />
    <article className="flex flex-col gap-y-10">
        <section>
    <h1 className="text-primary-color text-3xl">{data.datoCmsActualite.titreDeLArticle}</h1>
    <p className="text-xs text-primary-color italic"> rédigé par {data.datoCmsActualite.auteur.name} le {data.datoCmsActualite.meta.publishedAt}
    </p>
    </section>
    <div className="italic"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsActualite.chapeauArticle
          }}
        />
          <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsActualite.texteArticle
          }}
        />
        </article>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query actuPageQuery($url: String) {
    datoCmsActualite(slug: { eq: $url }) {
      slug
      texteArticle
      titreDeLArticle
      chapeauArticle
      auteur {
        name
      }     
      seo {
        description
        title
        twitterCard
        image {
          gatsbyImageData
        }
      }
      meta {
        publishedAt(formatString: "DD/MM/YYYY")
      }
      imageArticle {
        alt
        gatsbyImageData
      }
    }
  }
`;

export default ContactPage;
