export const InfoCard = ({title, description, left = true}: InfoCardProps) => {
  // Función para procesar cada descripción y convertir "arquetipo.us" en un hipervínculo
  const processDescription = (desc: string) => {
    return desc.replace(
      /arquetipo.us/g,
      '<a href="http://arquetipo.us" target="_blank" rel="noopener noreferrer" style="text-decoration: underline; cursor: pointer;">arquetipo.us</a>',
    );
  };

  return (
    <div className="flex flex-col w-full h-full 2xl:max-w-[522px]">
      <div
        className={`flex flex-col items-start px-[7%] justify-center w-full h-auto rounded-[15px] py-[5%] ${
          left ? 'bg-black text-white' : 'bg-[#EBECE7] text-black'
        }`}
      >
        <h3 className="text-[22px] lg:text-[26px]">{title}</h3>
      </div>
      <div className="flex flex-col w-[90%] items-center justify-center space-y-8 my-12 mx-auto">
        {description.map((desc, index) => (
          <span key={index} className="flex flex-row w-full justify-center">
            {left ? (
              <div className="flex w-[10%] pt-2">
                <CheckBlack />
              </div>
            ) : (
              <div className="flex w-[10%] pt-2">
                <CrossBlack />
              </div>
            )}
            <h4
              className="text-left w-[85%]"
              dangerouslySetInnerHTML={{__html: processDescription(desc)}}
            ></h4>
          </span>
        ))}
      </div>
    </div>
  );
};

const CheckBlack = () => {
  return (
    <svg
      width="14"
      height="11"
      viewBox="0 0 14 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 5.68857L1.10373 4.46286L4.93776 8.54857L12.8672 0L14 1.22571L4.93776 11L0 5.68857Z"
        fill="black"
      />
    </svg>
  );
};

const CrossBlack = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.12717 10L0 8.86957L8.87283 0L10 1.13043L1.12717 10ZM8.87283 10L0 1.13043L1.12717 0L10 8.86957L8.87283 10Z"
        fill="black"
      />
    </svg>
  );
};
