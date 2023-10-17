import { Box, Modal } from "@mui/material";
import React, { useState } from "react";

interface ModalProps {
  children: React.ReactNode;
  openedModal: boolean;
  onClose?: () => void;
}

export const ModalComponent = ({
  children,
  openedModal,
  onClose,
}: ModalProps) => {
  return (
    <Modal open={openedModal} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        {children}
      </Box>
    </Modal>
  );
};
