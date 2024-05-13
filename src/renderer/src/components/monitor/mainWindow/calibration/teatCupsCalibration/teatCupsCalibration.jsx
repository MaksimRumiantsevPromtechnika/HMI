import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const TaetCupsCalibration = ({ teatCupPopup, teatCupPopupClose }) => {
  return (
    <Dialog sx={{ padding: "0px", width: "100%", }} PaperProps={{
      style: {
        backgroundColor: '#2a569a',
        borderRadius: 10,
        boxShadow: 'none',
        maxWidth: "1000px"
      },
    }}
      BackdropProps={{ style: { backgroundColor: "rgb(255, 255, 255, .66)", backdropFilter: "blur(2px)" } }}
      open={teatCupPopup}
    >
      <DialogContent sx={{ padding: "0px" }}>
        <div className="teat-cup-content">
          <div className="teat-cup-field"></div>
          <div className="teat-footer">
            <button className="button teat-cup-start"></button>
            <div className="teat-cup-control">
              <button className="button teat-cup-abort" onClick={() => teatCupPopupClose()}></button>
              <button className="button teat-cup-confirm"></button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default TaetCupsCalibration;