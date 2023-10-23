import React from "react";

const block = [
  { titlename: "PHOTO FACIAL", link: "" },
  { titlename: "FACE GYM", link: "" },
  { titlename: "HYDRA GLOW", link: "" },
];
const datax = {
  name: "Photo Facial",
  title: "Công nghệ ánh sáng đa sắc triệu USD thần kỳ  ",
  button: "Trẻ hóa da siêu tốc",
  imge: "https://glo365.vn/wp-content/uploads/2020/03/Joule-bbl-1.png",
  teg: "Skin Yoga sử dụng công nghệ BBL (Broad Band Light) - được xem là thế hệ tiếp theo của IPL (Intense Pulse Light), BBL sử dụng các chùm tia ánh sáng siêu xung cực ngắn truyền năng lượng ánh sáng vào sâu trong da thúc đẩy khả năng chống lại quá trình lão hóa một cách tự nhiên, tái tạo làn da trông trẻ trung hơn, săn chắc hơn và thậm chí đều màu hơn và kết cấu da hoàn hảo hơn. Hiệu quả trẻ hóa da không chỉ ở bề ngoài mà đạt tới cấp độ gene tế bào.",
  index:
    "Skin Yoga là liệu pháp ánh sáng siêu xung đa sắc được nâng cấp từ liệu pháp ánh sáng cường độ cao, được xem là một quy trình thay đổi siêu tốc để trẻ hóa làn da và phục hồi làn da rạng rỡ, trẻ trung mà hầu như không cần thời gian nghỉ dưỡng.  ",
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
