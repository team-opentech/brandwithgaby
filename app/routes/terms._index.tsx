import {Link, useLoaderData, type MetaFunction} from '@remix-run/react';
import data from '../../src/texts/terms.json';

export const meta: MetaFunction = () => {
  return [{title: `Brand with Gaby | FAQ`}];
};

export default function Terms() {
  return (
    <div className="flex flex-col justify-center items-center w-full space-y-[5svh] lg:space-y-[2svh] bg-[#EBECE7]">
      <h1 className="text-center mt-[25%] lg:mt-[10%]"> {data.terms.title} </h1>
      <br />
      <h4 className="w-full max-w-[369px] lg:max-w-[786px] flex justify-center items-center tracking-normal">
        {data.terms.intro}
      </h4>
      <div className="w-full max-w-[369px] lg:max-w-[786px] flex flex-col justify-center items-center">
        {data.terms.list.map((term, index) => (
          <div key={index} className="w-full flex flex-col">
            <h4 className="tracking-wide"> {term.title} </h4>
            <h4 className="tracking-normal"> {term.content} </h4>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}
