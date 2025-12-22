import axios from "axios";

export function FetchUsers() {
  async function getAllUsers() {
    try {
      console.log("getAllUsers called");
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/users/`,
        { withCredentials: true }
      );
      return response.data.users;
    } catch (error) {
      console.error(
        "getAllUsers error:",
        error.response?.status,
        error.response?.data,
        error.message
      );
      return null;
    }
  }
  return { getAllUsers };
}
