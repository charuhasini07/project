import React from "react";

function Modal({ closeModal }) {
  return (
    <div className="modal">
      <div className="modal-box">
        <h3>Success 🎉</h3>
        <p>Form submitted successfully</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
