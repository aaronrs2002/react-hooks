import React, { useState } from "react";

const EditSettings = (props) => {
  return (
    <div
      className="btn-group form-control"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        className={
          props.editSetting === "add"
            ? "btn btn-secondary active"
            : "btn btn-secondary"
        }
        onClick={() => props.setEdit("add")}
      >
        Add
      </button>
      <button
        type="button"
        className={
          props.editSetting === "edit"
            ? "btn btn-secondary active"
            : "btn btn-secondary"
        }
        onClick={() => props.setEdit("edit")}
      >
        Update
      </button>
      <button
        type="button"
        className={
          props.editSetting === "delete"
            ? "btn btn-secondary active"
            : "btn btn-secondary"
        }
        onClick={() => props.setEdit("delete")}
      >
        Delete
      </button>
    </div>
  );
};

export default EditSettings;
