import { Suspense } from "react";
import Countries from "./Countries";
import Loading from "./Loading";
import "./index.css";
import Navbar from "./Navbar";


const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}



function App() {
const countriesPromise=fetchCountries()

  return (
    <>
      <Navbar/>
      <Suspense fallback={<Loading/>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
