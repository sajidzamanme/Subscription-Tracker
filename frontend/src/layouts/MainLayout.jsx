import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
import Modal from "../components/Modal";
import AddSubsciptionsModal from "../components/AddSubsciptionsModal";
import { useState } from "react";
import EditSubscriptionsModal from "../components/EditSubscriptionsModal";

const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("add");
  const [selectedSub, setSelectedSub] = useState(null);

  return (
    <div className="h-dvh w-full">
      <NavBar />

      <main className="h-[calc(100%-4rem)] w-full">
        <Outlet context={{ setShowModal, setModalContent, setSelectedSub }} />
      </main>

      {showModal && (
        <div className="fixed top-0 h-full w-full flex flex-col justify-center items-center">
          <div
            className="z-40 fixed top-0 h-full w-full bg-black opacity-20"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="z-50">
            {modalContent === "add" && (
              <Modal
                modalComponent={
                  <AddSubsciptionsModal setShowModal={setShowModal} />
                }
              />
            )}
            {modalContent === "edit" && (
              <Modal
                modalComponent={
                  <EditSubscriptionsModal setShowModal={setShowModal} selectedSub={selectedSub} />
                }
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
