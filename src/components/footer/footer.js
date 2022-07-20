import React from "react";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo"
import SectionThree from "./sectionThree";
const Footer = () => {

  return (
    <footer className="block w-12/12   bg-primary-color text-white ">
<article className=" w-10/12 md:m-auto py-20 px-3 md:px-0 gap-y-10 flex items-top flex-col md:grid grid-cols-4">
<SectionOne />
<SectionTwo />
<SectionThree />
</article>
<p className="w-10/12 text-center text-xs m-auto">Ferréole</p>
<p className="w-10/12 text-center text-xs m-auto">site réalisé par <a className="text-xs" href="https://liono.be/" target="_blankl">Liono</a></p>
    </footer>

  );
};

export default Footer;