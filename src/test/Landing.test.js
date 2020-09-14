import React from "react";
import { render } from "@testing-library/react";
import Landing from "../components/Landing";
import { BrowserRouter } from "react-router-dom";


test("Landing component render video", () => {
    const { container } = render(
        <BrowserRouter>
            <Landing />
        </BrowserRouter>);

    //Video
    const video = container.querySelector("#myVideo");
    expect(video).not.toBe(null);

    //Networks logos with their links
    const twitter = container.querySelector(".twitterLanding");
    expect(twitter).not.toBe(null);
    expect(twitter.parentElement.href).toBe("https://twitter.com/GomezPerezAlba");

    const linkedin = container.querySelector(".linkedinLanding");
    expect(linkedin).not.toBe(null);
    expect(linkedin.parentElement.href).toBe("https://www.linkedin.com/in/albagomezperez/");

    const github = container.querySelector(".githubLanding");
    expect(github).not.toBe(null);
    expect(github.parentElement.href).toBe("https://github.com/AlbaGomezPerez");

    //Waves
    const wave = container.querySelector(".wave");
    expect(wave).not.toBe(null);
    const wave2 = container.querySelector(".wave2");
    expect(wave2).not.toBe(null);
});

