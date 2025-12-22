import { useState , useContext} from "react";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import {useAuthStore} from "../../store/auth.store.jsx";


const initialFromData = {
  user_email: "",
  password: "",
};

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialFromData);
  const { handleLogin } = useAuthStore();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const user = await handleLogin(formData);  
      if (!user) {
        throw new Error("Login failed");
      }    
      navigate("/home"); // admin or manager
    } catch (error) {
      console.error("Login failed:", error);
      toast.error(error.message || "Login failed");
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Email */}
      <div>
        <label className="text-sm text-amber-400 font-light tracking-wide">
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="user_email"
          value={formData.user_email}
          className="w-full mt-1 px-4 py-2 bg-[#111] border border-gray-700 rounded-sm text-gray-200 focus:border-amber-500/40 focus:outline-none transition-all"
          onChange={(e) => handleChange(e)}
          placeholder="Enter your email"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm text-amber-400 font-light tracking-wide">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
          className="w-full mt-1 px-4 py-2 bg-[#111] border border-gray-700 rounded-sm text-gray-200 focus:border-amber-500/40 focus:outline-none transition-all"
          placeholder="Enter your password"
        />
      </div>

      {/* Login Button */}
      <button
        type="submit"
        className="w-full py-2.5 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-sm font-light tracking-wider uppercase hover:bg-amber-500/30 hover:border-amber-400/60 transition-all"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
