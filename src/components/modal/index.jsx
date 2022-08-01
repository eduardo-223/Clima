import React from "react";

import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Style } from "./styled";

const ModalComponent = ({ modal, setOpenModal, signal }) => {
  const handleClose = () => setOpenModal(false);

  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Style>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Alertas
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {signal.length > 0 ? signal[0] : "Sem alertas!!"}
        </Typography>
      <Button onClick={handleClose}>Fechar</Button>
      </Style>
    </Modal>
  );
};

export default ModalComponent;
