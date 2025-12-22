import React from 'react';
import BestSellingIngredientsRow from './BestSellingIngredientsRow';

const BestSellingIngredientsTable = ({ data }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-light text-white mb-6 pb-2 border-b border-amber-500/20 tracking-wide uppercase">Best-Selling Ingredients</h2>
      <div className="relative bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 overflow-hidden">
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>
        <div className="overflow-x-auto relative z-10">
          <table className="min-w-full divide-y divide-amber-500/20">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Ingredient</th>
                <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Times Used</th>
                <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Inventory Level</th>
                <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Avg. Revenue</th>
                <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-500/20">
              {data.map((ingredient, index) => (
                <BestSellingIngredientsRow key={index} ingredient={ingredient} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BestSellingIngredientsTable;

