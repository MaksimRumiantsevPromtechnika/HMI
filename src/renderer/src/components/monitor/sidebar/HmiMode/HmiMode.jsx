import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
const net = require('net');

const HmiMode = ({ modePopup, hanleSetMode, modePopupClose, handleModeChange, changeMode }) => {
  return (
    <Dialog sx={{ padding: "0px", width: "100%" }} PaperProps={{
      style: {
        backgroundColor: '#2a569a',
        borderRadius: 10,
        boxShadow: 'none',
      },
    }}
      BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
      open={modePopup}
      onClose={modePopupClose}>
      <DialogContent sx={{ padding: "0px" }}>
        <div className="change-mode-content">
          <button className="change-mode-button sidetouch change-mode-stop" onClick={() => { changeMode("stop"), modePopupClose() }} />
          <button className="change-mode-button sidetouch change-mode-pause" onClick={() => { changeMode("pause"), modePopupClose() }} />
          <button className="change-mode-button sidetouch change-mode-play" onClick={() => { changeMode("start"), modePopupClose() }} />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default HmiMode;