import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/contact/header";
import Formulaire from "../components/contact/formulaire";
import Presse from "../components/contact/presse";
import { SEO } from "../components/seo"

const ContactPage = () => {
  return (
    <Layout>

      <main className="flex flex-col space-y-20 mb-20">
       <Header />
       <Formulaire />
        <Presse />
      </main>
    </Layout>
  );
};

export default ContactPage;
export const Head = () => (
  <SEO title="Contact " />
  )