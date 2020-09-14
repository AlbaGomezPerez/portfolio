import React from "react";
import { render } from "@testing-library/react";
import AboutMe from "../components/aboutMe/AboutMeDescription";
import AboutSkills from "../components/aboutMe/AboutMeSkills";
import AboutExperience from "../components/aboutMe/Experience";
import { BrowserRouter } from "react-router-dom";


//ABOUT ME DESCRIPTION
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

//ABOUT ME SKILLS
test("About skills component ", () => {
    const { container } = render(
        <BrowserRouter>
            <AboutSkills />
        </BrowserRouter>);

    const skillsText = container.querySelector(".skillsDescription");
    expect(skillsText.textContent)
        .toBe("El equilibrio adecuado entre mis habilidades técnicas y personales es la clave para el desarrollo de mis proyectos");

    const progress = container.querySelectorAll(".percentage__circle");

    expect(progress[0].textContent).toBe("HTML/CSS");
    expect(progress[1].textContent).toBe("Javascript");
    expect(progress[2].textContent).toBe("React");
    expect(progress[3].textContent).toBe("Angular");
    expect(progress[4].textContent).toBe("TypeScript");
    expect(progress[5].textContent).toBe("Jest");
    expect(progress[6].textContent).toBe("Git");
    expect(progress[7].textContent).toBe("GitHub");
    expect(progress[8].textContent).toBe("SCRUM");
    expect(progress[9].textContent).toBe("Jira");
    expect(progress[10].textContent).toBe("Trello");
    expect(progress[11].textContent).toBe("Adobe");
    expect(progress[12].textContent).toBe("Creativa");
    expect(progress[13].textContent).toBe("Curiosa");
    expect(progress[14].textContent).toBe("Positiva");
    expect(progress[15].textContent).toBe("Trabajo");
});

//ABOUT ME EXPERIENCE
test("About me experience component ", () => {
    const { container } = render(
        <BrowserRouter>
            <AboutExperience />
        </BrowserRouter>);

    const timeLine = container.querySelector(".timeline");
    expect(timeLine).not.toBe(null);

    const experience = timeLine.querySelectorAll("span");
    expect(experience[0].textContent).toBe("Formación Angular");
    expect(experience[1].textContent).toBe("Formación React");
    expect(experience[2].textContent).toBe("Desarrollador Front-End");
    expect(experience[3].textContent).toBe("Bootcamp desarrollo Front-End");
    expect(experience[4].textContent).toBe("Director creativo");
    expect(experience[5].textContent).toBe("Grado en Diseño de Moda");

    const button = container.querySelector(".curriculumButton");
    expect(button.parentElement.href).toBe("http://localhost/AlbaGomezPerez.pdf");
});
