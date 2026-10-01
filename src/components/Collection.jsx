import React, { useState } from "react";
import {
  Heart,
  Eye,
  ShoppingBag,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import ProductQuickView from "./ProductQuickView";

import "swiper/css";

import col1 from "../assets/collections/1.jpg"
import col2 from "../assets/collections/2.jpg"
import col3 from "../assets/collections/3.jpg"
import col4 from "../assets/collections/4.jpg"
import model from "../assets/modal.webp"
import { useNavigate } from "react-router-dom";

const Collection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      image: col1,
      category: "DIAMOND NECKLACES",
      name: "Sterling Silver Heart Locket Necklace",
      price: "$43.99",
      oldPrice: "$52.25",
      discount: "16%",
      rating: "4.33",
      reviews: "3 Reviews",
    },

    {
      id: 2,
      image: col2,
      category: "CHARM NECKLACES",
      name: "18ct Yellow Gold Open Heart Floating Pendant",
      price: "$311.40",
      oldPrice: "$426.55",
      discount: "27%",
      rating: "3.67",
      reviews: "3 Reviews",
    },

    {
      id: 3,
      image: col3,
      category: "CHAIN NECKLACES",
      name: "18ct Yellow Gold 0.10ctw Diamond & Baroque Pearl",
      price: "$864.66",
      oldPrice: "",
      discount: "",
      rating: "4.67",
      reviews: "3 Reviews",
    },

    {
      id: 4,
      image: col4,
      category: "CHARM NECKLACES",
      name: "9ct Yellow Gold Infinity Pendant",
      price: "$315.25",
      oldPrice: "$445.99",
      discount: "30%",
      rating: "3.33",
      reviews: "3 Reviews",
    },

    {
      id: 5,
      image: col1,
      category: "GOLD NECKLACES",
      name: "18ct Yellow Gold Diamond Pendant Necklace",
      price: "$529.99",
      oldPrice: "$649.99",
      discount: "18%",
      rating: "4.80",
      reviews: "12 Reviews",
    },
  ];

  return (
    <>
      <section className="w-full bg-white pb-14 sm:pb-16 lg:pb-20 lg:px-0 px-5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-5">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] sm:text-xs uppercase tracking-[3px] text-[#b08a4a] mb-2">
                Elegant Collection
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#222]">
                Timeless Necklaces
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                Discover beautiful pieces made to last for generations.
              </p>
            </div>

            <button
              className="
          w-fit
          text-xs
          sm:text-sm
          font-semibold
          uppercase
          tracking-wide
          border-b
          border-[#222]
          pb-1
          hover:text-[#b08a4a]
          hover:border-[#b08a4a]
          transition
        "
            >
              View All
            </button>
          </div>

          <div
            className="
        grid
        grid-cols-1
        lg:grid-cols-[280px_minmax(0,1fr)]
        gap-5
        lg:gap-6
      "
          >
            <div
              className="
          group
          relative
          overflow-hidden
          min-h-[460px]
          lg:min-h-[520px]
          bg-gray-100
        "
            >
              <img
                src={model}
                alt="Timeless Glamour"
                className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
              />

              <div
                className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/70
            via-black/25
            to-transparent
          "
              />

              <div
                className="
            absolute
            left-5
            right-5
            bottom-10
            text-center
            text-white
          "
              >
                <p
                  className="
              text-[11px]
              sm:text-xs
              uppercase
              tracking-[2px]
              font-medium
              mb-4
            "
                >
                  Cyber Monday Sale
                </p>

                <h3
                  className="
              font-serif
              text-3xl
              sm:text-4xl
              font-medium
            "
                >
                  Timeless Glamour
                </h3>

                <p
                  className="
              text-sm
              mt-3
              leading-6
              text-white/90
              max-w-[260px]
              mx-auto
            "
                >
                  Beautiful pieces to pass down for generations...
                </p>

                <button
                  className="
              mt-7
              text-xs
              font-semibold
              uppercase
              tracking-wide
              border-b
              border-white
              pb-2
              hover:text-[#e8c98b]
              hover:border-[#e8c98b]
              transition
            "
                >
                  Shop Collection
                </button>
              </div>
            </div>

            <div className="relative min-w-0">
              <Swiper
                modules={[Navigation, Autoplay]}
                loop={true}
                speed={700}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                navigation={{
                  prevEl: ".collection-prev",
                  nextEl: ".collection-next",
                }}
                spaceBetween={18}
                slidesPerView={1.15}
                breakpoints={{
                  480: {
                    slidesPerView: 1.4,
                    spaceBetween: 16,
                  },

                  640: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                  },

                  768: {
                    slidesPerView: 2.5,
                    spaceBetween: 20,
                  },

                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },

                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                  },
                }}
                className="!pb-3"
              >
                {products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <article className="group h-full">
                      <div
                        className="
                    relative
                    overflow-hidden
                    bg-[#fff]
                    aspect-[0.86]
                  "
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-contain
                        p-3
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                        />

                        {product.discount && (
                          <span
                            className="
                        absolute
                        top-3
                        left-3
                        z-10
                        bg-white
                        border
                        border-[#ff4d42]
                        text-[#ff4d42]
                        text-[11px]
                        font-medium
                        px-2.5
                        py-1.5
                      "
                          >
                            {product.discount}
                          </span>
                        )}

                        <button
                          aria-label="Add to wishlist"
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
                        duration-300 cursor-pointer
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
                        text-[10px]
                        sm:text-[11px]
                        font-semibold
                        uppercase
                        tracking-wide
                        hover:bg-[#222]
                        hover:text-white
                        transition-colors cursor-pointer
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
                        text-[10px]
                        sm:text-[11px]
                        font-semibold
                        uppercase
                        tracking-wide
                        hover:bg-[#b08a4a]
                        transition-colors cursor-pointer
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
                      text-[10px]
                      sm:text-[11px]
                      uppercase
                      tracking-wide
                      font-semibold
                      text-gray-400
                      mb-2
                    "
                        >
                          {product.category}
                        </p>

                        <h3
                          className="
                      text-[14px]
                      sm:text-[15px]
                      font-medium
                      leading-6
                      text-[#292929]
                      line-clamp-2
                      hover:text-[#b08a4a]
                      transition
                    "
                        >
                          {product.name}
                        </h3>

                        <div className="flex items-center gap-2 mt-4">
                          <span
                            className="
                        text-[17px]
                        font-semibold
                        text-[#e64035]
                      "
                          >
                            {product.price}
                          </span>

                          {product.oldPrice && (
                            <span
                              className="
                          text-xs
                          text-gray-400
                          line-through
                        "
                            >
                              {product.oldPrice}
                            </span>
                          )}
                        </div>

                        <div
                          className="
                      flex
                      items-center
                      gap-2
                      mt-3
                    "
                        >
                          <div className="flex items-center gap-1">
                            <Star
                              size={13}
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

                        <p
                          className="
                      mt-5
                      text-xs
                      uppercase
                      font-semibold
                      tracking-wide
                      text-[#2dbb52]
                    "
                        >
                          In Stock
                        </p>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                className="
              collection-prev
              absolute
              left-[-15px]
              sm:left-[-20px]
              lg:left-[-24px]
              top-[38%]
              -translate-y-1/2
              z-30
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-md
              flex
              items-center
              justify-center
              hover:bg-[#222]
              hover:text-white
              hover:border-[#222]
              transition-all
              duration-300 cursor-pointer
            "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                className="
              collection-next
              absolute
              right-[-15px]
              sm:right-[-20px]
              lg:right-[-24px]
              top-[38%]
              -translate-y-1/2
              z-30
              w-10
              h-10
              sm:w-11
              sm:h-11
              rounded-full
              bg-white
              border
              border-gray-200
              shadow-md
              flex
              items-center
              justify-center
              hover:bg-[#222]
              hover:text-white
              hover:border-[#222]
              transition-all
              duration-300 cursor-pointer
            "
              >
                <ChevronRight size={20} />
              </button>
            </div>
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

export default Collection;
