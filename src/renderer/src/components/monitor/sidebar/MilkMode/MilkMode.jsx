import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
//Окно выбора направления молока
const MilkMode = ({ modeMilkPopup, changeDestination, modeMilkPopupClose }) => {
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
        open={modeMilkPopup}
      >
        <DialogContent sx={{ padding: "0px" }}>
          <div className="milk-mode-div">
            <div className="milk-mode-content">
              <button className="milk-mode-button sidetouch milk-mode-remove" onClick={() => { modeMilkPopupClose(), changeDestination(2) }}></button>
              <button className="milk-mode-button sidetouch milk-mode-backet" onClick={() => { modeMilkPopupClose(), changeDestination(1) }}></button>
              <button className="milk-mode-button sidetouch milk-mode-tanker" onClick={() => { modeMilkPopupClose(), changeDestination(0) }}></button>
              <button className="milk-mode-button sidetouch milk-mode-close" onClick={() => modeMilkPopupClose()}></button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MilkMode;