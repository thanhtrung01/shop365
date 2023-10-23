import React from "react";

const block = [
  { titlename: "PHOTO FACIAL", link: "" },
  { titlename: "FACE GYM", link: "" },
  { titlename: "HYDRA GLOW", link: "" },
];
const datax = {
  name: "Face Gym    ",
  title: "Liệu pháp độc đáo duy trì hàng tuần giúp da săn chắc thon gọn    ",
  button: "Kiến tạo hình khối cơ mặt hoàn hảo",
  imge: "https://glo365.vn/wp-content/uploads/2020/04/venus_legacy_device_large.png",
  teg: "Quá trình tác động nhiệt vào tận sâu bên trong lớp hạ bì, tại vị trí chuẩn xác có khả năng kích thích và tăng sinh collagen, elastin, giúp chúng tạo thành tấm lưới nâng đỡ cơ, mô da lên cao. Công nghệ Face Gym hơn hẳn những công nghệ thông thường khác chính ở khả năng nâng cơ mặt chảy xệ, định hình form dáng và làm sắc nét gương mặt.",
  index:
    "Face GymTM là Liệu trình duy trì đường nét V Line, độ săn chắc và trẻ hoá gương mặt được thực hiện hàng tuần một cách khoa học và đều đặn.",
};

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
