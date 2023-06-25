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
        {data.datoCmsag13juin.titreAg}
</h1>
<div
              className="paragraphe"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsag13juin.texteStatutsComplet,
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
    datoCmsag13juin {
      titreAg
      texteStatutsComplet
  
  }
}
`;

export default Nouveauxstatuts;
