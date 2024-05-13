import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
const net = require('net');

const CowLock = ({ lockCowPopup, lockCow, lockCowPopupClose }) => {
  return (
    <>
      <Dialog sx={{ padding: "0px", width: "100%" }} PaperProps={{
        style: {
          backgroundColor: '#2a569a',
          borderRadius: 10,
          boxShadow: 'none',
        },
      }}
        BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
        open={lockCowPopup}
      >
        <DialogContent sx={{ padding: "0px" }}>
          <div className="milk-mode-div">
            <div className="milk-mode-content">
              <button className="milk-mode-button sidetouch" style={{ fontSize: "26px" }} onClick={() => { lockCowPopupClose(), lockCow(0) }}><p>5</p><p style={{ fontSize: "18px" }}>мин.</p></button>
              <button className="milk-mode-button sidetouch" style={{ fontSize: "26px" }} onClick={() => { lockCowPopupClose(), lockCow(1) }}><p>10</p><p style={{ fontSize: "18px" }}>мин.</p></button>
              <button className="milk-mode-button sidetouch" style={{ fontSize: "26px" }} onClick={() => { lockCowPopupClose(), lockCow(2) }}><p>15</p><p style={{ fontSize: "18px" }}>мин.</p></button>
              <button className="milk-mode-button sidetouch milk-mode-close" onClick={() => lockCowPopupClose()}></button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CowLock;