import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import useTcpConnection from "../../../../../services/tcpService";
import CanvasImage from "./CanvasImage";

const CameraCalibration = ({ cameraPopup, cameraPopupClose }) => {
  const cameraMap = useSelector(state => state.cameraMap.cameraMap)
  const TcpConnection = useTcpConnection()
  return (
    <Dialog sx={{ padding: "0px", width: "100%", }} PaperProps={{
      style: {
        backgroundColor: '#2a569a',
        borderRadius: 10,
        boxShadow: 'none',
        maxWidth: "526px"
      },
    }}
      BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
      open={cameraPopup}
    >
      <DialogContent sx={{ padding: "0px" }}>
        <div className="camera-popup-content">
          <div className="camera-popup-content-main">
            <CanvasImage digits={cameraMap} />
          </div>
          <div className="button popup-contetn-close" onClick={() => { cameraPopupClose(); TcpConnection.cancelCameraConnection(); TcpConnection.sendTcpDataCamera("stop") }}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CameraCalibration;