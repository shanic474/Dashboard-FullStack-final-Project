import { Formik } from "formik";
import ModalHeader from "./modalHeader/ModalHeader";
import ModalBody from "./modalBody/ModalBody";
import ModalFooter from "./modalFooter/ModalFooter";
import UserFields from "./modalBody/UserFields";
import ProductFields from "./modalBody/ProductFields";
import ModalActions from "./modalFooter/ModalActions";
import updateDataInDB from "./hook/updateDataInDB";

const ModalContent = ({
  data,
  type,
  onClose,
  isModalEditable,
  setIsModalEditable,
  modalDataId,
}) => {
  // Define initial values based on type
  const initialValues =
    type === "user"
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
      onSubmit={(values) => {
        const changedValues = {};

        Object.keys(values).forEach((key) => {
          if (values[key] !== initialValues[key]) {
            changedValues[key] = values[key];
          }
        });

        console.log("Submitting values:", changedValues);
        updateDataInDB(modalDataId, type, changedValues); // save to DB
        setIsModalEditable(false);
      }}
    >
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <ModalHeader data={data} type={type} onClose={onClose} />
          <ModalBody>
            {type === "user" ? (
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
            />
          </ModalFooter>
        </form>
      )}
    </Formik>
  );
};

export default ModalContent;
