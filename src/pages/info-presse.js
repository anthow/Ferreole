import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import HeaderPresse from "../components/contact/header-presse";
import { SEO } from "../components/seo"

const FerreolePage = () => {
  return (

    <Layout>

      <HeaderPresse />

    </Layout>
  );
};

export default FerreolePage;
export const Head = () => (
  <SEO title=" Info presse" />
  )