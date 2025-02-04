import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={"Asd"} />
    <StarRating maxRating={10} color="red" size="30" className="test" />
    <StarRating messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]} />
    <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
