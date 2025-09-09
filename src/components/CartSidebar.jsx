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
        className="bg-black bg-opacity-50 flex-1 opacity-0 animate-fadeIn"
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div className="absolute left-0 md:w-[450px] w-full bg-mainColor h-full shadow-lg p-5 flex flex-col animate-slideRight overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-5 border-b border-[#bdbdbd6c] pb-2">
          <h2 className="text-2xl font-bold text-grayColor">عربة التسوق</h2>
          <button onClick={onClose}>
            <X
              size={24}
              className="text-grayColor  hover:text-redColor transition-all duration-300"
            />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-grayColor">العربة فارغة</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-2 justify-between flex-col mb-4 border-b border-[#bdbdbd6c] last:border-none pb-2"
              >
                <div>
                  <h3 className="font-semibold text-grayColor text-xl flex flex-wrap">
                    {item.name}
                  </h3>
                  <p className="text-lg text-grayColor">
                    {item.price}
                    <span className="text-yellowColor">x</span>
                    {item.quantity}
                  </p>
                </div>

                <div className="flex justify-between w-full items-center bg-[#e6e7e81c] px-3 py-1 rounded-md">
                  <div className="flex flex-col text-grayColor">
                    <h3>الإجمالي</h3>
                    <p className="text-yellowColor text-lg numbers">
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

        {/* Footer */}
        <div className="mt-4 flex flex-col gap-1">
          <div className="flex">
            <p className="text-grayColor font-bold text-lg">
              لديك عدد{" "}
              <span className="text-yellowColor">{cartItems.length}</span>{" "}
              {cartItems.length > 2 ? "أصناف" : "صنف"} في العربة
            </p>
          </div>
          <div className="flex justify-between font-bold text-xl">
            <span className="text-grayColor">الإجمالي:</span>
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
