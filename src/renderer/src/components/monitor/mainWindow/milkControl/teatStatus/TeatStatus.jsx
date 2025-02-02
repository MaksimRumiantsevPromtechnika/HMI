import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
//Окно выбора режима соска

const TeatStatus = ({ modeTeatPopup, modeTeatPopupClose, currentTeat, changeTeat, }) => {
  const teatReducer = useSelector(state => state.teats.teatsInfo)
  const statuses = [teatReducer.teat1.status, teatReducer.teat2.status, teatReducer.teat3.status, teatReducer.teat4.status];
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
        open={modeTeatPopup}
      >
        <DialogContent sx={{ padding: "0px" }}>
          <div className="food-popup-content" style={{
            height: 'fit-content',
            width: 'fit-content',
            borderRadius: '10px',
            margin: 'auto',
            padding: '20px',
            border: 'solid 3px #2A569A',
            backgroundColor: '#fff'
          }}>
            <div style={{ display: 'flex', justifyContent: "space-between", gap: "20px" }}>
              <button className="button cup-unknow" onClick={() => changeTeat(currentTeat, 2)}></button>
              <button className="button cup-unknow-ind" disabled={statuses.includes(7) ? true : false} onClick={() => changeTeat(currentTeat, 4)}></button>
              <button className="button cup-clear" onClick={() => changeTeat(currentTeat, 7)}></button>
              <button className="button popup-contetn-close" onClick={() => modeTeatPopupClose()}></button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default TeatStatus;