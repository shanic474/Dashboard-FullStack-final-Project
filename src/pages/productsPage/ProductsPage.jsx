import Sidebar from "../../components/router/sidebar/Sidebar.jsx";
import { FetchData } from "../../components/hooks/FetchData.jsx";
import { useState, useEffect } from "react";
import ProductsHeader from "./ProductsHeader.jsx";
import ProductsLayout from "./ProductsLayout.jsx";
import ProductsTable from "./ProductsTable.jsx";
import Modal from "../../components/modal/Modal.jsx"

const ProductsPage = () => {
  const { getAllData } = FetchData("products");
  const [products, setProducts] = useState([]);


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
      const productsData = await getAllData();
      setProducts(productsData);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    console.table(products);
    console.log(products);
  }, [products]);

  return (

    <div className="min-h-screen bg-[#1a1a1a] flex">
      <Sidebar />
      <div className="flex-1 ml-64">
        <ProductsTable products={products} />
        <Modal
          // user={selectedUser} 
          // isOpen={isModalOpen} 
          // onClose={handleCloseModal} 
        />
        <ProductsLayout />
      </div>
    </div>
  );
};

export default ProductsPage;
