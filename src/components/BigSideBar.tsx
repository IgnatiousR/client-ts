// import Wrapper from "../assets/wrappers/BigSidebar";
// import NavLinks from './NavLinks';
import Logo from "./Logo";
// import { useDashboardContext } from '../pages/DashboardLayout';
const BigSidebar = () => {
  // const { showSidebar } = useDashboardContext();
  const showSidebar = true;

  return (
    <aside className="hidden lg:block lg:shadow-[1px_0_0_0_rgba(0,0,0,0.1)]">
      <div
        className={
          showSidebar
            ? "sidebar-container side-bar-color min-h-screen h-full w-[250px] -ml-[250px] transition-all duration-300 ease-in-out"
            : "sidebar-container side-bar-color min-h-screen h-full w-[250px] transition-all duration-300 ease-in-out show-sidebar ml-0"
        }
      >
        <div className="content sticky top-0">
          <header className="h-24 flex items-center pl-10">
            <Logo />
          </header>
          {/* <nav class="nav-links pt-8 flex flex-col"></nav> */}
          {/* <NavLinks isBigSidebar /> */}
        </div>
      </div>
    </aside>
  );
};
export default BigSidebar;
