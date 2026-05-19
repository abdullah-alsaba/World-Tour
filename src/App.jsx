import { Suspense, useState } from "react";
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
const [search, setSearch] = useState("");
  return (
    <>
      <Navbar search={ search} setSearch={setSearch} />
      <Suspense fallback={<Loading/>}>
        <Countries countriesPromise={countriesPromise}
          search={ search} />
      </Suspense>
    </>
  );
}

export default App;
