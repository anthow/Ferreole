import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const Nouveauxstatuts = ({ data }) => {
  return (
    <>
      <Layout>
<article className="flex flex-col py-10 gap-20 w-10/12 m-auto">
    <section className="flex flex-col gap-10">
    <h1 className=" text-3xl text-secondary-color  font-black ">
        {data.datoCmsNouveauStatut.titrePage}
</h1>
<div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsNouveauStatut.introductionPage,
              }}>
              </div>
    </section>
    <section className="flex flex-col gap-10">
    <h2 className=" text-2xl text-secondary-color  font-black ">
        {data.datoCmsNouveauStatut.titreChangement}
</h2>
<div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsNouveauStatut.texteChangement,
              }}>
              </div>
    </section>
    <section className="flex flex-col gap-10">
    <h2 className=" text-2xl text-secondary-color  font-black ">
        {data.datoCmsNouveauStatut.titreNouveauxStatuts}
</h2>
<div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsNouveauStatut.texteNouveauxStatuts,
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
    datoCmsNouveauStatut {
      titrePage
      titreNouveauxStatuts
      titreChangement
      texteChangement
      texteNouveauxStatuts
      introductionPage
    }
  }
`;

export default Nouveauxstatuts;
