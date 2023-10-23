import React from "react";
import Slider from "react-slick";
import { useState } from "react";

const datas = [
  {
    name: " TƯ VẤN VIÊN ",
    title:
      "Đảm bảo thông tin về dịch vụ và sản phẩm mà các Tư vấn viên truyền tải đến khách hàng được thực hiện một cách chính xác và lịch sử trị liệu của khách hàng được lưu giữ đầy đủ. Đồng thời theo dõi và hỗ trợ cho đến khi liệu trình kết thúc nhằm đạt được sự hài lòng tuyệt đối từ khách hàng.",
  },
  {
    name: "BÁC SĨ  ",
    title:
      "Trực tiếp thăm khám và điều trị cho khách hàng. Tương tác với các bác sĩ cũng như Trưởng chi nhánh, tạo nên phong cách chăm sóc chuyên nghiệp và chuyên môn cao. Đảm bảo mọi thông tin tư vấn cho khách hàng cũng như việc thực hiện các liệu trình theo đúng quy định của công ty đề ra.",
  },
  {
    name: "KỸ THUẬT VIÊN",
    title:
      "Thực hiện liệu trình trị liệu cho khách hàng và hỗ trợ bác sĩ. Đảm bảo các quy trình trị liệu được thực hiện đúng và chuẩn xác theo tiêu chuẩn của công ty đề ra. Đảm bảo trải nghiệm của khách luôn đạt mức cao nhất kể từ lần đầu tiên khách bước chân vào clinic đến khi khách ra về.",
  },
  {
    name: "CLINIC RECEPTION",
    title:
      "Đảm bảo quy trình tiếp đón khách hàng được thực hiện một cách chuyên nghiệp. Chịu trách nhiệm chăm sóc khách hàng khi khách đến Clinic. Thực hiện thu tiền, xuất invoixe cho khách hàng. Tạo bộ mặt nhằm xây dựng hình ảnh thương hiệu cho Công ty",
  },
];
export default function index() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div>
      <h3 className="text-4xl mb-10">Tuyển dụng</h3>
      <div className="w-full h-auto flex sm:flex-col xl:flex-row justify-center items-center" >

        {datas.map((data, index) => (
          <div key={index}>
            {" "}

          </div>
        ))}


      </div></div>

  );
}
