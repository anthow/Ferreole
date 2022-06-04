/* This example requires Tailwind CSS v2.0+ */
import React,{ Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Layout from '../components/layout'
import { graphql } from "gatsby";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 const  Example= ({data}) =>
 <Layout>
   <h1 className=" text-center m-auto text-3xl text-secondary-color  font-black mb-5 md:mb-10">
        {" "}
        FAQ{" "}
      </h1>
      <article className="pb-10 w-10/12 m-auto flex-flex-col gap-y-10">
      {data.allDatoCmsFaq.edges.map(({ node }) => {
return <Menu as="div" className="  flex flex-col gap-y-5 border mb-10">
      <div>
        <Menu.Button className="bg-primary-color w-full flex  justify-between px-2
      ">
              <h3 className="text-xl p-2 font-black bg-primary-color text-white "> {node.question}</h3>

          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-white" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="">
          <div className="">
            <Menu.Item>
              {({ active }) => (
               <div className="mb-2 p-2"
               dangerouslySetInnerHTML={{
                 __html: node.reponse
               }}
             />
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    })}
</article>
    </Layout>
export const query = graphql`
{
  allDatoCmsFaq(sort: { order: ASC, fields: id }) {
    edges {
      node {
        question
        reponse
      }
    }
  }
}
`

export default Example
