import React, {useState} from 'react';

function HomeWork() {
    const [planetData, setPlanetData] = useState(null);

    const fetchData = () => {
      fetch('https://swapi.dev/api/planets/1/')
        .then(response => response.json())
        .then(data => setPlanetData(data))
        .catch(error => console.error("Fetching error: ", error));
    };
    return (
        <div>
        <button onClick={fetchData}>Load Planet Info</button>
        {planetData && (
          <div>
            <h2>{planetData.name}</h2>
            <p>Population: {planetData.population}</p>
            <p>Climate: {planetData.climate}</p>
            <div>
              Residents:
              <ul>
                {planetData.residents.map((resident, index) => (
                  <li key={index}>
                    <a href={resident} target="_blank" rel="noopener noreferrer">{resident}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              Films:
              <ul>
                {planetData.films.map((film, index) => (
                  <li key={index}>
                    <a href={film} target="_blank">{film}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    );
}

export default HomeWork;