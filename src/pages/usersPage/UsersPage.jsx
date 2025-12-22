import React, { useState, useEffect } from "react";
import UsersLayout from "./UsersLayout";
import UsersTable from "./UsersTable";
import UserModal from "../../components/modal/UserModal";
import { FetchUsers } from "./hooks/FetchUsers";

const UsersPage = () => {
  const { getAllUsers } = FetchUsers();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const FetchUsers = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
      console.log(usersData);
      console.table(usersData);
    };
    FetchUsers();
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
      <UserModal 
        user={selectedUser} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </UsersLayout>
  );
};

export default UsersPage;
