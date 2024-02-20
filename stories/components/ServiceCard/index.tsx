import {Button} from '../button';

export const ServiceCard = () => {
  return (
    <div className="w-full max-w-[354px] rounded rounded-lg lg:max-w-[419px] h-full max-h-[919px] flex flex-col justify-center items-center">
      <div className="w-full bg-black rounded-t-lg p-[2vw] flex flex-col justify-center items-start">
        <h3 className="text-white"> Kickstart </h3>
        <h4 className="text-white"> Branding Package</h4>
      </div>
      <div className="w-full bg-white p-[2vw] border border-b-black flex flex-col justify-center items-start">
        <p className="text-black leading-[35px]">30-Min Zoom Meeting</p>
        <p className="text-black leading-[35px]">Branding</p>
        <p className="text-black leading-[35px]">Logo</p>
        <p className="text-black leading-[35px]">Brand Guidelines</p>
      </div>
      <div className="w-full bg-white p-[2vw] flex flex-col justify-center items-start border border-b-black">
        <p className="text-black font-bold text-[26px] leading-[35px]">
          $1,980.00
        </p>
        <p className="text-[#9B9B9B] leading-[35px]">
          o 4 cuotas de $495.00 with afterpay
        </p>
      </div>
      <div className="w-full bg-white p-[2vw] flex flex-col justify-center items-start border border-b-black">
        <p className="text-black">Incluye:</p>
        <div className="w-full space-x-[25px] flex flex-row justify-start items-center">
          <img src="/STAR-v2.svg" alt="*" />
          <p className="leading-[25px]">
            {' '}
            <span className="text-black">Brand Guidelines PDF:</span>{' '}
            <span className="text-[#9B9B9B]">
              {' '}
              Concepto de estilo de marca con logo, tipografías, colores.{' '}
            </span>{' '}
          </p>
        </div>
        <div className="w-full space-x-[25px] flex flex-row justify-start items-center">
          <img src="/STAR-v2.svg" alt="*" />
          <p className="leading-[25px]">
            {' '}
            <span className="text-black">Brand Guidelines PDF:</span>{' '}
            <span className="text-[#9B9B9B]">
              {' '}
              Concepto de estilo de marca con logo, tipografías, colores.{' '}
            </span>{' '}
          </p>
        </div>
        <div className="w-full space-x-[25px] flex flex-row justify-start items-center">
          <img src="/STAR-v2.svg" alt="*" />
          <p className="leading-[25px]">
            {' '}
            <span className="text-black">Brand Guidelines PDF:</span>{' '}
            <span className="text-[#9B9B9B]">
              {' '}
              Concepto de estilo de marca con logo, tipografías, colores.{' '}
            </span>{' '}
          </p>
        </div>
      </div>
      <div className="w-full bg-white p-[2vw] rounded-b-lg flex flex-col justify-center items-start space-y-[20px]">
        <div className="w-full space-x-[25px] flex flex-row justify-start items-center">
          <img src="/clock.svg" alt="*" />
          <p className="text-black">¡Pack listo en 2 semanas!</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <Button
            styles="hidden lg:flex justify-center bg-black text-white p-2 rounded rounded-full h-10 w-full max-w-[203px] border border-solid border-black"
            label="¡Comencemos!"
          />
        </div>
      </div>
    </div>
  );
};
