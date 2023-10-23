import React from "react";

const block = [
  { titlename: "PHOTO FACIAL", link: "" },
  { titlename: "FACE GYM", link: "" },
  { titlename: "HYDRA GLOW", link: "" },
];
const datax = {
  name: "Hydrafacial    ",
  title: "Xoáy Nước 360 Độ Độc Đáo    ",
  button: "Hiệu quả sạch da tức thì",
  imge: "https://glo365.vn/wp-content/uploads/2020/06/venus-glow-device.png",
  teg: "Mỗi khách hàng sẽ được điều trị bằng 1 đầu tip chuyên biệt, có khả năng tạo xoáy nước 360 độ với kích thước 50 – 79 micron (nhỏ hơn kích thước trung bình của lỗ chân lông), giúp nhẹ nhàng làm sạch hoàn toàn các tạp chất sâu trong lỗ chân lông mà không gây ra bất kỳ tình trạng kích ứng nào, thích hợp với mọi làn da, kể cả da nhạy cảm nhất.",
  index:
"Công nghệ thải độc và làm sạch chuyên sâu chuẩn y khoa, giúp phục hồi và tái tạo vẻ tươi mới cho làn da, đặc biệt thích hợp với các làn da thường xuyên tiếp xúc với mỹ phẩm trang điểm, khói bụi ô nhiễm dẫn đến tình trạng da xỉn màu, bít tắc lỗ chân lông gây mụn."};

export default function index() {
  return (
    <div className="container ">
    <div className="flex flex-col justify-center ">
      {/* //title */}
      <div className="flex flex-col justify-center items-center mb-10">
       
        {/* button */}
       <div className="w-auto h-9 my-5">
        <h4 className="bg-pink-200 font-sans text-lg text-slate-50  p-3 rounded-full"> {datax.button}</h4>
       </div>
      </div>

      {/* video */}
      <div
        className="relative flex items-center  
    justify-center h-screen mb-12  
    overflow-hidden"
      >
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto  
    min-w-full min-h-full max-w-none"
        >
          <source
            src="https://glo365.vn/wp-content/uploads/2019/11/Skin-Gym-Linh-Nga-Glo.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      {/* đăng kí ngay */}
     
      <div>
        <p>{datax.index}</p>
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
