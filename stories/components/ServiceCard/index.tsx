import {Button} from '../button';
import parse, {domToReact} from 'html-react-parser';
import React from 'react';

interface ServiceCardProps {
  title: string;
  subtitle: string;
  servicesList: string; // Para aceptar HTML de descriptionHtml
  price: string;
  dues: string;
  include: string; // Ahora es una string directamente
  time: string;
}

export const ServiceCard = ({
  title,
  subtitle,
  servicesList,
  price,
  dues,
  include,
  time,
}: ServiceCardProps) => {
  // Función para transformar los elementos <li> y agregar SVG

  const transformInclude = (node) => {
    if (node.type === 'tag' && node.name === 'li') {
      return (
        <li className="flex w-full flex-row">
          <img
            className="flex self-baseline pt-1"
            src="/STAR-v2.svg"
            alt="Star"
            style={{marginRight: '5px'}}
          />
          {domToReact(node.children)}
        </li>
      );
    }
  };
  const includesContent = typeof include === 'string' ? include : '';
  // Parsear 'include' para transformar los elementos <li>
  const includesWithSVG = parse(includesContent, {replace: transformInclude});
  return (
    <div className="h-full w-full max-w-[354px] rounded-lg lg:max-w-[419px] flex flex-col pb-12">
      <div className="w-full bg-black rounded-t-lg p-[3vw] lg:p-[2vw] flex flex-col justify-center items-start">
        <h3 className="text-white capitalize"> {title} </h3>
        <h4 className="text-white"> {subtitle}</h4>
      </div>
      <div className="h-[50%] 2xl:min-h-[18svw] w-full bg-white p-[3vw] lg:p-[1vw] border border-b-black flex flex-col justify-start items-start">
        <div
          className="font-Inter font-[400] text-[16px] leading-[27px]"
          dangerouslySetInnerHTML={{__html: servicesList}}
        />
      </div>
      <div className="w-full bg-white p-[3vw] lg:p-[1vw] flex flex-col justify-center items-start border border-b-black">
        <p className="text-black font-bold text-[26px] leading-[35px]">
          ${price}
        </p>
        <p className="text-[#9B9B9B] leading-[35px]">{dues}</p>
      </div>
      <div className="h-full w-full bg-white p-[3vw] lg:p-[1vw] flex flex-col justify-start items-start border border-b-black">
        <div id="dues" className="font-Inter font-[500] text-[13px] leading-[27px]">
          {includesWithSVG}
        </div>
      </div>
      <div className="w-full bg-white p-[3vw] lg:p-[1vw] rounded-b-lg flex flex-col justify-center items-start space-y-[20px]">
        <div className="w-full space-x-[25px] flex flex-row justify-start items-center">
          <img src="/clock.svg" alt="*" />
          <p className="text-black">{time}</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Button
            styles="justify-center bg-black text-white p-2 rounded rounded-full h-10 w-full max-w-[203px] border border-solid border-black"
            label="¡Comencemos!"
          />
        </div>
      </div>
    </div>
  );
};
