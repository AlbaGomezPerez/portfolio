import React from "react";
import { render } from "@testing-library/react";
import Landing from "../components/Landing";
// import App from "./../App";
// import { BrowserRouter } from "react-router-dom";



<<<<<<< HEAD


test("Landing component render input text", () => {
    const { container } = render(<Landing />);
=======
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
>>>>>>> f7df7558873af4a34752dcfc69e104dbba52fdee
    const video = container.querySelector("#myVideo");

    expect(video).not.toBe(null);
});
