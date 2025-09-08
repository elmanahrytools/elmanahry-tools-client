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
    (acc, item) => acc + parseInt(item.price) * item.quantity,
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
      <div className="absolute left-0 md:w-[350px] w-full bg-mainColor h-full shadow-lg p-5 flex flex-col animate-slideRight">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-grayColor">عربة التسوق</h2>
          <button onClick={onClose}>
            <X size={24} className="text-grayColor" />
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
                className="flex items-center justify-between mb-4 border-b border-grayColor pb-2"
              >
                <div>
                  <h3 className="font-semibold text-grayColor">{item.name}</h3>
                  <p className="text-sm text-yellowColor">{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <CiCircleMinus
                    className="text-grayColor cursor-pointer hover:scale-105 transition-all duration-300"
                    size={27}
                    onClick={() => dispatch(decreaseQty(item.id))}
                  />

                  <span className="text-yellowColor">{item.quantity}</span>
                  <CiCirclePlus
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="text-grayColor cursor-pointer hover:scale-105 transition-all duration-300"
                    size={27}
                  />
                </div>

                <AiOutlineDelete
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-redColor cursor-pointer hover:scale-110 transition-all duration-300"
                  size={26}
                />
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div className="flex justify-between font-bold text-lg mb-4">
            <span className="text-grayColor">الإجمالي:</span>
            <span
              className={`text-grayColor transition-all duration-300 ${
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
