import * as React from "react"
import Contact from "../components/cociterpage/contact"
import Description from "../components/cociterpage/description"
import Greenpeace from "../components/cociterpage/greenpeace"
import Header from "../components/cociterpage/header"
import Layout from "../components/layout"

const CociterPage = () => {
  return (
    <Layout>
<Header/>
<Description />
<Greenpeace />
<Contact />
   </Layout>
  )
}

export default CociterPage
