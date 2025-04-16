import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../features/cartSlice";
import { useNavigate } from "react-router-dom"; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [availableCoupons, setAvailableCoupons] = useState([]);
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  useEffect(() => {
    const fetchCoupons = async () => {
      try {
        const response = await fetch("https://spicehub.cloud/api/coupon/getActiveCoupons");
        const data = await response.json();
        if (data && Array.isArray(data.coupons)) {
          setAvailableCoupons(data.coupons);
        } else if (Array.isArray(data)) {
          setAvailableCoupons(data);
        }
      } catch (error) {
        console.error("❌ Error fetching coupons:", error);
      }
    };
    fetchCoupons();
  }, []);

  useEffect(() => {
    if (selectedCoupon) {
      setCoupon(selectedCoupon.code);
      setTimeout(() => applyCoupon(selectedCoupon.code), 300);
    }
  }, [selectedCoupon]);

  const applyCoupon = (enteredCoupon = coupon) => {
    const foundCoupon = availableCoupons.find(
      (c) => c.code.trim().toUpperCase() === enteredCoupon.trim().toUpperCase()
    );

    if (foundCoupon) {
      setDiscount(foundCoupon.discountValue);
      alert(`🎉 Coupon Applied! ${foundCoupon.discountValue}% discount`);
    } else {
      setDiscount(0);
      alert("❌ Invalid Coupon Code");
    }
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedTotal = totalAmount > 0 ? totalAmount - (totalAmount * discount) / 100 : 0;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4 md:p-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 border-b pb-3 text-center">
          🛒 Your Shopping Cart
        </h2>

        {/* If Cart is Empty */}
        {cartItems.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-4">Your cart is empty 😔</p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg"
              onClick={() => navigate("/")} 
            >
              🔙 Back to Shopping
            </button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={item.id} 
                  className="flex flex-wrap sm:flex-nowrap items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md gap-4 sm:gap-2"
                >
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg shadow-md" 
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-medium text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 text-sm mt-1 font-semibold">₹{item.price}</p>
                    <div className="mt-2 flex items-center justify-center sm:justify-start space-x-3">
                      <button
                        className="bg-gray-300 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-400 transition"
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                      >
                        -
                      </button>
                      <span className="text-lg font-semibold text-gray-700 px-4">{item.quantity}</span>
                      <button
                        className="bg-gray-300 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-400 transition"
                        onClick={() => dispatch(increaseQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition self-center sm:self-auto"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    ❌ Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Coupon Section */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-md md:text-lg font-semibold text-gray-700 mb-3">🎟️ Apply Coupon</h3>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  className="border rounded-md px-4 py-2 w-full sm:w-auto"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition w-full sm:w-auto"
                  onClick={() => applyCoupon()}
                >
                  Apply
                </button>
              </div>
              {discount > 0 && <p className="text-green-600 mt-2">✅ {discount}% discount applied!</p>}
            </div>

            {/* Available Coupons Section (Hidden when Cart is Empty) */}
            {cartItems.length > 0 && availableCoupons.length > 0 && (
              <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-md md:text-lg font-semibold text-gray-700 mb-3">🔥 Available Coupons</h3>
                <ul className="space-y-2">
                  {availableCoupons.map((c, index) => (
                    <li
                      key={index}
                      className="cursor-pointer bg-blue-100 text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200 transition text-center sm:text-left"
                      onClick={() => setSelectedCoupon(c)}
                    >
                      {c.code} - {c.discountValue}% OFF
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Total Price Section */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg flex flex-col sm:flex-row justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700">Total Amount:</h3>
              <span className="text-xl font-bold text-blue-600">₹{discountedTotal.toFixed(2)}</span>
            </div>

            {/* Checkout Button */}
            <div className="mt-6 text-center">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition shadow-lg w-full sm:w-auto">
                🛍️ Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
