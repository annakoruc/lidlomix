import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Icon from "@mdi/react";

export const useModalWithInformation = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>("");

  const openModal = (icon: string, text: string) => {
    setModalContent(
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Icon path={icon} size={2} />
        <Typography>{text}</Typography>
      </Box>
    );
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return { modalIsOpen, openModal, closeModal, modalContent };
};
