import React from "react";

import Banner from "../components/Banner";
import CateBanner from "../components/CateBanner";
import Cateloge from "../components/Cateloge";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import TopNavigation from "../components/TopNavigation";

const Home = () => {
  
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, [dispatch]);
  
  // const { products } = useSelector((state) => state.products);

  // const product = products.slice(0, 15).map((product) => product);

  // console.log(product);

  return (
    <>
      <TopNavigation />
      <Navigation />
      <Banner />
      <Cateloge />
      <CateBanner />
      <Footer />
    </>
  );
};

export default Home;
