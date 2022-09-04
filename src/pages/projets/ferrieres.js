import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Timeline from "../../components/ferrieres/timeline";
import Header from "../../components/ferrieres/header";
import Caracteristique from "../../components/ferrieres/caracteristique";
import Savoir from "../../components/ferrieres/ensavoirplus";
import { SEO } from "../../components/seo"

const FerrierePage = () => {
  return (
    <Layout>
      <main className="flex flex-col space-y-20 mb-20">
     <Header />
       <Caracteristique />
        
          <Timeline />
        <Savoir />
      </main>
    </Layout>
  );
};

export default FerrierePage;
export const Head = () => (
  <SEO title=" Projet de Ferrières" />
  )
  