import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import ProtocolTable from "../../components/ProtocolTable";
import YieldsTable from "../../components/YieldsTable";
import staticAssets from "../../const/static";

import { loadProtocols, loadYields, loadCurrency } from "../../store/interactions";

import { useDispatch } from "react-redux"; 
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const Home = () => {
  const dispatch = useDispatch()
  const [isData, setIsData] = useState(true);

  const loadAllData = async () => {
    await loadProtocols(dispatch);
    loadYields(dispatch);
    loadCurrency(dispatch);
  }

  const props = {
    staticAssets,
    isData,
    setIsData,
  };

  useEffect(() => {
    loadAllData()
  });

  return (
    <div>
      <Navbar {...props}></Navbar>
      <Banner {...props}></Banner>
      {
        isData ? <ProtocolTable /> : <YieldsTable />
      }
      <CTA {...props}></CTA>
      <Footer {...props}></Footer>
    </div>
  );
};

export default Home;
