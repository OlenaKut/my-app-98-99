import { useState, useEffect } from "react";
import "./App.css";
import User from "./User";
import { Ellipsis } from "react-css-spinners";
import { useTimer } from "use-timer";
import Timer from "react-timer";

function App() {
  const [data, setData] = useState("");
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  const OPTIONS = { prefix: "seconds elapsed!", delay: 200 };

  const { time, start, pause, reset, status } = useTimer();

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      fetch("https://api.github.com/users/OlenaKut")
        .then((response) => response.json())
        .then((response) => setData(response))
        .then(() => setLoad(false))
        .catch(setError);
    }, 3000);
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
          <h6 className="col-3">You are lookig for me </h6>
          <div className="col-6 timer">
            <Timer options={OPTIONS} />
          </div>

          <h6 className="col-3">seconds</h6>
        </div>

        <>
          <div className="App container shadow rounded-2 p-2">
            <p>Elapsed time: {time}</p>
            {status === "RUNNING" && <p>Running...</p>}
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
        </>
      </div>
    );
  } else {
    return "Lol";
  }
}
export default App;
