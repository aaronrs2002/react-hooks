import React, { useState } from "react";

const DeleteMovie = (props) => {
  let [deleteId, setDelete] = useState("");

  const selectDelete = () => {
    setDelete((deleteId) => document.getElementById("whichMovie").value);
  };

  const clearDelete = () => {
    setDelete((deleteId) => "");
  };

  return (
    <div className="col p-4 d-flex flex-column position-static">
      <h3 className="mb-0">Delete Movie</h3>
      <select className="form-control" id="whichMovie" onChange={selectDelete}>
        <option>Delete Movie</option>
        {props.movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      {deleteId !== "" ? (
        <div>
          <button className="btn btn-secondary" onClick={clearDelete}>
            No
          </button>
          <button className="btn btn-danger" onClick={props.deleteMovie}>
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DeleteMovie;
