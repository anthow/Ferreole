import React from "react";

const SectionThree = () => {
  return (
    <article className=" flex  flex-col gap-y-5 justify-self-center">
      <h4 className="text-xl text-center">Menu</h4>
      <section className="flex flex-col gap-x-10 md:grid grid-cols-2">
        <ul>
          <li> Férréole</li>
          <li>Projet de Ferrières</li>
          <li>Vents d’Autelbas</li>
          <li>Projets Sofico</li>
          <li>Photovoltaïque Ernonheid</li>
          <li>Actualité</li>
          <li>Agenda</li>
        </ul>
        <ul>
          <li>Cociter</li>
          <li>Devenir Coopérateur</li>
          <li>Contact</li>
          <li>FAQ</li>
          <li>Infos</li>
          <li>Brochure</li>
          <li>Documents</li>
        </ul>
      </section>
    </article>
  );
};

export default SectionThree;
