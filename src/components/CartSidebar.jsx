"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeFromCart } from "@/store/cartSlice";
import { AiOutlineDelete } from "react-icons/ai";

import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const CartSidebar = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (total > 0) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 300); // reset بعد الأنيميشن
      return () => clearTimeout(timer);
    }
  }, [total]);

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div
        className="bg-black bg-opacity-50 flex-1 animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="absolute left-0 md:w-[450px] w-full bg-mainColor h-dvh shadow-lg p-4 md:p-4 flex flex-col animate-slideRightCart">
        {/* Header */}
        <div className="flex justify-between items-center mb-5 border-b border-[#bdbdbd6c] pb-3">
          <h2 className="text-2xl font-bold text-grayColor">عربة التسوق</h2>
          <button onClick={onClose}>
            <X
              size={24}
              className="text-grayColor  hover:text-redColor transition-all duration-300"
            />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto customScrollbarBox px-2">
          <div className="mx-1">
            {cartItems.length === 0 ? (
              <p className="text-grayColor">العربة فارغة</p>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 justify-between flex-col mb-4 border-b border-[#bdbdbd6c] last:border-none pb-6"
                >
                  <div>
                    <h3 className="font-semibold text-grayColor text-xl flex flex-wrap">
                      {item.name}
                    </h3>
                    <p className="text-md text-grayColor">
                      {item.price}
                      <span className="text-yellowColor">x</span>
                      {item.quantity}
                    </p>
                  </div>

                  <div className="flex justify-between w-full items-center bg-[#e6e7e81c] px-3 py-1 rounded-md">
                    <div className="flex flex-col text-grayColor">
                      <h3>الإجمالي</h3>
                      <p className="text-yellowColor text-md numbers">
                        {item.quantity * item.price} ج.م
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <CiCircleMinus
                        className="text-grayColor cursor-pointer hover:scale-105 transition-all duration-300"
                        size={35}
                        onClick={() => dispatch(decreaseQty(item.id))}
                      />

                      <span className="text-yellowColor text-lg numbers">
                        {item.quantity}
                      </span>
                      <CiCirclePlus
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="text-grayColor cursor-pointer hover:scale-105 transition-all duration-300"
                        size={35}
                      />
                    </div>
                    <AiOutlineDelete
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-redColor cursor-pointer hover:scale-110 transition-all duration-300"
                      size={26}
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex flex-col">
            <p className="text-grayColor font-bold text-lg">
              {" "}
              إجمالي القطع:{" "}
              <span className="text-yellowColor">{totalQuantity}</span>
            </p>
            <p className="text-grayColor font-bold text-lg">
              {" "}
              إجمالي عدد الأصناف:{" "}
              <span className="text-yellowColor">{cartItems.length}</span>{" "}
            </p>
          </div>
          <div className="flex font-bold items-center justify-between mt-2 text-xl">
            <span className="text-grayColor">الإجمالي: </span>
            <span
              className={`transition-all duration-300 text-yellowColor text-xl ${
                animate ? "scale-125" : "scale-100"
              }`}
            >
              {total} ج.م
            </span>
          </div>

          {/* <button className="w-full bg-mainColor text-white py-2 rounded-lg hover:opacity-90 transition">
            إتمام الشراء
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
