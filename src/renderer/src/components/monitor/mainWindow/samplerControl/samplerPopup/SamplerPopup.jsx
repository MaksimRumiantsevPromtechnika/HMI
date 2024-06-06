import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
const net = require('net');

const SamplerPopup = ({ samplerPopup, samplerPopupClose, changeSamplerMode }) => {
  return (
    <Dialog sx={{ padding: "0px", width: "100%" }} PaperProps={{
      style: {
        backgroundColor: '#2a569a',
        borderRadius: 10,
        boxShadow: 'none',
      },
    }}
      BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
      open={samplerPopup}
      onClose={samplerPopupClose}>
      <DialogContent sx={{ padding: "0px" }}>
        <div className="change-mode-content">
          <button className="change-mode-button sidetouch change-mode-stop" onClick={() => { changeSamplerMode("stop"), samplerPopupClose() }} />
          <button className="change-mode-button sidetouch change-mode-play" onClick={() => { changeSamplerMode("start"), samplerPopupClose() }} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SamplerPopup;