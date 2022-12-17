import * as React from "react";
import { graphql } from "gatsby"
import Layout from "../components/layout";
import Header from "../components/ferreole/header";
import Valeurs from "../components/ferreole/valeurs";
import Projets from "../components/ferreole/projets";
import Equipe from "../components/ferreole/equipe";
import Statut from "../components/ferreole/statut";
import Rescoop from "../components/ferreole/rescoop";
import  Seo from "../components/seo"

const FerreolePage = ({data}) => {
  return (<>    
  <Seo 
  title = {data.datoCmsPageFerreole.seo.title}
  description = {data.datoCmsPageFerreole.seo.description}
  />
    <Layout>

     <Header />
     <Equipe />
     <Valeurs />
   <Projets />
   <Rescoop />     
<Statut />
     
   
    </Layout>
    </>

  );
};

export const query = graphql`
  {
    datoCmsPageFerreole {
      seo {
        description
        title
      }
    }
  }
  `
export default FerreolePage;
 