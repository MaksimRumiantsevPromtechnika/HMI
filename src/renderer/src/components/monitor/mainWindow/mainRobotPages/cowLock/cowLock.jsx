const CowLock = () => {
  return (
    <>
      <div className="status-cow-in-cell-bar">
        <div className="status-cow-close-icon home-status-icon" />
        <div className="cow-in-cell-id">1234</div>
      </div>
      <div className="status-milk-transport-bar">
        <button className="milking-touch status-cow-milking-icon sidetouch"></button>
        <p className="double-milking" style={{ fontSize: "38px", width: "60px", textAlign: 'center' }}>2X</p>
      </div>
    </>
  );
}

export default CowLock;
