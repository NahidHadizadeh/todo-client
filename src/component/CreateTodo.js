import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createNewTodoAPI } from "../API/todoListAPI";

function CreateTodo({ handleCloseModal, ShowModal }) {
  const navigate = useNavigate();
  const [NewTodoTitle, setNewTodoTitle] = useState({ title: "" });

  // handel submit form
  function handleSubmit(e) {
    e.preventDefault();
    // close modal
    handleCloseModal();
    // create new todo API
    createNewTodoAPI(NewTodoTitle);
    // change url
    navigate("/");
    // refresh page for display all todos
    navigate(0);

    setNewTodoTitle({ title: "" });
    // change url
  }

  return (
    <Modal show={ShowModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title Todo:</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter todo title"
              autoFocus
              onChange={(e) =>
                setNewTodoTitle({ title: e.target.value})
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
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateTodo;
