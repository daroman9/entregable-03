import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/SearchBox";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

//para obtener un valor aleatorio para enviar como id
const randomLocation = Math.floor(Math.random() * 126) + 1;

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div className="app">
      {
        <div>
          <SearchBox data={data} setData={setData} />
          <LocationInfo data={data} />
          {data.residents?.length === 0 ? (
            <p className="non-resident">Esta ubicación no tiene residentes.</p>
          ) : (
            <ResidentList data={data} />
          )}
        </div>
      }
    </div>
  );
}

export default App;
