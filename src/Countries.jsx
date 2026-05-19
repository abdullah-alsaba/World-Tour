import { use } from "react";
import "./index.css";
import Country from "./Country";

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries

  return (
    <div className="container mx-auto px-60 space-y-4 mt-20 ">
      <h1 className="text-4xl font-bold">
        Total Countries: {countries.length}{" "}
      </h1>
      <h1 className="text-3xl font-bold">Countries i visited:</h1>
      <div className="grid grid-cols-3 gap-4">
        {countries.map((country) => (
          <Country country={country} key={country.ccn3.ccn3} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
