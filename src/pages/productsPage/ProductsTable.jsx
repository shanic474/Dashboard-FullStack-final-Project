import ProductRow from "./ProductRow.jsx";

const ProductsTable = ({ products }) => {
  return (
    <table className="min-w-full divide-y divide-amber-500/20">
      <thead>
        <tr>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            #
          </th>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            Image
          </th>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            Product Name
          </th>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            Category
          </th>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            Price
          </th>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            Stock
          </th>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-light text-amber-400 uppercase tracking-wider border-b border-amber-500/20">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-amber-500/20">
        {products.map((product, index) => (
          <ProductRow key={product.id} product={product} index={index + 1} />
        ))}
      </tbody>
    </table>
  );
};

export default ProductsTable;