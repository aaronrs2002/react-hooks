import React, { useState } from "react";
import MovieData from "./MovieData";

function App() {
  let [count, setCount] = useState(0);
  let [movies, setMovies] = useState([...MovieData]);

  if (Number(count) >= movies.length) {
    count = 0;
  }
  if (Number(count) === -1) {
    count = movies.length - 1;
  }

  const addEntry = () => {
    const title = document.querySelector("input[name='title']").value;
    const released = document.querySelector("input[name='released']").value;
    const img = document.querySelector("input[name='img']").value;
    const details = document.querySelector("textarea[name='details']").value;

    setMovies((movies) => [
      ...movies,
      { title: title, released: released, img: img, details: details },
    ]);
    document.querySelector("input[name='title']").value = "";
    document.querySelector("input[name='released']").value = "";
    document.querySelector("input[name='img']").value = "";
    document.querySelector("textarea[name='details']").value = "";
  };
  console.log("JSON.stringify(allMovies): " + JSON.stringify(movies));
  return (
    <div className="row mb-2">
      <div className="col-md-6">
        <div className="row p-4 no-gutters border rounded overflow-hidden  shadow-sm h-md-250 ">
          {" "}
          <h3 className="center">{count + 1 + " /" + movies.length}</h3>
          <div className="row">
            <div className="col-md-3">
              <div class="d-flex justify-content-center">
                {" "}
                <img src={movies[count].img} className="img-thumbnail" />
              </div>
            </div>
            <div className="col-md-9">
              <h3 className="center">{movies[count].title} </h3>
              <p className="card-text mb-auto ml-1">{movies[count].details}</p>
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
                placeholder="Released"
              />
              <input
                type="text"
                name="img"
                className="form-control"
                placeholder="Poster"
              />
              <textarea
                name="details"
                rows="5"
                className="form-control"
                placeholder="Details"
              ></textarea>
              <button
                className="btn btn-block btn-secondary"
                onClick={addEntry}
              >
                Add Movie
              </button>
            </div>
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
