import { useState } from "react";
import Backdrop from "./backdrop";
import Modal from "./modal";

function Todo(props) {
  const [modalIsOpen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);
  }

  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal
          title={props.title}
          onCancel={closeModalHandler}
          onConfirm={closeModalHandler}
        />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
