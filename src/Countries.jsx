import { use } from 'react';
import './index.css'

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);
    console.log(countries)
  return (
    <div className="container mx-auto px-60 space-y-4 mt-20">
      <h1 className="text-4xl font-bold">Total Countries: </h1>
      <h1 className="text-3xl font-bold">Countries i visited:</h1>
    </div>
  );
};

export default Countries;