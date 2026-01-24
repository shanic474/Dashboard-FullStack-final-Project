import Sidebar from "../../components/router/sidebar/Sidebar.jsx";
import ProductsHeader from "./ProductsHeader.jsx";

const ProductsLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] flex">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col">
        <ProductsHeader />

        <div className="p-6 flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children} {/* ✅ TABLE RENDERS HERE */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsLayout;
