import React from "react";

const SectionOne = () => {
  return (
    <article className=" col-span-2 w-10/12">
      <h4 className="text-2xl font-black mb-5">Newsletter</h4>
      <form className="flex w-max">
        <input type="text" className="p-2" />
        <input type="submit" value="envoyer" nom="envoyer" className=" border text-white p-2" />
      </form>
    </article>
  );
};

export default SectionOne;