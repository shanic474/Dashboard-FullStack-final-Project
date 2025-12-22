import React from "react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

const SidebarNav = ({ activeItem, setActiveItem }) => {
  return (
    <nav className="mt-8 px-4">
      <ul className="space-y-2">
        <Link
          to ="/products"
          >
          <NavButton
            id="products"
            label="Products"
            icon="📦"
            activeItem={activeItem}
            onClick={() => setActiveItem("products")}
            animationDelay="0s"
          />
        </Link>

        <Link
          to ="/users"
          >
          <NavButton
            id="users"
            label="Users"
            icon="👥"
            activeItem={activeItem}
            onClick={() => setActiveItem("users")}
            animationDelay="0.1s"
          />
        </Link>

        <Link
          to ="/orders"
          >
        <NavButton
          id="orders"
          label="Orders"
          icon="📋"
          activeItem={activeItem}
          onClick={() => setActiveItem("orders")}
          animationDelay="0.2s"
        />
        </Link>

        <Link
          to ="/blog"
          >
        <NavButton
          id="blog"
          label="Blog"
          icon="📝"
          activeItem={activeItem}
          onClick={() => setActiveItem("blog")}
          animationDelay="0.3s"
        />
        </Link>
      </ul>
    </nav>
  );
};

export default SidebarNav;
