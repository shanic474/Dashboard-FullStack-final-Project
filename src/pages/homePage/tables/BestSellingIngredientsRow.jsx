import React from 'react';

const BestSellingIngredientsRow = ({ ingredient }) => {
  return (
    <tr className="hover:bg-[#1a1a1a]/50 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-light text-white">{ingredient.name}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-300">{ingredient.timesUsed}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="text-sm text-gray-300 mr-2">{ingredient.inventory}</div>
          <div className="w-24 bg-gray-800 rounded-full h-2 border border-gray-700">
            <div 
              className={`h-2 rounded-full ${
                ingredient.inventory > 40 ? 'bg-amber-500' : 
                ingredient.inventory > 25 ? 'bg-yellow-500' : 'bg-red-500/70'
              }`}
              style={{ width: `${(ingredient.inventory / 60) * 100}%` }}
            ></div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-amber-400">${ingredient.avgRevenue.toFixed(2)}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 text-xs font-light text-red-400 bg-red-500/10 border border-red-500/30 rounded-sm hover:bg-red-500/20 transition-colors">
            Remove
          </button>
          <button className="px-3 py-1 text-xs font-light text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-sm hover:bg-blue-500/20 transition-colors">
            View
          </button>
          <button className="px-3 py-1 text-xs font-light text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-sm hover:bg-amber-500/20 transition-colors">
            Edit
          </button>
        </div>
      </td>
    </tr>
  );
};

export default BestSellingIngredientsRow;

