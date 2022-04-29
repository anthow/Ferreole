import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Header from "../components/ferreole/header";
import Valeurs from "../components/ferreole/valeurs";
import Projets from "../components/ferreole/projets";
import Equipe from "../components/ferreole/equipe";
import Statut from "../components/ferreole/statut";
import Rescoop from "../components/ferreole/rescoop";

const FerreolePage = () => {
  return (
    <Layout>
     <Header />
     <Valeurs />
   <Projets />
<Equipe />
<Statut />
<Rescoop />     
     
   
    </Layout>
  );
};

export default FerreolePage;
