import { useEffect, useState } from "react";
import UsersLayout from "./UsersLayout";
import UsersTable from "./UsersTable";
import Modal from "../../components/modal/Modal";
import { FetchData } from "../../components/hooks/FetchData.jsx";

const UsersPage = () => {
  const { getAllData } = FetchData("users");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const usersData = await getAllData();
      setUsers(usersData);
    };
    fetch();
  }, []);

  return (
    <UsersLayout>
      <UsersTable users={users} />
      <Modal /> {/* ✅ always mounted, uses Zustand */}
    </UsersLayout>
  );
};

export default UsersPage;
