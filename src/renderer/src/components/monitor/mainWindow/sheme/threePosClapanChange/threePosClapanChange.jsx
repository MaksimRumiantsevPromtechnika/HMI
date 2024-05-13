import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
const net = require('net');

const ThreePosClapanChange = ({ onClose, valvePopup, currentValve, valveOpen, valveClose, sendStringByTcpPort }) => {
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
      open={valvePopup}>
      <DialogContent sx={{ padding: "0px" }}>
        <div className="klapan-mode-div">
          <div className="klapan-mode-content">
            <button className="klapan-mode-button sidetouch cow-air-mode-off" onClick={() => { valveClose("close", currentValve) }}></button>
            <button className="klapan-mode-button sidetouch cow-air-mode-on" onClick={() => {
              sendStringByTcpPort('Check')()
            }}></button>
            <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ThreePosClapanChange;