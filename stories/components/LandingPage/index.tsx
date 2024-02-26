import {BannerSlider} from '../BannerSlider';
import {LandingSection2} from '../LandingSection2';
import {Marquesina} from '../Marquesina';
import {ServiceCard} from '../ServiceCard';
import {InfoCard} from '../InfoCard';
import {ProyectSlider} from '../ProyectSlider';
import {Button} from '../button';
import React from 'react';
import {useState} from 'react';
import Text from '../../../src/texts/landing.json';

export function LandingPage() {
  const [show, useShow] = useState(false);
  const showCard = () => {
    if (show)
      return (
        <ServiceCard
          title="Kickstar"
          subtitle="Branding Package"
          price="1,980.00"
          time="¡Pack listo en 2 semanas!"
          servicesList={[
            '30-Min Zoom Meeting',
            'Branding',
            'Logo',
            'Brand Guidelines',
          ]}
          dues="o 4 cuotas de $495.00 with afterpay"
          include={[
            {
              title: '2 Opciones de logo.',
              description: '',
            },
            {
              title: '2 Rondas de revisiones de logo',
              description: '',
            },
            {
              title: 'Brand Guidelines PDF:',
              description:
                'Concepto de estilo de marca con logo, tipografías, colores.',
            },
            {
              title: '3 piezas de diseño a definir.',
              description:
                '(business cards, thank you card, stickers, etiquetas, hojas membretadas, artes sencillos).',
            },
            {
              title: 'Social Media Assets:',
              description:
                'Logo para perfil, cover para Facebook, Youtube o Linkedin.',
            },
            {
              title: 'Entrega de Brand Kit:',
              description:
                'Logo, tipografía y piezas de diseños en archivos editables.',
            },
          ]}
        />
      );

    return (
      <ServiceCard
        title="Launchboost"
        subtitle="Branding Package"
        price="3,800.00"
        time="¡Pack listo en 2 semanas!"
        servicesList={[
          '30-Min Zoom Meeting',
          'Branding',
          'Logo',
          'Brand Guidelines',
        ]}
        dues="o 4 cuotas de $495.00 with afterpay"
        include={[
          {
            title: '2 Opciones de logo.',
            description: '',
          },
          {
            title: '2 Rondas de revisiones de logo',
            description: '',
          },
          {
            title: 'Brand Guidelines PDF:',
            description:
              'Concepto de estilo de marca con logo, tipografías, colores.',
          },
          {
            title: '3 piezas de diseño a definir.',
            description:
              '(business cards, thank you card, stickers, etiquetas, hojas membretadas, artes sencillos).',
          },
          {
            title: 'Social Media Assets:',
            description:
              'Logo para perfil, cover para Facebook, Youtube o Linkedin.',
          },
          {
            title: 'Entrega de Brand Kit:',
            description:
              'Logo, tipografía y piezas de diseños en archivos editables.',
          },
        ]}
      />
    );
  };

  return (
    <div className="w-screen h-full p-0 overscroll-x-none overflow-hidden">
      <BannerSlider
        images={[
          '/banner02.webp',
          '/banner07.webp',
          '/banner03.webp',
          '/banner04.webp',
          '/banner05.webp',
          '/banner06.webp',
          '/banner01.webp',
        ]}
      />
      <div className="flex h-[63px] w-full lg:w-[100svw] bg-black overflow-hidden flex-nowrap">
        <div className="flex flex-row w-full items-center justify-center space-x-[30px] lg:space-x-[80px]">
          <img src="/STAR-v1.svg" alt="no-source" />
          <p
            className={`flex text-[12px] lg:text-[16px]   uppercase text-white`}
          >
            the brand of your dreams
          </p>
          <img src="/STAR-v1.svg" alt="no-source" />
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <img
          src={'/ImagesLanding2.webp'}
          className="object-cover w-full lg:w-[50%]"
          alt="no source"
        />
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start py-[80px] lg:py-[2vw] px-[6vw]">
          <h1 className="text-black mb-[18vh]">
            Hola,
            <br /> soy Gaby!
          </h1>
          <Button
            styles="bg-black text-white p-2 rounded rounded-full h-10 max-w-[203px] border border-solid border-black mb-[12vh]"
            label="@brandwithgaby"
          />
          <p className="leading-[25px] lg:leading-[2svw] text-black max-w-[331px] lg:max-w-[470px]">
            Todos sabemos que empezar un nuevo proyecto no es fácil. No solo
            significa tener un dream de emprender con algo, sino también
            ejecutarlo. A veces, la procrastinación nos gana, pero otras, es
            nuestro budget el que nos frena.
            <br /> <br />
            Por eso, he creado estos dos packages que son ideales para ti, para
            darte ese boost y empezar a darle vida a tu sueño.
          </p>
        </div>
      </div>
      <div className="flex bg-[#EBECE7] w-full h-[1650px] space-y-[80px] flex-col justify-center items-center">
        <div className="flex flex-col space-y-[30px] justify-center items-center">
          <h2 className="max-w-[342px] lg:max-w-none text-center mt-[50px]">
            Create your dream brand with me!
          </h2>
          <p className="max-w-[342px] lg:max-w-none leading-[20px] lg:leading-[1.5svw] text-center">
            Si estás listx para dejar atrás las excusas y comenzar con tu marca,
            esto te va a interesar.
          </p>
        </div>
        <div className="lg:hidden w-full flex flex-row justify-center items-center space-x-[40px] py-[30px]">
          <Button
            styles={`${
              show ? 'bg-none text-black' : 'bg-black text-white'
            } p-2 rounded rounded-full h-10 w-full max-w-[173px] lg:max-w-[203px] border border-solid border-black `}
            label="Kickstar"
            onClick={() => useShow(true)}
          />
          <Button
            styles={`${
              !show ? 'bg-none text-black' : 'bg-black text-white'
            } p-2 rounded rounded-full h-10 w-full max-w-[173px] lg:max-w-[203px] border border-solid border-black `}
            label="Launchboost"
            onClick={() => useShow(false)}
          />
        </div>
        <div className="h-full flex lg:hidden flex-row justify-center items-center">
          {showCard()}
        </div>
        <div className="mt-[90px] max-h-[1298px] h-full hidden lg:flex flex-row space-x-[80px] justify-center items-center">
          <ServiceCard
            title="Kickstar"
            subtitle="Branding Package"
            price="1,980.00"
            time="¡Pack listo en 2 semanas!"
            servicesList={[
              '30-Min Zoom Meeting',
              'Branding',
              'Logo',
              'Brand Guidelines',
            ]}
            dues="o 4 cuotas de $495.00 with afterpay"
            include={[
              {
                title: '2 Opciones de logo.',
                description: '',
              },
              {
                title: '2 Rondas de revisiones de logo',
                description: '',
              },
              {
                title: 'Brand Guidelines PDF:',
                description:
                  'Concepto de estilo de marca con logo, tipografías, colores.',
              },
              {
                title: '3 piezas de diseño a definir.',
                description:
                  '(business cards, thank you card, stickers, etiquetas, hojas membretadas, artes sencillos).',
              },
              {
                title: 'Social Media Assets:',
                description:
                  'Logo para perfil, cover para Facebook, Youtube o Linkedin.',
              },
              {
                title: 'Entrega de Brand Kit:',
                description:
                  'Logo, tipografía y piezas de diseños en archivos editables.',
              },
            ]}
          />
          <ServiceCard
            title="LaunchBoost"
            subtitle="Branding + Landing Page Package"
            price="3,800.00"
            time="¡Pack listo en 4 semanas!"
            servicesList={[
              '30-Min Zoom Meeting Branding',
              'Logo',
              'Brand Guidelines',
              '30-Min Zoom Meeting Landing Page',
              'Landing Page',
            ]}
            dues="o 4 cuotas de $950.00 with afterpay"
            include={[
              {
                title: 'Website Consultation.',
                description: '',
              },
              {
                title: 'Vistas previas de estilo del sitio web.',
                description: '',
              },
              {
                title: 'Refinamiento y aprobación',
                description: '',
              },
              {
                title: 'Lanzamiento: tu marca on line. ',
                description:
                  'El dominio y hospedaje corre por parte del cliente.',
              },
            ]}
          />
        </div>
      </div>
      <Marquesina text={Text.marquee.titles} />
      <div className="flex bg-white w-full h-full lg:h-[950px] space-y-[80px] flex-col justify-center items-center">
        <div className="flex flex-col space-y-[30px] mt-[90px] lg:mt-[140px] justify-center items-center">
          <h2 className="max-w-[276px] lg:max-w-none text-center">
            Como saber si es para tí.
          </h2>
          <p className="max-w-[359px] lg:max-w-[897px]  lg:max-w-none leading-[20px] lg:leading-[1.5svw] text-center">
            No es para todos, lo entendemos. La idea es que empieces tu marca
            con una base sólida y hagas crecer esos sueños.
            <br className="flex lg:hidden" /> <br className="flex lg:hidden" />{' '}
            <br className="flex lg:hidden" />
            Te dejo una lista de los sí y de los no para saber si estos
            productos son para tí
          </p>
        </div>
        <div className="h-full flex flex-col lg:flex-row lg:space-x-[80px] justify-center items-center">
          <InfoCard
            title="Este paquete SI es para ti, sí: "
            description={[
              'Si sueñas con una marca que refleje tu grandeza y brille con autenticidad.',
              'Perfecto para quienes comienzan su marca personal o para small brands que quieren establecer una identidad sólida desde el principio, creando la base para un crecimiento continuo.',
              'Si estás en la búsqueda de un precio accesible sin sacrificar la calidad del diseño, este paquete ofrece un equilibrio perfecto entre asequibilidad y excelencia creativa.',
            ]}
          />
          <InfoCard
            title="Este paquete NO es para ti, si: "
            left={false}
            description={[
              'Te gusta vivir en la procrastinación y no te importa la imagen que proyecta tu marca y cómo te ven tus clientes.',
              'Si no estás dispuesto a invertir en el desarrollo y fortalecimiento de tu marca.',
              'Si tu proyecto es más grande y necesita estrategias de branding más avanzadas y personalizadas. Te sugerimos explorar nuestras soluciones especializadas con nuestro Big Boss en arquetipo.us',
            ]}
          />
        </div>
      </div>
      <div className="flex bg-white w-full h-full py-[70px] space-y-[10px] flex-col justify-center items-center">
        <img src="/Q&A-logo.svg" alt="no-source" />
        <p className="underline cursor-pointer">Preguntas frecuentes</p>
      </div>
      <div className="flex h-[63px] w-full lg:w-[100svw] bg-black overflow-hidden flex-nowrap">
        <div className="flex flex-row w-full items-center justify-center space-x-[30px] lg:space-x-[80px]">
          <img src="/STAR-v1.svg" alt="no-source" />
          <p
            className={`flex text-[12px] lg:text-[16px]   uppercase text-white`}
          >
            the brand of your dreams
          </p>
          <img src="/STAR-v1.svg" alt="no-source" />
        </div>
      </div>
      <div className="flex bg-[#EBECE7] w-full min-h-[560px] lg:min-h-[810px] space-y-[120px] flex-col justify-center items-center">
        <h2 className="hidden lg:flex">
          They said yes to doing their brands with me!
        </h2>
        <ProyectSlider
          images={[
            '/portfolio01.webp',
            '/portfolio02.webp',
            '/portfolio03.webp',
            '/portfolio04.webp',
          ]}
        />
      </div>
    </div>
  );
}
