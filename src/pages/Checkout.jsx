import React, { useMemo, useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  CreditCard,
  Lock,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
  User,
  Mail,
  Phone,
  Building2,
  FileText,
  Check,
  ArrowRight,
  Tag,
} from "lucide-react";
import { Link } from "react-router-dom";

import shop1 from "../assets/shop/1.jpg";
import shop2 from "../assets/sellers/5.jpg"

const Checkout = () => {

  const [cartItems] = useState([
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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "India",
    address: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    phone: "",
    email: "",
    orderNotes: "",
  });

  // ==================================================
  // UI STATE
  // ==================================================

  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const [shippingMethod, setShippingMethod] = useState("free");

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const [agreeTerms, setAgreeTerms] = useState(false);

  const [showLogin, setShowLogin] = useState(false);

  // ==================================================
  // INPUT HANDLER
  // ==================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==================================================
  // PRICE CALCULATION
  // ==================================================

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const shipping = shippingMethod === "free" ? 0 : 8;

  const discount = couponApplied ? subtotal * 0.1 : 0;

  const total = subtotal + shipping - discount;

  // ==================================================
  // COUPON
  // ==================================================

  const handleCoupon = (e) => {
    e.preventDefault();

    if (coupon.trim().toUpperCase() === "WELCOME10") {
      setCouponApplied(true);
    }
  };

  // ==================================================
  // PLACE ORDER
  // ==================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    console.log({
      customer: formData,
      cartItems,
      shippingMethod,
      paymentMethod,
      subtotal,
      discount,
      shipping,
      total,
    });

    alert("Order placed successfully!");
  };

  return (
    <main className="min-h-screen bg-[#faf9f7]">

      <section className="bg-[#222] px-4 py-10 sm:py-14">
        <div className="mx-auto container">

          <div className="mb-8 flex items-center gap-2 text-[10px] uppercase tracking-wider">
            <Link
              to="/"
              className="text-white/40 transition hover:text-[#b58b4c]"
            >
              Home
            </Link>

            <span className="text-white/20">/</span>

            <span className="text-[#b58b4c]">Checkout</span>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#b58b4c]">
              Secure Checkout
            </p>

            <h1 className="mt-2 font-serif text-3xl text-white sm:text-4xl lg:text-5xl">
              Complete Your Order
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/50">
              You're just a few steps away from receiving something beautiful.
            </p>
          </div>
        </div>
      </section>


      <section className="mx-auto container px-4 py-8 sm:px-6 sm:py-12 lg:px-8">

        <div className="mb-4 border border-gray-200 bg-white">
          <button
            type="button"
            onClick={() => setShowLogin(!showLogin)}
            className="flex w-full items-center justify-between px-5 py-4 text-left"
          >
            <div className="flex items-center gap-3">
              <User
                size={16}
                className="text-[#b58b4c]"
              />

              <span className="text-xs text-gray-600">
                Returning customer?
              </span>

              <span className="text-xs font-semibold text-[#b58b4c]">
                Click here to login
              </span>
            </div>

            {showLogin ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </button>

          {showLogin && (
            <div className="border-t border-gray-100 bg-[#faf9f7] px-5 py-5">
              <p className="text-xs text-gray-500">
                Login functionality can be connected with your existing
                authentication system.
              </p>
            </div>
          )}
        </div>


        <div className="mb-8 border border-gray-200 bg-white">
          <button
            type="button"
            onClick={() => setShowCoupon(!showCoupon)}
            className="flex w-full items-center gap-3 px-5 py-4 text-left"
          >
            <Tag
              size={15}
              className="text-[#b58b4c]"
            />

            <span className="text-xs text-gray-600">
              Have a coupon?
            </span>

            <span className="text-xs font-semibold text-[#b58b4c]">
              Click here to enter your code
            </span>
          </button>

          {showCoupon && (
            <form
              onSubmit={handleCoupon}
              className="flex flex-col gap-3 border-t border-gray-100 bg-[#faf9f7] p-5 sm:flex-row"
            >
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
                className="h-11 flex-1 border border-gray-200 bg-white px-4 text-xs outline-none transition focus:border-[#b58b4c]"
              />

              <button
                type="submit"
                className="h-11 bg-[#222] px-7 text-[10px] font-bold uppercase tracking-wider text-white transition hover:bg-[#b58b4c]"
              >
                Apply Coupon
              </button>

              {couponApplied && (
                <div className="flex items-center gap-2 text-xs font-medium text-green-600">
                  <Check size={15} />
                  10% Applied
                </div>
              )}
            </form>
          )}
        </div>


        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 lg:grid-cols-[1fr_390px]">

            <div>

              <div className="mb-7 border border-green-200 bg-green-50 px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <Truck size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-green-700">
                      Your order qualifies for free shipping!
                    </p>

                    <p className="mt-1 text-[10px] text-green-600">
                      Complimentary shipping is included with your order.
                    </p>
                  </div>
                </div>

                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-green-100">
                  <div className="h-full w-full rounded-full bg-green-500" />
                </div>
              </div>

              <div className="bg-white p-5 shadow-sm sm:p-7 lg:p-8">
                <div className="mb-7 flex items-center gap-3 border-b border-gray-100 pb-5">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#b58b4c]/10 text-[#b58b4c]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#b58b4c]">
                      Step 01
                    </p>

                    <h2 className="font-serif text-xl text-[#222]">
                      Billing Details
                    </h2>
                  </div>
                </div>

                <div className="space-y-5">

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First name"
                    />

                    <InputField
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last name"
                    />
                  </div>

                  <InputField
                    label="Company Name"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name (optional)"
                    icon={<Building2 size={15} />}
                  />

                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      Country / Region *
                    </label>

                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="h-12 w-full appearance-none border border-gray-200 bg-white px-4 text-xs text-[#222] outline-none transition focus:border-[#b58b4c]"
                    >
                      <option value="India">India</option>
                      <option value="United States">
                        United States
                      </option>
                      <option value="United Kingdom">
                        United Kingdom
                      </option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <InputField
                    label="Street Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    placeholder="House number and street name"
                    icon={<MapPin size={15} />}
                  />

                  <InputField
                    label="Apartment / Landmark"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleChange}
                    placeholder="Apartment, suite, landmark (optional)"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Town / City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="City"
                    />

                    <InputField
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      placeholder="State"
                    />
                  </div>

                  <InputField
                    label="PIN Code"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    required
                    placeholder="6 digit PIN code"
                  />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <InputField
                      label="Phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      icon={<Phone size={15} />}
                    />

                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      icon={<Mail size={15} />}
                    />
                  </div>

                  <label className="flex cursor-pointer items-center gap-3 border-t border-gray-100 pt-5">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#b58b4c]"
                    />

                    <span className="text-xs text-gray-500">
                      Create an account?
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-[#b58b4c]"
                    />

                    <span className="text-xs text-gray-500">
                      Ship to a different address?
                    </span>
                  </label>

                  <div>
                    <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      Order Notes
                    </label>

                    <div className="relative">
                      <FileText
                        size={15}
                        className="absolute left-3 top-3 text-gray-400"
                      />

                      <textarea
                        name="orderNotes"
                        value={formData.orderNotes}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Notes about your order, e.g. special notes for delivery."
                        className="w-full resize-none border border-gray-200 py-3 pl-10 pr-4 text-xs outline-none transition focus:border-[#b58b4c]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="overflow-hidden bg-[#222] text-white shadow-xl">

                <div className="border-b border-white/10 px-6 py-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b58b4c]">
                    Your Selection
                  </p>

                  <h2 className="mt-1 font-serif text-2xl">
                    Your Order
                  </h2>
                </div>

                <div className="space-y-5 px-6 py-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#faf9f7]">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-contain p-2"
                        />

                        <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#b58b4c] text-[8px] font-bold text-white">
                          {item.quantity}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[9px] uppercase tracking-wider text-white/40">
                          {item.category}
                        </p>

                        <h3 className="mt-1 line-clamp-2 text-xs font-medium leading-5">
                          {item.name}
                        </h3>

                        <p className="mt-2 text-xs font-semibold text-[#b58b4c]">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="text-xs font-semibold">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 px-6 py-6">
                  <div className="space-y-4">
                    <div className="flex justify-between text-xs text-white/60">
                      <span>Subtotal</span>

                      <span className="text-white">
                        ${subtotal.toFixed(2)}
                      </span>
                    </div>

                    <div>
                      <div className="mb-3 flex justify-between text-xs text-white/60">
                        <span>Shipping</span>

                        <span className="text-white">
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
                              <p className="text-[10px] font-semibold text-white">
                                Free Shipping
                              </p>

                              <p className="mt-0.5 text-[9px] text-white/40">
                                5–7 business days
                              </p>
                            </div>
                          </div>

                          <span className="text-[10px] text-[#b58b4c]">
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
                              <p className="text-[10px] font-semibold text-white">
                                Express Shipping
                              </p>

                              <p className="mt-0.5 text-[9px] text-white/40">
                                1–2 business days
                              </p>
                            </div>
                          </div>

                          <span className="text-[10px] text-white">
                            $8.00
                          </span>
                        </label>
                      </div>
                    </div>

                    {couponApplied && (
                      <div className="flex justify-between text-xs text-green-400">
                        <span>Discount</span>

                        <span>
                          -${discount.toFixed(2)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[9px] uppercase tracking-wider text-white/40">
                        Total
                      </p>

                      <p className="mt-1 font-serif text-2xl">
                        ${total.toFixed(2)}
                      </p>
                    </div>

                    <span className="text-[9px] text-white/40">
                      USD
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 px-6 py-6">
                  <div className="mb-4 flex items-center gap-2">
                    <CreditCard
                      size={15}
                      className="text-[#b58b4c]"
                    />

                    <p className="text-[10px] font-bold uppercase tracking-wider">
                      Payment Method
                    </p>
                  </div>

                  <div className="space-y-2">
                    <label className="block cursor-pointer border border-white/10 p-4 transition hover:border-[#b58b4c]/50">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          value="cod"
                          checked={paymentMethod === "cod"}
                          onChange={(e) =>
                            setPaymentMethod(e.target.value)
                          }
                          className="accent-[#b58b4c]"
                        />

                        <div>
                          <p className="text-xs font-semibold">
                            Cash On Delivery
                          </p>

                          <p className="mt-1 text-[9px] leading-4 text-white/40">
                            Pay when your order arrives.
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="block cursor-pointer border border-white/10 p-4 transition hover:border-[#b58b4c]/50">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          value="card"
                          checked={paymentMethod === "card"}
                          onChange={(e) =>
                            setPaymentMethod(e.target.value)
                          }
                          className="accent-[#b58b4c]"
                        />

                        <div>
                          <p className="text-xs font-semibold">
                            Credit / Debit Card
                          </p>

                          <p className="mt-1 text-[9px] leading-4 text-white/40">
                            Secure payment powered by your payment gateway.
                          </p>
                        </div>
                      </div>
                    </label>

                    <label className="block cursor-pointer border border-white/10 p-4 transition hover:border-[#b58b4c]/50">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="payment"
                          value="bank"
                          checked={paymentMethod === "bank"}
                          onChange={(e) =>
                            setPaymentMethod(e.target.value)
                          }
                          className="accent-[#b58b4c]"
                        />

                        <div>
                          <p className="text-xs font-semibold">
                            Direct Bank Transfer
                          </p>

                          <p className="mt-1 text-[9px] leading-4 text-white/40">
                            Transfer payment directly to our bank account.
                          </p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="border-t border-white/10 px-6 py-5">
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) =>
                        setAgreeTerms(e.target.checked)
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 accent-[#b58b4c]"
                    />

                    <span className="text-[10px] leading-5 text-white/50">
                      I have read and agree to the{" "}
                      <Link
                        to="/terms"
                        className="text-[#b58b4c] underline"
                      >
                        terms and conditions
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <div className="px-6 pb-6">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-3 bg-[#b58b4c] py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-[#222]"
                  >
                    <Lock size={14} />
                    Place Order
                    <ArrowRight size={14} />
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-[9px] text-white/30">
                    <Lock size={11} />
                    Secure & encrypted checkout
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </section>
    </main>
  );
};


const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  icon,
}) => {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-bold uppercase tracking-wider text-gray-500">
        {label}
        {required && " *"}
      </label>

      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </span>
        )}

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          placeholder={placeholder}
          className={`h-12 w-full border border-gray-200 bg-white text-xs text-[#222] outline-none transition focus:border-[#b58b4c] ${
            icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
    </div>
  );
};

export default Checkout;