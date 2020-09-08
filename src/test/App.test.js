import React from "react";
import { render } from "@testing-library/react";
import Landing from "../components/Landing";
// import App from "./../App";
// import { BrowserRouter } from "react-router-dom";





test("Landing component render input text", () => {
    const { container } = render(<Landing />);
    const video = container.querySelector("#myVideo");

    expect(video).not.toBe(null);
});
