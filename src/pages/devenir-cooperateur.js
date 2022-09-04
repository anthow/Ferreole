import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/cooperateur/header";
import Devenir from "../components/cooperateur/Devenir";
import { SEO } from "../components/seo"

const Cooperateurpage = () => {
  return (
    <Layout>

      <main className="flex flex-col space-y-20 mb-20">
        <Header />
        <Devenir />


      </main>
    </Layout>
  );
};

export default Cooperateurpage;
export const Head = () => (
  <SEO title="devenir coopérateur" />
  )