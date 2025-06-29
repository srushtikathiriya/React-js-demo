import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MobileDrawer({ mobileMenuOpen, setMobileMenuOpen }) {
  const [drawerMode, setDrawerMode] = useState("menu");
  const [openMenu, setOpenMenu] = useState("");
  const [openCat, setOpenCat] = useState("");
  const navigate = useNavigate();

  // MENU DATA (Navbar2.js structure)
  const menuData = [
    {
      key: "home",
      label: "Home",
      submenu: [
        { label: "Wooden Home", route: "/" },
        { label: "Fashion Home", route: "#" },
        { label: "Furniture Home", route: "#" },
        { label: "Cosmetics Home", route: "#" },
        { label: "Food Grocery", route: "#" },
      ],
    },
    {
      key: "shop",
      label: "Shop",
      submenu: [
        { label: "Shop", route: "/shop" },
        { label: "Shop 2", route: "/shop2" },
        { label: "Shop Details", route: "/shopdetails" },
        { label: "Shop Details 2", route: "/shopdetails2" },
        { label: "Shop Location", route: "/shoplocation" },
        { label: "Cart", route: "/cart" },
        { label: "Sign In", route: "/signin" },
        { label: "Checkout", route: "/checkout" },
        { label: "Wishlist", route: "/wishlist" },
        { label: "Product Track", route: "/producttract" },
      ],
    },
    {
      key: "pages",
      label: "Pages",
      submenu: [
        { label: "About", route: "/about" },
        { label: "Cart", route: "/cart" },
        { label: "Checkout", route: "/checkout" },
        { label: "Sign In", route: "/signin" },
        { label: "Log In", route: "/login" },
        { label: "Product Track", route: "/producttract" },
        { label: "Wishlist", route: "/wishlist" },
        { label: "404 / Error", route: "/404" },
        { label: "Coming Soon", route: "/comingsoon" },
      ],
    },
    {
      key: "blog",
      label: "Blog",
      submenu: [
        { label: "Blog", route: "/blog" },
        { label: "Blog Details", route: "/blogdetail" },
      ],
    },
    {
      key: "contact",
      label: "Contact",
      submenu: [],
      route: "/contact",
    },
  ];

  // CATEGORY DATA (Catagories.js structure)
  const categoryData = [
    {
      key: "candles",
      label: "Candles",
      submenu: [],
      route: "/shop",
    },
    {
      key: "handmade",
      label: "Handmade",
      route: "/shop",
      submenu: [
        { label: "Chair", route: "#" },
        { label: "Table", route: "#" },
        { label: "Furniture", route: "#" },
        { label: "Clock", route: "#" },
        { label: "Gifts", route: "#" },
        { label: "Crafts", route: "#" },
      ],
    },
    {
      key: "gifts-sets",
      label: "Gifts Sets",
      submenu: [],
      route: "/shop",
    },
    {
      key: "plastic-gifts",
      label: "Plastic Gifts",
      submenu: [],
      route: "/shop",
    },
    {
      key: "handy-cream",
      label: "Handy Cream",
      submenu: [],
      route: "/shop",
    },
    {
      key: "cosmetics",
      label: "Cosmetics",
      submenu: [],
      route: "/shop",
    },
    {
      key: "silk-accessories",
      label: "Silk Accessories",
      submenu: [],
      route: "/shop",
    },
  ];

  // Drawer JSX
  return (
    mobileMenuOpen && (
      <div className="fixed inset-0 z-50 flex">
        {/* Overlay */}
        <div className="fixed inset-0 bg-black bg-opacity-60" onClick={() => setMobileMenuOpen(false)}></div>
        {/* Drawer */}
        <div className="relative w-80 max-w-full h-full bg-black text-white z-50 overflow-y-auto animate-slideInLeft">
          {/* Close Bar */}
          <div className="bg-[#d51243] flex items-center justify-between px-4 py-3">
            <span className="font-bold text-lg">CLOSE</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-2xl font-bold">×</button>
          </div>
          {/* Search & Buttons */}
          <div className="p-6">
            <div className="font-bold text-md mb-2">WHAT ARE YOU LOOKING FOR?</div>
            <div className="relative mb-4">
              <input type="text" placeholder="Search Products..." className="w-full rounded-md py-2 pl-4 pr-10 text-black" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-black">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="flex gap-2 mb-4">
              <button
                className={`flex-1 font-bold py-2 rounded-md ${drawerMode === "menu" ? "bg-[#d51243] text-white" : "bg-white text-black"}`}
                onClick={() => setDrawerMode("menu")}
              >MENU</button>
              <button
                className={`flex-1 font-bold py-2 rounded-md ${drawerMode === "category" ? "bg-[#d51243] text-white" : "bg-white text-black"}`}
                onClick={() => setDrawerMode("category")}
              >CATEGORIES</button>
            </div>
            {/* MENU */}
            {drawerMode === "menu" && (
              <ul className="space-y-2">
                {menuData.map((item) => (
                  <li key={item.key}>
                    <div className="flex items-center justify-between border-b border-gray-700 py-2">
                      <span
                        className="font-bold cursor-pointer"
                        onClick={() => {
                          if (!item.submenu.length && item.route) {
                            navigate(item.route);
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        {item.label}
                      </span>
                      {item.submenu.length > 0 ? (
                        <button onClick={() => setOpenMenu(openMenu === item.key ? "" : item.key)}>
                          <span className="text-xl">{openMenu === item.key ? "−" : "+"}</span>
                        </button>
                      ) : null}
                    </div>
                    {openMenu === item.key && item.submenu.length > 0 && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((sub, idx) => (
                          <li
                            key={idx}
                            className="border-b border-gray-700 py-2 pl-2 cursor-pointer hover:text-[#d51243]"
                            onClick={() => {
                              if (sub.route) {
                                navigate(sub.route);
                                setMobileMenuOpen(false);
                              }
                            }}
                          >
                            {sub.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {/* CATEGORY */}
            {drawerMode === "category" && (
              <ul className="space-y-2">
                {categoryData.map((item) => (
                  <li key={item.key}>
                    <div className="flex items-center justify-between border-b border-gray-700 py-2">
                      <span
                        className="font-bold cursor-pointer"
                        onClick={() => {
                          if (!item.submenu.length && item.route) {
                            navigate(item.route);
                            setMobileMenuOpen(false);
                          }
                        }}
                      >
                        {item.label}
                      </span>
                      {item.submenu.length > 0 ? (
                        <button onClick={() => setOpenCat(openCat === item.key ? "" : item.key)}>
                          <span className="text-xl">{openCat === item.key ? "−" : "+"}</span>
                        </button>
                      ) : null}
                    </div>
                    {openCat === item.key && item.submenu.length > 0 && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((sub, idx) => (
                          <li
                            key={idx}
                            className="border-b border-gray-700 py-2 pl-2 cursor-pointer hover:text-[#d51243]"
                            onClick={() => {
                              if (sub.route) {
                                navigate(sub.route);
                                setMobileMenuOpen(false);
                              }
                            }}
                          >
                            {sub.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {/* Divider */}
            <div className="my-4"></div>
            {/* Login/Register */}
            <div
              className="flex items-center gap-2 mb-2 cursor-pointer hover:text-[#d51243]"
              onClick={() => {
                navigate("/signin");
                setMobileMenuOpen(false);
              }}
            >
              <i className="fa-regular fa-user text-xl"></i>
              <span>Login / Register</span>
            </div>
            {/* Wishlist */}
            <div
              className="flex items-center gap-2 cursor-pointer hover:text-[#d51243]"
              onClick={() => {
                navigate("/wishlist");
                setMobileMenuOpen(false);
              }}
            >
              <i className="fa-regular fa-heart text-xl"></i>
              <span>Wishlist</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default MobileDrawer;
