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
const data = fetch('./db.json')
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



// Initialize EmailJS after DOM loads
document.addEventListener('DOMContentLoaded', () => {
    emailjs.init("afQCuQv-eLc3LlB8f");

    const contactForm = document.getElementById('contact-form');
    const contactButton = document.getElementById('submit-button');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Set loading state
        contactButton.classList.add('loading');
        contactButton.textContent = 'Sending...';
        contactButton.disabled = true;

        // Send the form data using EmailJS
        emailjs.sendForm('service_gjfmtqp', 'template_ifr4ido', this)
            .then(() => {
                contactButton.classList.remove('loading');
                contactButton.textContent = 'Sent!';
                contactForm.reset();
                
                // Reset back to default after 3s
                setTimeout(() => {
                    contactButton.disabled = false;
                    contactButton.textContent = 'Send Message';
                }, 2000);
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                contactButton.classList.remove('loading');
                contactButton.textContent = 'Error! Try Again';
                
                // Reset back after 4s
                setTimeout(() => {
                    contactButton.disabled = false;
                    contactButton.textContent = 'Send Message';
                    contactForm.reset();
                }, 3000);
            });
    });
});
