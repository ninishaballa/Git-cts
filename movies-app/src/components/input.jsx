import React, { Component } from "react";

const Input = ({
  inputName,
  value,
  type,
  handleInput,
  label,
  error,
  disabled
}) => {
  //const { inputName, value, type, handleInput, label } = props; //deconst...ring

  return (
    <div>
      <label htmlFor={inputName}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={inputName}
        name={inputName}
        value={value}
        onChange={handleInput}
        disabled={disabled}
      />
      {error && <p className="text text-danger small">{error} *</p>}
    </div>
  );
};

export default Input;
