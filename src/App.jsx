import Router from "./components/router/index.jsx";
import { useAuthStore } from "./store/auth.store.jsx";
import { useEffect } from "react";
import { FetchData } from "./components/hooks/FetchData.jsx";
import { useCategoriesStore } from "./store/categories.store.jsx";

function App() {
  const verifyCookie = useAuthStore((state) => state.verifyCookie);
  const setCategories = useCategoriesStore((state) => state.setCategories);

  useEffect(() => {
    verifyCookie();
  }, [verifyCookie]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { getAllData } = FetchData("categories");
      const categoriesData = await getAllData();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return <Router />;
}

export default App;
