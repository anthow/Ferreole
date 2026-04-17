import React from "react";
import { useStaticQuery, graphql } from "gatsby"

const Timeline = () => {
  const data = useStaticQuery(graphql`
    {
      datoCmsProjetDeFerriere {
        ligneDuTempsEtapeUn
        ligneDuTempsEtapeDeux
        ligneDuTempsEtapeTrois
        ligneDuTempsEtapeQuatre
        ligneDuTempsEtapeCinq
        ligneDuTempsEtapeSix
        titreSectionAvance
      }
    }
  `);
  return (
    <article className="flex flex-col space-y-20">
      <h2 className="text-center text-4xl text-secondary-color">     

        {data.datoCmsProjetDeFerriere.titreSectionAvance}{" "}
      </h2>
      <p className="text-center text-primary-color">Timing provisoire</p>
      <div className="container  mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute timeline border-opacity-20 border-red-700 h-full border"
            style={{ left: "50%" }}
          ></div>
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-lg text-white">
                1
              </span>
            </div>
            <div className="order-1  rounded-lg shadow-xl w-5/12 px-6 py-4">
              
              <div className="text-sm leading-snug tracking-wide text-primary-color text-opacity-100"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.ligneDuTempsEtapeUn
          }}
        /> 
            </div>
          </div>

          {/* left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-lg text-white">
                2
              </span>
            </div>
            <div className="order-1 color shadow-xl  w-5/12 px-6 py-4">
            <div className="text-sm leading-snug tracking-wide text-primary-color text-opacity-100"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.ligneDuTempsEtapeDeux
          }}
        /> 
            </div>
          </div>

          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <span className="mx-auto font-semibold text-lg text-white">
                3
              </span>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div className="text-sm leading-snug tracking-wide text-primary-color text-opacity-100"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.ligneDuTempsEtapeTrois
          }}
        /> 
            </div>
          </div>

          {/*left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-lg text-white">
                4
              </span>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div className="text-sm leading-snug tracking-wide text-primary-color text-opacity-100"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.ligneDuTempsEtapeQuatre
          }}
        /> 
            </div>
          </div>
          {/* right timeline */}
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <span className="mx-auto font-semibold text-lg text-white">
                            5
              </span>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div className="text-sm leading-snug tracking-wide text-primary-color text-opacity-100"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.ligneDuTempsEtapeCinq    
          }}
        /> 
            </div>
          </div>

          {/*left timeline */}
          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <span className="mx-auto font-semibold text-lg text-white">
                6
              </span>
            </div>
            <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <div className="text-sm leading-snug tracking-wide text-primary-color text-opacity-100"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsProjetDeFerriere.ligneDuTempsEtapeSix    
          }}
        /> 
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Timeline;
