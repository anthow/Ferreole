import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/contact/header";
import Formulaire from "../components/contact/formulaire";
import Presse from "../components/contact/presse";

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
