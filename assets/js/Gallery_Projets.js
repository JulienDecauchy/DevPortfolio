const projects = [
    {
        "id": 1,
        "cover":"./assets/images/ohMyFood Front-page.png",
        "title":"OhMyFood",
        "description":"Integration d'un site qui répertorie les menus de restaurants gastronomiques.",
        "skill":"Ce projet m'a permis de développer mes compétences en animations CSS",
        "weblink":"https://github.com/JulienDecauchy/-ohMyFood-JulienDecauchy.github.io",
    },
];

function RenderProjects() {
    projects.forEach(project => {

        const ProjectElement = document.createElement("div");
        ProjectElement.setAttribute("class", "project-div");
        ProjectElement.setAttribute("id", project.id);

        const ProjectPicture = document.createElement("img");
        ProjectPicture.setAttribute("src", project.cover);

        const ProjectTitleDiv = document.createElement("div");
        ProjectTitleDiv.setAttribute("class", "project-title_div");

        const ProjectTitle = document.createElement("p");
        ProjectTitle.innerText = project.title;
        ProjectTitleDiv.appendChild(ProjectTitle);

        const ProjectContentDiv = document.createElement("div");
        ProjectContentDiv.setAttribute("class", "project-content_div");

        const ProjectDescription = document.createElement("p");
        ProjectDescription.innerText = project.description;
        ProjectContentDiv.appendChild(ProjectDescription);

        const ProjectSkill = document.createElement("p");
        ProjectSkill.innerText = project.skill;
        ProjectContentDiv.appendChild(ProjectSkill);

        const ProjectLink = document.createElement("a");
        ProjectLink.innerText = "Lien vers GitHub";
        ProjectLink.setAttribute("href", project.weblink);
        ProjectContentDiv.appendChild(ProjectLink);
        
        ProjectElement.appendChild(ProjectPicture);
        ProjectElement.appendChild(ProjectTitleDiv);
        ProjectElement.appendChild(ProjectContentDiv);

        document.querySelector(".gallery-project_div").appendChild(ProjectElement);

    });
}

RenderProjects();
