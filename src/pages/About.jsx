import React from "react";
import {
  Gem,
  Heart,
  Sparkles,
  ShieldCheck,
  Award,
  HandHeart,
  ArrowRight,
  Check,
} from "lucide-react";
import about from "../assets/about/about.jpg"
import moment from "../assets/about/moment.jpg"
import has from "../assets/about/has.png"

const About = () => {
  const values = [
    {
      icon: Gem,
      title: "Exceptional Quality",
      text: "Every piece is carefully selected and crafted with attention to detail, quality and timeless beauty.",
    },
    {
      icon: Sparkles,
      title: "Timeless Design",
      text: "Our designs blend modern elegance with classic craftsmanship to create jewellery you'll love for years.",
    },
    {
      icon: Heart,
      title: "Made With Meaning",
      text: "Jewellery is more than an accessory. Every piece is created to become part of your most memorable moments.",
    },
  ];

  const promises = [
    {
      icon: ShieldCheck,
      title: "Trusted Quality",
      text: "Quality checked jewellery made with care.",
    },
    {
      icon: Award,
      title: "Fine Craftsmanship",
      text: "Detailed finishing in every single piece.",
    },
    {
      icon: HandHeart,
      title: "Made For You",
      text: "Elegant designs for your personal story.",
    },
    {
      icon: Gem,
      title: "Timeless Beauty",
      text: "Pieces designed to stay beautiful for generations.",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Happy Customers",
    },
    {
      number: "500+",
      label: "Unique Designs",
    },
    {
      number: "15+",
      label: "Years Of Craftsmanship",
    },
    {
      number: "98%",
      label: "Customer Satisfaction",
    },
  ];

  return (
    <main className="w-full overflow-hidden bg-[#faf9f7] text-[#222]">

      <section className="relative flex min-h-[620px] items-center overflow-hidden sm:min-h-[680px] lg:min-h-[720px]">

        <img
          src={about}
          alt="Luxury jewellery collection"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            scale-105
            animate-aboutZoom
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/75
            via-black/50
            to-black/10
          "
        />

        <div
          className="
            absolute
            -right-20
            top-20
            h-72
            w-72
            rounded-full
            bg-[#d5b46b]/20
            blur-[100px]
          "
        />

        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl
            px-5
            py-24
            sm:px-8
            lg:px-10
          "
        >

          <div className="max-w-2xl">

            <div className="mb-6 flex items-center gap-3">

              <span className="h-px w-10 bg-[#d8b878]" />

              <p
                className="
                  text-[11px]
                  font-medium
                  uppercase
                  tracking-[4px]
                  text-[#e2c78d]
                  sm:text-xs
                "
              >
                The Story Behind The Shine
              </p>

            </div>

            <h1
              className="
                font-serif
                text-5xl
                leading-[1.05]
                text-white
                sm:text-6xl
                lg:text-7xl
              "
            >
              Jewellery With
              <span className="block italic text-[#e2c78d]">
                A Story To Tell.
              </span>
            </h1>

            <p
              className="
                mt-7
                max-w-xl
                text-sm
                leading-7
                text-white/75
                sm:text-base
              "
            >
              We believe the most beautiful jewellery is not simply worn.
              It carries memories, celebrates milestones and becomes part
              of your story.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <button
                className="
                  group
                  flex
                  w-fit
                  cursor-pointer
                  items-center
                  gap-3
                  bg-white
                  px-7
                  py-4
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest
                  text-[#222]
                  transition
                  hover:bg-[#b08a4a]
                  hover:text-white
                "
              >
                Discover Our Story

                <ArrowRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </button>

              <button
                className="
                  w-fit
                  cursor-pointer
                  border-b
                  border-white/70
                  pb-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-widest
                  text-white
                  transition
                  hover:border-[#d8b878]
                  hover:text-[#d8b878]
                "
              >
                Explore Collection
              </button>

            </div>
          </div>
        </div>

        <div
          className="
            absolute
            bottom-8
            left-1/2
            hidden
            -translate-x-1/2
            flex-col
            items-center
            gap-3
            text-white/60
            sm:flex
          "
        >
          <span className="text-[9px] uppercase tracking-[3px]">
            Scroll
          </span>

          <span className="h-10 w-px bg-white/40" />
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">

          <div className="relative">

            <div className="relative overflow-hidden">

              <img
                src={moment}
                alt="Jewellery craftsmanship"
                className="
                  h-[430px]
                  w-full
                  object-cover
                  transition-transform
                  duration-1000
                  hover:scale-105
                  sm:h-[520px]
                  lg:h-[600px]
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            <div
              className="
                absolute
                -bottom-7
                right-4
                w-[190px]
                bg-[#222]
                p-6
                text-white
                shadow-2xl
                sm:right-8
                sm:w-[220px]
                sm:p-7
              "
            >
              <p className="font-serif text-4xl text-[#d5b46b]">
                15+
              </p>

              <p className="mt-2 text-[10px] uppercase tracking-[2px] text-white/60">
                Years of Craftsmanship
              </p>
            </div>

            <div
              className="
                pointer-events-none
                absolute
                -left-4
                -top-4
                -z-0
                h-full
                w-full
                border
                border-[#b08a4a]/30
              "
            />

          </div>


          <div>

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[3px]
                text-[#b08a4a]
                sm:text-xs
              "
            >
              Our Story
            </p>

            <h2
              className="
                mt-4
                max-w-xl
                font-serif
                text-4xl
                leading-tight
                text-[#222]
                sm:text-5xl
              "
            >
              Created For
              <span className="block italic text-[#b08a4a]">
                Moments That Matter.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-gray-500 sm:text-base">
              What started with a simple love for beautiful jewellery
              became a passion for creating pieces that feel personal,
              meaningful and timeless.
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
              From delicate everyday pieces to statement jewellery for
              life's biggest celebrations, our collection is carefully
              curated with elegance, craftsmanship and individuality in mind.
            </p>

            <div className="mt-8 space-y-4">

              {[
                "Thoughtfully designed collections",
                "Carefully selected materials",
                "Attention to every detail",
                "Jewellery made to be treasured",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <span
                    className="
                      flex
                      h-6
                      w-6
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#b08a4a]/10
                      text-[#b08a4a]
                    "
                  >
                    <Check size={13} />
                  </span>

                  <span className="text-sm text-[#444]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <button
              className="
                group
                mt-9
                flex
                cursor-pointer
                items-center
                gap-3
                border-b
                border-[#222]
                pb-2
                text-xs
                font-semibold
                uppercase
                tracking-widest
                transition
                hover:border-[#b08a4a]
                hover:text-[#b08a4a]
              "
            >
              Learn More

              <ArrowRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>

          </div>

        </div>
      </section>

      <section className="bg-[#f4f1eb] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[3px]
                text-[#b08a4a]
              "
            >
              What We Believe
            </p>

            <h2
              className="
                mt-4
                font-serif
                text-4xl
                text-[#222]
                sm:text-5xl
              "
            >
              Our Philosophy
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              We create jewellery with a simple philosophy — beauty should
              feel personal, quality should last and every piece should
              have a story.
            </p>

          </div>


          <div className="mt-14 grid gap-5 md:grid-cols-3">

            {values.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    relative
                    overflow-hidden
                    bg-white
                    p-8
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                    sm:p-10
                  "
                >

                  <span
                    className="
                      absolute
                      right-6
                      top-5
                      font-serif
                      text-6xl
                      text-[#b08a4a]/10
                    "
                  >
                    0{index + 1}
                  </span>

                  <div
                    className="
                      relative
                      z-10
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      border
                      border-[#b08a4a]/30
                      text-[#b08a4a]
                      transition-all
                      duration-500
                      group-hover:bg-[#222]
                      group-hover:text-white
                    "
                  >
                    <Icon size={25} strokeWidth={1.4} />
                  </div>

                  <h3 className="relative z-10 mt-8 font-serif text-2xl">
                    {item.title}
                  </h3>

                  <p className="relative z-10 mt-4 text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>

                  <div className="mt-7 h-px w-10 bg-[#b08a4a] transition-all duration-500 group-hover:w-20" />

                </div>
              );
            })}

          </div>

        </div>
      </section>

      <section className="overflow-hidden bg-[#222] text-white">

        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">

          <div className="relative min-h-[450px] overflow-hidden lg:min-h-[680px]">

            <img
              src={has}
              alt="Jewellery craftsmanship"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-[1200ms]
                hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/20" />

            <div
              className="
                absolute
                bottom-8
                left-8
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                border
                border-white/30
                bg-black/20
                backdrop-blur-md
                sm:bottom-12
                sm:left-12
              "
            >
              <Gem
                size={27}
                className="text-[#d5b46b]"
                strokeWidth={1.3}
              />
            </div>

          </div>


          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 xl:px-24">

            <div className="max-w-xl">

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[3px]
                  text-[#d5b46b]
                "
              >
                The Art Of Craftsmanship
              </p>

              <h2
                className="
                  mt-5
                  font-serif
                  text-4xl
                  leading-tight
                  sm:text-5xl
                "
              >
                Every Detail
                <span className="block italic text-[#d5b46b]">
                  Has A Purpose.
                </span>
              </h2>

              <p className="mt-7 text-sm leading-7 text-white/60 sm:text-base">
                Jewellery is an art of patience. From the first sketch
                to the final polish, every detail is carefully considered
                to create a piece that feels effortlessly beautiful.
              </p>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                Our approach combines timeless design with contemporary
                elegance, ensuring every piece can become a lasting part
                of your personal collection.
              </p>

              <div className="mt-9 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">

                <div>
                  <p className="font-serif text-3xl text-[#d5b46b]">
                    100%
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[2px] text-white/50">
                    Detail Focused
                  </p>
                </div>

                <div>
                  <p className="font-serif text-3xl text-[#d5b46b]">
                    Fine
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-[2px] text-white/50">
                    Craftsmanship
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 md:grid-cols-4">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                text-center
                ${
                  index !== stats.length - 1
                    ? "md:border-r md:border-gray-200"
                    : ""
                }
              `}
            >
              <p className="font-serif text-4xl text-[#222] sm:text-5xl">
                {stat.number}
              </p>

              <p
                className="
                  mt-3
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-gray-400
                  sm:text-xs
                "
              >
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      <section className="bg-[#f4f1eb] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[3px]
                text-[#b08a4a]
              "
            >
              The JEWVNO Promise
            </p>

            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Made With Care.
              <span className="italic text-[#b08a4a]">
                {" "}Worn With Love.
              </span>
            </h2>

          </div>


          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">

            {promises.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
                    group
                    bg-white
                    p-8
                    text-center
                    transition-all
                    duration-500
                    hover:bg-[#222]
                    hover:text-white
                    sm:p-10
                  "
                >

                  <div
                    className="
                      mx-auto
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-full
                      bg-[#b08a4a]/10
                      text-[#b08a4a]
                      transition
                      group-hover:bg-[#b08a4a]
                      group-hover:text-white
                    "
                  >
                    <Icon size={23} strokeWidth={1.4} />
                  </div>

                  <h3 className="mt-6 font-serif text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-gray-500 transition group-hover:text-white/60">
                    {item.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      <section className="relative min-h-[480px] overflow-hidden">

        <div
          className="
            relative
            z-10
            flex
            min-h-[480px]
            items-center
            justify-center
            px-5
            text-center
          "
        >

          <div className="max-w-2xl">

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[4px]
                text-[#e0c384]
              "
            >
              Find Your Signature Piece
            </p>

            <h2
              className="
                mt-5
                font-serif
                text-4xl
                text-black
                sm:text-5xl
                lg:text-6xl
              "
            >
              Your Story Deserves
              <span className="block italic text-[#e0c384]">
                Something Beautiful.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-black/70 sm:text-base">
              Explore our collection of timeless jewellery designed
              for the moments you'll remember forever.
            </p>

            <button
              className="
                group
                mt-8
                inline-flex
                cursor-pointer
                items-center
                gap-3
                bg-white
                px-8
                py-4
                text-xs
                font-semibold
                uppercase
                tracking-widest
                text-[#222]
                transition
                hover:bg-[#b08a4a]
                hover:text-white
              "
            >
              Shop Jewellery

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>
      </section>

    </main>
  );
};

export default About;