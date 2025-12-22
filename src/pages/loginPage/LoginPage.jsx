import LoginForm from "./LoginForm.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store.jsx";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isAuthUser, user } = useAuthStore();



  useEffect(() => {
    if (user)  navigate("/home");
  }, [isAuthUser, user]);


  return (
    <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-linear-to-br from-gray-900 via-[#1a1a1a] to-gray-900 border border-amber-500/20 p-8 relative">
        {/* Corner Borders */}
        <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-amber-500/40"></div>
        <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-amber-500/40"></div>
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-amber-500/40"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-amber-500/40"></div>

        <div className="relative z-10">
          {/* Logo / Title */}
          <h1 className="text-3xl font-light text-center text-white tracking-wide uppercase mb-2">
            Login
          </h1>
          <p className="text-center text-gray-400 text-sm mb-8">
            Access your dashboard
          </p>

          {/* Form */}
          <LoginForm />

          {/* Forgot Password */}
          <p className="text-center text-gray-400 text-sm hover:text-amber-400 transition-colors cursor-pointer">
            Forgot your password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
