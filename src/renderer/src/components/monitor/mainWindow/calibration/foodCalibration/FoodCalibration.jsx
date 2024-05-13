import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTcpConnection from "../../../../../services/tcpService";
import CounterInput from "../../../../../utilites/CounterInput";

const FoodCalibration = ({ foodPopup, foodPopupClose }) => {
  const foodList = []
  const dispath = useDispatch()
  const TcpConnection = useTcpConnection()
  const [foodValue, setFoodValue] = useState(4)

  const handleChange = (inputIndex) => (newValue) => {
    setInputValues(oldValues =>
      oldValues.map((val, index) => (index === inputIndex ? newValue : val)),
    );
  };
  const [inputValues, setInputValues] = useState([0, 0, 0]);
  for (let i = 0; i < foodValue; i++) {
    foodList.push(<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexGrow: 1, borderRadius: '5px', border: 'solid 3px #2A569A', padding: '10px', marginRight: i !== foodValue - 1 ? '20px' : '0px' }}>Корм {i + 1}</div>)
  }
  const average = ((inputValues.reduce((a, b) => a + b, 0)) / 3).toFixed(1);
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
        open={foodPopup}
      >
        <DialogContent sx={{ padding: "0px" }}>
          <div className="food-popup-content" style={{
            height: 'fit-content',
            width: '450px',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            borderRadius: '10px',
            margin: 'auto',
            padding: '20px',
            border: 'solid 3px #2A569A',
            backgroundColor: '#fff'
          }}>
            <div className="food-nav bar" style={{
              height: '50px',
              width: '100%',
              display: 'flex',
              justifyContent: 'space-around',

            }}>
              {foodList}
            </div>
            <div className="food-inputs" style={{ paddingTop: '10px' }}>
              {inputValues.map((val, index) => (
                <CounterInput
                  // index={index + 1}
                  step={0.1}
                  dimension={`кг`}
                  initialVal={val}
                  onChange={handleChange(index)}
                  label={`Результат измерения №${index + 1}`}
                />
              ))}
              <p style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>Среднее значение:<p style={{ paddingLeft: '10px', fontSize: '20px', display: 'flex', alignItems: 'center' }}>{average} кг/мин</p></p>
            </div>
            <div className="food-controls" style={{
              display: "flex", justifyContent: "space-between", width: '100%'
            }}>
              <div style={{ display: 'flex' }}>
                <button className="button teat-cup-start" style={{ marginRight: '20px' }}></button>
                <button className="button teat-cup-confirm" ></button>
              </div>
              <button className="button popup-contetn-close" onClick={() => foodPopupClose()}></button>
              {/* <button className="button popup-contetn-close" onClick={() => vacPopupClose()}></button> */}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default FoodCalibration;