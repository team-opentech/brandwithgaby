import {Button} from '../button';
import ImgLanding from '../../../public/ImagesLanding2.webp';

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
        <h1 className="text-black mb-[18vh]">{title}</h1>
        <Button
          styles="bg-black text-white p-2 rounded rounded-full h-10 max-w-[203px] border border-solid border-black mb-[12vh]"
          label="@brandwithgaby"
        />
        <p className="text-black max-w-[331px] lg:max-w-[470px]">
          {description}
        </p>
      </div>
    </div>
  );
};
