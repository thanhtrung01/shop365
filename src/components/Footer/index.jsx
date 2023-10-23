// import React from "react";
import "./style.css";
import { useState } from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
const Footerx = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Footer
      container
      className="shadow-none bg-cover bg-center bg-no-repeat flex flex-col bg-inherit p-0 items-end relative "
    >
    <div
      className="fixed bottom-3 right-0 p-5 cursor-pointer z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
       
        <div
          className={`w-16 h-16 bg-blue-300 flex justify-center items-center rounded-full animate-pulse transition-transform ${
            isHovered ? 'scale-110' : ''
          }`}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="white">
            <path d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897"></path>
          </svg>
        </div>
      </div>
    </div>

      <div
        style={{
          backgroundImage:
            "url(https://glo365.vn/wp-content/themes/ndg-quantum/imgs/footer.svg)",
          backgroundSize: "-1000px",
          border: 'none'
        }}
        className="border-none w-full bg-cover bg-center bg-no-repeat py-10"
      >
        <div className="w-auto pt-20"><Footer.Brand as={Link} href="/" className="text-slate-50 ml-14 pt-40 mt-25">
          <img
            src="https://glo365.vn/wp-content/uploads/2020/07/Glo365-logo-2000x600.svg"
            className="mr-3 xl:h-14 sm:h-9 h-9"
            alt="Flowbite React Logo"
          />
        </Footer.Brand>
          <div className="text-sm leading-5 grid xl:grid-cols-3 mt-10  sm:grid-cols-1  gap-4 xl:ml-20  sm:ml-10 ml-10">
            {" "}
            <div className="flex flex-col items-start mr-10 left text-white sm:order-3 order-3 xl:order-1  w-5/5">
              <p className="mb-3 flex">
                {" "}
                <p><FaMapMarkerAlt /></p>31A Lý Tự Trọng, Quận 1, Thành phố Hồ Chí
                Minh
              </p>
              <p className="mb-3 flex">
                <FaMapMarkerAlt /> 63 Xuân Thuỷ, Quận 2, Thành phố Thủ Đức
              </p>
              <p className="text-left	text-white mb-3">
                Thứ Hai đến Chủ Nhật từ 09:00 đến 20:00 | Hotline 1800 6733 |
                Email: info@Glo365.vn
              </p>
              <p className="text-left	text-white mb-3">
                Glo365 là thương hiệu đã được đăng ký độc quyền bởi Empire Global
                Investments JSC (mã số doanh nghiệp: 0315524896)
              </p>
              <Footer.Copyright
                by="Flowbite™"
                href="#"
                year={2022}
                className="text-white"
              />
            </div>
            <Footer.LinkGroup className="w-auto grid grid-cols-1  text-white sm:order-1 order-1  xl:order-2 ">
              <div className=" text-white h-1/2 xl:mt-20 sm:mt-0 mr-10 text-base  grid grid-cols-3">
                <Link className="xl:mr-10 mr-0" to="/services/">
                  DỊCH VỤ
                </Link>

                <Link className="xl:mr-10 mr-0" to="#">
                  CỬA HÀNG
                </Link>

                <Link className="xl:mr-10 mr-0" to="/events/">
                  SỰ KIỆN
                </Link>

                <Link className="xl:mr-10 mr-0" to="/about">
                  GIỚI THIỆU
                </Link>

                <Link className="xl:mr-10 mr-0" to="#">
                  MAGAZINE
                </Link>

                <Link to="/contact">LIÊN HỆ</Link>
              </div>

              <div className="mt-10 flex">
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
            </Footer.LinkGroup>
            <div className="sm:order-2 pt-10 order-2  xl:order-3">
              <Footer.Brand
                as={Link}
                href="#"
                className="w-32 h-auto sm:order-3 xl:order-1"
              >
                <img
                  src="https://glo365.vn/wp-content/uploads/2021/10/243941275_1234107797084432_127054125037716174_n-150x150.jpg"
                  className="mr-3  w-full h-full"
                  alt="Flowbite React Logo"
                />
              </Footer.Brand>
            </div>
          </div></div>

      </div>
    </Footer>
  );
};

export default Footerx;
