import axios from "axios";

async function createDataInDB(type, newData) {
  const path = type === "user" ? "users/register" : "products/createProduct";

  console.log("Creating new", type);
  console.log("the path is: ", `${import.meta.env.VITE_SERVER_URL}/${path}`);
  console.log("the new data is: ", newData);

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/${path}`,
      newData,
      { withCredentials: true }
    );
    console.log(response.data);
    
    return response.data;
  } catch (error) {
    console.error("Error creating data in DB:", error);
    throw error;
  }
}

export default createDataInDB;
