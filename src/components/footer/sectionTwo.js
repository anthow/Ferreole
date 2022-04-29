import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const SectionTwo = () => {
  return (
    <article className="flex flex-col gap-y-5">
      <h4 className="text-xl ">Férréole</h4>
      <p>
        Rue du Burnontige 20, <br />
        4190 Ferrières
      </p>

      <section className="">
        <ul className="flex gap-x-2 text-xl ">
          <li>
            {" "}
            <FontAwesomeIcon
              className="hover:text-secondary-color text-lg"
              icon={faEnvelope}
              size="1x"
            />
          </li>
          <li>
            <FontAwesomeIcon
              className="hover:text-secondary-color text-lg"
              icon={faFacebook}
              size="1x"
            />
          </li>
        </ul>
      </section>
    </article>
  );
};

export default SectionTwo;
