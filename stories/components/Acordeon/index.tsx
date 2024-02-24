import React from 'react';

interface AcordeonProps {
  title: string;
  children: React.ReactNode;
}

export const Acordeon = ({title, children}: AcordeonProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={`flex flex-col w-full h-auto space-y-6 items-center justify-center`}
    >
      <button
        className="flex w-full border-y border-solid border-black p-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex flex-row w-full justify-between items-center">
          <h5>{title}</h5>
          <div
            className={`${
              isOpen
                ? 'rotate-180 transition-transform duration-500'
                : 'rotate-0 transition-transform duration-500'
            }`}
          >
            <DownArrow />
          </div>
        </span>
      </button>
      <h4
        className={`${
          isOpen
            ? 'h-auto opacity-100 transition-transform duration-500'
            : 'h-0 opacity-0 transition-transform duration-500'
        }`}
      >
        {isOpen && children}
      </h4>
    </div>
  );
};

const DownArrow = () => {
  return (
    <svg
      width="23"
      height="13"
      viewBox="0 0 23 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 1.08887L12 11.5889L1 1.08887" stroke="black" />
    </svg>
  );
};
