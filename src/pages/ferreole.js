import * as React from "react";
import Layout from "../components/layout";
import Header from "../components/ferreole/header";
import Valeurs from "../components/ferreole/valeurs";
import Projets from "../components/ferreole/projets";
import Equipe from "../components/ferreole/equipe";
import Statut from "../components/ferreole/statut";
import Rescoop from "../components/ferreole/rescoop";
import { SEO } from "../components/seo"

const FerreolePage = () => {
  return (
    <Layout>

     <Header />
     <Equipe />
     <Valeurs />
   <Projets />
   <Rescoop />     
<Statut />
     
   
    </Layout>
  );
};

export default FerreolePage;
export const Head = () => (
  <SEO title="Ferréole" />
  )