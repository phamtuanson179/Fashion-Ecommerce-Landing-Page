import CartIcon from "../../public/icons/cart.icon";
import DotsVector from "../../public/vectors/dots.vector";
import MainSectionVector from "../../public/vectors/main-section.vector";
import WaveVector from "../../public/vectors/wave.vector";

export default function MainSection() {
  return (
    <div className=" bg-main-section-bg relative">
      <div className=" absolute left-[-1.5rem] top-[11rem]">
        <DotsVector />
      </div>
      <div className=" absolute right-0 top-0 opacity-30">
        <div className=" w-[26rem] h-[33rem] bg-gradient-main-section"></div>
      </div>

      <div className=" absolute left-0 bottom-0 opacity-30">
        <div className=" w-[16rem] h-[15rem] bg-gradient-main-section"></div>
      </div>

      <div className="container m-auto pt-14 pb-32 relative z-10">
        <div className="flex justify-between items-center uppercase">
          <div className="font-black text-4xl">FIFASH</div>
          <div className=" font-bold text-base flex flex-row gap-10">
            <div>Men</div>
            <div>Women</div>
            <div>Kids</div>
            <div>Collection</div>
            <div>Trend</div>
          </div>
          <div className="flex flex-row gap-6">
            <button className="btn p-0">
              <CartIcon />
            </button>
            <button className="btn btn--light">Login</button>
          </div>
        </div>
        <div className=" mt-36 flex flex-row gap-40 justify-between">
          <div className="max-w-lg">
            <div className=" text-black-800 text-7xl font-black font-main">
              Find The Best Fashion Style For You
            </div>
            <div className="description mt-2 font-main">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </div>
            <div>
              <button className="btn btn--dark uppercase mt-16">
                shop now
              </button>
            </div>
          </div>
          <div className=" relative">
            <div className=" absolute right-[-2rem] top-[-2rem]">
              <DotsVector />
            </div>
            <div className="relative z-10">
              <MainSectionVector />
            </div>
            <div className=" absolute bottom-[2rem] left-[-4rem]">
              <DotsVector />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 absolute bottom-0 right-0 pb-5">
        <WaveVector />
        <WaveVector />
        <WaveVector />
        <WaveVector />
        <WaveVector />
        <WaveVector />
        <WaveVector />
      </div>
    </div>
  );
}
