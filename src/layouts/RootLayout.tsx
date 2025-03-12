import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import RootNavbar from "./RootNavbar";
import { IoMenu, IoSearchOutline, IoSunny, IoMoon } from "react-icons/io5";

const RootLayout = () => {
  const [isMeunActive, setIsMeunActive] = useState(false);
  const menuHandler = () => setIsMeunActive((prev) => !prev);
  const [isDarkMode, setIsDarkMode] = useState(
    document.body.className === "dark"
  );

  useEffect(() => {
    const fn = () => console.log(document.body.classList);
    fn();
    return () => {
      fn();
    };
  }, []);

  return (
    <>
      <header className="border-b border-b-border bg-white dark:bg-darkBg dark:border-b-darkBorder">
        <div className=" flex gap-x-2.5 max-w-300 mx-auto p-2.5 ">
          <img src="" alt="logo" className=" h-10 w-25 bg-gray-50" />
          <form
            className=" flex flex-1 gap-x-2.5 "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              className="flex-1 outline-none bg-bg px-2.5 dark:bg-darkBorder rounded "
              placeholder="검색어를 입력해주세요."
            />
            <button className="bg-theme text-bg border text-2xl w-10 dark:text-darkBg">
              <IoSearchOutline />
            </button>
          </form>
          <button
            className=" w-10 bg-bg dark:bg-darkBorder"
            onClick={() => {
              document.body.classList.toggle("dark");
              setIsDarkMode((prev) => !prev);
            }}
          >
            {!isDarkMode ? (
              <IoSunny className="text-red-300" />
            ) : (
              <IoMoon className="text-amber-300" />
            )}
          </button>
          <button
            className=" text-2xl w-10 bg-bg dark:bg-darkBorder rounded md:hidden"
            onClick={menuHandler}
          >
            <IoMenu />
          </button>
          {isMeunActive && <RootNavbar menuHandler={menuHandler} />}
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default RootLayout;
