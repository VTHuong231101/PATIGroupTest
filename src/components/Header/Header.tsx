import logo from '../../assets/images/logo.avif';

export const Header = () => {
  return (
    <header className="h-[70px]">
      <div className="desktop"></div>
      <div className="mobile p-[12px]">
        <img src={logo} alt="" className="heder__logo max-w-[160px] mx-auto" />
      </div>
    </header>
  );
};
