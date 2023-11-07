const projects = [
    {
        "id": 1,
        "cover":"./assets/images/ohMyFood Front-page.png",
        "title":"OhMyFood",
        "description":"Integration d'un site qui répertorie les menus de restaurants gastronomiques.",
        "skill":"Ce projet m'a permis de développer mes compétences en animations CSS.",
        "weblink":"https://github.com/JulienDecauchy/-ohMyFood-JulienDecauchy.github.io",
    },
    {
        "id": 2,
        "cover":"./assets/images/ArchiWebos Front-page.png",
        "title":"ArchiWebos",
        "description":"Integration du site portfolio d’une architecte d’intérieur.",
        "skill":"Ce projet m'a permis de développer mes compétences en Javascript et de découvrir la méthode Kanban.",
        "weblink":"https://github.com/JulienDecauchy/-ArchiWebos-JulienDecauchy.github.io",
    },
    {
        "id": 3,
        "cover":"./assets/images/Kasa Front-page.png",
        "title":"Kasa",
        "description":"Integration d'une application web de location immobilière.",
        "skill":"Ce projet m'a permis de développer mes compétences en React et de découvrir la méthode Kanban.",
        "weblink":"https://github.com/JulienDecauchy/Kasa",
    },
    {
        "id": 4,
        "cover":"./assets/images/NinaCarducci Front-page.png",
        "title":"Nina Carducci",
        "description":"Optimisation du référencement (SEO) d'un site de photographe.",
        "skill":"Ce projet m'a permis de développer mes compétences en référencement SEO.",
        "weblink":"https://github.com/JulienDecauchy/Ninacarducci",
    },
    {
        "id": 5,
        "cover":"./assets/images/724events Front-page.png",
        "title":"724events",
        "description":"Débogage du site d'une agence d'événementiel.",
        "skill":"Ce projet m'a permis de développer mes compétences en débugage de site internet.",
        "weblink":"https://github.com/JulienDecauchy/724events",
    },
    {
        "id": 6,
        "cover":"./assets/images/ArgentBank Front-page.png",
        "title":"ArgentBank",
        "description":"Integration du front-end d'une application bancaire avec React-Redux.",
        "skill":"Ce projet m'a permis de développer mes compétences en React et de découvrir React-Redux.",
        "weblink":"https://github.com/JulienDecauchy/ArgentBank",
    },
];

function RenderProjects() {
    projects.forEach(project => {

        const ProjectElement = document.createElement("div");
        ProjectElement.setAttribute("class", "project-div");
        ProjectElement.setAttribute("id", project.id);

        const ProjectTitleDiv = document.createElement("div");
        ProjectTitleDiv.setAttribute("class", "project-title_div");

        const ProjectTitle = document.createElement("p");
        ProjectTitle.innerText = project.title;
        ProjectTitleDiv.appendChild(ProjectTitle);

        const ProjectContentDiv = document.createElement("div");
        ProjectContentDiv.setAttribute("class", "project-content_div");

        const ProjectPictureDiv = document.createElement("div");
        ProjectPictureDiv.setAttribute("class", "project-picture_div");
        ProjectContentDiv.appendChild(ProjectPictureDiv)
        
        const ProjectPicture = document.createElement("img");
        ProjectPicture.setAttribute("src", project.cover);
        ProjectPictureDiv.appendChild(ProjectPicture);

        const ProjectCut = document.createElement("hr");
        ProjectContentDiv.appendChild(ProjectCut);

        const ProjectTextDiv = document.createElement("div");
        ProjectTextDiv.setAttribute("class", "project-text_div");
        ProjectContentDiv.appendChild(ProjectTextDiv);

        const ProjectDescription = document.createElement("p");
        ProjectDescription.innerText = project.description;
        ProjectTextDiv.appendChild(ProjectDescription);

        const ProjectSkill = document.createElement("p");
        ProjectSkill.innerText = project.skill;
        ProjectTextDiv.appendChild(ProjectSkill);

        const ProjectLink = document.createElement("a");
        ProjectLink.innerText = "Lien vers GitHub";
        ProjectLink.setAttribute("href", project.weblink);
        ProjectTextDiv.appendChild(ProjectLink);
        
        ProjectElement.appendChild(ProjectTitleDiv);
        ProjectElement.appendChild(ProjectContentDiv);

        document.querySelector(".gallery-project_div").appendChild(ProjectElement);

    });
}

RenderProjects();
