import { Button } from "../button";
import ImgLanding from "../../../public/ImagesLanding2.webp";

interface LandingSection2Props {
  title: Element;
  src: string;
  description: Element;
  onClick?: () => void;
}

export const LandingSection2 = ({
  title,
  src,
  description,
}: LandingSection2Props) => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center">
      <img
        src={src}
        className="object-cover w-full lg:w-[50%]"
        alt="no source"
      />
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-start p-[6vw]">
        <h1 className="text-black mb-[18vh]">
          Hola,
          <br /> soy Gaby!
        </h1>
        <Button
          styles="bg-black text-white p-2 rounded rounded-full h-10 max-w-[203px] border border-solid border-black mb-[12vh]"
          label="@brandwithgaby"
        />
        <p className="text-black max-w-[331px] lg:max-w-[470px]">
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
  );
};
