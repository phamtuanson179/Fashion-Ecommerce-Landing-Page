import DotsVector from "../../public/vectors/dots.vector";

export default function NewCollection() {
  return (
    <div className="relative">
      <div className="absolute w-[35rem] h-[35rem] top-[-15rem] left-[-15rem]">
        <img src="/images/ellipse.png" alt="" />
      </div>

      <div className="container m-auto">
        <div className="mt-14 mb-20">
          <div className=" section__header--dark  text-center">
            New Collection
          </div>
          <div className="description text-center">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </div>
        </div>

        <div className="flex justify-between items-center gap-8 relative mb-32">
          <div>
            <div className=" w-[20rem] h-[20rem] bg-gradient-new-collection opacity-30 absolute right-[-6rem] bottom-[-4rem]"></div>
          </div>

          <div className=" absolute bottom-[-2.5rem] right-[-4.5rem]">
            <DotsVector />
          </div>
          <div className="relative">
            <div>
              <img src="/images/new-collection-1.png" />
            </div>
            <button className=" btn btn--dark uppercase absolute bottom-5 left-1/2 translate-x-[-50%] ">
              SWEATER
            </button>
          </div>

          <div className="relative">
            <div>
              <img src="/images/new-collection-1.png" />
            </div>
            <button className=" btn btn--dark uppercase absolute bottom-5 left-1/2 translate-x-[-50%] ">
              SWEATER
            </button>
          </div>

          <div className="relative">
            <div>
              <img src="/images/new-collection-1.png" />
            </div>
            <button className=" btn btn--dark uppercase absolute bottom-5 left-1/2 translate-x-[-50%] ">
              SWEATER
            </button>
          </div>
        </div>

        <div className=" flex flex-row gap-10">
          <div className=" relative">
            <div className=" w-[20rem] h-[20rem] bg-gradient-new-collection opacity-30 absolute right-[-4rem] top-[-10.5rem]"></div>
            <div className=" absolute top-[-4rem] right-[0rem]">
              <DotsVector />
            </div>
            <div className="relative w-[33.25rem]">
              <img
                src="/images/new-collection-main.png"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className=" flex-1 pl-4 max-w-lg relative">
            <div className=" section__header--dark text-start mt-11">
              Best Fashion Since 2014
            </div>
            <div className="text-start text-xl font-normal mt-6 font-secondary">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud amet.duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud
              amet.
            </div>

            <div className=" bg-[#D2B79E] p-6 mt-12 text-center flex justify-between items-center absolute left-[-11rem]">
              <div className=" px-9">
                <div className="section__header--dark text-5xl">2014</div>
                <div className="text-xl font-normal mt-1">Fifash Founded</div>
              </div>
              <div className=" px-9  border-x border-black">
                <div className="section__header--dark text-5xl ">8900+</div>
                <div className="text-xl font-normal mt-1">Product Sold</div>
              </div>
              <div className=" px-9">
                <div className="section__header--dark text-5xl">3100+</div>
                <div className="text-xl font-normal mt-1">Best Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-[35rem] h-[35rem] bottom-[-10rem] right-[-18rem]">
        <img src="/images/ellipse.png" alt="" />
      </div>
    </div>
  );
}
