import { Formik } from "formik";
import ModalHeader from "./modalHeader/ModalHeader";
import ModalBody from "./modalBody/ModalBody";
import ModalFooter from "./modalFooter/ModalFooter";
import UserFields from "./modalBody/UserFields";
import ProductFields from "./modalBody/ProductFields";
import ModalActions from "./modalFooter/ModalActions";

const ModalContent = ({
  data,
  type,
  onClose,
  isModalEditable,
  setIsModalEditable,
  handleSubmit,
  modalDataId,
}) => {
  return (
    <>
      <Formik>
        {({ handleSubmit }) => (
          <form>
            <ModalHeader data={data} type={type} onClose={onClose} />
            <ModalBody>
              {type === "user" ? (
                <UserFields user={data} isModalEditable={isModalEditable} />
              ) : (
                <ProductFields
                  product={data}
                  isModalEditable={isModalEditable}
                />
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
    </>
  );
};

export default ModalContent;
