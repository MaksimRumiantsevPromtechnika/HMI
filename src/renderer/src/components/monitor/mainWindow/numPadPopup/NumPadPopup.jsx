import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";



const NumPadPopup = ({ children, onClose, openPopup }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog sx={{ padding: "0px", width: "100%" }} PaperProps={{
      style: {
        backgroundColor: '#2a569a',
        borderRadius: 10,
        boxShadow: 'none',
      },
    }}
      BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
      open={openPopup}
      onClose={handleClose}>
      <DialogContent sx={{ padding: "0px" }}>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default NumPadPopup;