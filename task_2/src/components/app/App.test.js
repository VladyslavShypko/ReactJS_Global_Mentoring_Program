import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import ClassPure from "../classPure";
import ClassReact from "../classReact";
import FuncComp from "../funcComp";

it("should render ClassPure, ClassReact and FuncComp", () => {
  const wrapper = shallow(<App />);
  const classReact = wrapper.find(ClassReact);
  const classPure = wrapper.find(ClassPure);
  const funcComp = wrapper.find(FuncComp);

  expect(classReact.exists()).toBe(true);
  expect(classPure.exists()).toBe(true);
  expect(funcComp.exists()).toBe(true);
});
