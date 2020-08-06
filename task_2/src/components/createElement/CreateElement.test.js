import React from "react";
import { shallow } from "enzyme";
import CreateElement from "../createElement";

it('should render blank "Hello World"', () => {
  const wrapper = shallow(<CreateElement message={"Hello World"} />);
  const h1 = wrapper.find("h1").text();

  expect(h1).toBe("Hello World");
});
