import React from "react";

import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Heart,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#171717] text-white">

      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-5 py-12 sm:py-14">

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

            <div>
              <p className="text-[#c6a15b] text-[11px] uppercase tracking-[3px] mb-3">
                Stay Connected
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl">
                Join Our Jewelry World
              </h2>

              <p className="text-sm text-white/50 mt-3 max-w-[520px] leading-6">
                Subscribe to receive exclusive offers, new arrivals and
                timeless jewelry inspiration.
              </p>
            </div>

            <div className="w-full lg:w-[460px]">
              <div className="flex border-b border-white/30 focus-within:border-[#c6a15b] transition">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="
                    flex-1
                    min-w-0
                    bg-transparent
                    outline-none
                    py-4
                    text-sm
                    text-white
                    placeholder:text-white/40
                  "
                />

                <button
                  className="
                    flex
                    items-center
                    gap-2
                    text-xs
                    uppercase
                    tracking-wider
                    font-semibold
                    text-[#c6a15b]
                    hover:text-white
                    transition
                  "
                >
                  Subscribe
                  <ArrowRight size={16} />
                </button>

              </div>
            </div>

          </div>

        </div>
      </div>


      <div className="container mx-auto px-4 sm:px-6 lg:px-5 py-14 sm:py-16">

        <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]
          gap-10
          lg:gap-8
        ">

          <div>

            <h2 className="font-serif text-3xl tracking-wide">
              JEWVNO
            </h2>

            <p className="text-sm text-white/50 leading-7 mt-5 max-w-[290px]">
              Discover timeless jewelry designed to celebrate your most
              beautiful moments. Crafted with elegance, made to last forever.
            </p>


            <div className="flex items-center gap-3 mt-7">

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/15
                  flex
                  items-center
                  justify-center
                  hover:bg-[#c6a15b]
                  hover:border-[#c6a15b]
                  hover:text-black
                  transition
                "
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/15
                  flex
                  items-center
                  justify-center
                  hover:bg-[#c6a15b]
                  hover:border-[#c6a15b]
                  hover:text-black
                  transition
                "
              >
                <FaFacebookF size={17} />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/15
                  flex
                  items-center
                  justify-center
                  hover:bg-[#c6a15b]
                  hover:border-[#c6a15b]
                  hover:text-black
                  transition
                "
              >
                <FaTwitter size={17} />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/15
                  flex
                  items-center
                  justify-center
                  hover:bg-[#c6a15b]
                  hover:border-[#c6a15b]
                  hover:text-black
                  transition
                "
              >
                <FaYoutube size={17} />
              </a>

            </div>

          </div>


          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[1.5px] mb-6">
              Shop
            </h3>

            <ul className="space-y-4">

              {[
                "New Arrivals",
                "Best Sellers",
                "Necklaces",
                "Earrings",
                "Rings",
                "Bracelets",
              ].map((item) => (

                <li key={item}>
                  <a
                    href="/shop"
                    className="
                      text-sm
                      text-white/50
                      hover:text-[#c6a15b]
                      transition
                    "
                  >
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>


          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[1.5px] mb-6">
              Information
            </h3>

            <ul className="space-y-4">

              {[
                "About Us",
                "Blog",
                "Contact Us",
              ].map((item) => (

                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-white/50
                      hover:text-[#c6a15b]
                      transition
                    "
                  >
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>


          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[1.5px] mb-6">
              Customer Care
            </h3>

            <ul className="space-y-4">

              {[
                "Wishlist",
                "Shipping & Delivery",
                "Returns & Exchange",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (

                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-sm
                      text-white/50
                      hover:text-[#c6a15b]
                      transition
                    "
                  >
                    {item}
                  </a>
                </li>

              ))}

            </ul>

          </div>


          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[1.5px] mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-[#c6a15b] shrink-0 mt-1"
                />

                <p className="text-sm text-white/50 leading-6">
                  123 Jewelry Avenue,
                  <br />
                  New York, NY 10001
                </p>
              </div>


              <div className="flex items-center gap-3">

                <Phone
                  size={17}
                  className="text-[#c6a15b] shrink-0"
                />

                <a
                  href="tel:+18001234567"
                  className="text-sm text-white/50 hover:text-[#c6a15b] transition"
                >
                  +1 800 123 4567
                </a>

              </div>


              <div className="flex items-center gap-3">

                <Mail
                  size={17}
                  className="text-[#c6a15b] shrink-0"
                />

                <a
                  href="mailto:support@jewelry.com"
                  className="text-sm text-white/50 hover:text-[#c6a15b] transition break-all"
                >
                  support@jewelry.com
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="border-t border-white/10">

        <div className="
          container
          mx-auto
          px-4
          sm:px-6
          lg:px-5
          py-5
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        ">

          <p className="text-xs text-white/40 text-center md:text-left">
            © {new Date().getFullYear()} JEWELRY. All Rights Reserved.
          </p>


          <div className="flex items-center gap-2 flex-wrap justify-center">

            {["VISA", "Mastercard", "AMEX", "PayPal"].map((payment) => (

              <span
                key={payment}
                className="
                  px-3
                  py-1.5
                  border
                  border-white/10
                  text-[9px]
                  tracking-wide
                  text-white/50
                "
              >
                {payment}
              </span>

            ))}

          </div>


          <p className="flex items-center gap-1 text-xs text-white/40">
            Designed By
            <Heart
              size={12}
              fill="currentColor"
              className="text-[#c6a15b]"
            />
            Chiranjeet Mourya
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;