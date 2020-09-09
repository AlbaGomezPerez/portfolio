import React from "react";
import { render } from "@testing-library/react";
import Landing from "../components/Landing";
import { BrowserRouter } from "react-router-dom";




test("Landing component render video", () => {
    const { container } = render(
        <BrowserRouter>
            <Landing />
        </BrowserRouter>);
    const video = container.querySelector("#myVideo");

    expect(video).not.toBe(null);
});
