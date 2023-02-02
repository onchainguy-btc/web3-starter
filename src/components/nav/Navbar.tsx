import { ConnectButton } from "@rainbow-me/rainbowkit";
import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <div className="navbar bg-base-100 border border-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to="/page-1">Page 1</NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink className="justify-between" to="/page-2" disabled>
                Page 2
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </NavLink>
              <ul className="p-2">
                <li>
                  <NavLink to="/page-2/sub-1">Page 2.1</NavLink>
                </li>
                <li>
                  <NavLink to="/page-2/sub-2">Page 2.2</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/page-3">Page 3</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">web3 Starter</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/page-1">Page 1</NavLink>
          </li>
          <li tabIndex={0}>
            <NavLink to="/page-2" disabled>
              Page 2
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </NavLink>
            <ul className="bg-base-100 border border-base-300 p-2">
              <li>
                <NavLink to="/page-2/sub-1">Page 2.1</NavLink>
              </li>
              <li>
                <NavLink to="/page-2/sub-2">Page 2.2</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/page-3">Page 3</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ConnectButton />
      </div>
    </div>
  );
}
