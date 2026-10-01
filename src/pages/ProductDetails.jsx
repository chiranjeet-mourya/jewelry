import React, { useMemo, useState } from "react";
import {
  Heart,
  Star,
  Minus,
  Plus,
  ChevronLeft,
  ChevronRight,
  Check,
  Truck,
  ShieldCheck,
  RotateCcw,
  PackageCheck,
  ShoppingBag,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

import shop1 from "../assets/shop/1.jpg";
import shop2 from "../assets/shop/2.jpg";
import shop3 from "../assets/shop/3.jpg";
import shop4 from "../assets/shop/4.jpg";
import shop5 from "../assets/shop/5.jpg";
import shop6 from "../assets/shop/6.jpg";
import shop7 from "../assets/shop/7.jpg";
import shop8 from "../assets/shop/8.jpg";
import shop9 from "../assets/shop/9.jpg";
import shop10 from "../assets/shop/10.jpg";
import shop11 from "../assets/shop/11.jpg";
import shop12 from "../assets/shop/12.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const products = [
    {
      id: 1,
      image: shop1,
      gallery: [shop1, shop2,],
      category: "SILVER SET",
      name: "18ct White Gold 0.11cttw Diamond Twist & Aquamarine Pendant",
      sku: "ZU49V0R",
      price: 655,
      oldPrice: 765,
      discount: 26,
      rating: 4.33,
      reviews: 3,
      stock: "In Stock",
      gemstones: ["Pearls", "Aquamarines", "Diamonds"],
      material: ["Gold", "Rose Gold", "White Gold"],
      defaultGemstone: "Aquamarines",
      defaultMaterial: "Gold",
      description:
        "Set out to impress and delight with this beautiful 18ct White Gold pendant featuring sparkling diamonds and a stunning aquamarine gemstone. Perfectly designed for elegant everyday styling or special occasions.",
      details: {
        Material: "18ct White Gold",
        Gemstone: "Aquamarine & Diamonds",
        Weight: "0.11cttw",
        Collection: "Silver Set",
        SKU: "ZU49V0R",
        Availability: "In Stock",
      },
    },

    {
      id: 2,
      image: shop2,
      gallery: [shop2, shop1,],
      category: "ETERNITY",
      name: "18ct White Gold 0.20ct Diamond Twist Eternity Ring",
      sku: "ZU49V02",
      price: 779.88,
      oldPrice: null,
      discount: null,
      rating: 3.5,
      reviews: 6,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "White Gold",
      description:
        "A refined eternity ring crafted in white gold and finished with brilliant diamonds. Its elegant twist design gives the piece a sophisticated and timeless character.",
      details: {
        Material: "18ct White Gold",
        Gemstone: "Diamonds",
        Weight: "0.20ct",
        Collection: "Eternity",
        SKU: "ZU49V02",
        Availability: "In Stock",
      },
    },

    {
      id: 3,
      image: shop3,
      gallery: [shop3, shop1,],
      category: "RINGS",
      name: "18ct White Gold 0.50ct Channel Set Eternity Ring",
      sku: "ZU49V03",
      price: 317.89,
      oldPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 2,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "White Gold",
      description:
        "A sophisticated channel-set eternity ring featuring brilliant diamonds arranged beautifully around the band for a timeless luxury finish.",
      details: {
        Material: "18ct White Gold",
        Gemstone: "Diamonds",
        Weight: "0.50ct",
        Collection: "Rings",
        SKU: "ZU49V03",
        Availability: "In Stock",
      },
    },

    {
      id: 4,
      image: shop4,
      gallery: [shop4, shop1, shop2],
      category: "COCKTAIL",
      name: "18ct White Gold 0.50ct Diamond Curved Wedding Ring",
      sku: "ZU49V04",
      price: 715.99,
      oldPrice: 775.99,
      discount: 8,
      rating: 4.33,
      reviews: 3,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "Rose Gold", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "White Gold",
      description:
        "A beautifully curved wedding ring crafted from white gold and finished with sparkling diamonds for a luxurious and elegant appearance.",
      details: {
        Material: "18ct White Gold",
        Gemstone: "Diamonds",
        Weight: "0.50ct",
        Collection: "Cocktail",
        SKU: "ZU49V04",
        Availability: "In Stock",
      },
    },

    {
      id: 5,
      image: shop5,
      gallery: [shop5, shop2,],
      category: "BRACELETS",
      name: "18ct White Gold 0.50ct Diamond Mixed Cut Pendant",
      sku: "ZU49V05",
      price: 888.5,
      oldPrice: 989.5,
      discount: 11,
      rating: 2,
      reviews: 3,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "White Gold",
      description:
        "A luxurious diamond pendant featuring a mixed-cut diamond arrangement set in elegant white gold.",
      details: {
        Material: "18ct White Gold",
        Gemstone: "Diamonds",
        Weight: "0.50ct",
        Collection: "Bracelets",
        SKU: "ZU49V05",
        Availability: "In Stock",
      },
    },

    {
      id: 6,
      image: shop6,
      gallery: [shop6, shop2, shop1],
      category: "ETERNITY",
      name: "18ct White Gold 0.70ct Diamond Linear Band Ring",
      sku: "ZU49V06",
      price: 775.45,
      oldPrice: 918.5,
      discount: 16,
      rating: 3.5,
      reviews: 2,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Platinum", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "White Gold",
      description:
        "A contemporary linear diamond band crafted for a sophisticated and modern jewelry collection.",
      details: {
        Material: "White Gold",
        Gemstone: "Diamonds",
        Weight: "0.70ct",
        Collection: "Eternity",
        SKU: "ZU49V06",
        Availability: "In Stock",
      },
    },

    {
      id: 7,
      image: shop7,
      gallery: [shop7, shop2, shop3],
      category: "EARRINGS",
      name: "18ct White Gold 1.00ctw Diamond 20mm Hoop Earrings",
      sku: "ZU49V07",
      price: 198.45,
      oldPrice: 223.5,
      discount: 12,
      rating: 2.5,
      reviews: 2,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "White Gold",
      description:
        "Elegant 20mm hoop earrings crafted from white gold and accented with sparkling diamonds.",
      details: {
        Material: "18ct White Gold",
        Gemstone: "Diamonds",
        Weight: "1.00cttw",
        Collection: "Earrings",
        SKU: "ZU49V07",
        Availability: "In Stock",
      },
    },

    {
      id: 8,
      image: shop8,
      gallery: [shop8, shop2, shop4],
      category: "BRACELETS",
      name: "18ct White Gold 2cttw Line Bracelet",
      sku: "ZU49V08",
      price: 697.88,
      oldPrice: 897.88,
      discount: 23,
      rating: 3.33,
      reviews: 3,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "White Gold",
      description:
        "A sophisticated line bracelet featuring brilliant diamonds set in elegant white gold.",
      details: {
        Material: "18ct White Gold",
        Gemstone: "Diamonds",
        Weight: "2cttw",
        Collection: "Bracelets",
        SKU: "ZU49V08",
        Availability: "In Stock",
      },
    },

    {
      id: 9,
      image: shop9,
      gallery: [shop9, shop2, shop4],
      category: "RINGS",
      name: "18ct Yellow & White Pear Cut Diamond Ring",
      sku: "ZU49V09",
      price: 906.8,
      oldPrice: 964.14,
      discount: 6,
      rating: 5,
      reviews: 2,
      stock: "In Stock",
      gemstones: ["Diamonds", "Pearls"],
      material: ["Gold", "Yellow Gold", "White Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "Yellow Gold",
      description:
        "A striking pear-cut diamond ring combining yellow and white gold for a distinctive luxury look.",
      details: {
        Material: "Yellow & White Gold",
        Gemstone: "Diamonds",
        Weight: "Pear Cut",
        Collection: "Rings",
        SKU: "ZU49V09",
        Availability: "In Stock",
      },
    },

    {
      id: 10,
      image: shop10,
      gallery: [shop10, shop2, shop5],
      category: "CHAIN NECKLACES",
      name: "18ct Yellow Gold 0.10ctw Diamond & Baroque Pearl Pendant",
      sku: "ZU49V10",
      price: 864.66,
      oldPrice: null,
      discount: null,
      rating: 4.67,
      reviews: 3,
      stock: "In Stock",
      gemstones: ["Diamonds", "Pearls"],
      material: ["Gold", "Yellow Gold"],
      defaultGemstone: "Pearls",
      defaultMaterial: "Yellow Gold",
      description:
        "A beautiful yellow gold pendant featuring a delicate diamond and baroque pearl combination.",
      details: {
        Material: "18ct Yellow Gold",
        Gemstone: "Diamond & Pearl",
        Weight: "0.10cttw",
        Collection: "Chain Necklaces",
        SKU: "ZU49V10",
        Availability: "In Stock",
      },
    },

    {
      id: 11,
      image: shop11,
      gallery: [shop11, shop2, shop6],
      category: "RINGS",
      name: "18ct Yellow Gold 0.40ct Round Halo Engagement Ring",
      sku: "ZU49V11",
      price: 617.44,
      oldPrice: 665.99,
      discount: 8,
      rating: 3,
      reviews: 2,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "Yellow Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "Yellow Gold",
      description:
        "A timeless round halo engagement ring crafted in yellow gold and finished with sparkling diamonds.",
      details: {
        Material: "18ct Yellow Gold",
        Gemstone: "Diamonds",
        Weight: "0.40ct",
        Collection: "Rings",
        SKU: "ZU49V11",
        Availability: "In Stock",
      },
    },

    {
      id: 12,
      image: shop12,
      gallery: [shop12, shop2, shop8],
      category: "ETERNITY",
      name: "18ct Yellow Gold 1.00ct Claw Set Half Eternity Ring",
      sku: "ZU49V12",
      price: 896.5,
      oldPrice: 936.66,
      discount: 5,
      rating: 3.5,
      reviews: 2,
      stock: "In Stock",
      gemstones: ["Diamonds"],
      material: ["Gold", "Yellow Gold"],
      defaultGemstone: "Diamonds",
      defaultMaterial: "Yellow Gold",
      description:
        "A beautiful half eternity ring featuring claw-set diamonds on a polished yellow gold band.",
      details: {
        Material: "18ct Yellow Gold",
        Gemstone: "Diamonds",
        Weight: "1.00ct",
        Collection: "Eternity",
        SKU: "ZU49V12",
        Availability: "In Stock",
      },
    },
  ];

  const product = useMemo(() => {
    return (
      products.find((item) => item.id === Number(id)) || products[0]
    );
  }, [id]);

  const [activeImage, setActiveImage] = useState(0);

  const [quantity, setQuantity] = useState(1);

  const [selectedGemstone, setSelectedGemstone] = useState(
    product.defaultGemstone
  );

  const [selectedMaterial, setSelectedMaterial] = useState(
    product.defaultMaterial
  );

  const [activeTab, setActiveTab] = useState("description");

  const [wishlist, setWishlist] = useState(false);

  const [reviewRating, setReviewRating] = useState(0);

  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nextImage = () => {
    setActiveImage((prev) =>
      prev === product.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? product.gallery.length - 1 : prev - 1
    );
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    if (!reviewRating) {
      alert("Please select your rating.");
      return;
    }

    console.log({
      productId: product.id,
      productName: product.name,
      ...reviewForm,
      rating: reviewRating,
    });

    alert("Thank you! Your review has been submitted.");

    setReviewForm({
      name: "",
      email: "",
      message: "",
    });

    setReviewRating(0);
  };

  const formatPrice = (price) => {
    return `$${price.toFixed(2)}`;
  };

  return (
    <main className="min-h-screen bg-white text-[#222]">

      <div className="border-b border-gray-100">
        <div className="mx-auto container py-4 sm:px-4 lg:px-4">
          <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px]">
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-gray-400 transition hover:text-[#b08a4a]"
            >
              Home
            </button>

            <ChevronRight
              size={12}
              className="text-gray-300"
            />

            <button
              type="button"
              onClick={() => navigate("/shop")}
              className="text-gray-400 transition hover:text-[#b08a4a]"
            >
              {product.category}
            </button>

            <ChevronRight
              size={12}
              className="text-gray-300"
            />

            <span className="max-w-[250px] truncate text-gray-700 sm:max-w-none">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <section className="mx-auto container px-4 py-7 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-14">

          <div>
            <div className="relative overflow-hidden bg-[#fff]">

              {product.discount && (
                <span className="absolute left-4 top-4 z-20 border border-red-400 bg-white px-2 py-1 text-[10px] font-semibold text-red-500">
                  {product.discount}%
                </span>
              )}

              <div className="flex aspect-square items-center justify-center overflow-hidden">
                <img
                  src={product.gallery[activeImage]}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-contain
                    p-7
                    transition-all
                    duration-500
                    sm:p-10
                  "
                />
              </div>

              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="
                  absolute
                  left-3
                  top-1/2
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  bg-white
                  shadow-md
                  transition
                  hover:bg-[#222]
                  hover:text-white
                  sm:left-5
                "
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="
                  absolute
                  right-3
                  top-1/2
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  cursor-pointer
                  items-center
                  justify-center
                  bg-white
                  shadow-md
                  transition
                  hover:bg-[#222]
                  hover:text-white
                  sm:right-5
                "
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((image, index) => (
                <button
                  key={`${product.id}-${index}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`
                    h-[68px]
                    w-[68px]
                    shrink-0
                    cursor-pointer
                    overflow-hidden
                    border
                    bg-[#fafafa]
                    transition
                    sm:h-[82px]
                    sm:w-[82px]
                    ${
                      activeImage === index
                        ? "border-[#222]"
                        : "border-gray-200 hover:border-[#b08a4a]"
                    }
                  `}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-full w-full object-contain p-2"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
              {product.category}
            </p>

            <h1 className="mt-2 text-[20px] font-semibold leading-[1.25] tracking-[-0.5px] sm:text-[24px]">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={14}
                  fill="currentColor"
                />

                <span className="text-xs font-semibold">
                  {product.rating.toFixed(2)}
                </span>
              </div>

              <span className="text-xs text-gray-400">
                ({product.reviews} Reviews)
              </span>

              <span className="text-gray-300">|</span>

              <span className="text-xs text-gray-400">
                SKU: {product.sku}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {product.oldPrice ? (
                <>
                  <span className="text-[20px] font-bold sm:text-[22px]">
                    {formatPrice(product.oldPrice)}
                  </span>

                  <span className="text-[22px] text-gray-400">
                    —
                  </span>

                  <span className="text-[20px] font-bold sm:text-[22px]">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="text-[27px] font-bold">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-green-600">
              <Check size={16} />
              <span>{product.stock}</span>
            </div>

            <p className="mt-5 text-[13px] leading-6 text-gray-600">
              {product.description}
            </p>

            <div className="mt-7 border-b border-gray-200 pb-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 text-[11px] text-gray-400">
                  gemstones:
                </span>

                {product.gemstones.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setSelectedGemstone(item)
                    }
                    className={`
                      cursor-pointer
                      border
                      px-3
                      py-2
                      text-[10px]
                      font-semibold
                      transition
                      ${
                        selectedGemstone === item
                          ? "border-red-400 text-red-500"
                          : "border-gray-200 hover:border-[#b08a4a]"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-2 text-[11px] text-gray-400">
                  material:
                </span>

                {product.material.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setSelectedMaterial(item)
                    }
                    className={`
                      cursor-pointer
                      border
                      px-3
                      py-2
                      text-[10px]
                      font-semibold
                      transition
                      ${
                        selectedMaterial === item
                          ? "border-red-400 text-red-500"
                          : "border-gray-200 hover:border-[#b08a4a]"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    setSelectedMaterial(
                      product.defaultMaterial
                    );
                  }}
                  className="ml-1 cursor-pointer text-xs text-gray-500 transition hover:text-black"
                >
                  × Clear
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="text-[25px] font-bold text-[#ef4038]">
                {formatPrice(product.price)}
              </span>

              {product.oldPrice && (
                <span className="text-[16px] text-gray-400 line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <div className="flex h-[50px] w-full border border-gray-300 sm:w-[110px]">
                <button
                  type="button"
                  onClick={decreaseQuantity}
                  className="flex flex-1 cursor-pointer items-center justify-center transition hover:bg-gray-50"
                >
                  <Minus size={15} />
                </button>

                <span className="flex w-10 items-center justify-center text-sm">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  className="flex flex-1 cursor-pointer items-center justify-center transition hover:bg-gray-50"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                type="button"
                onClick={() =>
                  alert(
                    `${quantity} × ${product.name} added to cart`
                  )
                }
                className="
                  flex
                  h-[50px]
                  flex-1
                  cursor-pointer
                  items-center
                  justify-center
                  gap-2
                  bg-[#222]
                  px-6
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  transition
                  hover:bg-[#b08a4a]
                "
              >
                <ShoppingBag size={16} />
                Add To Cart
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-3 border border-gray-200 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <Truck size={18} />

                <span className="text-xs font-semibold">
                  Shipping within 3 days
                </span>
              </div>

              <span className="hidden h-5 w-px bg-gray-300 sm:block" />

              <span className="text-xs text-gray-500">
                Speedy and reliable parcel delivery!
              </span>
            </div>

            <button
              type="button"
              onClick={() => setWishlist(!wishlist)}
              className="
                mt-6
                flex
                cursor-pointer
                items-center
                gap-2
                text-[11px]
                font-bold
                uppercase
                transition
                hover:text-[#b08a4a]
              "
            >
              <Heart
                size={18}
                fill={
                  wishlist ? "currentColor" : "none"
                }
              />

              {wishlist
                ? "Added To Wishlist"
                : "View Wishlist"}
            </button>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-[12px]">
                <ShieldCheck size={16} />
                <span>Price match promise</span>
              </div>

              <div className="flex items-center gap-3 text-[12px]">
                <Truck size={16} />
                <span>Free delivery on all orders</span>
              </div>

              <div className="flex items-center gap-3 text-[12px]">
                <PackageCheck size={16} />
                <span>Safe & secure transaction</span>
              </div>

              <div className="flex items-center gap-3 text-[12px]">
                <RotateCcw size={16} />
                <span>
                  Extended Christmas return policy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100">
        <div className="mx-auto container px-4 sm:px-6 lg:px-8">

          <div className="flex gap-6 overflow-x-auto border-b border-gray-200">
            <button
              type="button"
              onClick={() => setActiveTab("description")}
              className={`
                shrink-0
                cursor-pointer
                py-5
                text-[11px]
                font-semibold
                transition
                sm:text-xs
                ${
                  activeTab === "description"
                    ? "border-b-2 border-[#222] text-[#222]"
                    : "text-gray-400 hover:text-[#222]"
                }
              `}
            >
              Description
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("additional")}
              className={`
                shrink-0
                cursor-pointer
                py-5
                text-[11px]
                font-semibold
                transition
                sm:text-xs
                ${
                  activeTab === "additional"
                    ? "border-b-2 border-[#222] text-[#222]"
                    : "text-gray-400 hover:text-[#222]"
                }
              `}
            >
              Additional information
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("reviews")}
              className={`
                shrink-0
                cursor-pointer
                py-5
                text-[11px]
                font-semibold
                transition
                sm:text-xs
                ${
                  activeTab === "reviews"
                    ? "border-b-2 border-[#222] text-[#222]"
                    : "text-gray-400 hover:text-[#222]"
                }
              `}
            >
              Reviews ({product.reviews})
            </button>
          </div>

          {activeTab === "description" && (
            <div className="py-8 sm:py-10">
              <h3 className="text-lg font-semibold">
                Product Description
              </h3>

              <div className="mt-5 space-y-4 text-[13px] leading-7 text-gray-600">
                <p>
                  {product.description}
                </p>

                <p>
                  This elegant jewelry piece has been
                  beautifully crafted to bring a
                  sophisticated touch to your everyday
                  jewelry collection.
                </p>

                <p>
                  Featuring carefully selected materials
                  and beautiful gemstone detailing, this
                  piece is designed for timeless elegance
                  and effortless styling.
                </p>

                <p>
                  Whether worn for a special occasion or
                  styled with your everyday outfits, this
                  jewelry adds a refined and luxurious
                  finish to your look.
                </p>
              </div>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="py-8 sm:py-10">
              <h3 className="text-lg font-semibold">
                Additional Information
              </h3>

              <div className="mt-5 overflow-hidden border border-gray-200">
                {Object.entries(product.details).map(
                  ([key, value], index) => (
                    <div
                      key={key}
                      className="grid grid-cols-1 sm:grid-cols-2"
                    >
                      <div
                        className={`
                          border-b
                          border-gray-200
                          bg-gray-50
                          p-4
                          text-xs
                          font-semibold
                          sm:border-r
                          ${
                            index ===
                            Object.entries(product.details)
                              .length -
                              1
                              ? "sm:border-b-0"
                              : ""
                          }
                        `}
                      >
                        {key}
                      </div>

                      <div
                        className={`
                          border-b
                          border-gray-200
                          p-4
                          text-xs
                          text-gray-600
                          ${
                            index ===
                            Object.entries(product.details)
                              .length -
                              1
                              ? "border-b-0"
                              : ""
                          }
                        `}
                      >
                        {value}
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="py-8 sm:py-10">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">

                <div>
                  <h3 className="text-lg font-semibold">
                    Customer Reviews
                  </h3>

                  <div className="mt-5 flex items-center gap-4">
                    <span className="text-[42px] font-bold">
                      {product.rating.toFixed(2)}
                    </span>

                    <div>
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(
                          (star) => (
                            <Star
                              key={star}
                              size={15}
                              fill={
                                star <=
                                Math.round(
                                  product.rating
                                )
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          )
                        )}
                      </div>

                      <p className="mt-1 text-xs text-gray-400">
                        Based on {product.reviews} reviews
                      </p>
                    </div>
                  </div>

                  <div className="mt-7 space-y-3">
                    {[
                      {
                        star: 5,
                        percentage:
                          product.rating >= 4.5
                            ? 75
                            : 60,
                      },
                      {
                        star: 4,
                        percentage: 20,
                      },
                      {
                        star: 3,
                        percentage: 10,
                      },
                      {
                        star: 2,
                        percentage: 0,
                      },
                      {
                        star: 1,
                        percentage: 0,
                      },
                    ].map((item) => (
                      <div
                        key={item.star}
                        className="flex items-center gap-3"
                      >
                        <span className="w-8 text-[11px]">
                          {item.star} ★
                        </span>

                        <div className="h-2 flex-1 bg-gray-100">
                          <div
                            className="h-full bg-[#b08a4a]"
                            style={{
                              width: `${item.percentage}%`,
                            }}
                          />
                        </div>

                        <span className="w-8 text-right text-[10px] text-gray-400">
                          {item.percentage}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">
                    Write a Review
                  </h3>

                  <p className="mt-2 text-xs text-gray-500">
                    Your email address will not be published.
                  </p>

                  <div className="mt-5">
                    <label className="mb-2 block text-xs font-semibold">
                      Your rating
                    </label>

                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map(
                        (star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() =>
                              setReviewRating(star)
                            }
                            className="cursor-pointer transition hover:scale-110"
                          >
                            <Star
                              size={20}
                              className={
                                star <= reviewRating
                                  ? "text-[#b08a4a]"
                                  : "text-gray-300"
                              }
                              fill={
                                star <= reviewRating
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        )
                      )}
                    </div>
                  </div>

                  <form
                    onSubmit={handleReviewSubmit}
                    className="mt-5 space-y-4"
                  >
                    <textarea
                      value={reviewForm.message}
                      onChange={(e) =>
                        setReviewForm({
                          ...reviewForm,
                          message: e.target.value,
                        })
                      }
                      required
                      rows={5}
                      placeholder="Your review *"
                      className="
                        w-full
                        resize-none
                        border
                        border-gray-200
                        p-4
                        text-xs
                        outline-none
                        transition
                        focus:border-[#b08a4a]
                      "
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        value={reviewForm.name}
                        onChange={(e) =>
                          setReviewForm({
                            ...reviewForm,
                            name: e.target.value,
                          })
                        }
                        placeholder="Name *"
                        className="
                          h-11
                          w-full
                          border
                          border-gray-200
                          px-4
                          text-xs
                          outline-none
                          focus:border-[#b08a4a]
                        "
                      />

                      <input
                        type="email"
                        required
                        value={reviewForm.email}
                        onChange={(e) =>
                          setReviewForm({
                            ...reviewForm,
                            email: e.target.value,
                          })
                        }
                        placeholder="Email *"
                        className="
                          h-11
                          w-full
                          border
                          border-gray-200
                          px-4
                          text-xs
                          outline-none
                          focus:border-[#b08a4a]
                        "
                      />
                    </div>

                    <label className="flex cursor-pointer items-start gap-2 text-[11px] leading-5 text-gray-500">
                      <input
                        type="checkbox"
                        className="mt-1 accent-[#b08a4a]"
                      />

                      <span>
                        Save my name, email and website
                        in this browser for the next
                        time I comment.
                      </span>
                    </label>

                    <button
                      type="submit"
                      className="
                        h-11
                        cursor-pointer
                        bg-[#222]
                        px-7
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-white
                        transition
                        hover:bg-[#b08a4a]
                      "
                    >
                      Submit Review
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;