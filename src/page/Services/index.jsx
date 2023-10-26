import React, { useState } from "react";

const data = [
  {
    id: 1,
    name: "LIỆU TRÌNH ĐỘC QUYỀN",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/fastetics-Small.svg",
    title:
      "Chăm sóc da công nghệ cao độc quyền chuẩn y khoa được thực hiện nhanh chóng, an toàn và mang đến hiệu quả cải thiện rõ rệt sau mỗi lần điều trị, phù hợp với nhịp sống hiện đại",
    block: [
      { titlename: "P+ LASER", link: "/services/p-plus-laser-promo/" },
      { titlename: "PHOTO FACIAL", link: "/services/photo-facial/" },
      { titlename: "FACE GYM", link: "/services/face-gym-promo/" },
      { titlename: "HYDRA GLOW", link: "/services/hydrafacial-promo/" },
    ],
  },
  {
    id: 2,
    name: "TRẺ HOÁ DA",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/skin-Revolution-Small.svg",
    title:
      "Bước tiến mới trong ngành thẩm mỹ nội khoa với các công nghệ điều trị chuyên sâu, mang đến hiệu quả cải thiện bề mặt da, làn da được thay mới với kết cấu mịn màng và đàn hồi hơn",
    block: [
      { titlename: "PICO SMOOTH", link: "" },
      { titlename: "MICRONEEDLING", link: "" },
      { titlename: "GLAMOUR PEEL", link: "" },
    ],
  },
  {
    id: 3,
    name: "TIÊM THẨM MỸ",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/walk-in-glow-out-big-small.svg",
    title:
      "Tổng hợp các liệu trình tiêm trẻ hoá đỉnh cao cho hiệu quả nâng cơ, xoá nhăn, làm đầy thể tích da và tạo hình thẩm mỹ được FDA Hoa Kỳ chứng nhận an toàn, trực tiếp thực hiện bởi đội ngũ bác sĩ giàu chuyên môn và kinh nghiệm được đào tạo tại nước ngoài.",
    block: [
      { titlename: "BOTOX", link: "" },
      { titlename: "DERMA FILLER", link: "" },
      { titlename: "YOUTH SAVANT", link: "" },
      { titlename: "MESOTHERAPY", link: "" },
      { titlename: "SCULPTRA", link: "" },
      { titlename: "CHIN UP", link: "" },
    ],
  },
  {
    id: 4,
    name: "XOÁ NHĂN NÂNG CƠ",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/young-lift-small.svg",
    title:
      "Trị liệu không xâm lấn hiện đại giúp căng da, xoá nhăn, nâng cơ chùng nhão, mang đến hiệu quả trẻ hoá ngay tức thì, cho một diện mạo năng động hơn, thích hợp với độ tuổi từ 30 trở đi. ",
    block: [
      { titlename: "THERMAGE FLX", link: "" },
      { titlename: "THREAD LIFT", link: "" },
      { titlename: "HIFU SYGMALIFT", link: "" },
      { titlename: "ULTHERAPY", link: "" },
    ],
  },
  {
    id: 5,
    name: "TRẺ HOÁ MẮT",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/glow-eyes-small.svg",
    title:
      "Các điều trị chuyên sâu cho vùng mắt giúp phục hồi ánh nhìn trẻ trung đúng chuẩn 'yêu từ cái nhìn đầu tiên.",
    block: [
      { titlename: "GOLDEN EYE", link: "" },
      { titlename: "THERMAGE EYE", link: "" },
      { titlename: "REVITALIFT EYE", link: "" },
    ],
  },
  {
    id: 6,
    name: "FACIAL CÔNG NGHỆ CAO",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/facialistic-small.svg",
    title:
      "Facial cao cấp thế hệ mới ứng dụng máy móc công nghệ giúp tối ưu hoá hiệu quả điều trị mà vẫn đảm bảo sự tinh tế, thư giãn và nhẹ nhàng. ",
    block: [
      { titlename: "HYDRAFACIAL", link: "" },
      { titlename: "RED CARPET", link: "" },
      { titlename: "CLEAR BLUE", link: "" },
    ],
  },
  {
    id: 7,
    name: "ĐIỀU TRỊ CƠ THỂ ",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/bodiology-small.svg",
    title:
      "Giải pháp chuyên biệt giúp chăm sóc toàn diện, giảm mỡ và thon gọn các vùng trên cơ thể, mang đến thân hình lý tưởng mà bạn hằng mong ước mà không cần đến các biện pháp phẫu thuật.",
    block: [
      { titlename: "BODY CONTOUR", link: "" },
      { titlename: "FAT FREEZING", link: "" },
    ],
  },
  {
    id: 8,
    name: "ĐIỀU TRỊ TÓC",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/all-about-hair-small.svg",
    title:
      "Ứng dụng công nghệ tiên tiến vượt bậc kết hợp với các liệu pháp điều trị độc quyền tại Glo365. Bạn sẽ ngạc nhiên về kết quả đấy.",
    block: [
      { titlename: "MAX GROWTH", link: "" },
      { titlename: "GROWTH BOOSTER", link: "" },
      { titlename: "HAIR REMOVAL", link: "" },
    ],
  },
  {
    id: 9,
    name: "XOÁ XĂM",
    imageurl:
      "https://glo365.vn/wp-content/uploads/2019/09/bodiology-small.svg",
    title:
      "Nhờ công nghệ Laser Pico thế hệ mới, giờ đây bạn có thể loại bỏ hình xăm một cách nhanh chóng và sạch sẽ, trả lại làn da đều màu và sáng khỏe như ban đầu.",
    block: [{ titlename: "PICO TATTOO REMOVAL", link: "" }],
  },
];
export default function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [openMenu, setOpenMenu] = useState("");

  return (
    <div className="h-auto flex flex-col items-center justify-center mb-20">
      <h2
        style={{
          boxSizing: "border-box",
          fontFamily: "Comfortaa, Arial",
          fontSize: "40px",
          fontWeight: 300,
          lineHeight: "56px",
          marginBlockEnd: "0px",
          marginBlockStart: "0px",
          marginBottom: "0px !important",
          marginLeft: 0,
          marginRight: 0,
          marginTop: "0px !important",
          textAlign: "center",
          textSizeAdjust: "100%",
          textTransform: "uppercase",
        }}
        className="sow-headline py-10"
      >
        Dịch vụ thẩm mỹ
      </h2>
      <div className=" flex w-[80%] flex-col items-center">
        {data.map((item, i) => (
          <div key={i}
            className={`mx-40 w-full my-2 h-full flex flex-col items-center justify-center rounded-lg   ${openMenu === item.id ? "h-1/3 " : "h-20 "
              } `}
          >
            {" "}
            <div
              key={i}
              style={{
                fontFamily: "Comfortaa, Arial",
                fontSize: "16px",
              }}
              id={"panel-626-1-0-0"}
              onClick={() => {
                setOpenMenu(item.id === openMenu ? "" : item.id), toggle;
              }}
              data-index={2}
              className="w-4/5 flex justify-center cursor-pointer"
            >
              <div
                style={{
                  boxShadow: "0 3px 30px rgba(255,103,152,.31)",
                }}
                className={`p-5 w-full bg-slate-50  flex justify-center items-center rounded-3xl ${openMenu === item.id ? "h-1/3 " : "h-14 "
                  }`}
                id={"musthave"}
              >
                <h3
                  className={`  hover:text-pink-600  ${openMenu === item.id ? "hidden " : "block"
                    }`}
                >
                  {" "}
                  {item.name}
                </h3>

                <div
                  id={"pl-w64f4c4564fe52"}
                  className={`panel-layout ${openMenu === item.id ? "block" : "hidden"
                    }`}
                >
                  <div
                    id={"pg-w64f4c4564fe52-0"}
                    className={"panel-grid panel-no-style"}
                  >
                    <div
                      id={"pgc-w64f4c4564fe52-0-0"}
                      className={"panel-grid-cell"}
                    >
                      <div
                        id={"panel-w64f4c4564fe52-0-0-0"}
                        className={
                          "so-panel widget widget_sow-image panel-first-child panel-last-child"
                        }
                        data-index={0}
                      >
                        <div className={"flex flex-col items-center"}>
                          <div
                            style={{
                              boxShadow: "0 3px 30px rgba(255,103,152,.31)",
                            }}
                            className="w-24 h-24 rounded-full flex justify-center items-center"
                          >
                            {" "}
                            <img
                              className="w-20 h-20"
                              src={item.imageurl}
                            ></img>
                          </div>

                          <h3 className={"widget-title text-3xl my-3"}>{item.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id={"pg-w64f4c4564fe52-1"}
                    className={"panel-grid panel-has-style"}
                  >
                    <div
                      className={
                        "acc-panel panel-row-style panel-row-style-for-w64f4c4564fe52-1 flex flex-col justify-center items-center"
                      }
                    >
                      <p className="w-3/4">{item.title}</p>
                      <div className="w-12/12">
                        <div className={`items-center grid ${window.innerWidth < 768 ? 'xl:grid-cols-1' : `grid-cols-${item.block?.length}`} `}>
                          {item.block.length > 0 ? (
                            item.block.map((noneblock, index) => (
                              <div
                                key={index}
                                style={{
                                  boxShadow: "0 3px 30px rgba(255,103,152,.31)",
                                }}
                                className=" mx-auto xl:w-5/6 px-6 h-14 rounded-full flex justify-center items-center mt-10 border-2 border-rose-200"
                              >
                                <p>
                                  <a href={noneblock.link}>
                                    <strong>{noneblock.titlename}</strong>
                                  </a>
                                </p>
                              </div>
                            ))
                          ) : null}

                        </div>
                      </div>
                      <div
                        id={"panel-w64f4c4564fe52-1-0-2"}
                        className={"so-panel widget widget_ink-buttons my-5"}
                        data-index={3}
                      >
                        <div
                          className={
                            "acc-panel btn-pink panel-widget-style panel-widget-style-for-w64f4c4564fe52-1-0-2"
                          }
                        >
                          <div
                            className={
                              "so-widget-ink-buttons so-widget-ink-buttons-buttons-b5aaee92b35d my-5  "
                            }
                          >
                            <div className={"iw-so-button-base "}>
                              <a
                                style={{
                                  boxShadow: "0 3px 30px rgba(255,103,152,.31)",
                                }}
                                className={
                                  "iw-so-button book-must-have pum-trigger bg-rose-300 px-5 py-3 text-slate-50 font-light  rounded-full"
                                }
                              >
                                ĐẶT GÓI{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        id={"panel-w64f4c4564fe52-1-0-3"}
                        className={
                          "widget_text so-panel widget widget_custom_html panel-last-child"
                        }
                        data-index={4}
                      >
                        <div className={"textwidget custom-html-widget"}>
                          <div className={"acc-close"}>ĐÓNG</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
