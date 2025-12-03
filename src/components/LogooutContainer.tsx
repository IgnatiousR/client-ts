import { FaUserCircle, FaCaretDown } from "react-icons/fa";
// import Wrapper from '../assets/wrappers/LogoutContainer';
import { useState } from "react";
// import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  // const { user, logoutUser } = useDashboardContext();

  return (
    <div className="relative">
      <button
        type="button"
        // className='btn logout-btn'
        className="btn logout-btn flex items-center justify-center gap-2"
        onClick={() => setShowLogout(!showLogout)}
      >
        {/* {user.avatar ? (
          <img src={user.avatar} alt='avatar' className='img img w-6 h-6 rounded-full' />
        ) : (
          <FaUserCircle />
        )}
        {user?.name} */}
        <FaCaretDown />
      </button>
      {/* <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}> */}
      <div
        className={
          showLogout
            ? "dropdown show-dropdown absolute top-11 left-0 w-full shadow-lg text-center rounded-lg bg-blue-600 visible"
            : "dropdown absolute top-11 left-0 w-full shadow-lg text-center invisible rounded-lg bg-blue-600"
        }
      >
        <button
          type="button"
          className="dropdown-btn rounded-lg p-2 bg-transparent border-transparent text-white tracking-wide uppercase cursor-pointer w-full h-full"
          // onClick={logoutUser}
        >
          logout
        </button>
      </div>
    </div>
  );
};
export default LogoutContainer;
