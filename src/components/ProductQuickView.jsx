import React, { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
  ShieldCheck,
  RotateCcw,
  Star,
} from "lucide-react";

const ProductQuickView = ({ product, onClose }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [wishlist, setWishlist] = useState(false);
 
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);
 
  useEffect(() => {
    setActiveImage(0);
    setQuantity(1);
    setWishlist(false);
  }, [product]);
 
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const images =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  const nextImage = () => {
    setActiveImage((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 lg:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          max-h-[90vh]
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-[0_30px_100px_rgba(0,0,0,0.35)]
          animate-quick-view
        "
      >
        <button
          type="button"
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            z-50
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white
            text-[#222]
            shadow-lg
            transition-all
            duration-300
            hover:bg-[#222]
            hover:text-white
            hover:rotate-90
            cursor-pointer
          "
        >
          <X size={19} />
        </button>

        <div
          className="
            grid
            max-h-[94vh]
            overflow-y-auto
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >
         
          <div className="bg-[#f5f3ef] p-4 sm:p-6 lg:p-10">
            <div
              className="
                relative
                flex
                h-[300px]
                items-center
                justify-center
                overflow-hidden
                rounded-xl
                bg-white
                sm:h-[400px]
                lg:h-[450px]
              "
            >
              <div className="absolute left-4 top-4 z-20">
                <span
                  className="
                    bg-[#222]
                    px-4
                    py-2
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white
                  "
                >
                  Best Seller
                </span>
              </div>

              <img
                key={images[activeImage]}
                src={images[activeImage]}
                alt={product.name}
                className="
                  h-full
                  w-full
                  object-contain
                  p-5
                  sm:p-8
                  animate-product-image
                "
              />

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={previousImage}
                  className="
                    absolute
                    left-3
                    top-1/2
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#222]
                    hover:text-white
                    cursor-pointer
                  "
                >
                  <ChevronLeft size={19} />
                </button>
              )}

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={nextImage}
                  className="
                    absolute
                    right-3
                    top-1/2
                    flex
                    h-10
                    w-10
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-md
                    transition-all
                    duration-300
                    hover:bg-[#222]
                    hover:text-white
                    cursor-pointer
                  "
                >
                  <ChevronRight size={19} />
                </button>
              )}
            </div>

            <div className="mt-5 flex justify-center gap-3 overflow-x-auto pb-1">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={`${image}-${index}`}
                  onClick={() => setActiveImage(index)}
                  className={`
                    relative
                    h-16
                    w-16
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    bg-white
                    transition-all
                    duration-300
                    sm:h-20
                    sm:w-20
                    ${
                      activeImage === index
                        ? "border-2 border-[#b08a4a] opacity-100 shadow-md"
                        : "border border-black/10 opacity-60 hover:opacity-100"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-contain p-1"
                  />

                  {activeImage === index && (
                    <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#b08a4a]" />
                  )}
                </button>
              ))}
            </div>

            <p className="mt-3 text-center text-[10px] uppercase tracking-[0.2em] text-gray-400">
              Image {activeImage + 1} / {images.length}
            </p>
          </div>

          <div className="flex flex-col justify-center bg-white p-6 sm:p-8 lg:p-12">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#b08a4a]">
              {product.category}
            </p>

            <h2 className="mt-3 pr-8 font-serif text-xl leading-tight text-[#222] sm:text-2xl lg:text-3xl">
              {product.name}
            </h2>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={14}
                    fill="#b08a4a"
                    className="text-[#b08a4a]"
                  />
                ))}
              </div>

              <span className="text-xs text-gray-400">
                {product.rating} · {product.reviews}
              </span>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-2xl font-semibold text-[#e63e35] sm:text-3xl">
                {product.price}
              </span>

              <span className="text-sm text-gray-400 line-through">
                {product.oldPrice}
              </span>

              <span className="rounded-sm bg-[#fff0ee] px-2 py-1 text-[10px] font-semibold text-[#e63e35]">
                SAVE {product.discount}
              </span>
            </div>

            <div className="my-6 h-px bg-black/10" />

            <p className="text-sm leading-7 text-gray-500">
              {product.description ||
                "Beautifully crafted with timeless elegance and attention to every detail. Designed to bring effortless luxury to your everyday moments."}
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />

              <span className="text-xs font-medium text-green-600">
                In Stock — Ready to Ship
              </span>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <div
                className="
                  flex
                  h-12
                  items-center
                  justify-between
                  rounded-lg
                  border
                  border-black/10
                  sm:w-32
                "
              >
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="
                    flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-500
                    transition
                    hover:text-[#b08a4a]
                    cursor-pointer
                  "
                >
                  <Minus size={15} />
                </button>

                <span className="text-sm font-semibold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="
                    flex
                    h-full
                    w-10
                    items-center
                    justify-center
                    text-gray-500
                    transition
                    hover:text-[#b08a4a]
                    cursor-pointer
                  "
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                type="button"
                className="
                  group
                  flex
                  h-12
                  flex-1
                  items-center
                  justify-center
                  gap-3
                  rounded-lg
                  bg-[#222]
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#b08a4a]
                  cursor-pointer
                "
              >
                <ShoppingBag
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5"
                />

                Add to Cart
              </button>
            </div>

            <button
              type="button"
              onClick={() => setWishlist((current) => !current)}
              className="
                mt-4
                flex
                items-center
                justify-center
                gap-2
                py-2
                text-xs
                font-medium
                uppercase
                tracking-[0.15em]
                text-gray-500
                transition
                hover:text-[#b08a4a]
                cursor-pointer
              "
            >
              <Heart
                size={17}
                fill={wishlist ? "#b08a4a" : "none"}
                className={wishlist ? "text-[#b08a4a]" : ""}
              />

              {wishlist ? "Added to Wishlist" : "Add to Wishlist"}
            </button>

            <div className="mt-7 grid grid-cols-2 gap-4 border-t border-black/10 pt-6">
              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">
                  Material
                </p>

                <p className="mt-1 text-xs font-medium text-[#222]">
                  18ct Gold
                </p>
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">
                  SKU
                </p>

                <p className="mt-1 text-xs font-medium text-[#222]">
                  JEW-{String(product.id).padStart(4, "0")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes quickView {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes productImage {
          0% {
            opacity: 0;
            transform: scale(0.96);
          }

          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-quick-view {
          animation: quickView 0.3s ease-out;
        }

        .animate-product-image {
          animation: productImage 0.35s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProductQuickView;