import React from "react";
import { render } from "@testing-library/react";
import App from "./../App";
import { BrowserRouter } from "react-router-dom";


test("Render footer, header and main components", () => {
    const { container } = render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    const headerNav = container.querySelector(".nav-wrapper");
    expect(headerNav).not.toBe(null);

    const main = container.querySelector(".main");
    expect(main).not.toBe(null);


    const footerText = container.querySelector("#footer");
    expect(footerText.textContent).toBe(
        "Alba Gómez Pérez ©2020"
    );
});
