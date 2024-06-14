"use client";
import CheckingUser from "@/Components/Admin/checkingUser";
import Footer from "@/Components/Footer/Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMiniArrowRightOnRectangle } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import "./style.css";
const Layout = ({ children }) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const checkingUsers = CheckingUser();
  const dashboardRouting = [
    { path: "/dashboard", name: "Overview" },
    { path: "/dashboard/add-product", name: "Add Project" },
    { path: "/dashboard/manage-products", name: "Manage Projects" },
    { path: "/dashboard/manage-users", name: "Manage users" },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <div className="container mx-auto px-2  pt-[95px] sm:pt-[50px] ">
        {/* this content just small dives  */}
        {/*  */}
        {/*  */}
        {!open && (
          <div
            className="fixed text-5xl ease-in-out duration- z-[99] text-[#fff] hover:tooltip tooltip-open tooltip-right sm:hidden"
            id="dashboard_menu_icon"
            data-tip="Menu"
          >
            <HiMiniArrowRightOnRectangle
              className="sm:hidden w-full h-[60px] py-5 p-2  rounded-r shadow-2xl drop-shadow-2xl bg-[#ccc9c9] dark:bg-[#122033] dark:text-[#fff] text-[#000]"
              onClick={() => setOpen(true)}
              // id="dashboard_menu_open_icon"
            />
          </div>
        )}
        {/* end  */}
        <div className="flex gap-0 relative">
          {open && (
            <div className="">
              <aside className="absolute sm:hidden w-[70%] bg-[#fff] dark:bg-[#122033] h-[100vh]  py-5 ease-in-out duration-700 top-[-10%] left-[0%]">
                <div
                  className="absolute  text-red-700"
                  id="dashboard_close_icon"
                >
                  <IoClose
                    className="sm:hidden text-3xl"
                    onClick={() => setOpen(false)}
                  />
                </div>
                <ul className="" id="dashboard_mobile_items">
                  {dashboardRouting.map(({ path, name }) => (
                    <li key={path} className="px-3 py-1">
                      <Link
                        exact={path === "/dashboard"}
                        className={`${
                          pathname === path ? "text-[#20b820]" : ""
                        }`}
                        href={path}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          )}
          {/* this menu list for large dives */}
          <aside className="hidden sm:block sm:w-[30%] bg-[#fff] dark:bg-[#122033] h-[100vh]  py-5 ease-in-out duration-700 rounded shadow-2xl drop-shadow-2xl">
            <ul className="mt-5">
              {dashboardRouting.map(({ path, name }) => (
                <li key={path} className="px-3 py-1">
                  <Link
                    exact={path === "/dashboard"}
                    className={`${pathname === path ? "text-[#20b820]" : ""}`}
                    href={path}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          {/* main content show */}
          <div
            className="w-[100%] bg-[#e7e4e4] dark:bg-[#0f1b2b] dark:text-[#fff] p-5 h-[100vh] mt-[-8%] sm:mt-0 rounded shadow-2xl  text-center sm:text-start pt-10 mb-5 overflow-auto"
            id="dashboard_content"
          >
            {children}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
