import "./style.scss";

const Footer = (props) => {
  const { staticAssets } = props;

  const navList = staticAssets.navbarList;
  const socials = staticAssets.socials;

  return (
    <div className="footer">
      <div className="footer-nav">
        {navList.map((item) => (
          <a className="footer-link" id={item.id} href={item.url} key={item.id}>
            {item.text}
          </a>
        ))}
      </div>
      <div className="footer-icon">
        {socials.map((item) => (
          <div className={item.id} key={item.id}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <img src={item.icon} alt={item.text}></img>
            </a>
          </div>
        ))}
      </div>
      <p>Made by DeFi ID Team</p>
    </div>
  );
};

export default Footer;
