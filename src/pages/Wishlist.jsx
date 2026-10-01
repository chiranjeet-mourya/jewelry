import React from "react";
import {
  Heart,
  ShoppingBag,
  ArrowRight,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import shop1 from "../assets/shop/1.jpg";
import shop2 from "../assets/sellers/5.jpg"
import shop3 from "../assets/sellers/1.jpg"

const Wishlist = () => {

 const wishlistProducts = [
    {
      id: 1,
      name: "Elegant Gold Necklace",
      category: "Necklaces",
      image: shop1,
      price: 129,
      oldPrice: 159,
      rating: 4.8,
      reviews: 24,
    },
    {
      id: 2,
      name: "Classic Gold Earrings",
      category: "Earrings",
      image: shop2,
      price: 89,
      oldPrice: 109,
      rating: 4.7,
      reviews: 18,
    },
    {
      id: 3,
      name: "Luxury Diamond Ring",
      category: "Rings",
      image: shop3,
      price: 199,
      oldPrice: 249,
      rating: 4.9,
      reviews: 32,
    },
  ];

  const formatPrice = (price) => `$${Number(price).toFixed(2)}`;

  return (
    <div className="min-h-screen bg-[#faf9f7]">

      <section className="bg-[#222] px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b58b4c]">
            Your Favorites
          </p>

          <h1 className="font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
            My Wishlist
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/60">
            Save the jewelry you love and come back to it whenever you're
            ready.
          </p>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-5">
          <div>
            <h2 className="text-lg font-semibold text-[#222]">
              Saved Items
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {wishlistProducts.length}{" "}
              {wishlistProducts.length === 1 ? "item" : "items"}
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
            <Heart size={15} fill="currentColor" />
            Favorites
          </div>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#b58b4c]/10">
              <Heart
                size={34}
                strokeWidth={1.4}
                className="text-[#b58b4c]"
              />
            </div>

            <h2 className="mt-6 font-serif text-2xl text-[#222] sm:text-3xl">
              Your wishlist is empty
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
              Explore our collection and discover your favorite jewelry
              pieces.
            </p>

            <Link
              to="/shop"
              className="mt-7 flex items-center gap-2 bg-[#222] px-7 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b58b4c]"
            >
              Explore Jewelry
              <ArrowRight size={15} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
            {wishlistProducts.map((product) => (
              <article key={product.id} className="group">

                <div className="relative aspect-square overflow-hidden bg-white">
                  <Link to={`/shop-details/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain p-3 transition duration-700 group-hover:scale-105"
                    />
                  </Link>

                  <div className="absolute right-2 top-2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white text-red-500 shadow-sm">
                    <Heart size={16} fill="currentColor" />
                  </div>

                  <button
                    type="button"
                    className="absolute bottom-0 left-0 right-0 hidden h-11 translate-y-full items-center justify-center gap-2 bg-[#222] text-[10px] font-bold uppercase tracking-wider text-white transition duration-300 hover:bg-[#b58b4c] group-hover:translate-y-0 sm:flex cursor-pointer"
                  >
                    <ShoppingBag size={14} />
                    Add To Cart
                  </button>
                </div>

                <div className="pt-4">

                  <p className="text-[9px] font-semibold uppercase tracking-wide text-gray-400">
                    {product.category}
                  </p>

                  <Link to={`/shop-details/${product.id}`}>
                    <h3 className="mt-2 line-clamp-2 text-xs font-medium leading-5 text-[#222] transition hover:text-[#b58b4c] sm:text-sm">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="mt-2 flex items-center gap-1">
                    <Star
                      size={11}
                      fill="currentColor"
                      className="text-[#b58b4c]"
                    />

                    <span className="text-[10px]">
                      {product.rating
                        ? product.rating.toFixed(2)
                        : "0.00"}
                    </span>

                    <span className="text-[10px] text-gray-400">
                      ({product.reviews || 0})
                    </span>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-sm font-bold text-[#222]">
                      {formatPrice(product.price)}
                    </span>

                    {product.oldPrice && (
                      <span className="text-[10px] text-gray-400 line-through">
                        {formatPrice(product.oldPrice)}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    className="mt-3 flex w-full items-center justify-center gap-2 border border-[#222] py-2.5 text-[9px] font-bold uppercase tracking-wider text-[#222] transition hover:bg-[#222] hover:text-white sm:hidden"
                  >
                    <ShoppingBag size={13} />
                    Add To Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Wishlist;