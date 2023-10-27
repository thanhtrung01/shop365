import { useState, useEffect } from 'react'
// import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const images = [
  'https://glo365.vn/wp-content/uploads/2023/10/Home-slider-desk-780x94-PNVN-20-10.png',
  'https://glo365.vn/wp-content/uploads/2023/09/Home-slider-desk-780x94-Morpheus8.png',
];
const data = [
  { icon: 'https://glo365.vn/wp-content/uploads/2021/06/SkinGym-Round.png', title: 'P+ LASER', conten: 'Mô hình luyện tập nâng cao sức khỏe làn da. Giải quyết triệt để và an toàn mọi vấn đề trên bề mặt da chỉ 20 phút mỗi tuần.' },
  { icon: 'https://glo365.vn/wp-content/uploads/2021/06/DreamSculpt-Round.png', title: 'BODY CONTOUR', conten: 'Phương pháp duy trì đường nét cơ thể bằng sóng vô tuyến điện dung thông minh. Giúp săn chắc da và đảo thải mỡ thừa.' },
  { icon: 'https://glo365.vn/wp-content/uploads/2021/06/FaceGym-men-Round.png', title: 'FACE GYM', conten: 'Liệu trình duy trì đường nét V-line. Độ săn chắc và trẻ hóa gương mặt được thực hiện hàng tuần một cách khoa học và đều đặn.' }]
const slider = [
  {
    id: 1,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/all-about-hair-big.svg',
    title: 'All About Hair',
    content: 'Trị liệu nuôi dưỡng phục hồi mái tóc',
  },
  {
    id: 2,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/bodiology-big.svg',
    title: 'Вodyology',
    content: 'Tôn vinh vóc dáng đường cong cơ thể',
  },
  {
    id: 3,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/facialistic-big.svg',
    title: 'Facialistics',
    content: 'Facial công nghệ cao chăm sóc tối ưu',
  },
  {
    id: 4,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/glow-eyes-big.svg',
    title: 'Glow Eyes',
    content: 'Phục hồi ánh nhìn rạng rỡ cho đôi mắt',
  },
  {
    id: 5,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/skin-Revolution-Big.svg',
    title: 'Skin Revolution',
    content: 'Hồi sinh làn da căng mướt mềm mịn',
  },
  {
    id: 6,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/walk-in-glow-out-big.svg',
    title: 'Walk In Glow Out',
    content: 'Tái tạo đường nét trẻ hóa gương mặt',
  },
  {
    id: 7,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/young-lift-big.svg',
    title: 'Young Lift',
    content: 'Nâng cơ xóa nhăn hiệu quả vượt trội',
  },
  {
    id: 8,
    image: 'https://glo365.vn/wp-content/uploads/2019/11/fastetics-big.svg',
    title: 'Must Have',
    content: 'Da sáng bật tông, mịn trong tích tắc',
  },
]
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

