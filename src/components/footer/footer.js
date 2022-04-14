import React from "react";
import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo"
import SectionThree from "./sectionThree";
const Footer = () => {

  return (
    <footer className="block w-12/12   bg-gray-200 ">
<article className=" w-10/12 md:m-auto py-20 px-3 md:px-0 gap-y-10 flex items-top flex-col md:grid grid-cols-4">
<SectionOne />
<SectionTwo />
<SectionThree />
</article>
<p className="w-10/12 text-center m-auto">@Férréole</p>
    </footer>

  );
};

export default Footer;