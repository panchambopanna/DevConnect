import React from "react";
import logo from "../../img/page_not_found.webp";

const img = () => {
  return (
    <div>
      <img src={logo} alt="" />
      <h1 className="x-large text-primary text-center">Page not found</h1>
      <p className="text-center">Sorry, this page does not exist!</p>
    </div>
  );
};

export default img;
