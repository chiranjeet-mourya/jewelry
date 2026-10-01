import React, { useState } from "react";
import { Heart, Star, Eye, ShoppingBag } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import ProductQuickView from "./ProductQuickView";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import jwl1 from "../assets/sellers/1.jpg"
import jwl2 from "../assets/sellers/2.jpg"
import jwl3 from "../assets/sellers/3.jpg"
import jwl4 from "../assets/sellers/4.jpg"
import jwl5 from "../assets/sellers/5.jpg"
import jwl6 from "../assets/sellers/6.jpg"
import jwl7 from "../assets/sellers/7.jpg"
import jwl8 from "../assets/sellers/8.jpg"
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: jwl1,
      category: "RINGS",
      name: "18ct White Gold 0.50ct Diamond Curved Wedding Ring",
      price: "$429.99",
      oldPrice: "$469.99",
      discount: "8%",
      rating: "4.8",
      reviews: "24 Reviews",
    },

    {
      id: 2,
      image: jwl2,
      category: "ETERNITY",
      name: "Platinum 0.10ctw Diamond Eternity Ring",
      price: "$468.99",
      oldPrice: "$568.99",
      discount: "18%",
      rating: "4.7",
      reviews: "18 Reviews",
    },

    {
      id: 3,
      image: jwl3,
      category: "BRACELETS",
      name: "18ct White Gold 2cttw Line Bracelet",
      price: "$697.88",
      oldPrice: "$897.88",
      discount: "23%",
      rating: "4.9",
      reviews: "32 Reviews",
    },

    {
      id: 4,
      image: jwl4,
      category: "NECKLACES",
      name: "18ct White Gold 0.50ct Diamond Mixed Cut Pendant",
      price: "$888.50",
      oldPrice: "$987.50",
      discount: "11%",
      rating: "4.6",
      reviews: "15 Reviews",
    },

    {
      id: 5,
      image: jwl5,
      category: "EARRINGS",
      name: "Sterling Silver Open Drop Earrings",
      price: "$86.77",
      oldPrice: "$123.55",
      discount: "30%",
      rating: "4.8",
      reviews: "27 Reviews",
    },

    {
      id: 6,
      image: jwl6,
      category: "RINGS",
      name: "Classic Diamond Solitaire Engagement Ring",
      price: "$599.99",
      oldPrice: "$749.99",
      discount: "20%",
      rating: "4.9",
      reviews: "41 Reviews",
    },

    {
      id: 7,
      image: jwl7,
      category: "BRACELETS",
      name: "Luxury Diamond Tennis Bracelet",
      price: "$799.99",
      oldPrice: "$999.99",
      discount: "20%",
      rating: "4.8",
      reviews: "29 Reviews",
    },

    {
      id: 8,
      image: jwl8,
      category: "EARRINGS",
      name: "Elegant Gold Diamond Drop Earrings",
      price: "$329.99",
      oldPrice: "$419.99",
      discount: "21%",
      rating: "4.7",
      reviews: "19 Reviews",
    },
  ];

  return (
    <>
      <section className="w-full bg-white py-16 lg:py-20 lg:px-0 px-5">
        <div className="container mx-auto px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-10">
            <div>
              <p className="text-[12px] tracking-[3px] text-[#b08a4a] font-medium mb-2">
                OUR COLLECTION
              </p>

              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-[#222]">
                Our Best Sellers
              </h2>

              <p className="mt-3 text-sm text-gray-500 max-w-[620px]">
                Discover our most loved jewellery pieces, carefully crafted to
                make every special moment shine.
              </p>
            </div>

            <button className="text-sm font-semibold border-b border-[#222] pb-1 w-fit hover:text-[#b08a4a] hover:border-[#b08a4a] transition">
              VIEW ALL PRODUCTS
            </button>
          </div>

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              navigation={{
                nextEl: ".seller-next",
                prevEl: ".seller-prev",
              }}
              pagination={{
                el: ".seller-pagination",
                clickable: true,
              }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={700}
              spaceBetween={20}
              slidesPerView={1.2}
              breakpoints={{
                480: {
                  slidesPerView: 1.5,
                  spaceBetween: 16,
                },

                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                1024: {
                  slidesPerView: 4,
                  spaceBetween: 22,
                },

                1280: {
                  slidesPerView: 5,
                  spaceBetween: 24,
                },
              }}
              className="!pb-14"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="group relative h-full">
                    <div className="relative overflow-hidden bg-[#f7f7f7] aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="
                        w-full
                        h-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                      />

                      <span
                        className="
                      absolute
                      top-3
                      left-3
                      z-10
                      border
                      border-[#ff4d42]
                      bg-white
                      text-[#ff4d42]
                      text-[12px]
                      font-medium
                      px-2.5
                      py-1.5
                    "
                      >
                        -{product.discount}
                      </span>

                      <button
                        className="
                        absolute
                        top-3
                        right-3
                        z-20
                        w-9
                        h-9
                        rounded-full
                        bg-white
                        flex
                        items-center
                        justify-center
                        shadow-sm
                        hover:bg-[#222]
                        hover:text-white
                        transition-all
                        duration-300
                      "
                      >
                        <Heart size={18} strokeWidth={1.7} />
                      </button>

                      <div
                        className="
                      absolute
                      bottom-0
                      left-0
                      right-0
                      z-20
                      flex
                      translate-y-full
                      group-hover:translate-y-0
                      transition-transform
                      duration-500
                      ease-out
                    "
                      >
                        <button
                          type="button"
                          onClick={() => setSelectedProduct(product)}
                          className="
                          flex-1
                          h-12
                          bg-white
                          text-[#222]
                          flex
                          items-center
                          justify-center
                          gap-2
                          text-[11px]
                          sm:text-xs
                          font-semibold
                          uppercase
                          tracking-wide
                          hover:bg-[#222]
                          hover:text-white
                          transition cursor-pointer
                        "
                        >
                          <Eye size={16} />
                          Quick View
                        </button>

                        <button
                        onClick={()=> navigate(`/shop-details/${product.id}`)}
                          className="
                          flex-1
                          h-12
                          bg-[#222]
                          text-white
                          flex
                          items-center
                          justify-center
                          gap-2
                          text-[11px]
                          sm:text-xs
                          font-semibold
                          uppercase
                          tracking-wide
                          hover:bg-[#b08a4a]
                          transition cursor-pointer
                        "
                        >
                          <ShoppingBag size={16} />
                          Details
                        </button>
                      </div>
                    </div>

                    <div className="pt-5">
                      <p
                        className="
                      text-[11px]
                      uppercase
                      tracking-wide
                      font-medium
                      text-gray-400
                      mb-2
                    "
                      >
                        {product.category}
                      </p>

                      <div className="flex items-start gap-3">
                        <h3
                          className="
                        flex-1
                        text-[14px]
                        sm:text-[15px]
                        leading-6
                        font-medium
                        text-[#292929]
                        line-clamp-2
                        hover:text-[#b08a4a]
                        transition
                      "
                        >
                          {product.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 mt-4">
                        <span
                          className="
                        text-[17px]
                        font-semibold
                        text-[#e63e35]
                      "
                        >
                          {product.price}
                        </span>

                        <span
                          className="
                        text-[13px]
                        text-gray-400
                        line-through
                      "
                        >
                          {product.oldPrice}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <div className="flex items-center gap-1">
                          <Star
                            size={14}
                            fill="currentColor"
                            className="text-[#222]"
                          />

                          <span className="text-xs font-semibold">
                            {product.rating}
                          </span>
                        </div>

                        <span className="text-xs text-gray-400">
                          {product.reviews}
                        </span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="
              seller-prev
              absolute
              left-[-18px]
              lg:left-[-55px]
              top-[38%]
              z-30
              w-10
              h-10
              lg:w-12
              lg:h-12
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-sm
              flex
              items-center
              justify-center
              text-[#222]
              hover:bg-[#222]
              hover:text-white
              hover:border-[#222]
              transition-all
              duration-300 cursor-pointer
            "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              className="
              seller-next
              absolute
              right-[-18px]
              lg:right-[-55px]
              top-[38%]
              z-30
              w-10
              h-10
              lg:w-12
              lg:h-12
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-sm
              flex
              items-center
              justify-center
              text-[#222]
              hover:bg-[#222]
              hover:text-white
              hover:border-[#222]
              transition-all
              duration-300 cursor-pointer
            "
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default BestSeller;
