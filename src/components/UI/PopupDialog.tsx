import { Dialog, DialogTitle } from "@mui/material";
import React from "react";

export const PopupDialog = ({
  openDialog,
  text,
  closeDialog,
}: {
  openDialog: boolean;
  text: string;
  closeDialog: () => void;
}) => {
  return (
    <Dialog open={openDialog} onClose={closeDialog}>
      <DialogTitle id="responsive-dialog-title">{text}</DialogTitle>
    </Dialog>
  );
};
