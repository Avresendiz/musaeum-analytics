import React from "react";
import Modal from "react-bootstrap/Modal";

export default function MainModal() {
  const [show, setShow] = React.useState(true);

  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="xl"
        show={show}
        centered
      >
        <Modal.Body>
          <iframe
            src="https://drive.google.com/file/d/1IPiQGgF7qMJCHdTtEnjB-s6TbvIOZMCN/preview"
            title="Musaeum Analytics"
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
