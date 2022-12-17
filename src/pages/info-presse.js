import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import HeaderPresse from "../components/contact/header-presse";
import Seo from "../components/seo";

const FerreolePage = () => {
  return (
    <>
      <Seo
        title="Info Presse"
        description="Toutes les informations pour la presse"
      />
      <Layout>
        <HeaderPresse />
      </Layout>
    </>
  );
};

export default FerreolePage;
