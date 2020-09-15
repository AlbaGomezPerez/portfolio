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

    //Header
    const headerNav = container.querySelector(".nav-wrapper");
    expect(headerNav).not.toBe(null);
    const navLinks = container.querySelectorAll(".link");
    expect(navLinks[0].href).toBe("http://localhost/#aboutMe");
    expect(navLinks[1].href).toBe("http://localhost/#projects");
    expect(navLinks[2].href).toBe("http://localhost/#contact");

    //Main
    const main = container.querySelector(".main");
    expect(main).not.toBe(null);

    //Footer
    const footerText = container.querySelector("#footer");
    expect(footerText.textContent).toBe("Alba Gómez Pérez ©2020");
});
