import React, { useMemo, useState } from "react";
import {
  Heart,
  Eye,
  ShoppingBag,
  Star,
  SlidersHorizontal,
  X,
  ChevronDown,
  Grid2X2,
  List,
  Plus,
  Minus,
} from "lucide-react";

import QuickViewModal from "../components/QuickViewModal";

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
import { useNavigate, useParams } from "react-router-dom";

const Shop = () => {
  
  const { id } = useParams();

  const products = [
    {
      id: 1,
      image: shop1,
      category: "SILVER SET",
      name: "18ct White Gold 0.11ctw Diamond Twist & Aquamarine Pendant",
      price: 655,
      oldPrice: 765,
      discount: 26,
      rating: 4.33,
      reviews: 3,
      gemstones: ["Aquamarines", "Diamonds"],
      material: "White Gold",
      brand: "BOSS",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 2,
      image: shop2,
      category: "ETERNITY",
      name: "18ct White Gold 0.20ct Diamond Twist Eternity Ring",
      price: 779.88,
      oldPrice: null,
      discount: null,
      rating: 3.5,
      reviews: 6,
      gemstones: ["Diamonds"],
      material: "White Gold",
      brand: "Calvin Klein",
      status: ["In Stock"],
    },
    {
      id: 3,
      image: shop3,
      category: "RINGS",
      name: "18ct White Gold 0.50ct Channel Set Eternity Ring",
      price: 317.89,
      oldPrice: null,
      discount: null,
      rating: 4.5,
      reviews: 2,
      gemstones: ["Diamonds"],
      material: "White Gold",
      brand: "Chopard",
      status: ["In Stock"],
    },
    {
      id: 4,
      image: shop4,
      category: "COCKTAIL",
      name: "18ct White Gold 0.50ct Diamond Curved Wedding Ring",
      price: 715.99,
      oldPrice: 775.99,
      discount: 8,
      rating: 4.33,
      reviews: 3,
      gemstones: ["Diamonds"],
      material: "White Gold",
      brand: "Emporio Armani",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 5,
      image: shop5,
      category: "BRACELETS",
      name: "18ct White Gold 0.50ct Diamond Mixed Cut Pendant",
      price: 888.5,
      oldPrice: 989.5,
      discount: 11,
      rating: 2,
      reviews: 3,
      gemstones: ["Diamonds"],
      material: "White Gold",
      brand: "Fope",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 6,
      image: shop6,
      category: "ETERNITY",
      name: "18ct White Gold 0.70ct Diamond Linear Band Ring",
      price: 775.45,
      oldPrice: 918.5,
      discount: 16,
      rating: 3.5,
      reviews: 2,
      gemstones: ["Diamonds"],
      material: "Platinum",
      brand: "GUCCI",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 7,
      image: shop7,
      category: "EARRINGS",
      name: "18ct White Gold 1.00ctw Diamond 20mm Hoop Earrings",
      price: 198.45,
      oldPrice: 223.5,
      discount: 12,
      rating: 2.5,
      reviews: 2,
      gemstones: ["Diamonds"],
      material: "White Gold",
      brand: "BOSS",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 8,
      image: shop8,
      category: "BRACELETS",
      name: "18ct White Gold 2cttw Line Bracelet",
      price: 697.88,
      oldPrice: 897.88,
      discount: 23,
      rating: 3.33,
      reviews: 3,
      gemstones: ["Diamonds"],
      material: "White Gold",
      brand: "Calvin Klein",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 9,
      image: shop9,
      category: "RINGS",
      name: "18ct Yellow & White Pear Cut Diamond Ring",
      price: 906.8,
      oldPrice: 964.14,
      discount: 6,
      rating: 5,
      reviews: 2,
      gemstones: ["Diamonds", "Pearls"],
      material: "Yellow Gold",
      brand: "Chopard",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 10,
      image: shop10,
      category: "CHAIN NECKLACES",
      name: "18ct Yellow Gold 0.10ctw Diamond & Baroque Pearl Pendant",
      price: 864.66,
      oldPrice: null,
      discount: null,
      rating: 4.67,
      reviews: 3,
      gemstones: ["Diamonds", "Pearls"],
      material: "Yellow Gold",
      brand: "Fope",
      status: ["In Stock"],
    },
    {
      id: 11,
      image: shop11,
      category: "RINGS",
      name: "18ct Yellow Gold 0.40ct Round Halo Engagement Ring",
      price: 617.44,
      oldPrice: 665.99,
      discount: 8,
      rating: 3,
      reviews: 2,
      gemstones: ["Diamonds"],
      material: "Yellow Gold",
      brand: "GUCCI",
      status: ["In Stock", "On Sale"],
    },
    {
      id: 12,
      image: shop12,
      category: "ETERNITY",
      name: "18ct Yellow Gold 1.00ct Claw Set Half Eternity Ring",
      price: 896.5,
      oldPrice: 936.66,
      discount: 5,
      rating: 3.5,
      reviews: 2,
      gemstones: ["Diamonds"],
      material: "Yellow Gold",
      brand: "BOSS",
      status: ["In Stock", "On Sale"],
    },
  ];

  const filterGroups = {
    categories: [
      "Bracelets",
      "Earrings",
      "Gold Set",
      "Necklaces",
      "Rings",
      "Silver Set",
    ],

    gemstones: [
      "Aquamarines",
      "Diamonds",
      "Onyx",
      "Pearls",
      "Sapphires",
      "Tanzanites",
      "Turquoise",
    ],

    materials: [
      "Gold",
      "Platinum",
      "Rose Gold",
      "Silk",
      "Sterling Silver",
      "White Gold",
      "Yellow Gold",
    ],

    brands: [
      "BOSS",
      "Calvin Klein",
      "Chopard",
      "Emporio Armani",
      "Fope",
      "GUCCI",
    ],

    status: ["In Stock", "On Sale"],
  };

  const [priceRange, setPriceRange] = useState([40, 910]);

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [],
    gemstones: [],
    materials: [],
    brands: [],
    status: [],
  });

  const [sortBy, setSortBy] = useState("default");

  const [gridView, setGridView] = useState(true);

  const [mobileFilter, setMobileFilter] = useState(false);

  const [wishlist, setWishlist] = useState([]);

  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const [openGroups, setOpenGroups] = useState({
    categories: true,
    gemstones: true,
    materials: true,
    brands: true,
    status: true,
  });

  const toggleFilter = (group, value) => {
    setSelectedFilters((prev) => {
      const current = prev[group];

      return {
        ...prev,
        [group]: current.includes(value)
          ? current.filter((item) => item !== value)
          : [...current, value],
      };
    });
  };

  const toggleGroup = (group) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }));
  };

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      const categoryMatch =
        selectedFilters.categories.length === 0 ||
        selectedFilters.categories.some((filter) =>
          product.category.toLowerCase().includes(filter.toLowerCase()),
        );

      const gemstoneMatch =
        selectedFilters.gemstones.length === 0 ||
        selectedFilters.gemstones.some((filter) =>
          product.gemstones.includes(filter),
        );

      const materialMatch =
        selectedFilters.materials.length === 0 ||
        selectedFilters.materials.some((filter) =>
          product.material.includes(filter),
        );

      const brandMatch =
        selectedFilters.brands.length === 0 ||
        selectedFilters.brands.includes(product.brand);

      const statusMatch =
        selectedFilters.status.length === 0 ||
        selectedFilters.status.some((filter) =>
          product.status.includes(filter),
        );

      return (
        priceMatch &&
        categoryMatch &&
        gemstoneMatch &&
        materialMatch &&
        brandMatch &&
        statusMatch
      );
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "newest") {
      result.reverse();
    }

    return result;
  }, [priceRange, selectedFilters, sortBy]);

  const clearFilters = () => {
    setPriceRange([40, 910]);

    setSelectedFilters({
      categories: [],
      gemstones: [],
      materials: [],
      brands: [],
      status: [],
    });
  };

  const formatPrice = (price) => `$${price.toFixed(2)}`;

  return (
    <main className="min-h-screen bg-white">
      <div className="sticky top-0 z-40 border-b border-gray-200 bg-white lg:hidden">
        <div className="flex h-14 items-center justify-between px-5">
          <button
            onClick={() => setMobileFilter(true)}
            className="
              flex
              cursor-pointer
              items-center
              gap-2
              text-xs
              font-semibold
              uppercase
              tracking-wide
            "
          >
            <SlidersHorizontal size={17} />
            Filters
          </button>

          <span className="text-xs text-gray-500">
            {filteredProducts.length} Products
          </span>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1600px] gap-7 px-5 py-8 sm:px-7 lg:px-8 lg:py-12">
        <aside className="hidden w-[245px] shrink-0 lg:block lg:sticky lg:top-[30px] lg:self-start">
          <FilterSidebar
            filterGroups={filterGroups}
            selectedFilters={selectedFilters}
            toggleFilter={toggleFilter}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            openGroups={openGroups}
            toggleGroup={toggleGroup}
            clearFilters={clearFilters}
          />
        </aside>

        <section className="min-w-0 flex-1">
          <div className="mb-6 flex flex-col gap-5 border-b border-gray-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-[#222]">
                Showing{" "}
                <span className="font-semibold">
                  1–{filteredProducts.length}
                </span>{" "}
                of {products.length} results
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="hidden text-xs text-gray-400 sm:block">
                  Sort:
                </span>

                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="
                      h-9
                      cursor-pointer
                      appearance-none
                      bg-transparent
                      pr-7
                      text-xs
                      font-medium
                      outline-none
                    "
                  >
                    <option value="default">Default sorting</option>

                    <option value="newest">Newest</option>

                    <option value="price-low">Price: Low to High</option>

                    <option value="price-high">Price: High to Low</option>

                    <option value="rating">Highest Rated</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className="
                      pointer-events-none
                      absolute
                      right-1
                      top-1/2
                      -translate-y-1/2
                    "
                  />
                </div>
              </div>

              <div className="hidden h-5 w-px bg-gray-200 sm:block" />

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setGridView(true)}
                  className={`
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    transition
                    ${
                      gridView
                        ? "bg-[#222] text-white"
                        : "text-gray-400 hover:text-[#222]"
                    }
                  `}
                >
                  <Grid2X2 size={15} />
                </button>

                <button
                  onClick={() => setGridView(false)}
                  className={`
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    transition
                    ${
                      !gridView
                        ? "bg-[#222] text-white"
                        : "text-gray-400 hover:text-[#222]"
                    }
                  `}
                >
                  <List size={16} />
                </button>
              </div>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div
              className={`
                grid
                gap-x-4
                gap-y-10
                sm:gap-x-5
                sm:gap-y-12
                ${
                  gridView
                    ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1"
                }
              `}
            >
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  wishlist={wishlist}
                  toggleWishlist={toggleWishlist}
                  setQuickViewProduct={setQuickViewProduct}
                  gridView={gridView}
                  formatPrice={formatPrice}
                />
              ))}
            </div>
          ) : (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100">
                <ShoppingBag size={25} className="text-gray-400" />
              </div>

              <h3 className="mt-5 font-serif text-2xl">No Products Found</h3>

              <p className="mt-2 text-sm text-gray-500">
                Try changing your filters.
              </p>

              <button
                onClick={clearFilters}
                className="
                  mt-5
                  cursor-pointer
                  bg-[#222]
                  px-6
                  py-3
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-white
                  transition
                  hover:bg-[#b08a4a]
                "
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </div>

      {mobileFilter && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div
            onClick={() => setMobileFilter(false)}
            className="
              absolute
              inset-0
              bg-black/50
              backdrop-blur-sm
            "
          />

          <div
            className="
              absolute
              right-0
              top-0
              h-full
              w-[88%]
              max-w-[380px]
              overflow-y-auto
              bg-white
              p-5
              shadow-2xl
            "
          >
            <div className="mb-7 flex items-center justify-between">
              <h2 className="font-serif text-2xl">Filters</h2>

              <button
                onClick={() => setMobileFilter(false)}
                className="
                  flex
                  h-9
                  w-9
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-gray-100
                "
              >
                <X size={18} />
              </button>
            </div>

            <FilterSidebar
              filterGroups={filterGroups}
              selectedFilters={selectedFilters}
              toggleFilter={toggleFilter}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              openGroups={openGroups}
              toggleGroup={toggleGroup}
              clearFilters={clearFilters}
            />
          </div>
        </div>
      )}

      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </main>
  );
};

