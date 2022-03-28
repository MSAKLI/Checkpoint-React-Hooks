import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Add({ addMovie }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //...................................//
  const [Title, setTitle] = useState("Movie");
  const [Description, setDescription] = useState("Description");

  const [PosterUrl, setPosterUrl] = useState("PosterUrl");
  const [Rate, setRate] = useState("Rate");

  //..................................//
  const handlAdd = () => {
    addMovie({ Title, Description, PosterUrl, Rate });
    handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new city</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            placeholder="add movie name"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="description">Description</label>
          <br />
          <input
            type="text"
            placeholder="add movie description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <label htmlFor="Rate">Rate</label>
          <br />
          <input
            type="text"
            placeholder="add Rate"
            onChange={(e) => setRate(e.target.value)}
          />
          <label htmlFor="PosterUrl">PosterUrl</label>
          <input
            type="text"
            placeholder="add PosterUrl"
            onChange={(e) => setPosterUrl(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export default Add;
