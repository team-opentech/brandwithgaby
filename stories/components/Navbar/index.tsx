import {Button} from '../button';
import {useLocation} from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  return (
    <header className="lg:px-[12svw] fixed w-screen h-[16%] max-h-[100px] bg-[#EBECE7] flex flex-row justify-between lg:justify-between items-center overscroll-x-none overflow-hidden z-50">
      {location.pathname === '/faq/' || location.pathname === '/terms' ? (
        <div
          className={`${'rotate-90 flex flex-col justify-center items-center w-full max-w-[120px] lg:max-w-[15%]'}`}
        >
          <a href="/">
            <DownArrow />
          </a>
        </div>
      ) : null}

      {location.pathname === '/faq/' ||
      location.pathname === '/terms' ? null : (
        <div className="hidden lg:flex min-w-[15%] h-full"></div>
      )}
      <a href="/">
        <img
          className="w-full max-w-[270px] lg:max-w-[227px]"
          src="/Navbar-LOGO.svg"
          alt="none"
        />
      </a>

      <div className={`${'rotate-180 lg:hidden w-full max-w-[120px]'}`}></div>

      <Button
        styles="hidden lg:flex justify-center items-center bg-black text-white p-2 rounded rounded-full h-[42px] w-full max-w-[203px] border border-solid border-black"
        label="Talk with me!"
        onClick={() => (window.location.href = 'mailto:hey@brandwithgaby.com')}
      />
    </header>
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
