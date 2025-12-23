import ModalHeader from './modalHeader/ModalHeader';
import ModalBody from './modalBody/ModalBody';
import ModalFooter from './modalFooter/ModalFooter';
import UserFields from './modalBody/UserFields';
import UserActions from './modalFooter/UserActions';

const ModalContent = ({ user, onClose ,isModalEditable,setIsModalEditable}) => {
    
  return (
    <>
      <ModalHeader user={user} onClose={onClose} />
      <ModalBody>
        <UserFields user={user} isModalEditable={isModalEditable} />
      </ModalBody>
      <ModalFooter>
        <UserActions onClose={onClose} setIsModalEditable={setIsModalEditable} />
      </ModalFooter>
    </>
  );
};

export default ModalContent;