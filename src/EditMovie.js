import React, { useState } from "react";

const EditMovie = (props) => {
  const fillInput = () => {
    const whichMovie = document.getElementById("whichMovie").value;

    for (let i = 0; i < props.movies.length; i++) {
      if (whichMovie == props.movies[i].id) {
        document.querySelector("input[name='id']").value = props.movies[i].id;

        document.querySelector("input[name='title']").value =
          props.movies[i].title;
        document.querySelector("input[name='released']").value =
          props.movies[i].released;
        document.querySelector("input[name='img']").value = props.movies[i].img;
        document.querySelector("textarea[name='details']").value =
          props.movies[i].details;
      }
    }
  };

  return (
    <div className="col p-4 d-flex flex-column position-static">
      <select className="form-control" id="whichMovie" onChange={fillInput}>
        <option>Edit Movie</option>
        {props.movies.map((movie) => {
          return (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          );
        })}
      </select>
      <div className="form-group">
        <input type="hidden" name="id" value="" />
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
          onClick={props.editEntry}
        >
          Edit Movie
        </button>
      </div>
    </div>
  );
};

export default EditMovie;
