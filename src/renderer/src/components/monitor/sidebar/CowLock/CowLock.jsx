import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
const CowLock = ({ lockCowPopup, lockCow, lockCowPopupClose }) => {
  //Всплывающее окно удержания животного с выбором времени удержания
  return (
    <>
      {/* Настройка всплывающего окна */}
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
            {/* //Выбор продолжительности удержания */}
            <div className="milk-mode-content">
              <button className="milk-mode-button sidetouch" style={{ fontSize: "26px" }} onClick={() => { lockCowPopupClose(), lockCow(0) }}><p>5</p><p style={{ fontSize: "18px", marginTop: "7px" }}>мин.</p></button>
              <button className="milk-mode-button sidetouch" style={{ fontSize: "26px" }} onClick={() => { lockCowPopupClose(), lockCow(1) }}><p>10</p><p style={{ fontSize: "18px", marginTop: "7px" }}>мин.</p></button>
              <button className="milk-mode-button sidetouch" style={{ fontSize: "26px" }} onClick={() => { lockCowPopupClose(), lockCow(2) }}><p>15</p><p style={{ fontSize: "18px", marginTop: "7px" }}>мин.</p></button>
              <button className="milk-mode-button sidetouch milk-mode-close" onClick={() => lockCowPopupClose()}></button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CowLock;