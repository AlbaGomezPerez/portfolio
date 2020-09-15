import React from "react";
import { render } from "@testing-library/react";
import ProjectDetail from "../components/projects/ProjectDetail";
import { BrowserRouter } from "react-router-dom";

const projects = [
    {
        id: 273230317,
        name: "users.search.ines",
        homepage: "https://z8isz.csb.app/",
        description: "Un proyecto realizado para Ines Ingenieros. Se trata de una página realizada en React. En ella debía aparecer un listado de usuarios y un buscador para poder filtrar. Además, cada usuario tenía que tener una página de detalle en la que poder conocer más detalles del mismo. Una página sencilla con un objetivo muy claro.",
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
        homepage: "https://albagomezperez.github.io/angular-rocks-alba-gomez/",
        description: "Angular Rocks se trata de una página web que recopila bandas de rock de los años 70. El usuario puede crear nuevas bandas o eliminar las que no le gusten. Además, tiene un buscador para facilitar la búsqueda. Para cada banda se ha creado una página de detalle en la que se puede descubrir más datos como, el país de origen de la banda, los miembros del grupo, su sitio web...Sin duda, un lugar ideal para los amantes del buen rock.",
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
        homepage: "https://albagomezperez.github.io/alba-gomez-evidence-based-behavior/",
        description: "Un proyecto realizado para Evidence Based Behaviour. En esta web se plantea una solución para pacientes preocupados por su salud. Se trata de una página que muestra un listado de usuarios y datos acerca de su rutina diaria, como pueden ser, horas de sueño, lugares visitados...y toda esta información es mostrada en una serie de gráficas para facilitar la lectura.",
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
        homepage: "https://albagomezperez.github.io/rentger-alba-gomez-perez/#/",
        description: "Una prueba divertida y muy colorida. Se trata de una página realizada en React sobre los personajes de la serie animada 'Rick and Morty'. Se muestra un listado de todos los personajes y un buscador para filtrarlos. Además, cada personaje tiene su propia página de detalle donde se muestra más información acerca de ellos.",
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
        homepage: "http://beta.adalab.es/g-m4-bridgeforbillions/",
        description: "Tealify es un proyecto en colaboración con Bridge For Billions. La aplicación muestra la trayectoria de cada uno de los trabajadores dentro de la empresa. Cada usuario puede ver tanto sus habilidades técnicas como las personales y así poder desarrollarlas dependiendo del nivel de cada una de ellas.",
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
        homepage: "https://albagomezperez.github.io/alba-gomez-starwars/",
        description: "Un proyecto inspirado en el universo Star Wars. Se trata de una página que muestra un listado de naves espaciales y unas barras de progreso que reflejan los porcentajes de cada uno de sus atributos.",
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
        homepage: "https://albagomezperez.github.io/portfolio/",
        description: "Mi portfolio personal donde se muestra parte de mi trabajo. Esta página web ha sido creada con React y en ella puedes conocer acerca de mis proyectos, mis experiencia profesional, mis habilidades técnicas y personales y muchas más cosas. ¡Descubre más sobre mi!",
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

const match = {
    params: {
        id: "248974490"
    }
};

test("Project detail component render details of project", () => {

    const { container } = render(
        <BrowserRouter>
            <ProjectDetail allProjects={projects} allImages={images} allReadmes={readmes} Match={match}/>
        </BrowserRouter>);

    //Project Image
    const projectImage = container.querySelector(".image-project-detail");
    expect(projectImage.src)
        .toBe("https://raw.githubusercontent.com/AlbaGomezPerez/alba-gomez-starwars/master/src/images/project.png");

    //Project text
    const StarWarsTitle = container.querySelector(".page__title");
    expect(StarWarsTitle.textContent).toBe("alba-gomez-starwars");

    const projectDescription = container.querySelector(".profile-text");
    expect(projectDescription.textContent)
        .toBe("Un proyecto inspirado en el universo Star Wars. Se trata de una página que muestra un listado de naves espaciales y unas barras de progreso que reflejan los porcentajes de cada uno de sus atributos.");

    //Topics
    const projectTopics = container.querySelector(".topics-container");
    expect(projectTopics.firstElementChild.classList[1]).toBe("css");
    expect(projectTopics.children[1].classList[1]).toBe("html");
    expect(projectTopics.children[2].classList[1]).toBe("javascript");
    expect(projectTopics.children[3].classList[1]).toBe("materialize");
    expect(projectTopics.children[4].classList[1]).toBe("portfolio");
    expect(projectTopics.children[5].classList[1]).toBe("angular");

    //Web
    const webPage = container.querySelector(".webPage");
    expect(webPage.textContent).toBe("Visita la web");
    expect(webPage.parentElement.href).toBe("https://albagomezperez.github.io/alba-gomez-starwars/");

    //Link go back
    const goBack = container.querySelector(".backContainer");
    expect(goBack.parentElement.href).toBe("http://localhost/#project248974490");

});

