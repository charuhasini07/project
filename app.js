import React, { useState } from "react";
import Form from "./components/Form";
import Modal from "./components/Modal";
import Toggle from "./components/Toggle";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={dark ? "app dark" : "app"}>
      <div className="container">
        
        <Toggle dark={dark} setDark={setDark} />
        
        <Form openModal={() => setShowModal(true)} />

        {showModal && (
          <Modal closeModal={() => setShowModal(false)} />
        )}

      </div>
    </div>
  );
}

export default App;
