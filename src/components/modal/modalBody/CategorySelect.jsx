import { useFormikContext, ErrorMessage } from "formik";
import { useCategoriesStore } from "../../../store/categories.store.jsx";

const CategorySelect = ({ name, isEditable }) => {
  const { values, setFieldValue } = useFormikContext();
  const categories = useCategoriesStore((s) => s.categories);  

  if (!isEditable) {
    return (
      <p className="sm:text-lg w-full p-2 rounded-sm text-gray-300 font-mono">
        {values[name] || "N/A"}
      </p>
    );
  }

  return (
    <div className="w-full">
      <select
        value={values[name] || ""}
        onChange={(e) => setFieldValue(name, e.target.value)}
        className="sm:text-lg w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700 focus:border-amber-500"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.category_name}
          </option>
        ))}
      </select>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default CategorySelect;
