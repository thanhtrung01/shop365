import React from "react";
import Slider from "react-slick";

const block = [
  { titlename: "PHOTO FACIAL", link: "" },
  { titlename: "FACE GYM", link: "" },
  { titlename: "HYDRA GLOW", link: "" },
];
const datax = {
  name: "P+ Laser  ",
  title: "Đón làn da mới với công nghệ hàng đầu thế giới  ",
  button: "Hiệu quả ngay từ lần đầu tiên",
  imge: "https://glo365.vn/wp-content/uploads/2020/06/venus-glow-device.png",
  teg: "Mỗi khách hàng sẽ được điều trị bằng 1 đầu tip chuyên biệt, có khả năng tạo xoáy nước 360 độ với kích thước 50 – 79 micron (nhỏ hơn kích thước trung bình của lỗ chân lông), giúp nhẹ nhàng làm sạch hoàn toàn các tạp chất sâu trong lỗ chân lông mà không gây ra bất kỳ tình trạng kích ứng nào, thích hợp với mọi làn da, kể cả da nhạy cảm nhất.",
  index:
    "Công nghệ thải độc và làm sạch chuyên sâu chuẩn y khoa, giúp phục hồi và tái tạo vẻ tươi mới cho làn da, đặc biệt thích hợp với các làn da thường xuyên tiếp xúc với mỹ phẩm trang điểm, khói bụi ô nhiễm dẫn đến tình trạng da xỉn màu, bít tắc lỗ chân lông gây mụn.",
  label: [
    {
      image: "https://glo365.vn/wp-content/uploads/2019/11/laser.png",
      title: "P+ LASER",
      text: "Bước 1: Phương pháp điều trị bằng laser không xâm lấn làm trẻ hóa làn da với công nghệ mới nhất cho phép tác động sâu vào tận lớp hạ bì của da, phá vỡ các mảnh sắc tố nhỏ, tiêu diệt vi khuẩn, kích thích sản xuất collagen và giảm các dấu hiệu lão hóa.",
    },
    {
      image:
        "https://glo365.vn/wp-content/uploads/2019/11/briliant-light-r.png",
      title: "BRILLIANT LIGHT",
      text: "Bước 2: Phương pháp trị liệu bằng ánh sáng sinh học dựa trên nguyên lý các tế bào da cần hấp thu ánh sáng nhằm thúc đẩy khả năng tái tạo và tự chữa lành những tổn thương. Đồng thời kích thích làn da được vận động một cách tự nhiên.",
    },
    {
      image: "https://glo365.vn/wp-content/uploads/2019/11/mask.png",
      title: "GLO365 PRODUCTS",
      text: "Bước 3: Làm sạch và chăm sóc da với các dòng sản phầm độc quyền từ Glo365. Công thức chứa các thành phần dịu nhẹ, không hóa chất độc hại. Sự kết hợp đột phá giữa tinh chất dưỡng chuyên sâu với các chiết xuất từ thiên nhiên mang lại hiệu quả vượt trội. ",
    },
  
  ],
};

export default function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div className="container mt-32">
      <div className="flex flex-col justify-center ">
        {/* //title */}
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="text-5xl font-sans">{datax.name}</h2>
          {/* button */}
          <p className="my-5">{datax.title}</p>
          <div className="w-auto h-9 my-5">
            <h4 className="bg-pink-200 font-sans text-lg text-slate-50  p-3 rounded-full">
              {" "}
              {datax.button}
            </h4>
          </div>
        </div>

        {/* video */}
       
        {/* đăng kí ngay */}
        <div className="w-screen flex justify-center items-center xl:mt-10 sm:mt-0 mb-5">
          {" "}
          <div className="h-20 w-60 bg-rose-200  rounded-full flex items-center ">
            <div className="h-20 w-20 bg-white rounded-full"></div>
            <p className="text-white ml-5"> ĐĂNG KÝ NGAY</p>
          </div>
        </div>

        <div className="w-screen flex justify-center ">
          <p className=" w-3/4">{datax.index}</p>
        </div>
        <div className="w-screen flex justify-center items-center h-auto sm:flex-col lg:flex-row xl:flex-row flex-col ">
      
        
         
            {datax.label.map((index, i) => (
              <div
                key={i}
                className="my-5  w-80 p-9 h-auto bg-white rounded-2xl flex flex-col justify-center items-center border-2 border-rose-200 ml-10"
              >
                <img className="w-1/2" src={index.image}></img>
                <h3 className="my-5 text-2xl">{index.title}</h3>
                <p className="font-light">{index.text}</p>
              </div>
            ))}
         
        </div>
      </div>
      {/* công nghệ */}

      {/* hiệu quả */}

      {/* trước sau liệu trình */}

      {/* tư vấn */}

      {/* điều trị kết hợp */}
    </div>
  );
}
