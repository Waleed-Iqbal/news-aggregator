//#region Imports
// React
// import React from "react";
// NextJS

// Third party

// Custom Components

// Interfaces

// Constants

// Content

// Others

// Assets

// Styles
//#endregion

import "./loader-teardrop.scss";

export function LoaderTeardrop(props: any) {
  return (
    <div className={`loader-teardrop ${props.isDark ? "dark" : ""}`}></div>
  );
}
