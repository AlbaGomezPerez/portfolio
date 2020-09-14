import React from "react";
import { render } from "@testing-library/react";
import Contact from "../components/Contact";
import { BrowserRouter } from "react-router-dom";


test("Contact component render video", () => {
    const { container } = render(
        <BrowserRouter>
            <Contact />
        </BrowserRouter>);

    //Contact text
    const contactText = container.querySelector(".contact-description");
    expect(contactText.textContent)
        .toBe("Si crees que puedo ser la persona adecuada para tu próximo proyecto no dudes en ponerte en contacto conmigo.Te espero en mis redes sociales.");

    //Networks logos with their links
    const twitter = container.querySelector(".twitter");
    expect(twitter).not.toBe(null);
    expect(twitter.parentElement.parentNode.href).toBe("https://twitter.com/GomezPerezAlba");

    const linkedin = container.querySelector(".linkedin");
    expect(linkedin).not.toBe(null);
    expect(linkedin.parentElement.parentNode.href).toBe("https://www.linkedin.com/in/albagomezperez/");

    const github = container.querySelector(".github");
    expect(github).not.toBe(null);
    expect(github.parentElement.parentNode.href).toBe("https://github.com/AlbaGomezPerez");

    const gmail = container.querySelector(".email");
    expect(gmail).not.toBe(null);
});

