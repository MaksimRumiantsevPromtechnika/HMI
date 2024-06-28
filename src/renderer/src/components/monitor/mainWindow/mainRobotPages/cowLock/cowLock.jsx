const CowLock = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className='timer'>
          <div className='timer-icon'>
          </div>
          <p className='timer-count'>{"0:00"}</p>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "50px" }}>
        <div className="status-cow-in-cell-bar">
          <div className="status-cow-close-icon home-status-icon" />
          <div className="cow-in-cell-id">1234</div>
        </div>
        <div className="status-milk-transport-bar" style={{ display: "flex", flexDirection: "column", alignItems: "cen" }}>
          <button className="milking-touch status-cow-milking-icon sidetouch"></button>
          <div className="double-milking" style={{ fontSize: "38px", width: "60px", marginLeft: "45px" }}>2X</div>
        </div>
      </div>
    </>
  );
}

export default CowLock;
