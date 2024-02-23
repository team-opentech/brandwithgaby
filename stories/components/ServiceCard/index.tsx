import {Button} from '../button';

interface ServiceCard {
  title: string;
  subtitle: string;
  servicesList: any;
  price: string;
  dues: string;
  include: any;
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
}: ServiceCard) => {
  return (
    <div className="w-full max-w-[354px] rounded-lg lg:max-w-[419px] h-full flex flex-col pb-12">
      <div className="w-full bg-black rounded-t-lg p-[3vw] lg:p-[2vw] flex flex-col justify-center items-start">
        <h3 className="text-white"> {title} </h3>
        <h4 className="text-white"> {subtitle}</h4>
      </div>
      <div className="w-full bg-white p-[3vw] lg:p-[2vw] border border-b-black flex flex-col justify-center items-start">
        {servicesList.map((service, index) => (
          <p key={index} className="text-black leading-[35px]">
            {service}
          </p>
        ))}
      </div>
      <div className="w-full bg-white p-[3vw] lgp-[2vw] flex flex-col justify-center items-start border border-b-black">
        <p className="text-black font-bold text-[26px] leading-[35px]">
          ${price}
        </p>
        <p className="text-[#9B9B9B] leading-[35px]">{dues}</p>
      </div>
      <div className="w-full bg-white p-[3vw] lgp-[2vw] flex flex-col justify-center items-start border border-b-black">
        <p className="text-black">Incluye:</p>
        {include.map((item, i) => (
          <div
            key={i}
            className="w-full space-x-[25px] flex flex-row justify-start items-center"
          >
            <img src="/STAR-v2.svg" alt="*" />
            <p className="leading-[25px]">
              {' '}
              <span className="text-black">{item.title}</span>{' '}
              <span className="text-[#9B9B9B]">{item.description}</span>{' '}
            </p>
          </div>
        ))}
      </div>
      <div className="w-full bg-white p-[3vw] lgp-[2vw] rounded-b-lg flex flex-col justify-center items-start space-y-[20px]">
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
