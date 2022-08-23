import React from "react";
import { Link } from "gatsby";

import { useStaticQuery, graphql } from "gatsby"
const SectionThree = () => {
  const data = useStaticQuery(graphql`
    query {
      datoCmsGeneral {
        urlBrochure
      }
    }
  `)
  return  <article className=" flex  flex-col gap-y-5 justify-self-center">
  <h4 className="text-xl text-center">Menu</h4>
  <section className="flex flex-col gap-x-10 md:grid grid-cols-2">
    <ul>
      <Link to="/ferreole">
        <li> Ferréole</li>
      </Link>
      <Link to="/projets/ferrieres">
        <li>Projet de Ferrières</li>
      </Link>
      <Link to="/ferreole/#autelbas">
        <li>Vents d’Autelbas</li>
      </Link>
      <Link to="/ferreole/#autresprojets">
        <li>Autres projets</li>
      </Link>
      <Link to="/actu">
      <li>Actualité</li>
      </Link>
      <li className="hidden">Agenda</li>
    </ul>
    <ul>
    <Link to="/cociter">
      <li>COCITER</li>
      </Link>
      <Link to="/devenir-cooperateur">

      <li>Devenir Coopérateur</li>
      </Link>
      <Link to="/contact">

      <li>Contact</li>
      </Link>
      <Link to="/faq">
      <li>FAQ</li>
      </Link>
      <a href={data.datoCmsGeneral.urlBrochure} rel="noreferrer" target="_blank" >
      <li>Brochure</li>
      </a>
      <li className="hidden">Document</li>
    </ul>
  </section>
</article>
}

export default SectionThree