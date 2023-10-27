import Footerx from '../../components/Footer'
import Header from '../../components/Header'
// eslint-disable-next-line react/prop-types
const HomeLayout = ({ children }) => {
  return (
    <div className="container w-full w-screen h-auto relative">
      <Header />
      <div
        style={{
          backgroundImage:
            `url('https://glo365.vn/wp-content/themes/ndg-quantum/imgs/header-image2x.png')`,
          backgroundSize: "cover",
          top: 0,
          border: 'none',
          zIndex: 5,
        }}
        className="bg-[100%] border-none bg-contain bg-cover bg-center bg-no-repeat py-10 relative"
      >
        <div className="hidden sm:block w-[70%] h-[340px]"></div>
        <div className="block sm:hidden w-[50%] h-[90px]"></div>
      </div>
      <div className='h-1 '></div>
      <div className='mx-auto'>{children}</div>
      <Footerx />
    </div>
  )
}

export default HomeLayout
