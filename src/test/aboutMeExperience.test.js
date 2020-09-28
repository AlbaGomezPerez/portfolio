import {render} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import AboutExperience from "../components/aboutMe/Experience";
import React from "react";


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

