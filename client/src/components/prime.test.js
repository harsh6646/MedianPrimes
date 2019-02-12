import React from "react";
import ReactDOM from "react-dom";
import Prime from "./prime";

describe("components/prime", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Prime />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
