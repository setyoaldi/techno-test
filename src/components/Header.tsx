import Logo from "../assets/logo technopartner.png";

export const Header = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-gray-200 bg-white px-2 py-2.5 sm:px-4">
      <div className="mx-auto flex justify-start items-center">
        <img src={Logo} alt="Technopartner's Logo" width={150} height={150} />
      </div>
    </nav>
  );
};
export const HeaderMenu = () => {
  return (
    <nav>
      <div className="mx-auto flex justify-center items-center">
        <p className="uppercase text-3xl font-bold leading-tight text-black">
          MENU
        </p>
      </div>
    </nav>
  );
};
