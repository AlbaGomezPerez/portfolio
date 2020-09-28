import React from "react";
import { render } from "@testing-library/react";
import Project from "../components/projects/Projects";
import {BrowserRouter, Link} from "react-router-dom";
import {mount} from "enzyme";
import {Progress, Card} from "antd";
import {MemoryRouter} from "react-router";

const projects = [
    {
        id: 273230317,
        name: "users.search.ines",
        topics: [
            "css",
            "html",
            "javascript",
            "materialize",
            "portfolio",
            "react"
        ]
    },
    {
        id: 270694115,
        name: "angular-rocks-alba-gomez",
        topics: [
            "css",
            "html",
            "javascript",
            "materialize",
            "portfolio",
            "angular"
        ]
    },
    {
        id: 266110188,
        name: "alba-gomez-evidence-based-behavior",
        topics: [
            "css",
            "html",
            "javascript",
            "portfolio",
            "react"
        ]
    },
    {
        id: 228392785,
        name: "rentger-alba-gomez-perez",
        topics: [
            "css",
            "html",
            "javascript",
            "materialize",
            "portfolio",
            "react"
        ]
    },
    {
        id: 243966944,
        name: "g-m4-bridgeforbillions",
        topics: [
            "css",
            "html",
            "javascript",
            "antDesign",
            "portfolio",
            "react"
        ]
    },
    {
        id: 248974490,
        name: "alba-gomez-starwars",
        topics: [
            "css",
            "html",
            "javascript",
            "materialize",
            "portfolio",
            "angular"
        ]
    },
    {
        id: 290741474,
        name: "portfolio",
        topics: [
            "css",
            "html",
            "javascript",
            "materialize",
            "portfolio",
            "react",
            "antDesign"
        ]
    }
];

const images = [
        "https://raw.githubusercontent.com/AlbaGomezPerez/users.search.ines/master/src/images/project.png",
        "https://raw.githubusercontent.com/AlbaGomezPerez/angular-rocks-alba-gomez/master/src/images/project.png",
        "https://raw.githubusercontent.com/AlbaGomezPerez/alba-gomez-evidence-based-behavior/master/src/images/project.png",
        "https://raw.githubusercontent.com/AlbaGomezPerez/rentger-alba-gomez-perez/master/src/images/project.png",
        "https://raw.githubusercontent.com/AlbaGomezPerez/g-m4-bridgeforbillions/master/src/images/project.png",
        "https://raw.githubusercontent.com/AlbaGomezPerez/alba-gomez-starwars/master/src/images/project.png",
        "https://raw.githubusercontent.com/AlbaGomezPerez/portfolio/master/src/images/project.png"
];

const readmes = [
    {
        url: "https://api.github.com/repos/AlbaGomezPerez/users.search.ines/contents/README.md?ref=master",
        content: "IyBJbmVzIGluZ2VuaWVyb3MKVW4gcHJveWVjdG8gcmVhbGl6YWRvIHBhcmEgSW5lcyBJbmdlbmllcm9zLiBTZSB0cmF0YSBkZSB1bmEgcMOhZ2luYSByZWFsaXphZGEgZW4gUmVhY3QuIEVuIGVsbGEgZGViw61hIGFwYXJlY2VyIHVuIGxpc3RhZG8gZGUgdXN1YXJpb3MgeSB1biBidXNjYWRvciBwYXJhIHBvZGVyIGZpbHRyYXIuIEFkZW3DoXMsIGNhZGEgdXN1YXJpbyB0ZW7DrWEgcXVlIHRlbmVyIHVuYSBww6FnaW5hIGRlIGRldGFsbGUgZW4gbGEgcXVlIHBvZGVyIGNvbm9jZXIgbcOhcyBkZXRhbGxlcyBkZWwgbWlzbW8uIFVuYSBww6FnaW5hIHNlbmNpbGxhIGNvbiB1biBvYmpldGl2byBtdXkgY2xhcm8uCg=="
    },
    {
        url: "https://api.github.com/repos/AlbaGomezPerez/angular-rocks-alba-gomez/contents/README.md?ref=master",
        content: "IyBBbmd1bGFyIHJvY2tzCiMjIEludHJvZHVjdGlvbgpSb2NrIEJhbmRzIHdlYnNpdGUKCiMjIERlc2Ny"
    }
];

test("Project component render porjects cards", () => {
    const { container } = render(
        <BrowserRouter>
            <Project allProjects={projects} allImages={images} allReadmes={readmes}/>
        </BrowserRouter>);

    //Text projects
    const projectTitle = container.querySelector(".page__title");
    expect(projectTitle.textContent).toBe("Proyectos");

    //Project Image
    const projectImage = container.querySelectorAll(".project-image");
    expect(projectImage[0].src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/users.search.ines/master/src/images/project.png");
    expect(projectImage[1].src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/angular-rocks-alba-gomez/master/src/images/project.png");
    expect(projectImage[2].src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/alba-gomez-evidence-based-behavior/master/src/images/project.png");
    expect(projectImage[3].src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/rentger-alba-gomez-perez/master/src/images/project.png");
    expect(projectImage[4].src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/g-m4-bridgeforbillions/master/src/images/project.png");
    expect(projectImage[5].src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/alba-gomez-starwars/master/src/images/project.png");
    expect(projectImage[6].src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/portfolio/master/src/images/project.png");

    const projectCard = container.querySelector(".caption");
    expect(projectCard).not.toBe(null);

    //Topics
    const projectTopics = container.querySelectorAll(".allTopics");
    expect(projectTopics[0].firstElementChild.classList[1]).toBe("project-css");
    expect(projectTopics[1].children[1].classList[1]).toBe("project-html");
    expect(projectTopics[2].children[2].classList[1]).toBe("project-javascript");
    expect(projectTopics[3].children[3].classList[1]).toBe("project-materialize");
    expect(projectTopics[4].children[4].classList[1]).toBe("project-portfolio");
    expect(projectTopics[5].children[5].classList[1]).toBe("project-angular");
    expect(projectTopics[6].firstElementChild.classList[1]).toBe("project-css");
});

test("Project links and names are rendered", () => {
    const container = mount(<MemoryRouter>
        <Project
            allProjects={projects}
            allImages={images}
            allReadmes={readmes}/>
    </MemoryRouter>);

    expect(container.find(Link).at(0).prop('to')).toBe("/project/273230317")
    expect(container.find(Link).at(1).prop('to')).toBe("/project/270694115")
    expect(container.find(Link).at(2).prop('to')).toBe("/project/266110188")
    expect(container.find(Link).at(3).prop('to')).toBe("/project/228392785")
    expect(container.find(Link).at(4).prop('to')).toBe("/project/243966944")
    expect(container.find(Link).at(5).prop('to')).toBe("/project/248974490")

    expect(container.find(Progress).prop('percent')).toBe(100)

    expect(container.find(Card.Meta).at(0).text()).toBe(" Ines ingenieros")
    expect(container.find(Card.Meta).at(1).text()).toBe(" Angular rocks")
    expect(container.find(Card.Meta).at(2).text()).toBe("alba-gomez-evidence-based-behavior")
    expect(container.find(Card.Meta).at(3).text()).toBe("rentger-alba-gomez-perez")
    expect(container.find(Card.Meta).at(4).text()).toBe("g-m4-bridgeforbillions")
    expect(container.find(Card.Meta).at(5).text()).toBe("alba-gomez-starwars")

    // expect(container.find(Card).at(5).prop('cover')).toBe("/project/248974490")
});

