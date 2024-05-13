import Link from "next/link";
import DarkMode from "../darkMode/darkMode";
export default function Navbar() {
  return (
    <div className="navbar bg-[#fff] dark:bg-[#122033] border-b border-[#603bf65e] shadow-2xl fixed z-[9999] py-0">
      <div className="container mx-auto px-2">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href={"/"}>Home</Link>
                </li>

                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/services"}>Services</Link>
                </li>
                <li>
                  <Link href={"/page"}>Pages</Link>
                </li>
                <li>
                  <Link href={"/blog"}>Blog</Link>
                </li>
                <li>
                  <Link href={"/offer"}>Get Offer</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">E-Merge</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href={"/"}>Home</Link>
              </li>

              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/services"}>Services</Link>
              </li>
              <li>
                <Link href={"/page"}>Pages</Link>
              </li>
              <li>
                <Link href={"/blog"}>Blog</Link>
              </li>
              <li>
                <Link href={"/offer"}>Get Offer</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="">
              <DarkMode></DarkMode>
            </div>

            <div className="dropdown dropdown-end z-[1111]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className=" z-[1] card card-compact dropdown-content w-52 bg-[#fff] dark:bg-[#101C2C] dark:text-[fff] shadow-2xl rounded border-[1px] dark:border-[#0e105c71]"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end z-[1111]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2  bg-[#fff] dark:bg-[#101C2C] dark:text-[fff] shadow-2xl rounded border-[1px] dark:border-[#0e105c71]  w-52"
              >
                <li>
                  <a className="justify-between hover:text-blue-500">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a className="hover:text-blue-500">Settings</a>
                </li>
                <li>
                  <a className="hover:text-blue-500">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
