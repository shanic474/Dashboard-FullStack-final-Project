import Sidebar from "../../components/router/sidebar/Sidebar.jsx";
import { FetchData } from "../../components/hooks/FetchData.jsx";
import { useState, useEffect } from "react";
import ProductsHeader from "./ProductsHeader.jsx";
import ProductsLayout from "./ProductsLayout.jsx";
import ProductsTable from "./ProductsTable.jsx";
import Modal from "../../components/modal/Modal.jsx";
import { useCategoriesStore } from "../../store/categories.store.jsx";
import { useProductsStore } from "../../store/products.store.jsx";

const ProductsPage = () => {
  const { getAllData } = FetchData("products");
  const categories = useCategoriesStore((state) => state.categories);
  const products = useProductsStore((state) => state.products);
  const setProducts = useProductsStore((state) => state.setProducts);
  const [refreshProducts, setRefreshProducts] = useState(false);

  console.log("categories are: ", categories);

  //
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };
  //

  useEffect(() => {
    const fetchProducts = async () => {
      const { getAllData } = FetchData("products");
      const productsData = await getAllData();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.table(products);
    console.log(products);
  }, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getAllData();
      setProducts(productsData);
    };

    fetchProducts();
  }, [refreshProducts]);

  return (
     <ProductsLayout>
      <ProductsTable products={products} />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDataChange={() => setRefreshProducts((prev) => !prev)}
      />
    </ProductsLayout>
  );
};

export default ProductsPage;
