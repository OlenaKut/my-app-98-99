import React from "react";
import { useTimer } from "use-timer";
import User from "./User";

function Render({ data }) {
  const { time, start, pause, reset, status } = useTimer({ autostart: true });

  return (
    <div className="App container shadow-lg rounded-2 p-3">
      <User name={data.login} avatar={data.avatar_url} />
      <div className="shadow py-4 my-2">
        <div className="timer d-flex justify-content-center">
          <h6 className="me-2">You are lookig for me </h6>
          <h5 className="text-danger">{time}</h5>
          {status === "RUNNING"}
          <h6 className="ms-2">seconds</h6>{" "}
        </div>
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
    </div>
  );
}
export default Render;
