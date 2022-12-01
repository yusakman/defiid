import "./style.scss";

const AboutComponent = (props) => {
  const { staticAssets } = props;
  const aboutList = staticAssets.aboutList;

  return (
    <div className="about">
      <h2>About</h2>
      {aboutList.map((item) => (
        <div className="about-list" key={item.id}>
          <img src={item.icon} alt={item.id}></img>
          <p>{item.text}</p>
        </div>
      ))}
      <div className="cta-text">
        <h3>Tertarik untuk diskusi DeFi?</h3>
        <button>
          <a href={`https://t.me/defiidgroup`} target="_blank" rel="noreferrer">
            Begabung
          </a>
        </button>
      </div>
    </div>
  );
};

export default AboutComponent;
