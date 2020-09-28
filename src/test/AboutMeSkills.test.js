import React from "react";
import { render } from "@testing-library/react";
import AboutSkills from "../components/aboutMe/AboutMeSkills";
import Skills from "../components/aboutMe/SkillsProgress";
import {BrowserRouter, MemoryRouter} from "react-router-dom";
import {mount} from "enzyme";
import {Progress} from "antd";

test("About skills component ", () => {
    const { container } = render(
        <BrowserRouter>
            <AboutSkills />
        </BrowserRouter>);

    const skillsText = container.querySelector(".skillsDescription");
    expect(skillsText.textContent)
        .toBe("El equilibrio adecuado entre mis habilidades técnicas y personales es la clave para el desarrollo de mis proyectos");

    // const progress = container.querySelectorAll(".percentage__circle");

    // expect(progress[0].textContent).toBe("HTML/CSS");
    // expect(progress[1].textContent).toBe("Javascript");
    // expect(progress[2].textContent).toBe("React");
    // expect(progress[3].textContent).toBe("Angular");
    // expect(progress[4].textContent).toBe("TypeScript");
    // expect(progress[5].textContent).toBe("Jest");
    // expect(progress[6].textContent).toBe("Git");
    // expect(progress[7].textContent).toBe("GitHub");
    // expect(progress[8].textContent).toBe("SCRUM");
    // expect(progress[9].textContent).toBe("Jira");
    // expect(progress[10].textContent).toBe("Trello");
    // expect(progress[11].textContent).toBe("Adobe");
    // expect(progress[12].textContent).toBe("Creativa");
    // expect(progress[13].textContent).toBe("Curiosa");
    // expect(progress[14].textContent).toBe("Positiva");
    // expect(progress[15].textContent).toBe("Trabajo");
});

test("AboutMe title and progress is rendered", () => {
    const container = mount(<MemoryRouter><Skills /></MemoryRouter>);

    expect(container.find(Progress).at(0).text()).toBe("HTML/CSS")
    expect(container.find(Progress).at(1).text()).toBe("Javascript")
    expect(container.find(Progress).at(2).text()).toBe("React")
    expect(container.find(Progress).at(3).text()).toBe("Angular")
    expect(container.find(Progress).at(4).text()).toBe("TypeScript")
    expect(container.find(Progress).at(5).text()).toBe("Jest")
    expect(container.find(Progress).at(6).text()).toBe("Git")
    expect(container.find(Progress).at(7).text()).toBe("GitHub")
    expect(container.find(Progress).at(8).text()).toBe("SCRUM")
    expect(container.find(Progress).at(9).text()).toBe("Jira")
    expect(container.find(Progress).at(10).text()).toBe("Trello")
    expect(container.find(Progress).at(11).text()).toBe("Adobe")
    expect(container.find(Progress).at(12).text()).toBe("Creativa")
    expect(container.find(Progress).at(13).text()).toBe("Curiosa")
    expect(container.find(Progress).at(14).text()).toBe("Positiva")
    expect(container.find(Progress).at(15).text()).toBe("Trabajo")
    expect(container.find(Progress)).toHaveLength(16)
});
