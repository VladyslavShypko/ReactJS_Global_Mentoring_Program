import React from "react";
import { shallow } from "enzyme";
import FuncComp from "./FuncComp";

it('should render blank "Hello World"', () => {
  const wrapper = shallow(<FuncComp message={"Hello World"} />);
  const h1 = wrapper.find("h1").text();

  expect(h1).toBe("Hello World");
});
