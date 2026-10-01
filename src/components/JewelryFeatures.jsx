import React from "react";
import {
  Gem,
  Truck,
  RotateCcw,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const JewelryFeatures = () => {
  const features = [
    {
      id: 1,
      icon: Gem,
      title: "Certified Jewelry",
      description:
        "Every piece is carefully selected and crafted with premium quality materials.",
    },
    {
      id: 2,
      icon: Truck,
      title: "Free Shipping",
      description:
        "Enjoy complimentary shipping on orders above $100, delivered safely to your door.",
    },
    {
      id: 3,
      icon: RotateCcw,
      title: "Easy Returns",
      description:
        "Changed your mind? Return your purchase within 30 days with complete peace of mind.",
    },
    {
      id: 4,
      icon: ShieldCheck,
      title: "Secure Payment",
      description:
        "Your payment and personal information are protected with secure technology.",
    },
  ];

  return (
    <section className="w-full bg-[#faf9f7] py-14 sm:py-16 lg:py-20 lg:px-0 px-5">

      <div className="container mx-auto px-4 sm:px-6 lg:px-5">

        <div className="text-center max-w-[650px] mx-auto mb-10 sm:mb-12">

          <p className="
            text-[10px]
            sm:text-xs
            uppercase
            tracking-[3px]
            text-[#b08a4a]
            font-semibold
          ">
            The JEWVNO Promise
          </p>

          <h2 className="
            font-serif
            text-2xl
            sm:text-3xl
            lg:text-4xl
            text-[#242424]
            mt-3
          ">
            Made With Care, Worn With Love
          </h2>

          <p className="
            text-sm
            sm:text-base
            text-gray-500
            leading-6
            mt-3
          ">
            From the moment you discover your favorite piece to the day it
            arrives at your doorstep, we make every experience special.
          </p>

        </div>


        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          border
          border-[#e7e2d9]
          bg-white
        ">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className={`
                  group
                  relative
                  px-6
                  sm:px-7
                  lg:px-6
                  py-9
                  sm:py-10
                  text-center
                  transition-all
                  duration-500
                  hover:bg-[#171717]
                  ${
                    index !== features.length - 1
                      ? "border-b sm:border-b lg:border-b-0 lg:border-r border-[#e7e2d9]"
                      : ""
                  }
                  ${
                    index === 1
                      ? "sm:border-r-0 lg:border-r"
                      : ""
                  }
                `}
              >


                <div className="
                  mx-auto
                  w-14
                  h-14
                  rounded-full
                  border
                  border-[#d7c29a]
                  flex
                  items-center
                  justify-center
                  text-[#b08a4a]
                  transition-all
                  duration-500
                  group-hover:bg-[#b08a4a]
                  group-hover:text-white
                  group-hover:border-[#b08a4a]
                  group-hover:rotate-[8deg]
                ">

                  <Icon
                    size={24}
                    strokeWidth={1.4}
                  />

                </div>



                <h3 className="
                  mt-6
                  text-base
                  sm:text-lg
                  font-semibold
                  text-[#252525]
                  group-hover:text-white
                  transition-colors
                  duration-300
                ">
                  {feature.title}
                </h3>



                <p className="
                  mt-3
                  text-sm
                  leading-6
                  text-gray-500
                  group-hover:text-white/55
                  transition-colors
                  duration-300
                ">
                  {feature.description}
                </p>



                <div className="
                  mt-5
                  flex
                  justify-center
                  opacity-0
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                ">

                  <ArrowRight
                    size={16}
                    className="text-[#c6a15b]"
                  />

                </div>

              </div>
            );
          })}

        </div>


        <div className="
          mt-10
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-2
          text-center
        ">

          <span className="
            text-sm
            text-gray-500
          ">
            Need help choosing the perfect piece?
          </span>

          <button className="
            text-sm
            font-semibold
            text-[#b08a4a]
            border-b
            border-[#b08a4a]
            pb-0.5
            hover:text-[#222]
            hover:border-[#222]
            transition
          ">
            Talk to a Jewelry Expert
          </button>

        </div>

      </div>

    </section>
  );
};

export default JewelryFeatures;