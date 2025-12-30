import axios from "axios";

async function updateDataInDB(id, type, updatedData) {
  const path =
    type === "user" ? `users/adminupdateuser/${id}` : `products/updateProduct/${id}`;

  console.log("the id is ", id);
  console.log("the path is: ", `${import.meta.env.VITE_SERVER_URL}/${path}`);
  console.log("the updated data is: ", updatedData);

  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_SERVER_URL}/${path}`,
      updatedData,
      { withCredentials: true } // << important

    );
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error updating data in DB:", error);
    throw error;
  }
}

export default updateDataInDB;
