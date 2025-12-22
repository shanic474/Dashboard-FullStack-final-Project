import React from 'react';
import Sidebar from '../../components/router/sidebar/Sidebar.jsx';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Chicken Breast', category: 'Protein', price: 12.50, stock: 45, status: 'Active' },
    { id: 2, name: 'Brown Rice', category: 'Carbs', price: 8.75, stock: 38, status: 'Active' },
    { id: 3, name: 'Salmon Fillet', category: 'Protein', price: 15.20, stock: 22, status: 'Low Stock' },
    { id: 4, name: 'Quinoa', category: 'Carbs', price: 9.30, stock: 31, status: 'Active' },
    { id: 5, name: 'Broccoli', category: 'Vegetables', price: 6.40, stock: 52, status: 'Active' },
    { id: 6, name: 'Greek Yogurt', category: 'Dairy', price: 7.80, stock: 8, status: 'Low Stock' },
    { id: 7, name: 'Avocado', category: 'Vegetables', price: 10.50, stock: 15, status: 'Low Stock' },
    { id: 8, name: 'Sweet Potato', category: 'Carbs', price: 5.90, stock: 41, status: 'Active' },
    { id: 9, name: 'Spinach', category: 'Vegetables', price: 4.20, stock: 12, status: 'Low Stock' },
    { id: 10, name: 'Almonds', category: 'Nuts', price: 11.80, stock: 35, status: 'Active' }
  ];

  const getStatusColor = (status) => {
    return status === 'Active'
      ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
      : 'bg-red-500/20 text-red-400 border border-red-500/30';
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 ml-64">
        {/* Top Header */}
        <div className="bg-linear-to-r from-[#2a2a2a] via-[#2d2d2d] to-[#2a2a2a] border-b border-amber-500/20 sticky top-0 z-40">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="pb-2 border-b border-amber-500/20">
              <h1 className="text-3xl font-light text-white tracking-wide uppercase">Products</h1>
              <p className="text-gray-400 mt-1 text-sm font-light">Manage your meal ingredients</p>
            </div>
            <button className="px-6 py-2.5 bg-amber-500/10 border border-amber-500/40 text-amber-300 rounded-sm font-light text-sm tracking-wider uppercase hover:bg-amber-500/20 hover:border-amber-400/60 transition-all duration-500 backdrop-blur-sm flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add Product</span>
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 overflow-hidden">
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
              
              <div className="overflow-x-auto relative z-10">
                <table className="min-w-full divide-y divide-amber-500/20">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">ID</th>
                      <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Product Name</th>
                      <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Price</th>
                      <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Stock</th>
                      <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-500/20">
                    {products.map((product) => (
                      <tr key={product.id} className="hover:bg-[#1a1a1a]/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">{product.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-light text-white">{product.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-amber-400">${product.price.toFixed(2)}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{product.stock}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs font-light rounded-sm ${getStatusColor(product.status)}`}>
                            {product.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <div className="flex space-x-2">
                            <button className="p-2 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-sm hover:bg-blue-500/20 transition-all" title="View">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                              </svg>
                            </button>
                            <button className="p-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-sm hover:bg-amber-500/20 transition-all" title="Edit">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </button>
                            <button className="p-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-sm hover:bg-red-500/20 transition-all" title="Remove">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;