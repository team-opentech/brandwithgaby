export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-auto bg-[#EBECE7] overflow-x-hidden overscroll-x-none">
      <div className="w-full h-auto py-12 px-[7%] border-y border-solid border-black lg:py-14 lg:px-0">
        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:mx-auto lg:justify-between 2xl:max-w-[1285px]">
          <h1 className="max-sm:text-[40px] leading-[59px] tracking-wider">
            Let’s talk about it!
          </h1>
          <div className="flex flex-col">
            <a
              target="_blank"
              href="https://www.instagram.com/brandwithgaby/"
              rel="noreferrer"
            >
              <p className="text-[22px] leading-[34px] tracking-wider font-Bricolage-Grotesque font-normal lg:text-[26px] lg:leading-[43px]">
                hey@brandwithgaby.com
              </p>
            </a>
            <a
              target="_blank"
              href="mailto:hey@brandwithgaby.com"
              rel="noreferrer"
            >
              <p className="text-[22px] leading-[34px] tracking-wider font-Bricolage-Grotesque font-normal lg:text-[26px] lg:leading-[43px]">
                @brandwithgaby
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-full py-[5%] px-[8%] lg:px-[5%] items-center">
        <a href="/" className="flex w-full h-auto mx-auto justify-center">
          <Logo />
        </a>
      </div>
      <div className="flex flex-col w-full h-auto items-center py-4 px-[6%] lg:space-y-0 lg:flex-row lg:px-[2%]">
        <p className="text-[#656565] uppercase text-[10px] leading-[25px] tracking-wide w-full lg:w-[25%]">
          © COPYRIGHT 2024 BRANDWITHGABY. ALL RIGHTS RESERVED.
        </p>
        <div className="flex flex-row justify-between w-full lg:w-[75%]">
          <p className="text-[#656565] uppercase text-[10px] leading-[25px] tracking-wide">
            A SISTER COMPANY OF ARQUETIPO
          </p>
          <a href="/terms">
            <p className="text-[#656565] uppercase underline text-[10px] leading-[25px] tracking-wide cursor-pointer">
              Términos y Condiciones
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <svg
      width="1285"
      height="136"
      viewBox="0 0 1285 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_51_3075)">
        <path
          d="M921.002 5.33398H979.542C1004.95 5.33398 1013.74 19.5266 1013.74 37.4C1013.74 55.2734 1003.37 65.3799 991.353 67.7193C1004.43 69.4661 1015.69 79.3854 1015.69 99.7854C1015.69 120.185 1003.88 134.565 979.168 134.565H921.002V5.33398ZM974.512 61.512C991.324 61.512 998.135 53.9322 998.135 39.7395C998.135 25.5468 993.135 18.3725 976.467 18.3725H935.831V61.512H974.484H974.512ZM977.731 121.527C994.371 121.527 1000.12 111.826 1000.12 98.0074C1000.12 82.6606 992.79 73.7083 974.886 73.7083H935.86V121.495H977.76L977.731 121.527Z"
          fill="black"
        />
        <path
          d="M1197.67 1.46582L1224.71 54.8989C1227.38 60.5447 1230.08 65.9723 1232.93 71.3998C1235.63 65.9723 1238.47 60.5135 1241.18 54.8989L1268.36 1.46582H1285L1240.26 85.4053V130.666H1225.4V85.4053L1180.65 1.46582H1197.67Z"
          fill="black"
        />
        <path
          d="M390.093 135.813L378.454 102.78H319.569L307.93 135.813H292.9L338.192 6.61328H360.205L405.324 135.813H390.122H390.093ZM374 89.7729L349.112 18.2793L324.053 89.7729H374Z"
          fill="black"
        />
        <path
          d="M0 68C0 28.9468 19.1396 0 60.3215 0C95.7557 0 113.832 17.4991 117.079 49.7523H101.676C98.8019 24.8917 86.0996 13.4128 59.7755 13.4128C29.7153 13.4128 15.5474 31.4734 15.5474 68C15.5474 104.527 28.9681 122.587 59.7755 122.587C87.709 122.587 99.1468 105.088 102.365 81.0073H48.8549V68.967H116.878V132.506H103.458V101.033C98.2559 119.873 84.8352 136 57.6201 136C18.4499 136 0 107.24 0 68Z"
          fill="black"
        />
        <path
          d="M549.848 10.2627H568.499C576.603 10.2627 579.391 14.7856 579.391 20.4627C579.391 26.1398 576.086 29.3838 572.263 30.1012C576.431 30.6627 580.023 33.8132 580.023 40.3012C580.023 46.7893 576.258 51.3746 568.384 51.3746H549.848V10.2627ZM566.889 28.1673C572.235 28.1673 574.419 25.7655 574.419 21.2425C574.419 16.7196 572.809 14.4425 567.522 14.4425H554.589V28.1673H566.889ZM567.924 47.2884C573.212 47.2884 575.051 44.2003 575.051 39.8022C575.051 34.9049 572.723 32.0664 567.004 32.0664H554.561V47.2884H567.895H567.924Z"
          fill="black"
        />
        <path
          d="M620.888 51.437H616.261C615.859 50.0645 615.571 48.037 615.571 45.0737V41.2994C615.571 35.4352 612.669 33.0021 607.41 33.0021H596.748V51.437H592.006V10.2627H609.68C617.497 10.2627 621.319 14.4737 621.319 21.0866C621.319 26.6077 618.186 30.4444 613.962 31.4737C617.554 32.5966 620.112 34.437 620.112 40.5196V44.8554C620.112 47.8811 620.514 49.8774 620.859 51.4058L620.888 51.437ZM609.134 29.1655C614.422 29.1655 616.376 26.2645 616.376 21.5544C616.376 16.8443 614.163 14.4425 609.191 14.4425H596.748V29.1655H609.105H609.134Z"
          fill="black"
        />
        <path
          d="M661.468 51.4341L657.761 40.9222H638.995L635.288 51.4341H630.488L644.915 10.291H651.927L666.296 51.4341H661.439H661.468ZM656.324 36.7736L648.392 14.0029L640.403 36.7736H656.295H656.324Z"
          fill="black"
        />
        <path
          d="M704.2 10.2627H708.884V51.4058H700.953L683.738 19.1214C682.761 17.1251 681.899 15.3471 681.353 13.7251V51.4058H676.611V10.2627H684.601L701.815 42.6095C702.562 44.0444 703.424 46.0719 704.2 47.8811V10.2627Z"
          fill="black"
        />
        <path
          d="M722.393 10.2627H738.141C750.556 10.2627 755.815 19.5581 755.815 30.7563C755.815 41.9544 750.556 51.437 738.141 51.437H722.393V10.2627ZM737.279 47.2884C747.366 47.2884 750.843 41.2058 750.843 30.7563C750.843 20.3067 747.424 14.4113 737.279 14.4113H727.134V47.2572H737.279V47.2884Z"
          fill="black"
        />
        <path
          d="M615.257 84.5322H619.942L611.32 125.675H603.331L594.278 88.6185L585.226 125.675H577.294L568.615 84.5322H573.415L581.346 122.4L590.629 84.5322H598.043L607.268 122.4L615.257 84.5322Z"
          fill="black"
        />
        <path
          d="M629.566 121.527H637.613V88.6809H629.566V84.5322H650.373V88.6809H642.326V121.527H650.373V125.675H629.566V121.527Z"
          fill="black"
        />
        <path
          d="M673.507 88.6809H659.828V84.5322H691.756V88.6809H678.192V125.738H673.507V88.6809Z"
          fill="black"
        />
        <path
          d="M702.133 84.5322H706.875V102.343H728.946V84.5322H733.63V125.675H728.946V106.492H706.875V125.675H702.133V84.5322Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_51_3075">
          <rect width="1285" height="136" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
