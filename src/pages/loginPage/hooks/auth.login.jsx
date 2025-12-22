import axios from "axios";

async function verifyCookieToken() {
    try {
           console.log("verifyCookieToken called");
  const response = await axios.get(
    `${import.meta.env.VITE_SERVER_URL}/auth/verify-token`,
    { withCredentials: true }
  );
      console.log("verifyCookieToken response:", response.data);

  return response.data.user;
    } catch (error) {
      console.error(
      "verifyCookieToken error:",
      error.response?.status,
      error.response?.data,
      error.message
    );
        return null;
    }
}

async function loginAuthUser(formData) {
  const response = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/auth/dashboardlogin`,
    formData,
    { withCredentials: true }
  );
  return response.data.user;
}

export { loginAuthUser, verifyCookieToken };
