import {Button} from '../button';

export const Navbar = () => {
  return (
    <header className="lg:px-[12svw] fixed w-screen h-[10%] max-h-[100px] bg-[#EBECE7] flex flex-row justify-center lg:justify-between items-center overscroll-x-none overflow-hidden z-50">
      <div className="hidden lg:flex min-w-[40px] h-full"></div>
      <img
        className="w-full max-w-[270px] lg:max-w-[227px]"
        src="/Navbar-LOGO.svg"
        alt="none"
      />
      <Button
        styles="hidden lg:flex justify-center bg-black text-white p-2 rounded rounded-full h-10 w-full max-w-[203px] border border-solid border-black"
        label="Talk with me!"
      />
    </header>
  );
};
