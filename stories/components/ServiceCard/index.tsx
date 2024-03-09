import {CartForm} from '@shopify/hydrogen';
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
  variantId: string;
  quantity: number;
  index: number;
}

export const ServiceCard = ({
  title,
  subtitle,
  servicesList,
  price,
  dues,
  include,
  time,
  variantId,
  quantity,
  index,
}: ServiceCardProps) => {
  // Función para transformar los elementos <li> y agregar SVG

  const transformInclude = (node) => {
    if (node.type === 'tag' && node.name === 'li') {
      return (
        <li className="block font-Inter">
          <img
            className="inline-flex self-baseline"
            src="/STAR-v2.svg" // Asegúrate de ajustar la ruta a tu SVG
            alt="Star"
            style={{marginRight: '5px'}}
          />
          {domToReact(node.children, {replace: transformInclude})}
        </li>
      );
    }
  };
  const includesContent = typeof include === 'string' ? include : '';
  // Parsear 'include' para transformar los elementos <li>
  const includesWithSVG = parse(includesContent, {replace: transformInclude});
  return (
    <div className="relative h-auto lg:h-[1053px] w-full max-w-[354px] rounded-xl lg:max-w-[419px] flex flex-col lg:mt-12">
      <img
        src={index === 0 ? '/Service-Icon-1.svg' : '/Service-Icon-2.svg'}
        alt="Logo"
        className={
          'hidden lg:flex lg:absolute top-[40px] right-[20%] w-[56px] lg:w-auto lg:top-[-7%] lg:right-[18%] transform translate-x-2/4 translate-y-2/4 z-10'
        }
      />
      <img
        src={
          title === 'kickstar' ? '/Service-Icon-1.svg' : '/Service-Icon-2.svg'
        }
        alt="Logo"
        className={
          'absolute top-[40px] right-[20%] w-[56px] lg:hidden transform translate-x-2/4 translate-y-2/4 z-10'
        }
      />
      <div className="w-full bg-black rounded-t-2xl p-[5%] lg:p-0  lg:px-[1.5vw] lg:py-[20.376px] flex flex-col justify-center items-start">
        <h2 className="text-white capitalize"> {title} </h2>
        <h4 className="text-white font-light"> {subtitle}</h4>
      </div>
      <div className="min-h-fit lg:min-h-[235px] w-full bg-white p-[5%] lg:p-0  lg:px-[1.5vw] lg:py-[20.376px]  border border-b-black flex flex-col justify-start items-start">
        <div
          id="servicesLists"
          dangerouslySetInnerHTML={{__html: servicesList}}
        />
      </div>
      <div className="w-full bg-white p-[5%] lg:px-[1.5vw] lg:py-[20.376px] lg:min-h-[215px] flex flex-col justify-center items-start border border-b-black">
        <h3 className="text-black font-normal text-[26px] leading-[35px]">
          ${price}
        </h3>
        <h4 className="text-[#9B9B9B] leading-[35px]">{dues}</h4>
      </div>
      <div className="h-full w-full bg-white p-[5%] lg:p-0 lg:px-[1.5vw] lg:py-[20.376px] lg:min-h-[425px] flex flex-col justify-start items-start border border-b-black">
        <div id="dues" className="font-Inter text-[13px] leading-[27px]">
          {includesWithSVG}
        </div>
      </div>
      <div className="w-full min-h-[190px] bg-white p-[5%] lg:p-0  lg:px-[1.5vw] lg:py-[20.376px]  rounded-b-2xl flex flex-col justify-center items-start space-y-[20px]">
        <div className="w-full space-x-[15px] flex flex-row justify-start items-center mx-auto">
          <img src="/clock.svg" alt="*" />
          <h4 className="text-black">{time}</h4>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Button
            styles="justify-center bg-black text-white p-3 rounded rounded-full h-12 w-full max-w-[265px] border border-solid border-black"
            label="¡Comencemos!"
            onClick={() => {
              window.location.href = `/cart/${variantId}:${quantity}`;
            }}
          />
        </div>
      </div>
    </div>
  );
};
