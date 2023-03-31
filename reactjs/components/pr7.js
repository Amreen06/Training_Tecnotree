import React, { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button class = "bc" onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>Gooood</p>
            <button class = "ab" onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
