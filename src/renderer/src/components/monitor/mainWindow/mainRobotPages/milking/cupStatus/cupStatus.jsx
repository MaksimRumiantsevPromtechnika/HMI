import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import useTcpConnection from "../../../../../../services/tcpService";
const net = require('net');

const MilkCups = ({ modeMilkPopup, hanleSetMode, modeMilkPopupClose, currentCup }) => {
  const TcpConnection = useTcpConnection()
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
              <button className="button cup-graphics-do-not-milk" onClick={() => TcpConnection.sendTcpData(`not_milk(${currentCup})`)}></button>
              <button className="button cup-graphics-remove-cup" onClick={() => TcpConnection.sendTcpData(`remove_cup(${currentCup})`)}></button>
              <button className="button cup-graphics-simulate-milk-flow" ></button>
              <button className="button cup-graphics-cancel-acr" onClick={() => TcpConnection.sendTcpData(`cancel_acr(${currentCup})`)}></button>
              <button className="button popup-contetn-close" onClick={() => modeMilkPopupClose()}></button>
            </div>
            {/* <button className="button popup-contetn-close" onClick={() => vacPopupClose()}></button> */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MilkCups;