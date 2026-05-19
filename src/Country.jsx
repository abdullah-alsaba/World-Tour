

const Country = ({ country }) => {
    

    return (
      <div className="border border-salmon p-6 space-y-3 ">
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <p>Name: {country.name.common}</p>
        <p>Official Name: {country.name.official}</p>
        <p>Region: {country.region.region}</p>
        <p>Area: {country.area.area}</p>
        <button className="btn btn-soft btn-accent">Visited</button>
      </div>
    );
};

export default Country;