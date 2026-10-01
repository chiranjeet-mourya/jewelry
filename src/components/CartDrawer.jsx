import React, { useEffect } from "react";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  updateQuantity,
  removeFromCart,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 z-[9998] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed right-0 top-0 z-[9999] flex h-screen w-full max-w-[430px] flex-col bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-5">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#b58b4c]">
              Your Selection
            </p>

            <h2 className="mt-1 font-serif text-2xl text-[#222]">
              Shopping Bag
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-[#222] transition hover:border-[#b58b4c] hover:text-[#b58b4c] cursor-pointer"
            aria-label="Close cart"
          >
            <X size={19} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#b58b4c]/10">
                <ShoppingBag
                  size={32}
                  strokeWidth={1.3}
                  className="text-[#b58b4c]"
                />
              </div>

              <h3 className="mt-6 font-serif text-2xl text-[#222]">
                Your bag is empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-gray-500">
                Discover something beautiful from our collection.
              </p>

              <Link
                to="/shop"
                onClick={onClose}
                className="mt-6 flex items-center gap-2 bg-[#222] px-6 py-3 text-[10px] font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#b58b4c]"
              >
                Explore Jewelry
                <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-gray-100 pb-5"
                >

                  <Link
                    to={`/shop-details/${item.id}`}
                    onClick={onClose}
                    className="h-24 w-24 shrink-0 overflow-hidden bg-[#faf9f7]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain p-2"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[9px] font-semibold uppercase tracking-wider text-gray-400">
                          {item.category}
                        </p>

                        <Link
                          to={`/shop-details/${item.id}`}
                          onClick={onClose}
                        >
                          <h3 className="mt-1 line-clamp-2 text-sm font-medium leading-5 text-[#222] transition hover:text-[#b58b4c]">
                            {item.name}
                          </h3>
                        </Link>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="shrink-0 text-gray-400 transition hover:text-red-500"
                        aria-label="Remove product"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>

                    <p className="mt-2 text-sm font-bold text-[#222]">
                      ${Number(item.price).toFixed(2)}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center border border-gray-200">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center text-gray-500 transition hover:text-[#b58b4c]"
                        >
                          <Minus size={12} />
                        </button>

                        <span className="flex h-7 min-w-8 items-center justify-center border-x border-gray-200 text-[11px] font-semibold">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity + 1
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center text-gray-500 transition hover:text-[#b58b4c]"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <span className="text-xs font-semibold text-[#222]">
                        $
                        {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 bg-white px-5 pb-6 pt-5">

            <div className="mb-4 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                Subtotal
              </span>

              <span className="text-lg font-bold text-[#222]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <p className="mb-5 text-[10px] leading-5 text-gray-400">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/cart"
                onClick={onClose}
                className="flex items-center justify-center border border-[#222] py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#222] transition hover:bg-[#222] hover:text-white"
              >
                View Cart
              </Link>

              <Link
                to="/checkout"
                onClick={onClose}
                className="flex items-center justify-center bg-[#b58b4c] py-3.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white transition hover:bg-[#222]"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;