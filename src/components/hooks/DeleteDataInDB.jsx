import axios from "axios";

async function DeleteDataInDB(id, type) {
  const path =
    type === "user" ? `users/deleteUser/${id}` : `products/deleteProduct/${id}`;

  console.log("the id is ", id);
  console.log("the type is ", type);
  console.log("the path is: ", `${import.meta.env.VITE_SERVER_URL}/${path}`);

  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_SERVER_URL}/${path}`,
      { withCredentials: true } // important if using cookies/session
    );

    console.log("Deleted data response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error deleting data in DB:", error);
    throw error;
  }
}

export default DeleteDataInDB;
