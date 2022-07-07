import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import NavBarLink from "./navbarlink/navbarlink";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);
      const data = useStaticQuery(graphql`
      {
        datoCmsGeneral {
          logo {
            alt
            gatsbyImageData(height: 125)

          }
        }
      }
    `)
  return (
    <>
    <nav className=" w-12/12 m-auto  flex justify-between items-center">
      <article className="flex gap-x-10 items-center">
        <Link to="/">
        <figure>
        <GatsbyImage image={data.datoCmsGeneral.logo.gatsbyImageData} alt={data.datoCmsGeneral.logo.alt} />

        </figure>
        </Link>
      </article>
      <article className="hidden md:block">
       <NavBarLink />
      </article>
      <article className="md:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 mr-2 py-2 border rounded  border-black hover:text-black hover:border-black"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        </article>
    </nav>
    <article className="md:hidden">
      <div
      className={`${
        isExpanded ? `block` : `hidden`
      } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
    >
      <section className="w-10/12 m-auto justify-between text-center items-center py-2 md:flex ">
      <NavBarLink />
      </section>
  </div>
  </article>
  </>
  );
};

export default Navbar;
