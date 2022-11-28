import { useState, useEffect } from "react";
import "./App.css";
import Render from "./Render";
import { Ellipsis } from "react-css-spinners";

function App() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      fetch("https://api.github.com/users/OlenaKut")
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoad(false))
        .catch(setError);
    }, 2000);
  }, []);

  if (error) {
    return <h1>Error!</h1>;
  }

  if (load) {
    return (
      <div className="App">
        <Ellipsis color="#09532c" size={200} />
      </div>
    );
  } else if (data) {
    console.log(data);
    return <Render data={data} />;
  } else {
    return "Lol";
  }
}
export default App;
