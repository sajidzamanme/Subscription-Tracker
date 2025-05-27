import { Outlet } from "react-router";
import NavBar from "../components/Navbar";
import Modal from "../components/Modal";
import AddSubsciptionsModal from "../components/AddSubsciptionsModal";
import { useState } from "react";

const MainLayout = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-dvh w-full">
      <NavBar />

      <main className="h-[calc(100%-4rem)] w-full">
        <Outlet context={{ setShowModal }} />
      </main>

      {showModal && (
        <div className="fixed top-0 h-full w-full flex flex-col justify-center items-center">
          <div
            className="z-40 fixed top-0 h-full w-full bg-black opacity-20"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="z-50">
            <Modal
              modalComponent={
                <AddSubsciptionsModal setShowModal={setShowModal} />
              }
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
