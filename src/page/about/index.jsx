import React from "react";

const datas = [
  {
    link: "https://glo365.vn/wp-content/uploads/2019/09/quickconv.svg",
    title: "ĐIỀU TRỊ AN TOÀN NHANH CHÓNG",
  },
  {
    link: "https://glo365.vn/wp-content/uploads/2019/09/time.svg",
    title: "KHÔNG MẤT THỜI GIAN NGHỈ DƯỠNG",
  },
  {
    link: "https://glo365.vn/wp-content/uploads/2019/09/doctor.svg",
    title: "QUY TRÌNH ĐIỀU TRỊ CHUẨN Y KHOA",
  },
  {
    link: "https://glo365.vn/wp-content/uploads/2019/09/doctor.svg",
    title: "VỊ TRÍ TRUNG TÂM ĐẲNG CẤP 5 SAO",
  },
  {
    link: "https://glo365.vn/wp-content/uploads/2019/09/awards.svg",
    title: "NHIỀU GIẢI THƯỞNG CHỨNG NHẬN UY TÍN",
  },
];

export default function index() {
  return (
    <div className="min-w-full flex flex-col  items-center my-20">
      <h2 className="text-4xl leading-6 font-extralight "> VỀ CHÚNG TÔI</h2>
      <p className="z-10 w-3/4 leading-8 text-center my-10">
        Glo365 là một Beauty Concept đẳng cấp 5 sao hàng đầu Châu Á, bao gồm các
        dịch vụ thẩm mỹ và làm đẹp cao cấp nhằm nâng cao trải nghiệm khách hàng
        vượt khỏi lằn ranh của giới hạn. Tại Việt Nam, Glo365 đang khẳng định vị
        thế tiên phong với các dịch vụ thẩm mỹ công nghệ đỉnh cao được FDA chứng
        nhận.
      </p>
      <div
        style={{ zIndex: 10 }}
        className=" w-3/3 flex justify-center items-center xl:flex-row   sm:flex-col flex-col"
      >
        {" "}
        {datas.map((data, i) => (
          <div key={i}>
            <div
              style={{
                boxShadow: "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
              }}
              className="xl:w-40 lg:w-40 sm:w-11/12 xl:h-44  m-5 rounded-lg bg-white flex flex-col  items-center p-3 "
            >
              <img className="w-1/3 h-1/3" src={data.link} alt></img>
              <h3 className="leading-6 font-light ">{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
