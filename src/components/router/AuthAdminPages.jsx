import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store.jsx";

function AuthAdminPages() {
  const { user } = useAuthStore();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default AuthAdminPages;
