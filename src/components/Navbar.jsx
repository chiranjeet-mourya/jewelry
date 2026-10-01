import React, { useState } from "react";
import {
  Menu,
  X,
  Search,
  UserRound,
  Heart,
  ChevronDown,
  Phone,
  ShoppingCart,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import CartDrawer from "./CartDrawer";
import shop1 from "../assets/shop/1.jpg";
import shop2 from "../assets/sellers/5.jpg"

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleDropdown = (menu) => {
    setOpenDropdown((prev) => (prev === menu ? null : menu));
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
    setOpenDropdown(null);
  };

  const navItems = [
    {
      title: "BEST SELLER",
      dropdown: [
        {
          name: "Diamond Collection",
          path: "/shop",
        },
        {
          name: "Gold Collection",
          path: "/shop",
        },
        {
          name: "Trending Jewelry",
          path: "/shop",
        },
      ],
    },
    {
      title: "SHOP",
      dropdown: [
        {
          name: "All Jewelry",
          path: "/shop",
        },
        {
          name: "Rings",
          path: "/shop",
        },
        {
          name: "Earrings",
          path: "/shop",
        },
        {
          name: "Necklaces",
          path: "/shop",
        },
        {
          name: "Bracelets",
          path: "/shop",
        },
        {
          name: "Bangles",
          path: "/shop",
        },
      ],
    },
  ];

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "BLOG",
      path: "/blog",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  const [cartItems, setCartItems] = useState([
  {
    id: 1,
    name: "Elegant Gold Necklace",
    category: "Necklaces",
    image: shop1,
    price: 129,
    quantity: 1,
  },
  {
    id: 2,
    name: "Classic Gold Earrings",
    category: "Earrings",
    image: shop2,
    price: 89,
    quantity: 1,
  },
]);

const updateQuantity = (id, quantity) => {
  setCartItems((prev) =>
    prev.map((item) =>
      item.id === id
        ? { ...item, quantity }
        : item
    )
  );
};

const removeFromCart = (id) => {
  setCartItems((prev) =>
    prev.filter((item) => item.id !== id)
  );
};

  return (
    <>
      <header className="w-full bg-white text-[#171717] relative z-[100]">
        <div className="hidden lg:block border-b border-gray-200">
          <div className="container mx-auto px-5 h-[42px] flex items-center justify-center text-[12px]">

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <Phone size={14} />

                <span>GET SUPPORT FROM AN EXPERT -</span>

                <strong>1-844-916-0521</strong>
              </div>

              <span className="h-4 w-[1px] bg-gray-300" />

              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#b58b4c] transition"
              >
                ENGLISH
                <ChevronDown size={13} />
              </button>

              <button
                type="button"
                className="flex items-center gap-1 hover:text-[#b58b4c] transition"
              >
                USD
                <ChevronDown size={13} />
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
          MAIN HEADER
      ====================================================== */}
        <div className="container mx-auto px-4 lg:px-5">
          <div className="min-h-[82px] flex items-center gap-4 lg:gap-5">
            <button
              type="button"
              onClick={() => setMobileMenu(true)}
              className="lg:hidden shrink-0 hover:text-[#b58b4c] transition"
              aria-label="Open menu"
            >
              <Menu size={25} />
            </button>

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="w-[120px] sm:w-[140px] lg:w-[150px] shrink-0"
            >
              <img
                src={logo}
                alt="Jewelry Logo"
                className="w-full h-auto object-contain"
              />
            </Link>

            <div className="hidden md:flex flex-1 max-w-[900px] mx-auto">
              <div className="w-full h-[56px] bg-[#f3f4f5] flex items-center px-5">
                <Search
                  size={25}
                  strokeWidth={1.8}
                  className="text-gray-800 shrink-0"
                />

                <input
                  type="text"
                  placeholder="Search for the product that suits you..."
                  className="w-full bg-transparent outline-none ml-4 text-[14px] placeholder:text-gray-400"
                />
              </div>
            </div>

            <div className="ml-auto flex items-center gap-5 sm:gap-7 lg:gap-10">
              <Link
                to="/wishlist"
                className="relative hover:text-[#b58b4c] transition"
                aria-label="Wishlist"
              >
                <Heart size={23} strokeWidth={1.7} />

                <span className="absolute -top-2 -right-3 bg-[#ff5745] text-white text-[9px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  3
                </span>
              </Link>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative cursor-pointer transition hover:text-[#b58b4c]"
                aria-label="Shopping Cart"
              >
                <ShoppingCart size={23} strokeWidth={1.7} />

                <span className="absolute -right-3 -top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#ff5745] text-[9px] text-white">
                  2
                </span>
              </button>
            </div>
          </div>

          <div className="md:hidden pb-4">
            <div className="w-full h-[48px] bg-[#f3f4f5] flex items-center px-4">
              <Search size={21} strokeWidth={1.8} />

              <input
                type="text"
                placeholder="Search jewelry..."
                className="w-full bg-transparent outline-none ml-3 text-sm placeholder:text-gray-400"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:block border-t border-gray-100">
          <div className="container mx-auto px-5">
            <nav className="flex items-center gap-10 xl:gap-14 h-[70px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-[14px] font-semibold transition ${
                    isActive
                      ? "text-[#b58b4c]"
                      : "text-[#222] hover:text-[#b58b4c]"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-[14px] font-semibold transition ${
                    isActive
                      ? "text-[#b58b4c]"
                      : "text-[#222] hover:text-[#b58b4c]"
                  }`
                }
              >
                About Us
              </NavLink>

              {navItems.map((item) => (
                <div
                  key={item.title}
                  className="relative group h-full flex items-center"
                >
                  <button
                    type="button"
                    className="
                    flex
                    items-center
                    gap-2
                    text-[14px]
                    font-semibold
                    text-[#222]
                    hover:text-[#b58b4c]
                    transition
                    cursor-pointer
                    h-full
                  "
                  >
                    {item.title}

                    <ChevronDown
                      size={15}
                      strokeWidth={1.8}
                      className="transition-transform duration-200 group-hover:rotate-180"
                    />
                  </button>

                  <div
                    className="
                    absolute
                    top-full
                    left-0
                    min-w-[230px]
                    bg-white
                    border
                    border-gray-100
                    shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                    opacity-0
                    invisible
                    translate-y-3
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    transition-all
                    duration-200
                    z-[200]
                  "
                  >
                    <div className="py-3">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="
                          flex
                          items-center
                          px-5
                          py-3
                          text-[13px]
                          text-[#333]
                          hover:bg-[#faf9f7]
                          hover:text-[#b58b4c]
                          transition
                        "
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {navLinks.slice(2).map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-[14px] font-semibold transition ${
                      isActive
                        ? "text-[#b58b4c]"
                        : "text-[#222] hover:text-[#b58b4c]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        <div
          className={`
          lg:hidden
          fixed
          inset-0
          z-[999]
          bg-black/40
          transition-opacity
          duration-300
          ${
            mobileMenu
              ? "opacity-100 visible"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
          onClick={closeMobileMenu}
        >
          <div
            className={`
            absolute
            left-0
            top-0
            h-full
            w-[85%]
            max-w-[380px]
            bg-white
            shadow-2xl
            overflow-y-auto
            transition-transform
            duration-300
            ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
          `}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[75px] px-5 border-b border-gray-200 flex items-center justify-between">
              <Link to="/" onClick={closeMobileMenu} className="w-[140px]">
                <img src={logo} alt="Jewelry Logo" className="w-full" />
              </Link>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="hover:text-[#b58b4c] transition"
                aria-label="Close menu"
              >
                <X size={25} />
              </button>
            </div>

            <nav className="px-5 py-2">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="
                block
                py-5
                border-b
                border-gray-200
                font-semibold
                text-[14px]
                hover:text-[#b58b4c]
                transition
              "
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="
                block
                py-5
                border-b
                border-gray-200
                font-semibold
                text-[14px]
                hover:text-[#b58b4c]
                transition
              "
              >
                About Us
              </Link>

              {navItems.map((item) => (
                <div key={item.title} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => toggleDropdown(item.title)}
                    className="
                    w-full
                    py-5
                    flex
                    items-center
                    justify-between
                    font-semibold
                    text-[14px]
                    hover:text-[#b58b4c]
                    transition
                  "
                  >
                    {item.title}

                    <ChevronDown
                      size={17}
                      className={`
                      transition-transform
                      duration-300
                      ${
                        openDropdown === item.title
                          ? "rotate-180 text-[#b58b4c]"
                          : ""
                      }
                    `}
                    />
                  </button>

                  <div
                    className={`
                    overflow-hidden
                    transition-all
                    duration-300
                    ${
                      openDropdown === item.title
                        ? "max-h-[500px] pb-3"
                        : "max-h-0"
                    }
                  `}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        onClick={closeMobileMenu}
                        className="
                        block
                        py-3
                        pl-4
                        text-[13px]
                        text-gray-600
                        hover:text-[#b58b4c]
                        hover:pl-6
                        transition-all
                      "
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              <Link
                to="/earrings"
                onClick={closeMobileMenu}
                className="
                block
                py-5
                border-b
                border-gray-200
                font-semibold
                text-[14px]
                hover:text-[#b58b4c]
                transition
              "
              >
                EARRINGS
              </Link>

              <Link
                to="/necklaces"
                onClick={closeMobileMenu}
                className="
                block
                py-5
                border-b
                border-gray-200
                font-semibold
                text-[14px]
                hover:text-[#b58b4c]
                transition
              "
              >
                NECKLACES
              </Link>

              <Link
                to="/blog"
                onClick={closeMobileMenu}
                className="
                block
                py-5
                border-b
                border-gray-200
                font-semibold
                text-[14px]
                hover:text-[#b58b4c]
                transition
              "
              >
                BLOG
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="
                block
                py-5
                border-b
                border-gray-200
                font-semibold
                text-[14px]
                hover:text-[#b58b4c]
                transition
              "
              >
                CONTACT
              </Link>
            </nav>

            <div className="px-5 py-7 border-t border-gray-200">
              <Link
                to="/account"
                onClick={closeMobileMenu}
                className="
                flex
                items-center
                gap-3
                mb-6
                text-sm
                hover:text-[#b58b4c]
                transition
              "
              >
                <UserRound size={20} />
                <span>My Account</span>
              </Link>

              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className="
                flex
                items-center
                gap-3
                mb-6
                text-sm
                hover:text-[#b58b4c]
                transition
              "
              >
                <Heart size={20} />
                <span>Wishlist</span>
              </Link>

              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="
                flex
                items-center
                gap-3
                mb-6
                text-sm
                hover:text-[#b58b4c]
                transition
              "
              >
                <ShoppingCart size={20} />
                <span>Shopping Cart</span>
              </Link>

              <a
                href="tel:18449160521"
                className="
                flex
                items-center
                gap-3
                text-sm
                hover:text-[#b58b4c]
                transition
              "
              >
                <Phone size={20} />
                <span>1-844-916-0521</span>
              </a>
            </div>

            <div className="px-5 pb-8">
              <div className="bg-[#faf9f7] p-5">
                <p className="text-[11px] uppercase tracking-[2px] text-[#b58b4c] mb-2">
                  Need Assistance?
                </p>

                <p className="text-sm text-gray-600 leading-6">
                  Our jewelry experts are here to help you find the perfect
                  piece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />
    </>
  );
};

export default Navbar;
