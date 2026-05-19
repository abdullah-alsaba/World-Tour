import { useState } from "react";

const Country = ({ country, handelVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handelVisited = () => {
    setVisited(!visited);
    handelVisitedCountries(country);
  };


  return (
    <div
      className={`border rounded-2xl p-6 space-y-3 ${visited ? "border-green-400" : "border-red-800"}`}
    >
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <p>Name: {country.name.common}</p>
      <p>Official Name: {country.name.official}</p>
      <p>Region: {country.region.region}</p>
      <p className="">
        Area: {country.area.area}
        <span className="ml-2">
          {country.area > 300000 ? "Big Country" : "Small Country"}
        </span>
      </p>
      <button
        className={`btn ${visited ? "btn-success" : "btn-error"}`}
        onClick={handelVisited}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
