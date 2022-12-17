import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Seo from "../components/seo";

const ChartePage = ({ data }) => {
  return (
    <>
      <Seo
        title={data.datoCmsPageCompletDevenirCooperateur.seo.title}
        description={data.datoCmsPageCompletDevenirCooperateur.seo.description}
      />
      <Layout>
        <GatsbyImage
          image={
            data.datoCmsPageCompletDevenirCooperateur.imageHeadear
              .gatsbyImageData
          }
          alt={data.datoCmsPageCompletDevenirCooperateur.imageHeadear.alt}
          className="w-full"
        />
        <article className=" py-20 w-10/12 m-auto flex flex-col gap-y-10">
          <h1 className="text-3xl text-center text-secondary-color">
            {data.datoCmsPageCompletDevenirCooperateur.titreDeLaPage}
          </h1>
          <h2 className="text-2xl text-center text-primary-color">
            {data.datoCmsPageCompletDevenirCooperateur.sousTitreDeLaPage}
          </h2>
          <div className=" flex flex-col md:grid grid-cols-2 md:gap-x-20 py-5">
            <section className="flex-flex-col gap-y-5">
              <h2 className="text-2xl text-primary-color">
                {" "}
                {
                  data.datoCmsPageCompletDevenirCooperateur
                    .titrePourDevenirCooperateur
                }
              </h2>
              <div
                className="paragraphe"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageCompletDevenirCooperateur
                      .textePourDevenirCooperateur,
                }}
              />
            </section>
            <section className="flex-flex-col gap-y-5">
              <h2 className="text-2xl text-primary-color">
                {" "}
                {data.datoCmsPageCompletDevenirCooperateur.titreCoordonnee}
              </h2>
              <div
                className="paragraphe"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageCompletDevenirCooperateur.texteCoordonnee,
                }}
              />
            </section>
          </div>
          <div className=" flex flex-col md:grid grid-cols-2 md:gap-x-20 py-5">
            <section className="flex-flex-col gap-y-5">
              <h2 className="text-2xl text-primary-color mb-5">
                {" "}
                {data.datoCmsPageCompletDevenirCooperateur.titreAvantage}
              </h2>
              <div
                className="paragraphe"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageCompletDevenirCooperateur.texteAvantage,
                }}
              />
            </section>
            <section className="flex-flex-col gap-y-5">
              <h2 className="text-2xl text-primary-color mb-5">
                {" "}
                {data.datoCmsPageCompletDevenirCooperateur.titreContrainte}
              </h2>
              <div
                className="paragraphe"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsPageCompletDevenirCooperateur.texteContrainte,
                }}
              />
            </section>
          </div>
          <section className="flex-flex-col gap-y-5">
            <h2 className="text-2xl text-primary-color ">
              {" "}
              {data.datoCmsPageCompletDevenirCooperateur.titreAttestation}
            </h2>
            <div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsPageCompletDevenirCooperateur.texteAttestation,
              }}
            />
          </section>
        </article>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    datoCmsPageCompletDevenirCooperateur {
      imageHeadear {
        alt
        gatsbyImageData
      }
      seo {
        description
        title
      }
      titreDeLaPage
      sousTitreDeLaPage
      titrePourDevenirCooperateur
      textePourDevenirCooperateur
      titreCoordonnee
      texteCoordonnee
      titreAvantage
      texteAvantage
      titreContrainte
      texteContrainte
      titreAttestation
      texteAttestation
    }
  }
`;

export default ChartePage;
