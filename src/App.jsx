import { Suspense, useState } from "react";
import Countries from "./Countries";
import Loading from "./Loading";
import "./index.css";
import Navbar from "./Navbar";
import Pricings from "./Components/Pricings";
import PricingData from "./Data/PricingData.json"


const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}






function App() {
const countriesPromise=fetchCountries()
const [search, setSearch] = useState("");
  return (
    <>
      <Suspense fallback={<Loading></Loading>}>
        <Pricings PricingData={PricingData}></Pricings>
      </Suspense>


      {/* <Navbar search={ search} setSearch={setSearch} />
      <Suspense fallback={<Loading/>}>
        <Countries countriesPromise={countriesPromise}
          search={ search} />
      </Suspense> */}
    </>
  );
}

export default App;
