import React from "react";
import { ArrowUpRight, Sparkles, Gem, Crown } from "lucide-react";

const CraftsmanshipSection = () => {
  return (
    <section className="bg-[#fef9ec] py-10 sm:py-10 lg:py-15 overflow-hidden lg:px-0 px-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-[#b08a4a]" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#b08a4a]">
              Our Craft
            </span>
            <span className="w-8 h-px bg-[#b08a4a]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1c1c1c] leading-tight">
            Crafted to Make
            <span className="block italic font-light text-[#b08a4a] mt-1">
              Every Moment Shine
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-gray-500 leading-7">
            Every piece is thoughtfully designed, carefully crafted and made
            to become a part of your most beautiful memories.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8">

          {/* Left Visual Card */}
          <div className="relative group min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] overflow-hidden bg-[#222]">

            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury jewelry"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute left-6 right-6 sm:left-10 sm:right-10 bottom-7 sm:bottom-10 text-white">

              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={16} className="text-[#d4af67]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#e5c985]">
                  Designed With Intention
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif leading-tight max-w-lg">
                Beauty that feels
                <span className="italic text-[#d4af67]"> personal.</span>
              </h3>

              <p className="text-sm text-white/70 mt-4 max-w-md leading-6">
                From the first sketch to the final polish, every detail is
                created with precision and passion.
              </p>

              <button className="mt-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] border-b border-[#d4af67] pb-2 hover:text-[#d4af67] transition-colors cursor-pointer">
                Discover Our Story
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-7 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[250px] border border-black/5 group hover:border-[#b08a4a]/40 transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-full bg-[#f7f1e5] flex items-center justify-center text-[#b08a4a] mb-6 group-hover:bg-[#b08a4a] group-hover:text-white transition-all duration-500">
                  <Gem size={21} />
                </div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#b08a4a] mb-3">
                  Finest Details
                </p>

                <h3 className="text-2xl font-serif text-[#222]">
                  Crafted With Precision
                </h3>

                <p className="mt-3 text-sm text-gray-500 leading-6">
                  Each piece goes through careful finishing and quality
                  checks before it reaches you.
                </p>
              </div>

              <div className="mt-6 text-xs tracking-widest uppercase text-gray-400">
                01 — Craft
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#222] p-7 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[250px] text-white group hover:bg-[#181818] transition-all duration-500">
              <div>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#d4af67] mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <Crown size={21} />
                </div>

                <p className="text-[10px] uppercase tracking-[0.25em] text-[#d4af67] mb-3">
                  Made For You
                </p>

                <h3 className="text-2xl font-serif">
                  Jewelry With Character
                </h3>

                <p className="mt-3 text-sm text-white/55 leading-6">
                  Timeless silhouettes with a modern touch, created for
                  celebrations, milestones and everyday elegance.
                </p>
              </div>

              <div className="mt-6 text-xs tracking-widest uppercase text-white/30">
                02 — Character
              </div>
            </div>

          </div>
        </div>

        <div className="mt-10 lg:mt-14 grid grid-cols-2 md:grid-cols-4 border-y border-black/10">

          <div className="py-6 text-center border-r border-black/10 last:border-r-0">
            <h4 className="text-2xl sm:text-3xl font-serif text-[#222]">
              10+
            </h4>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-400">
              Years of Craft
            </p>
          </div>

          <div className="py-6 text-center md:border-r border-black/10">
            <h4 className="text-2xl sm:text-3xl font-serif text-[#222]">
              50K+
            </h4>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-400">
              Happy Customers
            </p>
          </div>

          <div className="py-6 text-center border-r border-black/10">
            <h4 className="text-2xl sm:text-3xl font-serif text-[#222]">
              100%
            </h4>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-400">
              Quality Checked
            </p>
          </div>

          <div className="py-6 text-center">
            <h4 className="text-2xl sm:text-3xl font-serif text-[#222]">
              24/7
            </h4>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-400">
              Customer Care
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;