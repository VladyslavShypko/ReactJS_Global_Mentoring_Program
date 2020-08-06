import React from "react";
import { shallow } from "enzyme";
import ClassPure from "./ClassPure";

it('should render blank "Hello World"', () => {
  const wrapper = shallow(<ClassPure message={"Hello World"} />);
  const h1 = wrapper.find("h1").text();

  expect(h1).toBe("Hello World");
});
