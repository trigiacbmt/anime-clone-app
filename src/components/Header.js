import logo from "../logo.png";
import { SearchIcon } from "@heroicons/react/outline";
import Dropdown from "../utilis/Dropdown";
import useHttp from "../hooks/use-http";
import { getAllGenres } from "../lib/api";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, user } from "../slices/animeSlices";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const userEmail = useSelector(user);
  const dispatch = useDispatch();
  const history = useNavigate()
  const {
    sendRequest,
    status,
    data: genres,
    error,
  } = useHttp(getAllGenres, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  async function signOut() {
    auth.signOut().then(() => {
      dispatch(logOut())
    }).catch(err => console.log(err))
  }
  return (
    <div>
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row p-1 lg:items-center mx-auto">
          {/* {Header Left Side} */}

          <div>
            <Link to="/"><img src={logo} alt="logo-anime" className="object-contain" /></Link>
          </div>

          {/* {Search Bar} */}
          <div className="flex flex-grow items-center max-w lg:max-w-lg lg:mx-auto rounded-3xl overflow-x-hidden bg-gray-200 text-black">
            <SearchIcon className="h-12 p-4" />
            <input
              type="text"
              placeholder="Search anime name"
              className="px-10 flex-grow h-full border-none bg-transparent text-black outline-none"
            />
          </div>
          {/* {Header Right Side} */}
          {!userEmail.userEmail && (
            <div className="flex m-3 ml-auto">
              <Link to="/signup">
                <button className="p-3 bg-gray-500 rounded-md mr-1">
                  Sign Up
                </button>
              </Link>
              <Link to="/signin">
                <button className="p-3 bg-gray-500 rounded-md">Sign In</button>
              </Link>
              <button className="p-2 ml-3 bg-blue-600 rounded-2xl text-white">
                Login by Facebook
              </button>
            </div>
          )}
          {userEmail.userEmail && (
            <div className="flex m-3 ml-auto">
              <Link to="/mycollection">
                <button className="p-3 bg-gray-500 rounded-md mr-1 truncate">{`Hello, ${userEmail.userEmail}`}</button>
              </Link>
              <Link to="/" onClick={signOut}>
                <button className="p-3 bg-gray-500 rounded-md truncate">Sign Out</button>
              </Link>
              <button className="p-2 ml-3 bg-blue-600 rounded-2xl text-white truncate">
                Login by Facebook
              </button>
            </div>
          )}
          {/* {Header Bottom Side} */}
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto flex flex-wrap gap-3 max-w-max relative">
          <Dropdown name="TRANG CHU"/>
          <Dropdown genres={genres} name="THE LOAI" />
          <Dropdown name="TRANG THAI" />
          <Dropdown name="XEM NHIEU" />
          <Dropdown name="BINH LUAN NHIEU" />
          <Dropdown name="LUONG LONG NHAT THE" />
          <Dropdown name="NAM" />
          <Dropdown name="HOI DAP" />
          <Dropdown name="TV" />
        </div>
      </div>
    </div>
  );
};

export default Header;
