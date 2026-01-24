import { Formik } from "formik";
import ModalHeader from "./modalHeader/ModalHeader";
import ModalBody from "./modalBody/ModalBody";
import ModalFooter from "./modalFooter/ModalFooter";
import UserFields from "./modalBody/UserFields";
import ProductFields from "./modalBody/ProductFields";
import CreateProductFields from "./modalBody/CreateProductFields";
import CreateUserFields from "./modalBody/CreateUserFields";
import ModalActions from "./modalFooter/ModalActions";
import updateDataInDB from "./hook/updateDataInDB";
import createDataInDB from "./hook/createDataInDB";
import * as Yup from "yup";

const productSchema = Yup.object({
  product_name: Yup.string().required("Product name is required"),
  product_category: Yup.string().required("Category is required"),
  product_price: Yup.number().min(0).required("Price is required"),
});

const userSchema = Yup.object({
  user_name: Yup.string().required("Name is required"),
  user_email: Yup.string().email("Invalid email").required("Email is required"),
});

const ModalContent = ({
  data,
  type,
  onClose,
  isModalEditable,
  setIsModalEditable,
  modalDataId,
  isCreateMode,
  onDataChange,
}) => {
  // Define initial values based on type and mode
  const initialValues = isCreateMode
    ? type === "user"
      ? {
          user_name: "",
          user_email: "",
          password: "",
          phone_number: "",
          user_role: "user",
          age: null,
          height_cm: null,
          weight_kg: null,
        }
      : {
          product_name: "",
          product_category: "",
          product_price: 0,
          product_description: "",
          product_image: "",
          stock: 0,
          calories: 0,
          carbs: 0,
          protein: 0,
          fat: 0,
          minerals: 0,
          vitamins: 0,
          micronutrients: 0,
        }
    : type === "user"
      ? {
          user_name: data.user_name,
          user_email: data.user_email,
        }
      : {
          product_name: data.product_name,
          product_category: data.product_category,
          product_price: data.product_price,
          stock: data.stock,
        };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={type === "product" ? productSchema : userSchema}
      onSubmit={async (values) => {
        if (isCreateMode) {
          // Create new item
          console.log("Creating new", type, "with values:", values);
          await createDataInDB(type, values);
          onDataChange?.();
          onClose();
        } else {
          // Update existing item
          const changedValues = {};

          Object.keys(values).forEach((key) => {
            if (values[key] !== initialValues[key]) {
              changedValues[key] = values[key];
            }
          });

          console.log("Submitting values:", changedValues);
          updateDataInDB(modalDataId, type, changedValues); 
          onDataChange?.();
          setIsModalEditable(false);
        }
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <ModalHeader
            data={data}
            type={type}
            onClose={onClose}
            isCreateMode={isCreateMode}
          />
          <ModalBody>
            {isCreateMode && type === "product" ? (
              <CreateProductFields />
            ) : isCreateMode && type === "user" ? (
              <CreateUserFields />
            ) : type === "user" ? (
              <UserFields user={data} isModalEditable={isModalEditable} />
            ) : (
              <ProductFields product={data} isModalEditable={isModalEditable} />
            )}
          </ModalBody>
          <ModalFooter>
            <ModalActions
              onClose={onClose}
              isModalEditable={isModalEditable}
              setIsModalEditable={setIsModalEditable}
              handleSubmit={handleSubmit}
              modalDataId={modalDataId}
              type={type}
              isCreateMode={isCreateMode}
            />
          </ModalFooter>
        </form>
      )}
    </Formik>
  );
};

export default ModalContent;
