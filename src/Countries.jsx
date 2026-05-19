import { use } from 'react';
import './index.css'
import Country from './Country';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise);

  return (
    <div className="container mx-auto px-60 space-y-4 mt-20">
      <h1 className="text-4xl font-bold">Total Countries: </h1>
          <h1 className="text-3xl font-bold">Countries i visited:</h1>
          
          {
              countries.map(country => <Country country={country} />)
          }
    </div>
  );
};

export default Countries;