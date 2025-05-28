import AddSubsciptionsModal from "./AddSubsciptionsModal";
import ClickMenuModal from "./ClickMenuModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditSubscriptionsModal from "./EditSubscriptionsModal";

const Modal = ({
  modalContent,
  setModalContent,
  setShowModal,
  selectedSub,
  setSelectedSub,
}) => {
  return (
    <>
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
    </>
  );
};

export default Modal;
