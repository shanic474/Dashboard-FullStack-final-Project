import { useModalStore } from "../../store/modal.store.jsx";

const ProductsHeader = () => {
  const openModal = useModalStore((s) => s.openModal);

  const handleAddProduct = () => {
    openModal("product", true, true); 
  };

  return (
    <div className="bg-linear-to-r from-[#2a2a2a] via-[#2d2d2d] to-[#2a2a2a] border-b border-amber-500/20 sticky top-0 z-40">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="pb-2 border-b border-amber-500/20">
          <h1 className="text-3xl font-light text-white tracking-wide uppercase">
            Products
          </h1>
          <p className="text-gray-400 mt-1 text-sm font-light">
            Manage your meal ingredients
          </p>
        </div>
        <button
          onClick={handleAddProduct}
          className="px-6 py-2.5 bg-amber-500/10 border border-amber-500/40 text-amber-300 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/60 transition-all duration-500 backdrop-blur-sm flex items-center space-x-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Add Product</span>
        </button>
      </div>
    </div>
  );
};

export default ProductsHeader;