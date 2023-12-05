"use client";
import Slider from "react-slick";
import StarVector from "../../public/vectors/star";

interface Item {
  src: string;
  starAmount: number;
  name: string;
  price: number;
  newPrice: number;
}

export const BestSellerProduct = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const items: Item[] = [
    {
      src: "/images/best-seller-product-1.png",
      starAmount: 5,
      name: "Product 1",
      price: 220,
      newPrice: 180,
    },
    {
      src: "/images/best-seller-product-2.png",
      starAmount: 5,
      name: "Product 2",
      price: 220,
      newPrice: 180,
    },
    {
      src: "/images/best-seller-product-3.png",
      starAmount: 5,
      name: "Product 3",
      price: 220,
      newPrice: 180,
    },
  ];

  return (
    <div className="bg-best-seller-product-bg">
      <div className="container m-auto py-16 flex overflow-hidden">
        <div className=" max-w-[35rem] p-12">
          <div className="text-7xl font-black font-main text-black-200">
            Best Seller Product
          </div>
          <div className=" text-xl font-normal mt-7 mb-14 font-secondary text-black-200">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim veli amet.duis enim velit
            mollit. Exercitation veniam consequat sunt nostrud amet.duis enim
            velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </div>
          <button className="btn btn--light border-black-200 text-black-200 py-4 px-16">
            Login
          </button>
        </div>
        <div>
          <Slider {...settings}>
            {items?.map((item, idx: number) => (
              <div key={idx} className=" rounded-lg bg-black-0 min-w-[22rem]">
                <div className="w-[22rem] h-[20rem]">
                  <img
                    className="w-full h-full object-cover"
                    src={item.src}
                    alt=""
                  />
                </div>
                <div className=" p-4">
                  <div className="flex gap-2">
                    {Array.from(Array(item.starAmount)).map((_, idx) => (
                      <StarVector key={idx} />
                    ))}
                  </div>
                  <div>{item.name}</div>
                  <div className="flex font-secondary gap-2">
                    <div className=" text-black-100 line-through">
                      {" "}
                      ${item.price}
                    </div>
                    <div>${item.newPrice}</div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
