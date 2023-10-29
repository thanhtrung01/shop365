import "./index.css";
const BackGround = () => {
  return (
    <>
      <div className="buble-1  hidden lg:block">
        <img
          className="w-full h-full"
          src="https://glo365.vn/wp-content/themes/ndg-quantum/imgs/bg/bubble01.svg"
          alt=""
        />
      </div>
      <div className="buble-2  hidden lg:block">
        <img
          className="w-full h-full"
          src="https://glo365.vn/wp-content/themes/ndg-quantum/imgs/bg/bubble02.svg"
          alt=""
        />
      </div>
      <div style={{ width: "552px", height: "366px" }} className="buble-4 ">
        <img
          className="w-full h-full"
          src="https://glo365.vn/wp-content/themes/ndg-quantum/imgs/bg/bubble04.svg"
          alt=""
        />
      </div>
      <div className="buble-5 w-[600px] h-[405px] md:w-[819px] md:h-[405px]">
        <img
          className="w-full h-full"
          src="https://glo365.vn/wp-content/themes/ndg-quantum/imgs/header-bubble.svg"
          alt=""
        />
      </div>
    </>
  );
};

export default BackGround;
