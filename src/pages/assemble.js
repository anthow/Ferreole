import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Seo from "../components/seo";

const ChartePage = ({ data }) => {
  return (
    <>
      <Seo title="Assemblée générale" description="Informations de l'assemblée générale Ferréole." pathname="/assemble/" />
      <Layout>
<article className="flex flex-col py-10 gap-20 w-10/12 m-auto">
    <section className="flex flex-col gap-10">
    <h1 className=" text-3xl text-secondary-color  font-black ">
        {data.datoCmsAsssembleeGenerale.titreDeLaPage}
</h1>
<div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAsssembleeGenerale.introductionPage,
              }}>
              </div>
    </section>
    <section className="flex flex-col gap-10">
    <h2 className=" text-2xl text-secondary-color  font-black ">
        {data.datoCmsAsssembleeGenerale.titreRapport}
</h2>
<div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAsssembleeGenerale.texteRapport,
              }}>
              </div>
    </section>
    <section className="flex flex-col gap-10">
    <h2 className=" text-2xl text-secondary-color  font-black ">
        {data.datoCmsAsssembleeGenerale.titreComptesAnnuels}
</h2>
<div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAsssembleeGenerale.texteComptesAnnuels,
              }}>
              </div>
    </section>
    </article>       
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    datoCmsAsssembleeGenerale {
      introductionPage
      texteComptesAnnuels
      texteRapport
      titreDeLaPage
      titreRapport
      titreComptesAnnuels
    }
  }
`;

export default ChartePage;
