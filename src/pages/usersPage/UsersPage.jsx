import { useState, useEffect } from "react";
import UsersLayout from "./UsersLayout";
import UsersTable from "./UsersTable";
import Modal from "../../components/modal/Modal";
import { FetchData } from "../../components/hooks/FetchData.jsx";

const UsersPage = () => {
  const { getAllData } = FetchData('users');
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const FetchData = async () => {
      const usersData = await getAllData();
      setUsers(usersData);
      console.log(usersData);
      console.table(usersData);
    };
    FetchData();
  }, []);

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <UsersLayout>
      <UsersTable users={users} onViewUser={handleViewUser} />
      <Modal 
        user={selectedUser} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </UsersLayout>
  );
};

export default UsersPage;
