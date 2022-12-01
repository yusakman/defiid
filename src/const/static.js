import logoDeFiIllama from "../assets/defillama-dark.svg";
import twitterIcon from "../assets/TwitterLogo.svg";
import telegramIcon from "../assets/TelegramLogo.svg";
import facebookIcon from "../assets/FacebookLogo.svg";
import instagramIcon from "../assets/InstagramLogo.svg";
import ethIcon from "../assets/CurrencyEth.svg";
import bookIcon from "../assets/BookBookmark.svg";
import coinIcon from "../assets/CoinVertical.svg";

const staticAssets = {
  currencyRate: [
    {
      id: 'USDIDR',
      rate: 15402
    }
  ],
  navbarList: [
    {
      id: "about",
      text: "About",
      url: "/about",
    },
    {
      id: "tvl",
      text: "Data TVL",
      url: "/#protokol",
    },
  ],
  dataProvider: [
    {
      id: "defiillama",
      text: "DeFi Illama",
      logo: logoDeFiIllama,
      ur: "https://defillama.com/",
    },
  ],
  socials: [
    {
      id: "twitter",
      text: "Twitter",
      username: "defiidgroup",
      url: "https://twitter.com/defiidgroup",
      icon: twitterIcon,
    },
    {
      id: "telegram",
      text: "Telegram",
      username: "defiidgroup",
      url: "https://t.me/defiidgroup",
      icon: telegramIcon,
    },
    {
      id: "facebook",
      text: "Facebook",
      username: "defiidgroup",
      url: "https://www.facebook.com/groups/defiidgroup",
      icon: facebookIcon,
    },
    {
      id: "instagram",
      text: "Instagram",
      username: "defiidgroup",
      url: "https://www.instagram.com/defiidgroup/",
      icon: instagramIcon,
    },
  ],
  aboutList: [
    {
      id: "text1",
      text: "Kami percaya Decentralized Finance (DeFi) merupakan masa depan industri finansial.",
      icon: ethIcon,
    },
    {
      id: "text2",
      text: "Dibutuhkan banyak kontributor untuk mencapai tujuan tersebut.",
      icon: coinIcon,
    },
    {
      id: "text3",
      text: "Oleh karenanya, DeFi ID Group lahir. Untuk menjadi wadah, bagi para antusias DeFi. Sekaligus meningkatkan literasi DeFi.",
      icon: bookIcon,
    },
  ],
};

export default staticAssets;
