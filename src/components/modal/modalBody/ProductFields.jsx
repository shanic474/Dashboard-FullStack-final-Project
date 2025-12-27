const ProductFields = ({ product, isModalEditable }) => {
  const getStockColor = (status) =>
    status === "In Stock"
      ? "bg-green-500/20 text-green-400 border border-green-500/30"
      : "bg-red-500/20 text-red-400 border border-red-500/30";

  const handleChange = (field, value) => {
    // TODO: Implement your update logic here
    console.log(`Updating ${field} to ${value}`);
  };

  return (
    <>
      {/* Product Image Section */}
      <div className="relative bg-gradient-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              Product Image
            </label>
            {product.product_image ? (
              <img 
                src={product.product_image} 
                alt={product.product_name}
                className="w-20 h-20 object-cover rounded border border-amber-500/20"
              />
            ) : (
              <p className="text-base sm:text-lg font-light text-gray-400">No image</p>
            )}
          </div>
        </div>
      </div>

      {/* Product Name Section */}
      <div className="relative bg-gradient-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              Product Name
            </label>
            {isModalEditable ? (
              <input
                type="text"
                value={product.product_name || ""}
                onChange={(e) => handleChange("product_name", e.target.value)}
                className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
              />
            ) : (
              <p className="text-base sm:text-lg font-light text-white truncate">
                {product.product_name || "N/A"}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Category Section */}
      <div className="relative bg-gradient-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              Category
            </label>
            {isModalEditable ? (
              <input
                type="text"
                value={product.product_category || ""}
                onChange={(e) => handleChange("product_category", e.target.value)}
                className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
              />
            ) : (
              <p className="text-base sm:text-lg font-light text-amber-400">
                {product.product_category || "N/A"}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Price and Stock Grid */}
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {/* Price */}
        <div className="relative bg-gradient-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                Price
              </label>
              {isModalEditable ? (
                <input
                  type="number"
                  step="0.01"
                  value={product.product_price || 0}
                  onChange={(e) => handleChange("product_price", e.target.value)}
                  className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
                />
              ) : (
                <p className="text-xl sm:text-2xl font-light text-amber-400">
                  ${product.product_price || 0}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Stock Status */}
        <div className="relative bg-gradient-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
                Stock Status
              </label>
              {isModalEditable ? (
                <select
                  value={product.stock_status || "In Stock"}
                  onChange={(e) => handleChange("stock_status", e.target.value)}
                  className="w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
                >
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                </select>
              ) : (
                <span className={`inline-block px-2 sm:px-3 py-1 text-xs sm:text-sm font-light rounded-sm ${getStockColor(product.stock_status)}`}>
                  {product.stock_status || "N/A"}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Product ID Section */}
      <div className="relative bg-gradient-to-br from-gray-900/50 via-[#1a1a1a]/50 to-gray-900/50 p-3 sm:p-4 border border-amber-500/10 rounded-sm hover:border-amber-500/30 transition-all">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-sm p-1.5 sm:p-2 shrink-0">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <label className="text-xs font-light text-gray-500 uppercase tracking-wide block mb-0.5 sm:mb-1">
              Product ID
            </label>
            <p className="text-xs sm:text-sm font-light text-gray-300 font-mono break-all">
              {product._id || "N/A"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFields;