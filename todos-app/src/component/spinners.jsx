import React, { Component } from "react";

const Spinner = () => {
  return (
    <div class="d-flex justify-content-center">
      <div class="spinner-grow text-warning " role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