const FilterSidebar = ({
  filterGroups,
  selectedFilters,
  toggleFilter,
  priceRange,
  setPriceRange,
  openGroups,
  toggleGroup,
  clearFilters,
}) => {
  const renderGroup = (key, title) => {
    const items = filterGroups[key];

    return (
      <div className="border-b border-gray-100 py-6">
        <button
          onClick={() => toggleGroup(key)}
          className="
            flex
            w-full
            cursor-pointer
            items-center
            justify-between
          "
        >
          <span className="text-[11px] font-bold uppercase tracking-wide">
            {title}
          </span>

          {openGroups[key] ? <Minus size={14} /> : <Plus size={14} />}
        </button>

        {openGroups[key] && (
          <div className="mt-5 space-y-3">
            {items.map((item) => {
              const checked = selectedFilters[key].includes(item);

              return (
                <label
                  key={item}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-between
                    gap-2
                    text-xs
                  "
                >
                  <span className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggleFilter(key, item)}
                      className="filter-checkbox"
                    />

                    <span className="transition group-hover:text-[#b08a4a]">
                      {item}
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="border-b border-gray-100 pb-7">
        <h2 className="text-[11px] font-bold uppercase tracking-wide">
          Widget Price Filter
        </h2>

        <div className="mt-5 flex items-center gap-2">
          <div className="flex-1">
            <label className="mb-1 block text-[10px] text-gray-400">
              Min price
            </label>

            <input
              type="number"
              min="40"
              max="910"
              value={priceRange[0]}
              onChange={(e) => {
                const value = Number(e.target.value);

                setPriceRange([
                  Math.min(value, priceRange[1] - 1),
                  priceRange[1],
                ]);
              }}
              className="
          h-9
          w-full
          border
          border-gray-200
          px-3
          text-xs
          outline-none
          focus:border-[#b08a4a]
        "
            />
          </div>

          <span className="mt-4 text-xs text-gray-400">-</span>

          <div className="flex-1">
            <label className="mb-1 block text-[10px] text-gray-400">
              Max price
            </label>

            <input
              type="number"
              min="40"
              max="910"
              value={priceRange[1]}
              onChange={(e) => {
                const value = Number(e.target.value);

                setPriceRange([
                  priceRange[0],
                  Math.max(value, priceRange[0] + 1),
                ]);
              }}
              className="
          h-9
          w-full
          border
          border-gray-200
          px-3
          text-xs
          outline-none
          focus:border-[#b08a4a]
        "
            />
          </div>
        </div>

        <div className="mt-7 px-1">
          <div className="relative h-5">
            <div
              className="
          absolute
          top-1/2
          left-0
          right-0
          h-[4px]
          -translate-y-1/2
          rounded-full
          bg-gray-200
        "
            />

            <div
              className="
          absolute
          top-1/2
          h-[4px]
          -translate-y-1/2
          rounded-full
          bg-[#b08a4a]
        "
              style={{
                left: `${((priceRange[0] - 40) / (910 - 40)) * 100}%`,
                right: `${100 - ((priceRange[1] - 40) / (910 - 40)) * 100}%`,
              }}
            />

            <input
              type="range"
              min="40"
              max="910"
              value={priceRange[0]}
              onChange={(e) => {
                const value = Number(e.target.value);

                setPriceRange([
                  Math.min(value, priceRange[1] - 1),
                  priceRange[1],
                ]);
              }}
              className="
          absolute
          inset-0
          z-20
          w-full
          appearance-none
          bg-transparent
          pointer-events-none
          cursor-pointer
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-[17px]
          [&::-webkit-slider-thumb]:w-[17px]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border-[3px]
          [&::-webkit-slider-thumb]:border-white
          [&::-webkit-slider-thumb]:bg-[#b08a4a]
          [&::-webkit-slider-thumb]:shadow-[0_1px_5px_rgba(0,0,0,0.25)]
          [&::-moz-range-thumb]:pointer-events-auto
          [&::-moz-range-thumb]:h-[17px]
          [&::-moz-range-thumb]:w-[17px]
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-[3px]
          [&::-moz-range-thumb]:border-white
          [&::-moz-range-thumb]:bg-[#b08a4a]
        "
            />

            <input
              type="range"
              min="40"
              max="910"
              value={priceRange[1]}
              onChange={(e) => {
                const value = Number(e.target.value);

                setPriceRange([
                  priceRange[0],
                  Math.max(value, priceRange[0] + 1),
                ]);
              }}
              className="
          absolute
          inset-0
          z-30
          w-full
          appearance-none
          bg-transparent
          pointer-events-none
          cursor-pointer
          [&::-webkit-slider-thumb]:pointer-events-auto
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:h-[17px]
          [&::-webkit-slider-thumb]:w-[17px]
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:border-[3px]
          [&::-webkit-slider-thumb]:border-white
          [&::-webkit-slider-thumb]:bg-[#b08a4a]
          [&::-webkit-slider-thumb]:shadow-[0_1px_5px_rgba(0,0,0,0.25)]
          [&::-moz-range-thumb]:pointer-events-auto
          [&::-moz-range-thumb]:h-[17px]
          [&::-moz-range-thumb]:w-[17px]
          [&::-moz-range-thumb]:rounded-full
          [&::-moz-range-thumb]:border-[3px]
          [&::-moz-range-thumb]:border-white
          [&::-moz-range-thumb]:bg-[#b08a4a]
        "
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs">
            Price:
            <span className="ml-1 font-semibold">${priceRange[0]}</span>
            <span className="mx-1 text-gray-400">—</span>
            <span className="font-semibold">${priceRange[1]}</span>
          </p>

          <button
            onClick={clearFilters}
            className="
        cursor-pointer
        bg-gray-100
        px-4
        py-2
        text-[10px]
        font-bold
        uppercase
        tracking-wide
        transition
        hover:bg-[#222]
        hover:text-white
      "
          >
            Filter
          </button>
        </div>
      </div>

      {renderGroup("categories", "Product Categories")}

      {renderGroup("gemstones", "Filter By Gemstones")}

      {renderGroup("materials", "Filter By Material")}

      {renderGroup("brands", "Filter By Brands")}

      {renderGroup("status", "Product Status")}
    </div>
  );
};

const ProductCard = ({
  product,
  wishlist,
  toggleWishlist,
  setQuickViewProduct,
  gridView,
  formatPrice,
}) => {
  const isWishlisted = wishlist.includes(product.id);

   const navigate = useNavigate();

  return (
    <article
      className={`
        group
        ${
          gridView
            ? ""
            : "flex flex-col gap-6 border-b border-gray-100 pb-7 sm:flex-row"
        }
      `}
    >
      <div
        className={`
          relative
          overflow-hidden
          bg-[#fff]
          ${
            gridView
              ? "aspect-square"
              : "h-[260px] w-full shrink-0 sm:w-[260px]"
          }
        `}
      >
        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-contain
            p-3
            transition-transform
            duration-700
            group-hover:scale-105
          "
        />

        {product.discount && (
          <span
            className="
              absolute
              left-2
              top-2
              border
              border-[#ff5a52]
              bg-white
              px-2
              py-1
              text-[10px]
              font-medium
              text-[#ff5a52]
            "
          >
            {product.discount}%
          </span>
        )}

        <button
          onClick={() => toggleWishlist(product.id)}
          className={`
            absolute
            right-2
            top-2
            z-20
            flex
            h-9
            w-9
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            shadow-sm
            transition-all
            duration-300
            ${
              isWishlisted
                ? "text-red-500"
                : "text-[#222] hover:bg-[#222] hover:text-white"
            }
          `}
        >
          <Heart size={17} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            flex
            translate-y-full
            transition-transform
            duration-500
            group-hover:translate-y-0
          "
        >
          <button
            onClick={() => setQuickViewProduct(product)}
            className="
              flex
              h-11
              flex-1
              cursor-pointer
              items-center
              justify-center
              gap-2
              bg-white
              text-[10px]
              font-bold
              uppercase
              tracking-wide
              text-[#222]
              transition
              hover:bg-[#222]
              hover:text-white
            "
          >
            <Eye size={15} />
            Quick View
          </button>

          <button
            type="button"
            onClick={() => {
              navigate(`/shop-details/${product.id}`)
            }}
            className="
              flex
              h-11
              flex-1
              cursor-pointer
              items-center
              justify-center
              gap-2
              bg-[#222]
              text-[10px]
              font-bold
              uppercase
              tracking-wide
              text-white
              transition
              hover:bg-[#b08a4a]
            "
          >
            <ShoppingBag size={15} />
            Details
          </button>
        </div>
      </div>

      <div className={gridView ? "pt-4" : "flex-1 pt-2"}>
        <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
          {product.category}
        </p>

        <h3 className="mt-2 line-clamp-2 text-[13px] font-medium leading-5 text-[#222] transition hover:text-[#b08a4a] sm:text-sm">
          {product.name}
        </h3>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span
            className={`
              text-[16px]
              font-bold
              ${product.oldPrice ? "text-[#ef4038]" : "text-[#222]"}
            `}
          >
            {formatPrice(product.price)}
          </span>

          {product.oldPrice && (
            <span className="text-[11px] text-gray-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Star size={12} fill="currentColor" className="text-[#222]" />

          <span className="text-[11px] font-semibold">
            {product.rating.toFixed(2)}
          </span>

          <span className="text-[10px] text-gray-400">
            {product.reviews} Reviews
          </span>
        </div>
      </div>
    </article>
  );
};

export default Shop;
