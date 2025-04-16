import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ShoppingCart, Search, UserCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logo from "../assets/Logo.png";

const menuItems = ["Home", "Our Story", "Spices", "Recipes", "Contact Us"];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef(null);
  const profileRef = useRef(null);

 
  const cart = useSelector((state) => state.cart?.cartItems || []);
  const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
      if (profileRef.current && !profileRef.current.contains(event.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      
      <nav className="h-16 w-full bg-white border-b-[3px] border-[#880E4F] shadow-md flex items-center px-4 sm:px-6 md:px-8 lg:px-12 justify-between overflow-hidden">
        
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={Logo} alt="Masala Brand Logo" className="h-12 sm:h-14" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex flex-wrap justify-center space-x-4 lg:space-x-6 text-[#333333] font-semibold text-lg tracking-wide">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link to={`/${item.replace(/\s+/g, "").toLowerCase()}`} className="hover:text-[#D32F2F] transition-all">
                {item}
              </Link>
            </li>
          ))}
        </ul>

      
        <div className="flex items-center space-x-4 lg:space-x-6">
          
          
          <div className="hidden md:flex flex-1 min-w-[120px] max-w-[40vw] lg:max-w-[300px] relative">
            <input
              type="text"
              placeholder="Search spices, recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border border-[#880E4F] rounded-full text-[#333333] focus:ring-2 focus:ring-[#D32F2F]"
            />
            <Search className="absolute right-3 top-2.5 text-[#D32F2F] cursor-pointer" size={20} />
          </div>

          
          <Link to="/cart" className="relative group">
            <ShoppingCart size={26} className="text-[#333333] hover:text-[#D32F2F] transition-all duration-300" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D32F2F] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full transition-transform group-hover:scale-110">
                {cartItemCount}
              </span>
            )}
          </Link>

          
          <div className="relative" ref={profileRef}>
            <button onClick={() => setProfileOpen(!profileOpen)} className="flex items-center focus:outline-none">
              <UserCircle size={28} className="text-[#333333] hover:text-[#D32F2F] transition-all duration-300" />
            </button>

            {/* Profile Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-44 bg-white border border-[#880E4F] rounded-lg shadow-lg text-[#333333]">
                <ul className="py-2">
                  <li>
                    <Link to="/profile" className="block px-4 py-2 hover:bg-[#D32F2F] hover:text-white transition-all" onClick={() => setProfileOpen(false)}>
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link to="/orders" className="block px-4 py-2 hover:bg-[#D32F2F] hover:text-white transition-all" onClick={() => setProfileOpen(false)}>
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <button className="block w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition-all" onClick={() => setProfileOpen(false)}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#333333]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div ref={menuRef} className="absolute top-16 left-0 w-full bg-white border-b-[3px] border-[#880E4F] shadow-md md:hidden">
          
          {/* Mobile Search */}
          <div className="flex justify-center py-3">
            <div className="relative w-[90%]">
              <input
                type="text"
                placeholder="Search spices, recipes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-[#880E4F] rounded-full text-[#333333] focus:ring-2 focus:ring-[#D32F2F]"
              />
              <Search className="absolute right-3 top-2.5 text-[#D32F2F] cursor-pointer" size={20} />
            </div>
          </div>

          <ul className="flex flex-col text-[#333333] font-semibold text-center py-4 space-y-4 text-lg">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={`/${item.replace(/\s+/g, "").toLowerCase()}`} className="block hover:text-[#D32F2F] transition-all" onClick={() => setIsOpen(false)}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;
