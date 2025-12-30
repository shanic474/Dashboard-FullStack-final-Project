import { useFormikContext } from "formik";
import { useState } from "react";

const EditableInput = ({ name, isEditable, type = "text", defaultValue }) => {
  const { values, setFieldValue } = useFormikContext(); 
  const [value, setValue] = useState(defaultValue || values[name] || "");

  const handleChange = (e) => {
    const newVal = e.target.value;
    setValue(newVal);
    console.log(newVal); // show the new value
    setFieldValue(name, newVal); // update Formik for this field
  };

  return isEditable ? (
    <input
      type={type}
      value={value}
      onChange={handleChange}
      className="sm:text-lg w-full p-2 rounded-sm bg-gray-800 text-white border border-gray-700"
    />
  ) : (
    <p className="sm:text-lg w-full p-2 rounded-sm text-gray-300 font-mono break-all">
      {value || "N/A"}
    </p>
  );
};

export default EditableInput;
