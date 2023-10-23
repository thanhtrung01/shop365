import React from 'react'


const data = [{ icon: 'https://glo365.vn/wp-content/themes/ndg-quantum/imgs/earth-globe.svg', title: 'PHÒNG KHÁM Q.2', conten: '63 Xuân Thủy, Quận 2, Thành phố Thủ Đức' },
{ icon: 'https://glo365.vn/wp-content/themes/ndg-quantum/imgs/phone-symbol-of-an-auricular-inside-a-circle.svg', title: 'Hotline', conten: '1800 6733' },
{ icon: 'https://glo365.vn/wp-content/themes/ndg-quantum/imgs/earth-globe.svg', title: 'PHÒNG KHÁM FLAGSHIP Q.1', conten: '31A Lý Tự Trọng, Quận 1, Thành phố Hồ Chí Minh.' }]
export default function index() {
  return (
    <div>
      <h2 className="text-4xl mt-10 mb-20">LIÊN HỆ</h2>
      <div className=" h-auto flex justify-center items-center grid xl:grid-cols-3 mb-20 xl:flex-row sm:flex-col flex-col">
        {data.map((datax, i) => (
          <div key={i} className=" h-auto flex flex-col items-center m-auto mb-10">
            <img className="w-20" src={datax.icon}></img>
            <div className="my-5">
              <h3 className="text-xl"> {datax.title}</h3>
            </div>
            <p> {datax.conten}</p>
          </div>
        ))}</div>

    </div>
  )
}
