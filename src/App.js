import { useState, useEffect } from "react";
import "./App.css";
import User from "./User";
import { Ellipsis } from "react-css-spinners";
import { useTimer } from "use-timer";

function App() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  const { time, start, pause, reset, status } = useTimer({ autostart: true });

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
    return (
      <div className="App container shadow-lg rounded-2 p-2">
        <User name={data.login} avatar={data.avatar_url} />
        <div className="d-flex justify-content-center line shadow py-4">
          <h6 className="col-4">You are lookig for me </h6>
          <div className="col-5 timer">
            <h5 className="text-danger">{time}</h5>
            {status === "RUNNING"}
            <div className="buttons">
              <button onClick={start} className="btn btn-danger m-1">
                Start
              </button>
              <button onClick={pause} className="btn btn-danger m-1">
                Pause
              </button>
              <button onClick={reset} className="btn btn-danger m-1">
                Reset
              </button>
            </div>
          </div>

          <h6 className="col-3">seconds</h6>
        </div>
      </div>
    );
  } else {
    return "Lol";
  }
}
export default App;
