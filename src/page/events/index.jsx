import React from "react";
import {BsFacebook} from "react-icons/bs"
import {FaLocationDot} from "react-icons/fa6"
import HeaderImage from "../../assets/header.png";
export default function index() {
  return (
    <div className="flex min-w-full flex-col justify-center items-center">
      
      <h2 className="text-4xl font-light my-5">SỰ KIỆN HOT</h2>
      
      <div className="grid xl:grid-cols-2 grid-cols-1 container w-4/5">
        <div  className="h-5/5 w-5/5 rounded-full ">
          <img
           style={{
            boxShadow: "0 3px 30px rgba(255,103,152,.31)",
          }}
            className="rounded-full p-1  bg-slate-100"
            src="https://glo365.vn/wp-content/uploads/2021/04/event-circle-lift-and-glow.png"
          />
        </div>
        <div 
        style={{ 
          fontFamily : "Comfortaa, Arial",
         }} className="text-left w-5/5">
          <h2 className="text-2xl font-sans pt-10">LIFT & GLOW</h2>
          <p className="my-5">
            Một bước tiến mới mạnh mẽ trong điều trị trẻ hóa và làn da tỏa sáng
            căng bóng một cách rực rỡ hoàn mỹ, hứa hẹn bùng nổ trong xu hướng
            làm đẹp tương lai khi kết hợp nhiều hoạt chất đỉnh cao chỉ trong 1
            liệu trình duy nhất. Cùng chờ đón và trải nghiệm siêu phẩm làm đẹp
            2021.
          </p>
          <div className="mb-5">
            <a className="bg-rose-300 text-slate-50 px-5 py-3 rounded-full" href="/">Book Ngay</a>
          </div>
          <div className="my-4 flex items-center">
            <p className="text-slate-800 mr-4"><FaLocationDot/></p>
            <p>31A Lý Tự Trọng, Quận 1, TP.HCM</p>
          </div>
          <div className="flex  items-center">
            
            <p className="text-slate-800 mr-4"><BsFacebook/></p>
            <p> Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
}
