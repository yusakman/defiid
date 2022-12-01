import { useRef } from "react";

import "./style.scss";

const Banner = (props) => {
  const { setIsData } = props;

  const dataRef = useRef();
  const yieldRef = useRef();

  const handleTabs = (e) => {
    if (e.target.className === dataRef.current.className) {
      dataRef.current.className = "tab tab-active";
      yieldRef.current.className = "tab";
      setIsData(true);
    }

    if (e.target.className === yieldRef.current.className) {
      yieldRef.current.className = "tab tab-active";
      dataRef.current.className = "tab";
      setIsData(false);
    }
  };

  return (
    <div className="banner">
      <div className="banner-text">
        <p>Penyedia Informasi Seputar DeFi</p>
      </div>
      <div className="tabs">
        <button className="tab tab-active" onClick={handleTabs} ref={dataRef}>
          Data TVL
        </button>
        <button className="tab" onClick={handleTabs} ref={yieldRef}>
          Yields
        </button>
      </div>
    </div>
  );
};

export default Banner;
