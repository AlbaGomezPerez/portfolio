import React from "react";
import { render } from "@testing-library/react";
import AboutMe from "../components/aboutMe/AboutMeDescription";
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import {mount} from "enzyme";
import {Progress, Typography} from "antd";


test("About me description component ", () => {
    const { container } = render(
        <BrowserRouter>
            <AboutMe />
        </BrowserRouter>);

    const introductionText = container.querySelector(".introductionMe");
    expect(introductionText.textContent).toBe("Mi nombre es Alba y soy desarrolladora Front-End");

    const myImage = container.querySelector(".profileImage");
    expect(myImage).not.toBe(null);
});

test("AboutMe title and progress is rendered", () => {
    const container = mount(<MemoryRouter><AboutMe /></MemoryRouter>);

    expect(container.find(Typography.Title).text()).toBe("Sobre mi")
    expect(container.find(Progress).prop('percent')).toBe(100)
});




