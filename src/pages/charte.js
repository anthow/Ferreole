import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { SEO } from "../components/seo"

const ChartePage = ({ data }) => {
  return (
    <Layout>
        <SEO title="Charte Ferréole" />

      <GatsbyImage
        image={
          data.datoCmsPageCharteEnergieCitoyenne.imageHeader.gatsbyImageData
        }
        alt={data.datoCmsPageCharteEnergieCitoyenne.imageHeader.alt}
        className="w-full"
      />
      <article className=" py-20 w-10/12 m-auto flex flex-col gap-y-10">
        <h1 className="text-3xl text-center text-secondary-color">
          {data.datoCmsPageCharteEnergieCitoyenne.titreDeLaPage}
        </h1>
        <section className="flex-flex-col gap-y-10">
          <h2 className="text-2xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titrePrincipes}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.textePrincipe
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-2xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreConstat}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteConstat
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-2xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreVision}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteVision
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-2xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreMission}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteMission
          }}
        />
        </section>
        <section className="flex-flex-col gap-y-5">
          <h2 className="text-2xl text-primary-color mb-10"> {data.datoCmsPageCharteEnergieCitoyenne.titreEngagement}</h2>
          <div className="paragraphe"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageCharteEnergieCitoyenne.texteEngagement
          }}
        />
        </section>
      </article>
    </Layout>
  );
};

export const query = graphql`
  {
    datoCmsPageCharteEnergieCitoyenne {
      imageHeader {
        alt
        gatsbyImageData
      }
      titreDeLaPage
      titrePrincipes
      textePrincipe
      titreConstat
      texteConstat
      titreVision
      texteVision
      titreMission
      texteMission
      titreEngagement
      texteEngagement
    }
  }
`;

export default ChartePage;
export const Head = () => (
  <SEO title="Charte Ferréole" />
  )
