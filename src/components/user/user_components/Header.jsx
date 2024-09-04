import  { useState } from 'react';
import { FaBell, FaSearch } from 'react-icons/fa';
import defaultavatar from '../../../assets/images/avatar-13.png'

function Header({ user, onLogoutClick }) {
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleUserDetails = () => {
    setShowUserDetails(!showUserDetails);
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleLogout = () => {
    onLogoutClick();
  };

  return (
    <nav className={`bg-white border-gray-100 dark:bg-gray-900 p-4`}>
      <div className="max-w-screen- flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Student Dashboard</span>
        </a>

        <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse">
          <button type="button" className="relative" onClick={toggleSearchBar}>
            <FaSearch className="text-xl hover:text-gray-500 dark:hover:text-gray-300" />
            {showSearchBar && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-full mt-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full py-2 px-4 focus:outline-none shadow-lg"
              />
            )}
          </button>

          <FaBell className="cursor-pointer text-2xl hover:text-gray-500 dark:hover:text-gray-300" />

          <div className="relative flex">
            <button type="button" className="flex text-sm ">
              <div className="flex items-center ">
                <div className="mt-2">
                  <span className="block text-lg text-purple-600 dark:text-purple-500 mr-2 mt-0 font-bold">{`${user.user.first_name} ${user.user.last_name}`}</span>
                  <p className="block text-sm text-gray-500 ml-20 mr-2 mt-[-5px]">
                    Student
                  </p>
                </div>
                <img
                  className="w-13 h-13 rounded-full bg-white"
                  src={defaultavatar}
                  alt="user photo"
                  onClick={toggleUserDetails}
                  height={50}
                  width={50}
                />
              </div>
            </button>
            {showUserDetails && (
              <div className="absolute top-[-30px] right-[-47px] mt-2 w-96 bottom-[-1500px] bg-white dark:bg-blue-950 rounded-md shadow-lg py-1  z-20">
                <div className="px-4 py-3 mt-5 ml-4">
                  <span className="font-bold">Student Profile</span>{" "}
                  <button className="ml-[160px] bg-black text-black-800 pt-1 pb-1 pr-3 pl-3  font-bold cursor-pointer bg-gradient-to-r from-black-500 to-black-500 hover:from-red-600 hover:to-red-600 focus:outline-none focus:ring focus:ring-purple-300 active:bg-blue-700 px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105" onClick={() => setShowUserDetails(false)}>X</button>
                  <div className="flex mt-7">
                    <img
                      className="w-25 bg-white ml-0 "
                      src={defaultavatar}
                      alt="user photo"
                      onClick={toggleUserDetails}
                      height={125}
                      width={140}
                    />
                    <div className="ml-4">
                      <span className="block  text-gray-900 dark:text-white text-xl">{`${user.user.first_name} ${user.user.last_name}`}</span>
                      <p>Student</p>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400 text-[12px]">
                        {user.user.email}
                      </span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.user.phone}
                      </span>
                      <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.user.address}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="py-2">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      onClick={handleLogout}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button
            id="theme-toggle"
            type="button"
            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          >
            <svg
              id="theme-toggle-dark-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg
              id="theme-toggle-light-icon"
              className="hidden w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex md:order-1 md:w-auto" id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-1 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:md:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-1 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
