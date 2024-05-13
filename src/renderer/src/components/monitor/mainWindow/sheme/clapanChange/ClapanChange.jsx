import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
const net = require('net');

const ClapanChange = ({ onClose, valvePopup, currentValve, valveOpen, valveClose, setOn, currentType, setOff }) => {

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
          {(() => {
            switch (currentType) {
              case 'Valve':
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch klapan-mode-off" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-on" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button> </div>
              case "Pump":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch pump-mode-off" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch pump-mode-on" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button> </div>

              case "Gate":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch gate-mode-close" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch gate-mode-open" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Food":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch food-mode-off" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch food-mode-on" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Air":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch cow-air-mode-off" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch cow-air-mode-on" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Valve-3-Right":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch klapan-mode-right-0" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-right-1" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Valve-3":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch klapan-mode-0" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-1" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Valve-3-Left":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch klapan-mode-left-0" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-left-1" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Brushes":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch brushes-clean-mode-off" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch brushes-clean-mode-on" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Brushes-lever":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch brushes-mode-off" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch brushes-mode-on" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Pulsator":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch pulsator-mode-off" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch pulsator-mode-on" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button>; </div>

              case "Cups":
                return <div className="klapan-mode-content"> <button className="klapan-mode-button sidetouch cup-mode-on" onClick={() => { setOff(currentValve) }}></button>
                  <button className="klapan-mode-button sidetouch cup-mode-off" onClick={() => {
                    setOn(currentValve)
                  }}></button>
                  <button className="klapan-mode-button sidetouch klapan-mode-close" onClick={handleClose}></button> </div>


              default:
                return <p>Default Content</p>
            }
          })()}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ClapanChange;