import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// import Wrapper from '../assets/wrappers/ThemeToggle';
// import { useDashboardContext } from '../pages/DashboardLayout';

const ThemeToggle = () => {
  const i = true;
  // const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <button
      className="bg-transparent border-transparent w-14 h-8 grid place-items-center cursor-pointer"
      // onClick={toggleDarkTheme}
    >
      {/* {isDarkTheme ? <BsFillSunFill className="toggle-icon" /> : <BsFillMoonFill />} */}
      {i ? (
        <BsFillSunFill className="toggle-icon text-[1.15rem] text-gray-400" />
      ) : (
        <BsFillMoonFill />
      )}
    </button>
  );
};
export default ThemeToggle;
