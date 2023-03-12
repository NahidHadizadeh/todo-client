import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateOneTodoAPI } from "../API/todoListAPI";

function EditTodo({ handleCloseModal, ShowModal, TodoForEdit }) {
  const navigate = useNavigate();
  const [UpdaeTodo, setUpdaeTodo] = useState({
    id: TodoForEdit.id,
    title: TodoForEdit.title,
    // date: TodoForEdit.date,
  });
  useEffect(() => {
    setUpdaeTodo(TodoForEdit);
  }, [TodoForEdit]);
  // handel submit form
  function handleSubmit(e) {
    e.preventDefault();
    // close modal
    handleCloseModal();

    updateOneTodoAPI(TodoForEdit.id, UpdaeTodo);
    // change url
    navigate(0);
    navigate("/");

    // set initioal value for todo
    setUpdaeTodo({ id: "", title: "" });
    // change url
  }

  return (
    <Modal show={ShowModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title Todo:</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter todo title"
              value={UpdaeTodo?.title}
              autoFocus
              onChange={(e) =>
                setUpdaeTodo({ ...UpdaeTodo, title: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditTodo;
