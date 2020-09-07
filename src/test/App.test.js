import React from "react";
import Landing from "../components/Landing";
import App from "./../App";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";


// test("Render footer and home components", () => {
//     const { container } = render(
//         <BrowserRouter basename="/portfolio">
//             <App />
//         </BrowserRouter>
//     );
//     const header = container.querySelector("header");
//     const nav = container.querySelector(".nav-wrapper");
//
//     expect(header).not.toBe(null);
//     expect(nav).not.toBe(null);
//
//     const footer = container.querySelector("#footer");
//
//     expect(footer.textContent).toBe(
//         "Alba Gómez Pérez ©2020"
//     );
//
//     const home = container.querySelector(".main");
//
//     expect(home).not.toBe(null);
// });


test("Filters component render input text", () => {
    const { container } = render(<Landing />);
    const video = container.querySelector("#myVideo");

    expect(video).not.toBe(null);
});
