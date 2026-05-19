

const Country = ({ country }) => {
    const { message } = country;

    return <div>
        <p>
           Message: {message}; 
      </p>
  </div>;
};

export default Country;