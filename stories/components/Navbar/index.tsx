import {Button} from '../button';

export const Navbar = () => {
  return (
    <header className="lg:px-[12svw] fixed w-screen h-[16%] max-h-[100px] bg-[#EBECE7] flex flex-row justify-center lg:justify-between items-center overscroll-x-none overflow-hidden z-50">
      <div className="hidden lg:flex min-w-[15%] h-full"></div>
      <a href="/">
        <img
          className="w-full max-w-[270px] lg:max-w-[227px]"
          src="/Navbar-LOGO.svg"
          alt="none"
        />
      </a>

      <Button
        styles="hidden lg:flex justify-center items-center bg-black text-white p-2 rounded rounded-full h-[42px] w-full max-w-[203px] border border-solid border-black"
        label="Talk with me!"
      />
    </header>
  );
};
