import { useEffect, useRef } from "react";
import "./style.scss";

const CTA = (props) => {
  const { staticAssets } = props;
  const myRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://eocampaign1.com/form/d9ecc0ce-7077-11ed-a114-836b6218b744.js";
    script.async = true;
    script.setAttribute("data-form", "d9ecc0ce-7077-11ed-a114-836b6218b744");

    const myRefNode = myRef.current;
    myRefNode.appendChild(script);

    const id = "d9ecc0ce-7077-11ed-a114-836b6218b744";

    return () => {
      const nodes = document.querySelectorAll(`[data-form=${id}]`);
      nodes.forEach(function (node) {
        node.parentNode.removeChild(node);
      });
    };
  }, []);

  return (
    <div className="cta-wrapper">
      <div className="data-provider-wrapper">
        <h5 className="data-provider-text">Data Disediakan Oleh</h5>
        {staticAssets.dataProvider.map((item) => (
          <div className="data-provider-content" key={item.id}>
            <a href={`https://defillama.com/`} target="_blank" rel="noreferrer">
              <img className={item.id} src={item.logo} alt={item.text}></img>
            </a>
          </div>
        ))}
      </div>
      <div className="octopus-wrapper">
        <h5>Dapatkan Informasi Terupdate Soal DeFi</h5>
        <div className="form-octopus" id="form-octopus" ref={myRef}></div>
      </div>
    </div>
  );
};

export default CTA;

<script async data-form=""></script>;
