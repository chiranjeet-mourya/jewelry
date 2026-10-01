import React, { useEffect, useState } from "react";
import { Star, ArrowRight } from "lucide-react";

import img1 from "../assets/arrivals/1.jpg"
import img2 from "../assets/arrivals/2.jpg"

const NewArrivals = () => {

  const products = [
    {
      id: 1,
      image: img1,
      category: "EARRINGS",
      name: "9ct White Gold 0.01ctw Diamond Flower Stud Earrings",
      price: "$157.88",
      oldPrice: "$225.90",
      discount: "31%",
      rating: "3.50",
      reviews: "2 Reviews",
      description:
        "These dazzling earrings feature Sterling Silver pave hoops with elegant gold and diamond accents.",
      time: {
        days: 48,
        hours: 7,
        minutes: 20,
        seconds: 26,
      },
    },

    {
      id: 2,
      image: img2,
      category: "RINGS",
      name: "Platinum 2.00ct Round Solitaire Engagement Ring",
      price: "$723.50",
      oldPrice: "$819.29",
      discount: "12%",
      rating: "3.00",
      reviews: "3 Reviews",
      description:
        "A brilliant-cut diamond beautifully positioned in an elegant solitaire setting for a timeless look.",
      time: {
        days: 47,
        hours: 7,
        minutes: 20,
        seconds: 26,
      },
    },
  ];


  const [timeLeft, setTimeLeft] = useState(
    products.map((product) => product.time)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((previous) =>
        previous.map((time) => {
          let { days, hours, minutes, seconds } = time;

          if (seconds > 0) {
            seconds--;
          } else {
            seconds = 59;

            if (minutes > 0) {
              minutes--;
            } else {
              minutes = 59;

              if (hours > 0) {
                hours--;
              } else {
                hours = 23;

                if (days > 0) {
                  days--;
                }
              }
            }
          }

          return {
            days,
            hours,
            minutes,
            seconds,
          };
        })
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white pb-12 sm:pb-16 lg:pb-20 lg:px-0 px-5">

      <div className="container mx-auto px-4 sm:px-6 lg:px-5">


        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-7 mb-8">

          <h2 className="
            text-2xl
            sm:text-3xl
            font-medium
            text-[#25282b]
            whitespace-nowrap
          ">
            New Arrivals
          </h2>

          <p className="
            text-sm
            sm:text-base
            text-gray-400
            leading-6
          ">
            Discover our latest jewelry pieces, designed for timeless elegance.
          </p>

        </div>


        <div className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-5
          lg:gap-7
        ">

          {products.map((product, index) => (

            <article
              key={product.id}
              className="
                group
                border-2
                border-[#ff5555]
                p-5
                sm:p-6
                lg:p-7
                bg-white
                transition-all
                duration-300
                hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)]
              "
            >

              <div className="
                grid
                grid-cols-1
                sm:grid-cols-[40%_60%]
                gap-5
                lg:gap-6
                h-full
              ">



                <div className="
                  relative
                  overflow-hidden
                  bg-[#ffffff]
                  aspect-square
                  sm:aspect-auto
                  sm:min-h-[300px]
                  lg:min-h-[300px]
                ">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      absolute
                      inset-0
                      w-full
                      h-full
                      object-contain
                      p-5
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-110
                    "
                  />


                  <span className="
                    absolute
                    top-3
                    left-3
                    border
                    border-[#ff5555]
                    bg-white
                    text-[#ff3f3f]
                    text-xs
                    font-semibold
                    px-2.5
                    py-1.5
                  ">
                    {product.discount}
                  </span>

                </div>


                <div className="
                  flex
                  flex-col
                  justify-center
                  py-1
                ">


                  <p className="
                    text-[11px]
                    sm:text-xs
                    uppercase
                    tracking-wide
                    font-semibold
                    text-gray-400
                    mb-3
                  ">
                    {product.category}
                  </p>



                  <h3 className="
                    text-lg
                    sm:text-xl
                    lg:text-[18px]
                    font-medium
                    leading-7
                    text-[#222]
                    max-w-[480px]
                  ">
                    {product.name}
                  </h3>



                  <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-3
                    mt-7
                  ">

                    <span className="
                      text-xl
                      font-semibold
                      text-[#ef4038]
                    ">
                      {product.price}
                    </span>

                    <span className="
                      text-sm
                      text-gray-400
                      line-through
                    ">
                      {product.oldPrice}
                    </span>

                  </div>



                  <div className="
                    flex
                    items-center
                    gap-2
                    mt-4
                  ">

                    <div className="flex items-center gap-1">

                      <Star
                        size={14}
                        fill="currentColor"
                        className="text-[#222]"
                      />

                      <span className="
                        text-sm
                        font-semibold
                        text-[#222]
                      ">
                        {product.rating}
                      </span>

                    </div>

                    <span className="
                      text-xs
                      text-gray-500
                    ">
                      {product.reviews}
                    </span>

                  </div>



                  <p className="
                    text-sm
                    leading-6
                    text-gray-500
                    mt-5
                    max-w-[500px]
                  ">
                    {product.description}
                  </p>



                  <div className="
                    w-full
                    h-px
                    bg-gray-200
                    mt-5
                  " />



                  <div className="
                    flex
                    flex-wrap
                    items-center
                    gap-2
                    mt-4
                  ">

                    <CountdownBox
                      value={timeLeft[index].days}
                    />

                    <span className="text-[#333] font-medium">
                      :
                    </span>

                    <CountdownBox
                      value={timeLeft[index].hours}
                    />

                    <span className="text-[#333] font-medium">
                      :
                    </span>

                    <CountdownBox
                      value={timeLeft[index].minutes}
                    />

                    <span className="text-[#333] font-medium">
                      :
                    </span>

                    <CountdownBox
                      value={timeLeft[index].seconds}
                    />

                    <span className="
                      text-xs
                      sm:text-sm
                      text-[#ff4d4d]
                      ml-1
                    ">
                      Campaign expiration date.
                    </span>

                  </div>



                  <button className="
                    mt-5
                    w-fit
                    flex
                    items-center
                    gap-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-[#222]
                    border-b
                    border-[#222]
                    pb-1
                    hover:text-[#b08a4a]
                    hover:border-[#b08a4a]
                    transition cursor-pointer
                  ">
                    Shop Now
                    <ArrowRight size={14} />
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>


        <div className="
          border-t
          border-gray-200
          mt-8
          pt-8
          grid
          grid-cols-1
          lg:grid-cols-[2fr_1fr]
          gap-5
        ">


          <div className="
            group
            relative
            min-h-[300px]
            sm:min-h-[330px]
            overflow-hidden
            bg-[#f5f5f5]
          ">

            <img
              src="/banners/diamond-woman.jpg"
              alt="Diamonds Collection"
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


            <div className="
              absolute
              inset-0
              bg-gradient-to-r
              from-white
              via-white/80
              to-transparent
            " />


            <div className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-center
              p-7
              sm:p-10
              lg:p-12
              max-w-[620px]"
            >

              <p className="
                text-[11px]
                sm:text-xs
                uppercase
                tracking-[2px]
                font-semibold
                text-gray-500
              ">
                Cyber Monday Sale
              </p>

              <h3 className="
                text-2xl
                sm:text-3xl
                lg:text-[30px]
                font-semibold
                text-[#24272a]
                mt-4
              ">
                Diamonds are forever—and so are you
              </h3>

              <p className="
                text-sm
                sm:text-base
                text-[#34373a]
                mt-3
              ">
                Embrace the Unseen Magic of Uniqueness...
              </p>

              <button className="
                mt-7
                w-fit
                text-xs
                font-semibold
                uppercase
                tracking-wide
                border-b-2
                border-[#222]
                pb-2
                hover:text-[#b08a4a]
                hover:border-[#b08a4a]
                transition cursor-pointer
              ">
                Shop Collection
              </button>

            </div>

          </div>

          <div className=" group relative min-h-[300px]
            sm:min-h-[330px]
            overflow-hidden
            bg-[#f5f5f5]
          ">

            <img
              src="/banners/gold-bracelet.jpg"
              alt="Crafted Beauty"
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


            <div className="
              absolute
              inset-0
              bg-gradient-to-r
              from-[#f7f7f7]
              via-[#f7f7f7]/90
              to-transparent
            " />


            <div className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-center
              p-7
              sm:p-9
              max-w-[300px]"
            >

              <p className="
                text-[11px]
                sm:text-xs
                uppercase
                tracking-[2px]
                font-semibold
                text-[#333]
              ">
                Cyber Monday Sale
              </p>

              <h3 className="
                text-2xl
                sm:text-3xl
                font-semibold
                text-[#24272a]
                mt-4
              ">
                Crafted Beauty
              </h3>

              <p className="
                text-sm
                sm:text-base
                leading-6
                text-gray-600
                mt-3
              ">
                Beautiful pieces to pass down for generations...
              </p>

              <button className="
                mt-7
                w-fit
                text-xs
                font-semibold
                uppercase
                tracking-wide
                border-b-2
                border-[#222]
                pb-2
                hover:text-[#b08a4a]
                hover:border-[#b08a4a]
                transition cursor-pointer
              ">
                Shop Collection
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};


const CountdownBox = ({ value }) => {
  return (
    <span className="
      min-w-[36px]
      h-[36px]
      sm:min-w-[38px]
      sm:h-[38px]
      px-2
      border
      border-[#ffb0b0]
      bg-[#fffafa]
      text-[#ef4038]
      flex
      items-center
      justify-center
      text-sm
      font-semibold
    ">
      {String(value).padStart(2, "0")}
    </span>
  );
};

export default NewArrivals