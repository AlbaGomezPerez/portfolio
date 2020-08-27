/**
 *
 */
export const getReadme = (projectName, allProjects) => {
    const projectReadme = allProjects.find(readme => (
        readme.url.includes(projectName)
    ));
    if (projectReadme) {
        const contentReadme = atob(projectReadme.content);
        const titleReadme = contentReadme.split('\n', 1)[0];
        return titleReadme.replace(/#/g, '');
    } else {
        return projectName;
    }
};
