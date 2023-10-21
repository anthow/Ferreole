import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import Timeline from "../../components/ferrieres/timeline";
import Header from "../../components/ferrieres/header";
import Caracteristique from "../../components/ferrieres/caracteristique";
import Savoir from "../../components/ferrieres/ensavoirplus";
import { graphql } from "gatsby"
import Seo from "../../components/seo"

const FerrierePage = ({data}) => {
  return (<>
<Seo 
  title = {data.datoCmsProjetDeFerriere.seo.title}
  description = {data.datoCmsProjetDeFerriere.seo.description}
  />  
    <Layout>
      <main className="flex flex-col space-y-20 mb-20">
     <Header />
        
          <Timeline />
        <Savoir />
      </main>
    </Layout>
    </>
  );
};

export const query = graphql`
  {
    datoCmsProjetDeFerriere {
      seo {
        description
        title
      }
    }
  }
`

export default FerrierePage;
