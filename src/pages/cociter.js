import * as React from "react"
import { graphql } from "gatsby"
import Contact from "../components/cociterpage/contact"
import Description from "../components/cociterpage/description"
import Greenpeace from "../components/cociterpage/greenpeace"
import Header from "../components/cociterpage/header"
import Layout from "../components/layout"
import Seo from "../components/seo"

const CociterPage = ({data}) => {
  return (
    <>  
    <Seo 
  title = {data.datoCmsCociter.seo.title}
  description = {data.datoCmsCociter.seo.description}
  /> 
     <Layout>
<Header/>
<Description />
<Greenpeace />
<Contact />
   </Layout>
   </>

  )
}

export const query = graphql`
  {
    datoCmsCociter {
      seo {
        description
        title
      }
    }
  }
`
export default CociterPage
