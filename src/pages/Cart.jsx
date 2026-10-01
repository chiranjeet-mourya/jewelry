import React, { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  MapPin,
  Minus,
  Plus,
  ShoppingBag,
  Tag,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import shop1 from "../assets/shop/1.jpg";
import shop2 from "../assets/sellers/5.jpg"

const Cart = () => {

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

  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");

  const [shippingMethod, setShippingMethod] = useState("free");

  const [showShipping, setShowShipping] = useState(false);

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const discount = couponApplied ? subtotal * 0.1 : 0;

  const shipping = shippingMethod === "free" ? 0 : 8;

  const total = subtotal - discount + shipping;

  const updateQuantity = (id, type) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id) return item;

          const newQuantity =
            type === "increase"
              ? item.quantity + 1
              : item.quantity - 1;

          return {
            ...item,
            quantity: Math.max(1, newQuantity),
          };
        })
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCoupon = (e) => {
    e.preventDefault();

    if (!coupon.trim()) {
      setCouponMessage("Please enter a coupon code.");
      return;
    }

    if (coupon.trim().toUpperCase() === "WELCOME10") {
      setCouponApplied(true);
      setCouponMessage("10% discount applied successfully.");
    } else {
      setCouponApplied(false);
      setCouponMessage("Invalid coupon code.");
    }
  };

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#faf9f7]">

        <section className="bg-[#222] px-4 py-12 sm:py-16">
          <div className="mx-auto container">
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
              <Link
                to="/"
                className="text-white/40 transition hover:text-[#b58b4c]"
              >
                Home
              </Link>

              <span className="text-white/20">/</span>

              <span className="text-[#b58b4c]">Cart</span>
            </div>

            <h1 className="mt-6 font-serif text-4xl text-white sm:text-5xl">
              Your Cart
            </h1>
          </div>
        </section>

        <section className="flex min-h-[500px] items-center justify-center px-4 py-16">
          <div className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#b58b4c]/10">
              <ShoppingBag
                size={38}
                strokeWidth={1.3}
                className="text-[#b58b4c]"
              />
            </div>

            <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.3em] text-[#b58b4c]">
              Nothing Here Yet
            </p>

            <h2 className="mt-2 font-serif text-3xl text-[#222] sm:text-4xl">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
              Discover our handcrafted jewelry collection and find something
              beautiful to make yours.
            </p>

            <Link
              to="/shop"
              className="mx-auto mt-7 flex w-fit items-center gap-2 bg-[#222] px-7 py-3.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b58b4c]"
            >
              Explore Collection
              <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf9f7]">

      <section className="bg-[#222] px-4 py-12 sm:py-16">
        <div className="mx-auto container">
          {/* Breadcrumb */}

          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider">
            <Link
              to="/"
              className="text-white/40 transition hover:text-[#b58b4c]"
            >
              Home
            </Link>

            <span className="text-white/20">/</span>

            <span className="text-[#b58b4c]">Cart</span>
          </div>

          <div className="mt-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b58b4c]">
              Your Selection
            </p>

            <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <h1 className="font-serif text-4xl text-white sm:text-5xl">
                  Shopping Cart
                </h1>

                <p className="mt-3 text-sm text-white/50">
                  {cartItems.length}{" "}
                  {cartItems.length === 1 ? "item" : "items"} waiting for you.
                </p>
              </div>

              <Link
                to="/shop"
                className="flex w-fit items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-white/60 transition hover:text-[#b58b4c]"
              >
                <ArrowLeft size={14} />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container px-4 py-8 sm:px-6 sm:py-12">

        <div className="mb-8 border border-green-200 bg-green-50 px-5 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
              <Truck size={17} />
            </div>

            <div>
              <p className="text-xs font-bold text-green-700">
                Your order qualifies for free shipping!
              </p>

              <p className="mt-1 text-[10px] text-green-600">
                Enjoy complimentary delivery on your order.
              </p>
            </div>
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-green-100">
            <div className="h-full w-full rounded-full bg-green-500" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_370px]">

          <div>

            <div className="mb-5 hidden border-b border-gray-200 pb-4 md:grid md:grid-cols-[1fr_110px_130px_120px_35px] md:items-center md:gap-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Product
              </span>

              <span className="text-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Price
              </span>

              <span className="text-center text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Quantity
              </span>

              <span className="text-right text-[10px] font-bold uppercase tracking-wider text-gray-400">
                Subtotal
              </span>
            </div>

            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="group relative bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
                >
                  <div className="grid gap-5 md:grid-cols-[1fr_110px_130px_120px_35px] md:items-center md:gap-4">

                    <div className="flex min-w-0 gap-4">
                      <Link
                        to={`/shop-details/${item.id}`}
                        className="h-24 w-24 shrink-0 overflow-hidden bg-[#faf9f7] sm:h-28 sm:w-28"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105"
                        />
                      </Link>

                      <div className="min-w-0 pt-1">
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-[#b58b4c]">
                          {item.category}
                        </p>

                        <Link
                          to={`/shop-details/${item.id}`}
                          className="mt-1 block"
                        >
                          <h2 className="line-clamp-2 text-sm font-semibold leading-5 text-[#222] transition hover:text-[#b58b4c] sm:text-base">
                            {item.name}
                          </h2>
                        </Link>

                        <p className="mt-2 text-xs text-gray-400 md:hidden">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    <div className="hidden text-center md:block">
                      <p className="text-sm font-medium text-[#222]">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between md:justify-center">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 md:hidden">
                        Quantity
                      </span>

                      <div className="flex h-10 items-center border border-gray-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, "decrease")
                          }
                          className="flex h-full w-9 items-center justify-center text-gray-500 transition hover:bg-[#222] hover:text-white"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={13} />
                        </button>

                        <span className="flex h-full w-9 items-center justify-center border-x border-gray-200 text-xs font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, "increase")
                          }
                          className="flex h-full w-9 items-center justify-center text-gray-500 transition hover:bg-[#222] hover:text-white"
                          aria-label="Increase quantity"
                        >
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:block md:text-right">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 md:hidden">
                        Subtotal
                      </span>

                      <p className="text-sm font-bold text-[#222]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center text-gray-400 transition hover:text-red-500 md:static md:mx-auto"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X size={17} />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 border-b border-gray-200 pb-7 sm:flex-row sm:items-center sm:justify-between">

              <form
                onSubmit={handleCoupon}
                className="flex w-full flex-col gap-2 sm:max-w-md sm:flex-row"
              >
                <div className="relative flex-1">
                  <Tag
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={coupon}
                    onChange={(e) => {
                      setCoupon(e.target.value);
                      setCouponMessage("");
                    }}
                    placeholder="Coupon code"
                    className="h-11 w-full border border-gray-200 bg-white pl-10 pr-4 text-xs outline-none transition focus:border-[#b58b4c]"
                  />
                </div>

                <button
                  type="submit"
                  className="h-11 bg-[#222] px-6 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#b58b4c]"
                >
                  Apply Coupon
                </button>
              </form>

              <button
                type="button"
                onClick={clearCart}
                className="flex h-11 items-center justify-center gap-2 border border-gray-200 bg-white px-5 text-[10px] font-bold uppercase tracking-wider text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500"
              >
                <Trash2 size={14} />
                Clear Cart
              </button>
            </div>

            {couponMessage && (
              <div
                className={`mt-4 flex items-center gap-2 text-xs ${
                  couponApplied
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {couponApplied && <Check size={14} />}
                {couponMessage}
              </div>
            )}

            <div className="mt-8 bg-white p-5 shadow-sm sm:p-7">
              <button
                type="button"
                onClick={() => setShowShipping(!showShipping)}
                className="flex w-full items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#b58b4c]/10 text-[#b58b4c]">
                    <MapPin size={17} />
                  </div>

                  <div className="text-left">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b58b4c]">
                      Delivery
                    </p>

                    <h3 className="mt-1 font-serif text-lg text-[#222]">
                      Shipping Address
                    </h3>
                  </div>
                </div>

                {showShipping ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>

              {showShipping && (
                <div className="mt-6 border-t border-gray-100 pt-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#222]">
                        Khora Colony
                      </p>

                      <p className="mt-1 text-xs leading-6 text-gray-500">
                        Noida, 201301
                        <br />
                        Uttar Pradesh, India
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-xs font-semibold text-[#b58b4c] underline underline-offset-4"
                    >
                      Change Address
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden bg-[#222] text-white shadow-xl">

              <div className="border-b border-white/10 px-6 py-6">
                <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b58b4c]">
                  Order Summary
                </p>

                <h2 className="mt-1 font-serif text-2xl">
                  Cart Totals
                </h2>
              </div>

              <div className="space-y-5 px-6 py-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/50">
                    Subtotal
                  </span>

                  <span className="text-sm font-semibold">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {couponApplied && (
                  <div className="flex items-center justify-between text-xs text-green-400">
                    <span>Discount</span>

                    <span>
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="border-t border-white/10 pt-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-xs text-white/50">
                      Shipping
                    </span>

                    <span className="text-xs">
                      {shipping === 0
                        ? "Free"
                        : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>

                  <div className="space-y-2">

                    <label className="flex cursor-pointer items-center justify-between border border-white/10 p-3 transition hover:border-[#b58b4c]/50">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          value="free"
                          checked={shippingMethod === "free"}
                          onChange={() =>
                            setShippingMethod("free")
                          }
                          className="accent-[#b58b4c]"
                        />

                        <div>
                          <p className="text-[10px] font-semibold">
                            Free Shipping
                          </p>

                          <p className="mt-1 text-[9px] text-white/30">
                            5–7 business days
                          </p>
                        </div>
                      </div>

                      <span className="text-[9px] font-bold text-[#b58b4c]">
                        FREE
                      </span>
                    </label>

                    <label className="flex cursor-pointer items-center justify-between border border-white/10 p-3 transition hover:border-[#b58b4c]/50">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="shipping"
                          value="express"
                          checked={shippingMethod === "express"}
                          onChange={() =>
                            setShippingMethod("express")
                          }
                          className="accent-[#b58b4c]"
                        />

                        <div>
                          <p className="text-[10px] font-semibold">
                            Express Shipping
                          </p>

                          <p className="mt-1 text-[9px] text-white/30">
                            1–2 business days
                          </p>
                        </div>
                      </div>

                      <span className="text-[9px]">
                        $8.00
                      </span>
                    </label>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-3">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-[#b58b4c]"
                      />

                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">
                          Shipping To
                        </p>

                        <p className="mt-2 text-xs font-medium leading-5">
                          Khora Colony,
                          <br />
                          Noida 201301,
                          <br />
                          Uttar Pradesh, India
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="shrink-0 text-[9px] font-semibold text-[#b58b4c] underline underline-offset-4"
                    >
                      Change
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 px-6 py-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[9px] uppercase tracking-wider text-white/40">
                      Total
                    </p>

                    <p className="mt-1 font-serif text-3xl">
                      ${total.toFixed(2)}
                    </p>
                  </div>

                  <span className="pb-1 text-[9px] text-white/30">
                    USD
                  </span>
                </div>
              </div>

              <div className="px-6 pb-6">
                <Link
                  to="/checkout"
                  className="flex w-full items-center justify-center gap-3 bg-[#b58b4c] py-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-white hover:text-[#222]"
                >
                  Proceed To Checkout
                  <ArrowRight size={15} />
                </Link>

                <div className="mt-4 flex items-center justify-center gap-2 text-[9px] text-white/30">
                  <ShoppingBag size={11} />
                  Secure shopping experience
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Cart;