import React from "react";
import SideBar from "./sidebar";

export default function Connect() {
  return (
    <div id="App">
      <SideBar />
      <div id="page-wrap2">
        <div>
            {" "}
            <i className="fa fa-facebook-square"></i>
            <i className="fa fa-linkedin-square"></i>
            {" "}
            <i className="fa fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
