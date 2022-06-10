import { Link } from "gatsby";
import React from "react";

export default function NavBarLink() {
  return (
    <header className=" p-10 flex flex-col md:flex-row justify-between">
      <ul className="flex flex-col items-center text-primary-color  gap-x-4 m-auto md:flex-row">
        <Link to="/ferreole">
        <li className="hover:opacity-70">Ferréole</li>
        </Link>
        {/* début menu déroulant */}
        <li>
          <div className="dropdown inline-block relative">
            <button className=" f rounded flex md:inline-flex items-center">
              <p className="hover:opacity-70">Les projets</p>
              <svg
                className="ml-2 fill-current h-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu text-primary-color absolute bg-white p-5 hidden space-y-4  text-gray-700 pt-">
              <Link to="/projets/ferrieres">
              <li className=" text-primary-color hover:opacity-70"> Projet de Ferrières</li>
              </Link>
              <li className="text-primary-color hover:opacity-70"> Vents d’Autelbas</li>
              <li className="text-primary-color hover:opacity-70"> Autres projets</li>
            </ul>
          </div>
        </li>
        {/* fin menu déroulant */}
        <Link to="/cociter">

        <li className="hover:opacity-70">COCITER</li>
        </Link>
        <Link to="/faq">
        <li className="hover:opacity-70">FAQ</li>
        </Link>

        {/* début menu déroulant */}
        <li>
          <div className="dropdown inline-block relative">
            <button className=" f rounded flex md:inline-flex items-center">
              <p className="hover:opacity-70">Infos</p>
              <svg
                className="ml-2 fill-current h-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute bg-white p-5 hidden space-y-4 w-max  text-gray-700 pt-">
              <li className="text-primary-color hover:opacity-70">Actualités</li>
              <li className="text-primary-color hover:opacity-70"> Documents</li>
              <li className="text-primary-color hover:opacity-70"> Brochure « Rumeurs et Réalités sur l’éolien »</li>
              <li className="text-primary-color hover:opacity-70"> Newsletter</li>

            </ul>
          </div>
        </li>
        {/* fin menu déroulant */}
        <li className="hover:opacity-70">Agenda</li>
        <Link to="/contact">
        <li className="hover:opacity-70">Contact</li>
        </Link>
        <Link to="/devenir-cooperateur">
        <li className=" hover:opacity-70 bg-secondary-color p-2 rounded font-black text-white md: ml-10">Devenir Coopérateur</li>
        </Link>
      </ul>
    </header>
  );
}
