import React, { useState } from "react";
import MovieData from "./MovieData";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import DeleteMovie from "./DeleteMovie";
import DisplayPanel from "./DisplayPanel";
import EditSettings from "./EditSettings";

function App() {
  let [movies, setMovies] = useState([...MovieData]);
  let [editSetting, setEdit] = useState("add");

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
        <DisplayPanel movies={movies} />

        <div className="col-md-6">
          <div className="row no-gutters border rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
            <EditSettings setEdit={setEdit} editSetting={editSetting} />
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
