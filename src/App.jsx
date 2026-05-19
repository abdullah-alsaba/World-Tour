import { Suspense } from "react";
import Countries from "./Countries";
import Loading from "./Loading";
import "./index.css";


const fetchCountries = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/all");
  return res.json();
}



function App() {
const countriesPromise=fetchCountries()

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Countries countriesPromise={countriesPromise} />
      </Suspense>
    </>
  );
}

export default App;
