const url = 'https://api.github.com/search/repositories?q=user:AlbaGomezPerez+topic:portfolio+fork:true';
// "https://api.github.com/users/AlbaGomezPerez/repos";
// https://api.github.com/repos/AlbaGomezPerez/g-m4-bridgeforbillions.portfolio/topics

/**
 * Get list from the json
 * @return a promise will return a json
 */
export function GetProjects (){
    const myHeaders = new Headers();
    myHeaders.append('Accept', 'application/vnd.github.mercy-preview+json');
    const miInit = {
        method: 'GET',
        headers: myHeaders
    };
    return fetch(url, miInit).then(response => response.json());
}

export function GetProjectImage(endpoint) {
    // https://api.github.com/repos/AlbaGomezPerez/users.search.ines/contents/{+path} +
    const fixedEndpoint = endpoint.replace('{+path}', '');

    return fetch(`${fixedEndpoint}src/images/project.png`).then(response => response.json());
}

export function GetReadme(project) {
    // https://api.github.com/repos/AlbaGomezPerez/users.search.ines/readme/
    const readmeProject = `${project  }/readme`;

    return fetch(readmeProject).then(response => response.json());

}
