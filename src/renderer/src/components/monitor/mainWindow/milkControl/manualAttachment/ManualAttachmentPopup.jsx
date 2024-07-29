import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import useTcpConnection from "../../../../../services/tcpService";
import CounterInput from "../../../../../utilites/CounterInput";
//Окно выбора времени задержки при ручном присоединении сосков
const ManualAttachmentPopup = ({ manualAttachmentPopup, manualAttachmentPopupClose }) => {

  const handleChange = (inputIndex) => (newValue) => {
    setInputValues(newValue)
  };

  const [inputValues, setInputValues] = useState(15)
  const TcpConnecion = useTcpConnection()
  const closeCow = (inputValues) => {
    TcpConnecion.sendTcpData(`set_manualattachment(${inputValues})`)
  }
  return (
    <>
      <Dialog sx={{ padding: "0px", width: "100%", }} PaperProps={{
        style: {
          backgroundColor: '#2a569a',
          borderRadius: 10,
          boxShadow: 'none',
          maxWidth: "1000px"
        },
      }}
        BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
        open={manualAttachmentPopup}
      >
        <DialogContent sx={{ padding: "0px" }}>
          <div className="food-popup-content" style={{
            height: 'fit-content',
            width: '440px',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            borderRadius: '10px',
            margin: 'auto',
            padding: '20px',
            border: 'solid 3px #2A569A',
            backgroundColor: '#fff'
          }}>
            <div className="food-inputs" style={{ paddingTop: '10px' }}>
              <CounterInput
                // index={index + 1}
                step={1}
                dimension={`сек`}
                initialVal={15}
                onChange={handleChange()}
                label={`Время задержки отсоединения`}
              />
            </div>
            <div className="food-controls" style={{
              display: "flex", justifyContent: "space-between", width: '100%'
            }}>
              <div style={{ display: 'flex' }}>
                <button className="button teat-cup-confirm" onClick={() => { closeCow(inputValues); manualAttachmentPopupClose() }}></button>
              </div>
              <button className="button popup-contetn-close" onClick={() => manualAttachmentPopupClose()}></button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ManualAttachmentPopup;