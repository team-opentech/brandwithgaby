interface MarquesinaProps {
  text: string[];
}

export const Marquesina = ({text}: MarquesinaProps) => {
  return (
    <div className="flex h-[63px] w-[100svw] bg-black overflow-hidden flex-nowrap">
      <div className="animate-marquee flex flex-row w-[5000px] justify-center">
        {text.map((t, index) => (
          <span
            key={index}
            className="flex flex-row justify-center items-center"
          >
            <p
              className={`flex w-[222px] lg:w-[232px] h-[46px] text-white text-right`}
            >
              {t}
            </p>
            <Icon />
          </span>
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