const dataDB = [{ icon: 'https://glo365.vn/wp-content/themes/ndg-quantum/imgs/earth-globe.svg', title: 'PHÒNG KHÁM Q.2', conten: '63 Xuân Thủy, Quận 2, Thành phố Thủ Đức' },
{ icon: 'https://glo365.vn/wp-content/themes/ndg-quantum/imgs/phone-symbol-of-an-auricular-inside-a-circle.svg', title: 'Hotline', conten: '1800 6733' },
{ icon: 'https://glo365.vn/wp-content/themes/ndg-quantum/imgs/earth-globe.svg', title: 'PHÒNG KHÁM FLAGSHIP Q.1', conten: '31A Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh.' }]
export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [SlidebaShow, setSlideba] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(6);
  const [slidesToShows, setSlidesToShows] = useState(72);
  const [inputShow, setInput] = useState(3);
  const bubbleImageStyle = {
    backgroundImage: `url('https://glo365.vn/wp-content/themes/ndg-quantum/imgs/header-bubble.svg')`,
    top: 0,
    border: 'none',
    zIndex: -5,
    width: '45%',
    WebkitAnimation: 'openDoor 25s ease infinite',
    animation: 'openDoor 15s ease infinite',
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const content = event.target.content.value;
    const requestData = {
      name,
      email,
      content,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetch('https://api-glory365.onrender.com/api/v1/contact/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData)
    })
      .then((response) => {
        if (response.ok) {
          alert('Đặt hẹn thành công')
        } else {
          alert('Có lỗi xảy ra khi gửi thông tin')
        }
      })
      .catch((error) => {
        console.error('Lỗi:', error)
      })
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesToShow(1);
        setInput(1)
        setSlideba(sliders)
        setSlidesToShows(20)
      } else {
        setSlidesToShow(6);
        setSlideba(null)
        setInput(3)
        setSlidesToShows(72)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  }, [])
  const MobileSliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  // const sliders = {{`width: '80%', height: '200px', margin: '0 auto'`}}
  const sliders = {
    width: '100%',
    height: '200px',
    margin: '0 auto',
  }
  return (
    <div className="container md:w-screen w-full h-auto relative">
      <style>
        {`
        .slider-container {
          animation: moveLeft 40s linear infinite; /* Thay đổi tốc độ ở đây */
        }
        .item-content {
          background-size: cover;
          margin: 0 auto;
          background-position: center;
          transition: transform 5s;
        }
        
        @keyframes moveLeft {
          0% {
            transform: translateX(0);
          }
          12.5% {
            transform: translateX(-100%);
          }
          25% {
            transform: translateX(-200%);
          }
          37.5% {
            transform: translateX(-300%);
          }
          50% {
            transform: translateX(-400%);
          }
          62.5% {
            transform: translateX(-500%);
          }
          75% {
            transform: translateX(-600%);
          }
          87.5% {
            transform: translateX(-700%);
          }
          100% {
            transform: translateX(-800%);
          }
        }
        
          @keyframes openDoor {
            0%, 100% { transform: perspective(1000px) rotateY(0deg); }
            50% { transform: perspective(1000px) rotateY(45deg); }
          }

          @-webkit-keyframes openDoor {
            0%, 100% { transform: perspective(1000px) rotateY(0deg); }
            50% { transform: perspective(1000px) rotateY(45deg); }
          }
        `}
      </style>
      {/* <div
        style={bubbleImageStyle}
        className="bg-[100%] border-none bg-contain top-0 bg-cover bg-center bg-no-repeat position"
      >
        <div className="hidden sm:block w-[10%] h-[340px] animate-slide"></div>
        <div className="block sm:hidden w-[20%] h-[90px]"></div>
      </div> */}
      <div className='h-1 '></div>
      <div className="relative z-10">
        <div className={`position m-auto mb-40 w-full m-auto h-${slidesToShows}`}>
          <div className='w-[80%] m-auto h-[100%] sm:h-[100%]'>
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="w-full h-200 sm:h-200">
                  <img
                    src={image}
                    style={SlidebaShow}
                    alt={`anh${index}`}
                    className='rounded-2xl block border-transparent outline-none bg-transparent bg-none img w-full h-full object-cover'
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <img className='pt-10' src='https://glo365.vn/wp-content/uploads/2019/09/line-02.svg' alt='ảnh' />
      <div className='mt-10'>
        <h2 className="text-4xl mt-10 mb-20"></h2>
        <div className=" h-auto flex justify-center items-center grid xl:grid-cols-3 mb-20 xl:flex-row sm:flex-col flex-col">
          {data.map((datax, i) => (
            <div key={i} className=" h-auto flex flex-col items-center m-auto mb-10">
              <img className="w-60" src={datax.icon}></img>
              <div className="my-5">
                <h3 className="text-xl mx-2 "> {datax.title}</h3>
              </div>
              <p style={{ fontFamily: 'Comfortaa, Arial' }} className='text-justify leading-7 w-[65%] font-medium'> {datax.conten}</p>
            </div>
          ))}</div>
      </div>
      <div>
        <h2 className="text-4xl mt-10 mb-20">DỊCH VỤ THẨM MỸ</h2>
        <div className="w-[80%] h-auto m-auto">
          <Slider {...MobileSliderSettings}>
            {slider.map((datax) => (
              <div key={datax.id}>
                <div
                  style={{
                    backgroundImage: `url('https://glo365.vn/wp-content/themes/ndg-quantum/imgs/egg.svg')`,
                    width: '100%',
                    backgroundSize: 'cover',
                    margin: '0 auto',
                    paddingBottom: '13px',
                    paddingTop: '4px',
                  }}
                >
                  <img
                    className="w-[80%] p-10 text-center items-center m-4"
                    style={{ marginLeft: '20px', marginTop: '28px' }}
                    src={datax.image}
                    alt={datax.title}
                  />
                </div>
                <h3
                  style={{
                    fontFamily: 'Comfortaa, Arial',
                    fontSize: '24px',
                    fontWeight: 300,
                    lineHeight: '21px',
                    paddingBottom: '15px'
                  }}
                  className="text-center mx-2"
                >
                  {datax.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Comfortaa, Arial',
                    fontSize: '16px',
                    fontWeight: 300,
                    textAlign: 'center',
                    margin: '0 auto',
                    lineHeight: '22px',
                  }}
                  className="text-center leading-7 w-[65%]"
                >
                  {datax.content}
                </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="flex flex-col  items-center my-20">
        <img className='m-auto w-[5%] mb-10' src='https://glo365.vn/wp-content/uploads/2019/09/gift.svg' alt='ảnh' />
        <h2 className="text-4xl leading-6 font-extralight ">ĐẸP NGAY CHỜ CHI!</h2>
        <p className="w-3/4 leading-8 text-center my-10">
          Đặt hẹn phân tích da với bác sĩ. Toả sáng ngay cùng kế hoạch làm đẹp cho riêng bạn!
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className={`px-5 mx-5 h-auto flex justify-center items-center grid grid-cols-${inputShow} mt-3`}>
            <div className="px-5 mx-5 border-b-2 border-rose-400 grid grid-cols-1 mt-3">
              <input required name='name' id='name' className='bg-transparent text-xl border-transparent p-3 text-center outline-none' placeholder='Tên' />
            </div>
            <div className="px-5 mx-5 border-b-2 border-rose-400 grid grid-cols-1 mt-3">
              <input required name='email' id='email' className='bg-transparent text-xl border-transparent p-3 text-center outline-none' placeholder='Email' />
            </div>
            <div className="px-5 mx-5 border-b-2 border-rose-400 grid grid-cols-1 mt-3">
              <input required name='content' id='content' className='bg-transparent text-xl border-transparent p-3 text-center outline-none' placeholder='Nội dung' />
            </div>
          </div>
          <button
            type="submit"
            className="bg-transparent border-none border p-2 sm:p-3 my-10 sm:my-0 sm:mt-0 rounded-full sm:rounded-none shadow-md transform transition-transform hover:scale-105 focus:outline-none"
            style={{
              borderRadius: '30px',
              color: '#000',
              marginTop: '30px',
              boxShadow: '0 3px 30px rgba(255, 103, 152, .31)',
              cursor: 'pointer',
              display: 'inline-block'
            }}
          >
            ĐẶT HẸN NGAY
          </button>

        </form>

      </div>
      <img className='mt-10' src='https://glo365.vn/wp-content/uploads/2019/09/line-01.svg' alt='ảnh' />
      <div className="flex flex-col  items-center my-20">
        <h2 className="text-4xl leading-6 font-extralight "> VỀ CHÚNG TÔI</h2>
        <p className="w-3/4 leading-8 text-center my-10">
          Glo365 là một Beauty Concept đẳng cấp 5 sao hàng đầu Châu Á, bao gồm các
          dịch vụ thẩm mỹ và làm đẹp cao cấp nhằm nâng cao trải nghiệm khách hàng
          vượt khỏi lằn ranh của giới hạn. Tại Việt Nam, Glo365 đang khẳng định vị
          thế tiên phong với các dịch vụ thẩm mỹ công nghệ đỉnh cao được FDA chứng
          nhận.
        </p>
        <div className=" w-3/3 flex justify-center items-center xl:flex-row   sm:flex-col flex-col"> {datas.map((data, i) => (
          <div key={i}>
            <div
              style={{
                boxShadow: "rgba(255, 103, 152, 0.31) 0px 3px 30px 0px",
              }}
              className="xl:w-40 lg:w-40 sm:w-11/12 xl:h-44  m-5 rounded-lg bg-white flex flex-col  items-center p-3 "
            >
              <img
                className="w-1/3 h-1/3"
                src={data.link}
                alt
              ></img>
              <h3 className="leading-6 font-light ">
                {data.title}
              </h3>
            </div>
          </div>
        ))}
        </div>
        <img className='mt-10' src='https://glo365.vn/wp-content/uploads/2019/09/line-02.svg' alt='ảnh' />
        <div>
          <h2 className="text-4xl mt-10 mb-20">LIÊN HỆ</h2>
          <div className=" h-auto flex justify-center items-center grid xl:grid-cols-3 mb-20 xl:flex-row sm:flex-col flex-col">
            {dataDB.map((datax, i) => (
              <div key={i} className=" h-auto flex flex-col items-center m-auto mb-10">
                <img className="w-20" src={datax.icon}></img>
                <div className="my-5">
                  <h3 className="text-xl"> {datax.title}</h3>
                </div>
                <p> {datax.conten}</p>
              </div>
            ))}</div>
        </div>
      </div>
      <div className="position">
        <div className='w-full m-auto h-96'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3916.7827134163545!2d106.66742300000001!3d10.979767!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d735e1167645%3A0x624d4798123de4d1!2zNDI5IMSQ4bqhaSBs4buZIELDrG5oIETGsMahbmcsIFBow7ogQ8aw4budbmcsIFRo4bunIEThuqd1IE3hu5l0LCBCw6xuaCBExrDGoW5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sus!4v1698249156874!5m2!1svi!2sus"
            // width={800} 
            height={770}
            style={{ border: 0 }}
            className='w-full'
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  );
}
