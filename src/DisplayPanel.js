import React, { useState } from "react";

const DisplayPanel = (props) => {
  let [count, setCount] = useState(0);

  if (Number(count) >= props.movies.length) {
    count = 0;
  }
  if (Number(count) === -1) {
    count = props.movies.length - 1;
  }

  return (
    <div className="col-md-6">
      <div className="row p-4 no-gutters border rounded overflow-hidden  shadow-sm h-md-250 ">
        {" "}
        <h3 className="center">{count + 1 + " /" + props.movies.length}</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center posterWrap">
              {" "}
              <img
                src={props.movies[count].img}
                className="img-thumbnail img-fluid"
              />
            </div>
          </div>
          <div className="col-md-6">
            <h3 className="center">{props.movies[count].title} </h3>
            <p className="card-text mb-auto ml-1">
              {props.movies[count].details}
            </p>
            <hr />
            <i>Released: {props.movies[count].released}</i>{" "}
          </div>
        </div>
        <div className="btn-group form-control" role="group">
          <button
            className="btn btn-secondary"
            onClick={() => setCount(count - 1)}
          >
            Previous Movie
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setCount(count + 1)}
          >
            Next Movie
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayPanel;
