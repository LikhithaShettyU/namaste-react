import React from "react";
import { createRoot } from "react-dom/client"; 
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I'm h1 tag</h1>
 *      </div>
 * 
 * </div>
 * 
 * 
 * ReactElement(Object) => HTML(Browser Understands)
 */ 

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { key: "h2" }, "I'm Likhitha"),
  ])
);

        
console.log(parent);     

const root = createRoot(document.getElementById("root"));

root.render(parent);