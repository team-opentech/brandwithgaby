import {useLayoutEffect, useState} from 'react';

interface ProyectSliderProps {
  images?: string[];
}

export const ProyectSlider = ({images}: ProyectSliderProps) => {
  const [current, setCurrent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % (images?.length || 1));
    }, 1700); // Esperamos la duración de la animación antes de cambiar a la siguiente imagen

    return () => clearInterval(interval);
  }, [current]);

  useLayoutEffect(() => {
    // Pre-cargar la primera imagen para evitar el retraso en la primera animación
    if (images && images.length > 0) {
      const img = new Image();
      img.src = images[0];
      img.onload = () => setIsLoading(false);
    }
  }, [images]);

  const nextImageIndex = (current + 1) % (images?.length || 1);
  return (
    <div className="flex flex-1 flex-col max-w-2xl self-center relative">
      <div className="self-center relative flex space-x-[50px]">
        <div className="w-max flex flex-row animate-marquee space-x-[50px]">
          {images?.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`banner-${index}`}
                className={`w-[282.68px] rounded-[6%] lg:w-[380px] h-full max-h-[327.31px] lg:max-h-[440px] object-cover object-center`}
              />
            </div>
          ))}
        </div>
        <div className="w-max absolute top-0 flex flex-row animate-marquee2  space-x-[50px]">
          {images?.map((img, index) => (
            <div key={index}>
              <img
                src={img}
                alt={`banner-${index}`}
                className={`w-[282.68px] rounded-[6%] lg:w-[380px] h-full max-h-[327.31px] lg:max-h-[440px] object-cover object-center`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

//Resources
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

const righArrow = () => {
  return (
    <svg
      width="29"
      height="23"
      viewBox="0 0 29 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 1L28 12.5L15 22.5" stroke="black" />
      <line x1="28" y1="12.5" x2="-4.37112e-08" y2="12.5" stroke="black" />
    </svg>
  );
};
