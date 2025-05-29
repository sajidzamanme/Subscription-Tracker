import AddSubsciptionsModal from "./AddSubsciptionsModal";
import ClickMenuModal from "./ClickMenuModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditSubscriptionsModal from "./EditSubscriptionsModal";
import UserDetailsModal from "./UserDetailsModal";

const Modal = ({
  modalContent,
  setModalContent,
  setShowModal,
  selectedSub,
  setSelectedSub,
}) => {
  return (
    <div className="w-full">
      {modalContent === "add" && (
        <AddSubsciptionsModal setShowModal={setShowModal} />
      )}
      {modalContent === "clickMenu" && (
        <ClickMenuModal setModalContent={setModalContent} />
      )}
      {modalContent === "edit" && (
        <EditSubscriptionsModal
          setShowModal={setShowModal}
          selectedSub={selectedSub}
        />
      )}
      {modalContent === "delete" && (
        <DeleteConfirmationModal
          setShowModal={setShowModal}
          setSelectedSub={setSelectedSub}
          selectedSub={selectedSub}
        />
      )}
      {modalContent === "user" && (
        <UserDetailsModal setShowModal={setShowModal} />
      )}
    </div>
  );
};

export default Modal;
