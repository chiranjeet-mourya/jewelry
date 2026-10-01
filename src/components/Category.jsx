import React from "react";
import cat1 from "../assets/category/1.jpg"
import cat2 from "../assets/category/2.jpg"
import cat3 from "../assets/category/3.jpg"
import cat4 from "../assets/category/4.png"
import cat5 from "../assets/category/5.jpg"
import cat6 from "../assets/category/6.webp"

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "Bracelets",
      products: "16 Products",
      image: cat1,
    },
    {
      id: 2,
      title: "Earrings",
      products: "16 Products",
      image: cat2,
    },
    {
      id: 3,
      title: "Gold Set",
      products: "4 Products",
      image: cat3,
    },
    {
      id: 4,
      title: "Necklaces",
      products: "12 Products",
      image: cat4,
    },
    {
      id: 5,
      title: "Rings",
      products: "13 Products",
      image: cat5,
    },
    {
      id: 6,
      title: "Silver Set",
      products: "3 Products",
      image: cat6,
    },
  ];

  return (
    <section className="w-full bg-white pb-14 sm:pb-16 lg:pb-20 lg:px-0 px-5">

      <div className="container mx-auto px-4 sm:px-6 lg:px-5">

        <div className="text-center mb-9 sm:mb-11">

          <p className="text-[11px] sm:text-xs tracking-[3px] uppercase text-[#b18a52] font-medium mb-2">
            Discover Our Collection
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-medium text-[#222]">
            Shop By Category
          </h2>

          <p className="max-w-[600px] mx-auto mt-3 text-sm text-gray-500 leading-6">
            Explore our carefully curated jewellery collections,
            designed to add elegance to every occasion.
          </p>

        </div>


        <div className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-3
          sm:gap-4
          lg:gap-5
        ">

          {categories.map((category) => (
            <a
              href="/shop"
              key={category.id}
              className="
                group
                relative
                overflow-hidden
                block
                aspect-[0.82]
                bg-gray-100
              "
            >

              {/* ================= IMAGE ================= */}
              <img
                src={category.image}
                alt={category.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />


              {/* ================= OVERLAY ================= */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/65
                via-black/10
                to-transparent
                transition-all
                duration-500
                group-hover:from-black/75
                group-hover:via-black/20
              " />


              {/* ================= HOVER BORDER ================= */}
              <div className="
                absolute
                inset-2
                border
                border-white/0
                transition-all
                duration-500
                group-hover:border-white/60
              " />


              {/* ================= CONTENT ================= */}
              <div className="
                absolute
                bottom-0
                left-0
                right-0
                text-center
                text-white
                px-2
                pb-5
                sm:pb-6
              ">

                <h3 className="
                  text-base
                  sm:text-lg
                  lg:text-xl
                  font-semibold
                  tracking-wide
                  capitalize
                ">
                  {category.title}
                </h3>

                <p className="
                  mt-1
                  text-[11px]
                  sm:text-xs
                  uppercase
                  tracking-wide
                  text-white/90
                ">
                  {category.products}
                </p>

                {/* Hover CTA */}
                <div className="
                  overflow-hidden
                  max-h-0
                  opacity-0
                  group-hover:max-h-10
                  group-hover:opacity-100
                  transition-all
                  duration-500
                ">
                  <span className="
                    inline-block
                    mt-3
                    text-[10px]
                    sm:text-[11px]
                    uppercase
                    tracking-[2px]
                    border-b
                    border-white
                    pb-1
                  ">
                    Explore Collection
                  </span>
                </div>

              </div>

            </a>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Category