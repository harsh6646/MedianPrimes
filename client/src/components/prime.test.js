import React from "react";
import ReactDOM from "react-dom";
import Prime from "./prime";
import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("components/prime", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Prime />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it("user input is echoed", () => {
  //   const wrapper = mount(<Prime />);
  //   const input = wrapper.find("#number");
  //   input.simulate("change", {
  //     target: { value: "testing" }
  //   });
  //   console.log("helpppp" + input.debug());
  //   expect(input.get(0).value).toEqual("testing");
  // });
});
