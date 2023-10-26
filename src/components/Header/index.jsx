import { useEffect, useState } from "react";
import "./style.css";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState("home");
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${scrolled ? "" : "hidden"}`}>
      <div className="xl:h-10 sm:h-0 h-0"></div>

      <div className={`fixed w-screen z-50  flex justify-center items-center ${scrolled ? "block" : "hidden"}`}>
        <Navbar
          style={{
            boxShadow: "0 3px 30px rgba(255,103,152,.31)",
            // borderRadius: '35px 0 0 35px'
          }}
          className={`relative bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 h-auto xl:rounded-full xl:w-5/6 sm:w-full mobile:w-full sm:rounded-none nowrap w-full`}
        >
          <div className="50 flex">
            <Navbar.Brand as={Link} to="/">
              <div className="hidden sm:block absolute left-0 xl:rounded-full py-3 px-3 inset-y-0 bg-rose-300" style={{ borderRadius: '35px 0 70px 35px' }}>
                <img src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              </div>
              <div className="hidden sm:block xl:rounded-[10%]"></div>
              <div className="block sm:hidden absolute">
                <img src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
              </div>
            </Navbar.Brand>
            <div className="relative ml-[65%] w-[50%]">
              <input
                icon={AiOutlineSearch}
                placeholder="Search ..."
                type="text"
                style={{ width: '196px' }}
                className="relative w-[100%] ml-2 border-none pl-4 right-0 sm:m-none border-white rounded-2xl focus:outline-none focus:border-rose-300 focus:ring-1 focus:ring-rose-300 focus:invalid:border-x-rose-300 invalid:border-x-rose-300 hover:border-rose-600 w-7/12"
              />
            </div>
          </div>

          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar className="xl:px-0 md:px-0">
              <Link
                to="/services"
                className={`${selectedNavItem === "services"
                  ? "text-pink-600"
                  : "text-black"
                  }`}
                onClick={() => setSelectedNavItem("services")}
              >DỊCH VỤ</Link>
            </Navbar>
            <Navbar className="xl:px-0 md:px-0">
              <Link to="https://glory365.vercel.app">CỬA HÀNG</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="/events"
                className={`${selectedNavItem === "events"
                  ? "text-pink-600"
                  : "text-black"
                  }`}
                onClick={() => setSelectedNavItem("events")}
              >SỰ KIỆN</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="/about"
                className={`${selectedNavItem === "about"
                  ? "text-pink-600"
                  : "text-black"
                  }`}
                onClick={() => setSelectedNavItem("about")}
              >GIỚI THIỆU</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="https://glory365.vercel.app">MAGAZINE</Link>
            </Navbar>

            <Navbar className="xl:px-0 md:px-0">
              <Link to="/contact"
                className={`${selectedNavItem === "contact"
                  ? "text-pink-600"
                  : "text-black"
                  }`}
                onClick={() => setSelectedNavItem("contact")}
              >LIÊN HỆ</Link>
            </Navbar>

            <div>
              <Navbar className="xl:px-0 ">
                <div className="flex">
                  <Link href="#" className="ml-5 text-lg">
                    <FaFacebook />
                  </Link>
                  <Link href="#" className="ml-5 text-lg">
                    <SiYoutubemusic />
                  </Link>
                  <Link href="#" className="ml-5 text-lg">
                    <AiFillInstagram />
                  </Link>
                </div>
              </Navbar>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
