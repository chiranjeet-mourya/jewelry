import React, { useState } from "react";
import {
  X,
  Heart,
  Star,
  ShoppingBag,
  Minus,
  Plus,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";

const QuickViewModal = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const [wishlisted, setWishlisted] = useState(false);

  const [activeImage, setActiveImage] = useState(0);

  const images = [
    product.image,
    product.image,
    product.image,
  ];

  const decrease = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-[200]">

      <div
        onClick={onClose}
        className="
          absolute
          inset-0
          bg-black/65
          backdrop-blur-[3px]
        "
      />


      <div className="relative flex h-full items-center justify-center overflow-y-auto p-3 sm:p-6">

        <div
          className="
            relative
            w-full
            max-w-5xl
            overflow-hidden
            bg-white
            shadow-2xl
          "
        >

          <button
            onClick={onClose}
            className="
              absolute
              right-3
              top-3
              z-50
              flex
              h-10
              w-10
              cursor-pointer
              items-center
              justify-center
              rounded-full
              bg-white
              shadow-md
              transition
              hover:bg-[#222]
              hover:text-white
            "
          >
            <X size={19} />
          </button>


          <div className="grid lg:grid-cols-2">

            <div className="bg-[#f8f8f8] p-5 sm:p-8">

              <div className="relative aspect-square overflow-hidden">

                <img
                  src={images[activeImage]}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-contain
                    p-5
                    transition-all
                    duration-500
                  "
                />


                {product.discount && (

                  <span
                    className="
                      absolute
                      left-3
                      top-3
                      border
                      border-[#ff4d42]
                      bg-white
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-[#ff4d42]
                    "
                  >
                    -{product.discount}%
                  </span>

                )}

              </div>


              <div className="mt-4 flex justify-center gap-3">

                {images.map((image, index) => (

                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`
                      h-16
                      w-16
                      cursor-pointer
                      overflow-hidden
                      border
                      bg-white
                      ${
                        activeImage === index
                          ? "border-[#222]"
                          : "border-gray-200"
                      }
                    `}
                  >

                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-contain p-1"
                    />

                  </button>

                ))}

              </div>

            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-[#b08a4a]
                "
              >
                {product.category}
              </p>


              <h2
                className="
                  mt-3
                  font-serif
                  text-xl
                  leading-tight
                  text-[#222]
                  sm:text-2xl
                "
              >
                {product.name}
              </h2>


              <div className="mt-4 flex items-center gap-2">

                <div className="flex items-center gap-1">

                  <Star
                    size={15}
                    fill="currentColor"
                    className="text-[#222]"
                  />

                  <span className="text-sm font-semibold">
                    {product.rating.toFixed(2)}
                  </span>

                </div>

                <span className="text-xs text-gray-400">
                  ({product.reviews} Reviews)
                </span>

              </div>


              <div className="mt-6 flex items-center gap-3">

                <span
                  className={`
                    text-2xl
                    font-bold
                    ${
                      product.oldPrice
                        ? "text-[#e64035]"
                        : "text-[#222]"
                    }
                  `}
                >
                  ${product.price.toFixed(2)}
                </span>

                {product.oldPrice && (

                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>

                )}

              </div>


              <p className="mt-4 text-sm font-medium text-[#2aaa50]">
                ✓ In Stock
              </p>


              <p className="mt-5 text-sm leading-7 text-gray-500">
                Beautifully crafted jewellery designed to bring timeless
                elegance to every occasion. Carefully finished with
                attention to every detail.
              </p>


              <div className="mt-7 flex gap-3">

                <div className="flex h-12 border border-gray-200">

                  <button
                    onClick={decrease}
                    className="
                      flex
                      w-10
                      cursor-pointer
                      items-center
                      justify-center
                      hover:bg-gray-100
                    "
                  >
                    <Minus size={15} />
                  </button>

                  <span className="flex w-10 items-center justify-center text-sm">
                    {quantity}
                  </span>

                  <button
                    onClick={increase}
                    className="
                      flex
                      w-10
                      cursor-pointer
                      items-center
                      justify-center
                      hover:bg-gray-100
                    "
                  >
                    <Plus size={15} />
                  </button>

                </div>


                <button
                  className="
                    flex
                    h-12
                    flex-1
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    bg-[#222]
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    text-white
                    transition
                    hover:bg-[#b08a4a]
                  "
                >
                  <ShoppingBag size={16} />
                  Add To Cart
                </button>

              </div>


              <button
                onClick={() => setWishlisted(!wishlisted)}
                className="
                  mt-5
                  flex
                  w-fit
                  cursor-pointer
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  transition
                  hover:text-[#b08a4a]
                "
              >

                <Heart
                  size={18}
                  fill={wishlisted ? "currentColor" : "none"}
                  className={wishlisted ? "text-red-500" : ""}
                />

                {wishlisted
                  ? "Added To Wishlist"
                  : "Add To Wishlist"}

              </button>


              <div className="mt-8 border-t border-gray-100 pt-6">

                <div className="grid grid-cols-3 gap-3">

                  <div className="text-center">

                    <ShieldCheck
                      size={20}
                      className="mx-auto text-[#b08a4a]"
                    />

                    <p className="mt-2 text-[9px] uppercase tracking-wide text-gray-500">
                      Secure
                    </p>

                  </div>


                  <div className="border-x border-gray-100 text-center">

                    <Truck
                      size={20}
                      className="mx-auto text-[#b08a4a]"
                    />

                    <p className="mt-2 text-[9px] uppercase tracking-wide text-gray-500">
                      Free Delivery
                    </p>

                  </div>


                  <div className="text-center">

                    <RotateCcw
                      size={20}
                      className="mx-auto text-[#b08a4a]"
                    />

                    <p className="mt-2 text-[9px] uppercase tracking-wide text-gray-500">
                      Easy Returns
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default QuickViewModal;