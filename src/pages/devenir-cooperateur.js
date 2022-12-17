import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/cooperateur/header";
import Devenir from "../components/cooperateur/Devenir";
import Seo from "../components/seo";

const Cooperateurpage = ({ data }) => {
  return (
    <>
      <Seo
        title={data.datoCmsDevenezCooperateur.seo.title}
        description={data.datoCmsDevenezCooperateur.seo.description}
      />
      <Layout>
        <main className="flex flex-col space-y-20 mb-20">
          <Header />
          <Devenir />
        </main>
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    datoCmsDevenezCooperateur {
      seo {
        description
        title
      }
    }
  }
`

export default Cooperateurpage;
