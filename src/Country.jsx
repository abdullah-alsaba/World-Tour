

const Country = ({ country }) => {
    

    return (
      <div>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
        <p>Name: {country.name.common}</p>
            <p>Official Name: {country.name.official}</p>
            <p>Region: {country.region.region }</p>
            <p>Area: { country.area.area}</p>
      </div>
    );
};

export default Country;