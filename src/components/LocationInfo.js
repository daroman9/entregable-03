const LocationInfo = ({ data }) => {
  return (
    <div className="location-container">
      <h2>{data.name}</h2>
      <ul className="location-info">
        <li>
          <b>Type: </b>
          {data.type}
        </li>
        <li>
          <b>Dimension: </b>
          {data.dimension}
        </li>
        <li>
          <b>Population: {data.residents?.length}</b>
        </li>
      </ul>
      {data.residents?.length !== 0 ? (
        <h1 className="title">Residents</h1>
      ) : null}
    </div>
  );
};

export default LocationInfo;
