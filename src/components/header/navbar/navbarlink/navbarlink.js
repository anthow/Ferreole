import { Link } from "gatsby";
import React from "react";

export default function NavBarLink() {
  return (
    <header className=" p-10 flex flex-col md:flex-row justify-between">
      <ul className="flex flex-col gap-x-4 m-auto md:flex-row">
        <Link to="/ferreole">
        <li>Ferréole</li>
        </Link>
        {/* début menu déroulant */}
        <li>
          <div className="dropdown inline-block relative">
            <button className=" f rounded flex md:inline-flex items-center">
              <p>Les projets</p>
              <svg
                className="ml-2 fill-current h-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute bg-white p-5 hidden space-y-4  text-gray-700 pt-">
              <Link to="/projets/ferrieres">
              <li>Projet de Ferrières</li>
              </Link>
              <li> Vents d’Autelbas</li>
              <li> Projets Sofico</li>
              <li> Photovoltaïque Ernonheid</li>
            </ul>
          </div>
        </li>
        {/* fin menu déroulant */}

        <li>Cociter</li>
        <Link to="/devenir-cooperateur">
        <li>Devenir Coopérateur</li>
        </Link>
        <li>FAQ</li>
        {/* début menu déroulant */}
        <li>
          <div className="dropdown inline-block relative">
            <button className=" f rounded flex md:inline-flex items-center">
              <p>Infos</p>
              <svg
                className="ml-2 fill-current h-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute bg-white p-5 hidden space-y-4  text-gray-700 pt-">
              <li>Actualités</li>
              <li> Documents</li>
              <li> Brochure « Rumeurs et Réalités sur l’éolien »</li>
              <li> Newsletter</li>
            </ul>
          </div>
        </li>
        {/* fin menu déroulant */}
        <li>Agenda</li>
        <Link to="/contact">
        <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
}
