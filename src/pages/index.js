import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import Banner from "./../components/modules/home3/Banner";
import Work from "@/components/modules/home3/Work";
import Benifits from "@/components/modules/home2/Benifits";
import Roadmap from "@/components/modules/index/Roadmap";
import Token from "@/components/modules/home3/Token";
SwiperCore.use([Autoplay, Navigation, Pagination]);
import { fetchData } from "@/apiConfig";
// import Team from "@/components/modules/index/Team";

const Home = () => {
  const [, setCompleted] = useState([]);
  const [, setData] = useState([]);
  const [tokenomics, setTokenomics] = useState([]);

  const Spacer = () => {
    return <div style={{ height: `70px` }}></div>;
}

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/completed");
        setCompleted(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/tokenomics");
        setTokenomics(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/notes");
        setData(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  return (
    <>
      <Banner />
      <div style={{ height: '100px' }}></div>
      <div id="details">
      <Work />
      </div>
      <Benifits />
      <Spacer />
      <div id="tokenomics">
      <Token tokenomics={tokenomics} />
      </div>
     
      
      <Spacer />
      <div id="roadmap">
      <Roadmap />
</div>
      
      
      <Spacer />
    </>
  );
};
export default Home;
