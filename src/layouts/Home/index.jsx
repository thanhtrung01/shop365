import Footerx from '../../components/Footer'
import Header from '../../components/Header'
// import NavbarTop from '../../components/NavbarTop'
import HeaderImage from "../../assets/header.png";

const HomeLayout = ({ children }) => {
  return (
    <div className="container h-auto">
      {/* <NavbarTop /> */}
      <Header />
      <div
        style={{
          backgroundImage:
            `url('https://glo365.vn/wp-content/themes/ndg-quantum/imgs/header-image2x.png')`,
          backgroundSize: "1000",
          top: 0,
          border: 'none',
          zIndex: 5,

          height: "400px",
        }}
        className="bg-[100%] border-none w-full bg-cover bg-center bg-no-repeat py-10"
      ></div>
      <div className='h-1 '></div>
      <div className='mx-auto px-10'>{children}</div>
      <Footerx />
    </div>
  )
}

export default HomeLayout
