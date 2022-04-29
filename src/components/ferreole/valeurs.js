import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const Valeurs = () => {
  const data = useStaticQuery(graphql`
 {
      datoCmsPageFerreole {
        imageValeurUn {
          gatsbyImageData (height: 50, width: 50)
          alt
        }
        imageValeurDeux {
          alt
          gatsbyImageData(height: 50, width: 50)
        }
        imageValeurTrois {
          alt
          gatsbyImageData(height: 50, width: 50)
        }
        imageValeurQuatre {
          alt
          gatsbyImageData(height: 50, width: 50)
        }
        imageValeurCinq {
          alt
          gatsbyImageData(height: 50, width: 50)
        }
        titreValeurUne
        titreValeurDeux
        titreValeurTrois
        titreValeurQuatre
        titreValeurCinq
        texteValeurUn
        texteValeurDeux
        texteValeurTrois
        texteValeurQuatre
        texteValeurCinq
      }
    }
  `)
  return  <article className="py-10 text-white bg-primary-color">
  <h2 className="text-2xl mb-10 text-white text-center">Nos valeurs </h2>

  <section className=" w-10/12 m-auto flex flex-col md:grid grid-cols-3 gap-20 items-center justify-center">
    <div className=" flex items-center  flex-col">
      <GatsbyImage image={data.datoCmsPageFerreole.imageValeurUn.gatsbyImageData}
      alt={data.datoCmsPageFerreole.imageValeurUn.alt}
      className='mb-5'
      />
      <div className="text-white flex gap-y-2 flex-col text-center">
        <h3 className="text-xl">{data.datoCmsPageFerreole.titreValeurUne}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteValeurUn
          }}
        />
      </div>
    </div>

    <div className=" flex items-center  flex-col">
      <GatsbyImage image={data.datoCmsPageFerreole.imageValeurDeux.gatsbyImageData}
      alt={data.datoCmsPageFerreole.imageValeurDeux.alt}
      className='mb-5'
      />
      <div className="text-white flex gap-y-2 flex-col text-center">
        <h3 className="text-xl">{data.datoCmsPageFerreole.titreValeurDeux}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteValeurDeux
          }}
        />
      </div>
    </div>

    <div className=" flex items-center  flex-col">
      <GatsbyImage image={data.datoCmsPageFerreole.imageValeurTrois.gatsbyImageData}
      alt={data.datoCmsPageFerreole.imageValeurTrois.alt}
      className='mb-5'
      />
      <div className="text-white flex gap-y-2 flex-col text-center">
        <h3 className="text-xl">{data.datoCmsPageFerreole.titreValeurTrois}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteValeurTrois
          }}
        />
      </div>
    </div>

    <div className=" flex items-center  flex-col">
      <GatsbyImage image={data.datoCmsPageFerreole.imageValeurQuatre.gatsbyImageData}
      alt={data.datoCmsPageFerreole.imageValeurQuatre.alt}
      className='mb-5'
      />
      <div className="text-white flex gap-y-2 flex-col text-center">
        <h3 className="text-xl">{data.datoCmsPageFerreole.titreValeurQuatre}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteValeurQuatre
          }}
        />
      </div>
    </div>
    <div className=" flex items-center  flex-col">
      <GatsbyImage image={data.datoCmsPageFerreole.imageValeurCinq.gatsbyImageData}
      alt={data.datoCmsPageFerreole.imageValeurCinq.alt}
      className='mb-5'
      />
      <div className="text-white flex gap-y-2 flex-col text-center">
        <h3 className="text-xl">{data.datoCmsPageFerreole.titreValeurCinq}</h3>
        <div className=""
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageFerreole.texteValeurCinq
          }}
        />
      </div>
    </div>
  </section>
</article>
}

export default Valeurs



