import React, { useState } from "react";
import Modal from "./Modal";

const Problem2 = () => {
  const [modalAOpen, setModalAOpen] = useState(false);
  const [modalBOpen, setModalBOpen] = useState(false);

  const openModalA = () => {
    setModalAOpen(true);
  };

  const openModalB = () => {
    setModalBOpen(true);
  };

  const closeModalA = () => {
    setModalAOpen(false);
  };

  const closeModalB = () => {
    setModalBOpen(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={openModalA}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={openModalB}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>

        {/* modal */}
        <Modal id="A" isOpen={modalAOpen} onClose={closeModalA} />

        <Modal id="B" isOpen={modalBOpen} onClose={closeModalB} />
      </div>
    </div>
  );
};

export default Problem2;
