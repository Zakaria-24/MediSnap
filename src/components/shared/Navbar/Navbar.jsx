import { Link } from "react-router-dom";
import Container from "../Container";
// import useAuth from "../../../hooks/useAuth";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const linkOption = (
    <div className=" lg:flex text-lg font-medium ">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
      {/* <li>
        <Link to="/categoryDetails">Category Details</Link>
      </li> */}
      <li>
        <Link to="/shopCard" className="text-2xl font-bold">
          <AiOutlineShoppingCart />
        </Link>
      </li>
      <li>
        <Link to="/checkout">Checkout</Link>
      </li>
      <li>
        <Link to="/invoice">Invoice</Link>
      </li>
      <li>
        {/* <details>
          <summary>Languages</summary>
          <ul className="p-2">
            <li>
              <a>Bangla</a>
            </li>
            <li>
              <a>English</a>
            </li>
          </ul>
        </details> */}
      </li>
    </div>
  );

  return (
    <Container>
      <div className="navbar bg-base-100 pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-green-100 font-semibold text-[#2fa325] rounded-box w-52"
            >
              {linkOption}
            </ul>
          </div>
          <Link to={"/"} className="text-3xl font-extrabold">
            <div className="flex justify-center items-center">
              <div>
                <span>
                  <img
                    className="w-14 h-14"
                    src="https://i.ibb.co/PwmGpGb/medi-snap-logo.jpg"
                    alt=""
                  />
                </span>
              </div>
              <div>
                <span className="text-4xl text-green-700">M</span>edi
                <span className=" text-green-600">Snap</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{linkOption}</ul>
        </div>
        {/* Navbar end */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end font-semibold text-[#2fa325]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[10] p-2 shadow menu menu-sm dropdown-content bg-green-100 rounded-box w-52"
              >
                <li>
                  <Link className="justify-between">Update Profile</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={logOut}
                    className="bg-[#2fa325] text-white font-bold text-xl hover:text-[#2fa325]"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn bg-[#2fa325] text-lg text-white font-medium px-2 md:px-4"
            >
              Join Us
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
