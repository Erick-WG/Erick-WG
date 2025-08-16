// Auto set theme based on system preference
document.addEventListener('DOMContentLoaded', () => {
    // check if the user wants dark mode or light mode
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    const body = document.body;

    // Function to apply the theme
    function applyTheme() {
        if (prefersDarkScheme.matches) {
            body.classList.add('dark');
            body.classList.remove('light');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
        }
    }

    // Initial theme application
    applyTheme();

    // Listen for changes in the system preference
    prefersDarkScheme.addEventListener('change', applyTheme);
});


// Mobile menu toggle
const menuToggle = document.querySelector('.menu');
const closeNav = document.querySelector('.close');
const mobileNavLinks = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNavLinks.classList.toggle('active');
    closeNav.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close the menu when a link is clicked
closeNav.addEventListener('click', () => {
    mobileNavLinks.classList.remove('active');
    closeNav.classList.remove('active');
    menuToggle.classList.remove('active');
});


// fetching data from db.json

const data = {
    "version": "1.0",
    "projects": [
        {
            "id": 1,
            "title": "React Web App for a Startup",
            "start": "Sep/2024",
            "end": "Nov/2024",
            "techStack": [
                "React",
                "Django",
                "REST APIs",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "description": "Accomplished the delivery of a production-ready web application, enhancing the startup's online presence and scalability, by developing a responsive React frontend integrated with a Django backend, collaborating with backend developers to optimize performance, and resolving technical challenges to meet production standards within the required timeline.",

            "link": "https://www.marsagrofarm.co.ke/",
            "github": "https://github.com/Mass-agrofarm/FrontEnd"
        },
        {
            "id": 2,
            "title": "Advanced Educational Materials.",
            "start": "Feb/2024",
            "end": "Jun/2024",
            "techStack": [
                "Python",
                "DJango",
                "JavaScript",
                "MongoDB",
                "Mongoose"
            ],
            "description": "Improved educational content delivery by 15% by developing and integrating MongoDB and Mongoose database video lessons into the advanced course teaching tools, collaborating with cross-functional teams to deliver high-quality technical resources that enhanced student learning outcomes.",

            "link": "https://www.linkedin.com/in/erick-wainaina/",
            "github": "https://github.com/Erick-WG/Advanced-Courses"
        },
        {
            "id": 3,
            "title": "Task Automation with Python",
            "start": "Jan/2024",
            "end": "Jan/2024",
            "techStack": ["Python"],
            "description": "Increased operational efficiency by 30% by designing Python scripts to automate repetitive file management tasks, implementing robust logging and error-handling mechanisms to ensure reliability and minimize manual intervention.",

            "link": null,
            "github": "https://github.com/Erick-WG/Text-To-CSV"
        },
        {
            "id": 4,
            "title": "Mentorship & Technical Support",
            "start": "Dec/2023",
            "end": "Feb/2024",
            "techStack": [
                "Python",
                "Django",
                "HTML",
                "CSS",
                "JavaScript"
            ],
            "description": "Enhanced project efficiency and student learning outcomes by mentoring learners in Python and Django best practices, and providing technical support for both frontend and backend integrations across various software projects.",
            "link": "https://www.linkedin.com/in/erick-wainaina/",
            "github": "https://github.com/Erick-WG"
        }
    ]
}
const displayData = (data) => {
    const projectsContainer = document.querySelector('.projects');
    data.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = `
            <div class="top">
                    <h3>${project.title}</h3>
                    <div class="time-line">
                        <span class="start-date">Start Date /</span>
                        <span class="end-date">End Date</span>
                        <h4>${project.start} - ${project.end}</h4>
                    </div>
                </div>
                <div class="description">
                    <p>${project.description}</p>
                </div>
                <div class="tech">
                    <ul class="tech-stack">
                        ${project.techStack.map(tech => `
                            <li class="tech-icon">${tech}</li>
                        `).join('')}
                    </ul>
                    <div class="links">
                        <ul>
                            ${project.link != null ?
                                `<li><a href="${project.link}" target="_blank">Project Link</a></li>` : ''
                            }
                            <li><a href="${project.github}" target="_blank">GitHub Link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectElement);
    })
};

// calling the function to display data
displayData(data);

