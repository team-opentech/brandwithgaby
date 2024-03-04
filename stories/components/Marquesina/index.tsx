interface MarquesinaProps {
  text: string[];
}

export const Marquesina = ({ text }: MarquesinaProps) => {
  return (
    <div className="flex flex-1 flex-row h-[63px] w-[100svw] bg-black overflow-hidden flex-nowrap">
      <div className="animate-marquee flex flex-row w-max justify-evenly items-center flex-mowrap">
        {text.map((t, index) => (
          <div
            key={index}
            className="flex flex-row justify-evenly items-center flex-nowrap"
          >
            <h6
              key={index}
              className={`flex flex-1 w-max h-[46px] text-white text-center tracking-[1rem] flex-nowrap uppercase`}
            >
              {t}
            </h6>
            <Icon />
          </div>
        ))}
      </div>
      <div className="animate-marquee flex flex-row w-max justify-evenly items-center flex-mowrap">
        {text.map((t, index) => (
          <div
            key={index}
            className="flex flex-row justify-evenly items-center flex-nowrap"
          >
            <h6
              key={index}
              className={`flex flex-1 w-max h-[46px] text-white text-center tracking-[1rem] flex-nowrap uppercase`}
            >
              {t}
            </h6>
            <Icon />
          </div>
        ))}
      </div>
    </div>
  );
};

const Icon = () => {
  return (
    <svg
      width="24"
      height="37"
      viewBox="0 0 24 37"
      fill="none"
      className="mr-4"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="37" fill="#434343" />
    </svg>
  );
};
