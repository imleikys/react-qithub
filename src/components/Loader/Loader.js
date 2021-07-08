import React from "react";
import "./Loader.scss";

export const Loader = () => (
  <div className="center">
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </div>
);
