import React, { useState } from "react";
import MovieData from "./MovieData";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import DeleteMovie from "./DeleteMovie";

function App() {
  let [count, setCount] = useState(0);
  let [movies, setMovies] = useState([...MovieData]);
  let [editSetting, setEdit] = useState("add");

  if (Number(count) >= movies.length) {
    count = 0;
  }
  if (Number(count) === -1) {
    count = movies.length - 1;
  }

  const clearForms = () => {
    [].forEach.call(
      document.querySelectorAll("input, textarea, select"),
      function (e) {
        e.value = "";
        e.selectedIndex = 0;
      }
    );
  };

  const addEntry = () => {
    const title = document.querySelector("input[name='title']").value;
    const released = document.querySelector("input[name='released']").value;
    const img = document.querySelector("input[name='img']").value;
    const details = document.querySelector("textarea[name='details']").value;

    setMovies((movies) => [
      ...movies,
      { title: title, released: released, img: img, details: details },
    ]);

    clearForms();
  };

  const editEntry = () => {
    const id = document.querySelector("input[name='id']").value;
    const title = document.querySelector("input[name='title']").value;
    const released = document.querySelector("input[name='released']").value;
    const img = document.querySelector("input[name='img']").value;
    const details = document.querySelector("textarea[name='details']").value;

    for (let i = 0; i < movies.length; i++) {
      if (id == movies[i].id) {
        movies[i].title = title;
        movies[i].released = released;
        movies[i].img = img;
        movies[i].details = details;
      }
    }
    setMovies((movies) => [...movies]);
    clearForms();
  };

  const deleteMovie = () => {
    let whichMovie = document.getElementById("whichMovie").value;

    let tempMovies = [];
    for (let i = 0; i < movies.length; i++) {
      console.log(
        "whichMovie: " + whichMovie + " movies[i].id: " + movies[i].id
      );
      if (Number(whichMovie) !== Number(movies[i].id)) {
        tempMovies.push(movies[i]);
      }
    }
    console.log("JSON.stringify(tempMovies): " + JSON.stringify(tempMovies));
    setMovies((movies) => [...tempMovies]);
    clearForms();
  };

  return (
    <div className="container">
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row p-4 no-gutters border rounded overflow-hidden  shadow-sm h-md-250 ">
            {" "}
            <h3 className="center">{count + 1 + " /" + movies.length}</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex justify-content-center posterWrap">
                  {" "}
                  <img
                    src={movies[count].img}
                    className="img-thumbnail img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="center">{movies[count].title} </h3>
                <p className="card-text mb-auto ml-1">
                  {movies[count].details}
                </p>
                <hr />
                <i>Released: {movies[count].released}</i>{" "}
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

        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
            <div
              className="btn-group form-control"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                className={
                  editSetting === "add"
                    ? "btn btn-secondary active"
                    : "btn btn-secondary"
                }
                onClick={() => setEdit("add")}
              >
                Add
              </button>
              <button
                type="button"
                className={
                  editSetting === "edit"
                    ? "btn btn-secondary active"
                    : "btn btn-secondary"
                }
                onClick={() => setEdit("edit")}
              >
                Update
              </button>
              <button
                type="button"
                className={
                  editSetting === "delete"
                    ? "btn btn-secondary active"
                    : "btn btn-secondary"
                }
                onClick={() => setEdit("delete")}
              >
                Delete
              </button>
            </div>
            {editSetting === "add" ? <AddMovie addEntry={addEntry} /> : null}
            {editSetting === "edit" ? (
              <EditMovie movies={movies} editEntry={editEntry} />
            ) : null}
            {editSetting === "delete" ? (
              <DeleteMovie movies={movies} deleteMovie={deleteMovie} />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

/*

The Color of Money
1986
https://m.media-amazon.com/images/M/MV5BNGY4NGEzY2QtZmIwYS00NzkwLWI0MmItZmVjYjU0YzM3ZjBmXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg


Fast Eddie Felson teaches a cocky but immensely talented protégé the ropes of pool hustling, which in turn inspires him to make an unlikely comeback.
--------------------------------------------

Tightrope

1984

https://m.media-amazon.com/images/M/MV5BODg3YzE2NjEtNzZhMS00YzFhLTg0OGUtMjVmYjQ4YmViNjdiXkEyXkFqcGdeQXVyMTYxNjkxOQ@@._V1_UX182_CR0,0,182,268_AL_.jpg

New Orleans single dad and cop Wes Block (Clint Eastwood) goes after a serial rapist-killer, but when he gets too close to the target, the hunter suddenly becomes the hunted.
*/
