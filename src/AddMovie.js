import React, { useState } from "react";

const AddMovie = (props) => {
  return (
    <div className="col p-4 d-flex flex-column position-static">
      <h3 className="mb-0">Add Movie</h3>
      <div className="form-group">
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Title"
        />
        <input
          type="text"
          name="released"
          className="form-control"
          placeholder="Year Released"
        />
        <input
          type="text"
          name="img"
          className="form-control"
          placeholder="IMDB Poster"
        />
        <textarea
          name="details"
          rows="5"
          className="form-control"
          placeholder="Details"
          maxLength="275"
        ></textarea>
        <button
          className="btn btn-block btn-secondary"
          onClick={props.addEntry}
        >
          Add Movie
        </button>
      </div>
    </div>
  );
};

export default AddMovie;
