// Auto set theme based on system preference
document.addEventListener('DOMContentLoaded', () => {
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
const data = fetch('/assets/js/db.json')
    .then(response => response.json())
    .then(data => {
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
        });
    })

    // <div class="project">
    //     <div class="top">
    //         <h3>Project Title</h3>
    //         <div class="time-line">
    //             <span class="start-date">Start Date /</span>
    //             <span class="end-date">End Date</span>
    //             <h4>Feb/2025 - Dec/2025</h4>
    //         </div>
    //     </div>
    //     <div class="description">
    //         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi debitis, quisquam veritatis molestiae mollitia numquam officia rerum quasi maxime obcaecati omnis consequatur cum optio facere nemo non deleniti dolorum quod.
    //         Maiores quod animi, quis natus quidem inventore corporis explicabo qui est esse. Natus vitae nam veritatis est quis nisi enim assumenda dolor incidunt reiciendis, rerum adipisci pariatur voluptatem maxime quia.
    //         Corrupti voluptas dicta sit possimus soluta, culpa non voluptates obcaecati facere ad similique harum, est sed ut laboriosam incidunt exercitationem deleniti eligendi? Reprehenderit reiciendis ratione, sit dolor eius consectetur aperiam.</p>
    //     </div>
    //     <div class="tech">
    //         <ul class="tech-stack">
    //             <li class="tech-icon"><img src="/assets/images/react.svg" alt=""></li>
    //             <li class="tech-icon"><img src="/assets/images/react.svg" alt=""></li>
    //             <li class="tech-icon"><img src="/assets/images/react.svg" alt=""></li>
    //             <li class="tech-icon"><img src="/assets/images/react.svg" alt=""></li>
    //         </ul>
    //         <div class="links">
    //             <ul>
    //                 <li><a href="#">Project Link</a></li>
    //                 <li><a href="#">GitHub Link</a></li>
    //             </ul>
    //         </div>
    //     </div>
    // </div>