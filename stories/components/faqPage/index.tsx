import data from '../../../src/texts/faq.json';
import {Acordeon} from '../Acordeon';

export const faqPage = () => {
  return (
    <div className="bg-white w-full h-full lg:p-[10svw] flex flex-col justify-center items-center space-y-[4svw]">
      <div className="flex flex-col justify-center items-center w-full space-y-[2svw]">
        <img src="/Q&A-logo.svg" alt="no-source" />
        <h1 className="underline"> Preguntas Frecuentes </h1>
      </div>
      <div className="w-full w-full max-w-[380px] lg:max-w-[687px] flex flex-col justify-center items-center">
        {data.FAQ.map((acord, index) => (
          <Acordeon key={index} title={acord.question}>
            <div className="w-full px-[10px] py-[10px] flex-col justify-center items-center space-y-[0.5svw]">
              <p>{acord.answer}</p>
              {acord.list?.map((point, i) => (
                <p key={i}>* {point}</p>
              ))}
              <p>{acord.afterAnswer}</p>
            </div>
          </Acordeon>
        ))}
      </div>
    </div>
  );
};
