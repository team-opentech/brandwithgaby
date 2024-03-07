import {Link, useLoaderData, type MetaFunction} from '@remix-run/react';
import data from '../../src/texts/faq.json';
import {Acordeon} from '../../stories/components/Acordeon';

export const meta: MetaFunction = () => {
  return [{title: `Brand with Gaby | FAQ`}];
};

export default function Faq() {
  return (
    <div className="relative bg-white w-full h-full pt-[30%] lg:p-[10svw] flex flex-col justify-center items-center space-y-[4svw]">
      <div className="flex flex-col justify-center items-center w-full space-y-[2svw] mb-12 lg:mb-0">
        <img src="/Q&A-logo.svg" alt="no-source" />
        <h3 className="underline text-center lg:hidden">
          {' '}
          Preguntas Frecuentes{' '}
        </h3>
        <h1 className="underline text-center hidden lg:flex">
          {' '}
          Preguntas Frecuentes{' '}
        </h1>
      </div>
      <div className="w-full max-w-[380px] lg:max-w-[687px] flex flex-col justify-center items-center">
        {data.FAQ.map((acord, index) => (
          <Acordeon
            key={index}
            title={acord.question}
            last={index === data.FAQ.length - 1 ? true : false}
          >
            <div className="w-full px-[10px] pt-[3%] pb-[1%] flex-col justify-center items-center space-y-[25px] text-left">
              <p id="faqa">{acord.answer}</p>
              <ul className="ml-[20px] list-disc">
                {acord.list?.map((point, i) => (
                  <li key={i}>
                    <p id="faqa">{point}</p>
                  </li>
                ))}
              </ul>
              <p id="faqa">
                {acord.afterAnswer}{' '}
                <a className="underline" href={acord.link?.url}>
                  {acord.link?.text}
                </a>
              </p>
            </div>
          </Acordeon>
        ))}
      </div>
    </div>
  );
}

const leftArrow = () => {
  return (
    <svg
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M14 22.5L1 11L14 1" stroke="black" />
      <line x1="1" y1="11" x2="29" y2="11" stroke="black" />
    </svg>
  );
};
