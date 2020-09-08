import React from "react";
import Landing from "../components/Landing";
import App from "./../App";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";


test("Render footer and home components", () => {
    const { container } = render(
        <BrowserRouter basename="/portfolio">
            <App />
        </BrowserRouter>
    );
    const header = container.querySelector(".app");

    expect(header).not.toBe(null);

});


test("Filters component render input text", () => {
    const { container } = render(
        <BrowserRouter>
        <Landing />
        </BrowserRouter>);
    const video = container.querySelector("#myVideo");

    expect(video).not.toBe(null);
});
