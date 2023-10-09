// Function to handle smooth scrolling for navigation links
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

// Add event listeners to the navigation links
const navLinks = document.querySelectorAll(".navbar-menu ul li a");
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const target = this.getAttribute("href");
    smoothScroll(target); // Scroll to the target section
  });
});

// To Toggle between the close and bar icon to show dropdown
const toggleBtn = document.querySelector(".toggle-menu");
const toggleIcon = document.querySelector(".toggle-menu i");
const toggleMenu = document.querySelector(".toggle-options");

toggleBtn.onclick = () => {
  toggleMenu.classList.toggle("open-menu");
  const isOpen = toggleMenu.classList.contains("open-menu");
  toggleIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// skills
const skills = [
  {
    category: "Programming Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Frontend Frameworks / Libraries",
    items: [
      "ReactJS",
      "Redux",
      "Redux Toolkit",
      "React Router",
      "Axios",
      "Redux Saga"
    ]
  },
  {
    category: "UI Frameworks",
    items: ["Ant Design (AntD)", "Material-UI", "Bootstrap"]
  },
  {
    category: "CSS Preprocessor",
    items: ["SCSS"]
  },
  {
    category: "Version Control",
    items: ["Git"]
  },
  {
    category: "Testing",
    items: ["Jest", "React Testing Library"]
  },
  {
    category: "Package Managers",
    items: ["Yarn", "NPM"]
  },
  {
    category: "Build Tools",
    items: ["Webpack"]
  }
];

function createSkillsSection(skillsData) {
  const skillsContainer = document.getElementById("skills-container");

  skillsData.forEach((skillCategory) => {
    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = skillCategory.category;

    const categoryList = document.createElement("ul");

    skillCategory.items.forEach((skillItem) => {
      const listItem = document.createElement("li");
      listItem.textContent = skillItem;
      categoryList.appendChild(listItem);
    });

    const categorySection = document.createElement("div");
    categorySection.classList.add("skill-type");
    categorySection.appendChild(categoryTitle);
    categorySection.appendChild(categoryList);

    skillsContainer.appendChild(categorySection);
  });
}

createSkillsSection(skills);

// Projects

const projectDetails = [
  {
    index: "01",
    name: "CSV Data Visualization Tool",
    logo: "images/CSVDataVizualization.png",
    websiteLink: "https://s9xl48.csb.app/",
    projectLink: "https://github.com/gayathri1462/CSVDataVisualizationTool",
    technology: "ReactJS, Redux, Antd, ChartJS and React-Spreadsheet",
    desc:
      "The CSV Data Visualization Tool allows you to easily upload, view, edit, and visualize CSV files."
  },
  {
    index: "02",
    name: "GitHub Profile Viewer",
    logo: "images/profileviewer.png",
    websiteLink: "https://jq83tp.csb.app/",
    projectLink: "https://github.com/gayathri1462/GitHubProfileViewer",
    technology: "ReactJS, Redux Tookit, Axios & TypeScript",
    desc:
      "The GitHub Profile Viewer App is a web application built using React and Redux Toolkit, designed to provide users with a seamless way to search for GitHub usernames and retrieve comprehensive user information using the GitHub API. Users can easily explore user profiles, including their details, followers, and following lists."
  },
  {
    index: "03",
    name: "Quiz Application",
    logo: "images/quizapp.png",
    websiteLink: "https://jp3jmn.csb.app/",
    projectLink: "https://github.com/gayathri1462/ReactQuizApp",
    technology: "HTML, CSS, ReactJS & JavaScript",
    desc:
      "Developed a quiz application using React, allowing users to participate in an interactive quiz. Implemented a user-friendly interface with multiple-choice questions, instant results, and a responsive design."
  },
  {
    index: "04",
    name: "Task Management Application",
    logo: "images/todoapp.png",
    websiteLink: "https://4rc7v5.csb.app/",
    projectLink: "https://github.com/gayathri1462/ToDoApp-TaskHarbor",
    technology: "HTML, CSS, ReactJS, Redux & TypeScript",
    desc:
      "This powerful web app, using React JS and Redux, offers complete CRUD features for efficient task management. React Thunk middleware streamlines complex async tasks, ensuring top performance and user ease."
  }
];

function createProjectElement(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project");

  const projectLogo = document.createElement("img");
  projectLogo.src = project.logo;
  projectLogo.alt = project.name;
  projectLogo.width = "600";
  projectLogo.height = "400";
  projectLogo.classList.add("project-logo");
  projectContainer.appendChild(projectLogo);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = project.name;
  projectTitle.classList.add("project-title");
  projectContainer.appendChild(projectTitle);

  const projectDesc = document.createElement("p");
  projectDesc.textContent = project.desc;
  projectDesc.classList.add("project-desc");
  projectContainer.appendChild(projectDesc);

  const projectTech = document.createElement("p");
  projectTech.textContent = `Technology: ${project.technology}`;
  projectTech.classList.add("project-tech");
  projectContainer.appendChild(projectTech);

  const projectLinks = document.createElement("div");
  projectLinks.classList.add("project-links");

  const websiteLink = document.createElement("a");
  websiteLink.href = project.websiteLink;
  websiteLink.target = "_blank";
  websiteLink.textContent = "Visit Website";
  websiteLink.classList.add("project-link");
  projectLinks.appendChild(websiteLink);

  const projectLink = document.createElement("a");
  projectLink.href = project.projectLink;
  projectLink.target = "_blank";
  projectLink.textContent = "GitHub Repo";
  projectLink.classList.add("project-link");
  projectLinks.appendChild(projectLink);

  projectContainer.appendChild(projectLinks);

  return projectContainer;
}

function createProjectsSection(projectsData) {
  const projectsContainer = document.getElementById("projects-container");

  projectsData.forEach((project) => {
    const projectElement = createProjectElement(project);
    projectsContainer.appendChild(projectElement);
  });
}

createProjectsSection(projectDetails);

// experience

const experienceDetails = [
  {
    name: "Saarthi.ai",
    logo: "images/saarthiLogo.png",
    role: "Junior Frontend Developer",
    year: "Aug 2022 – Current",
    location: "Bengaluru",
    application: "https://pravid.io/",
    appLogo: "images/pravid.png",
    points: [
      "➤ Achieved a 50% reduction in bundle size by optimizing Webpack configurations, resulting in faster load times and improved performance.",
      "➤ Developed responsive web pages using React.js, ensuring an excellent user experience across devices with CRUD functionalities.",
      "➤ Efficiently managed application state and reduced API calls on page render by 50% through seamless integration with Redux Saga.",
      "➤ Designed and implemented interactive data dashboards using Chart.js, enhancing data presentation and user engagement.",
      "➤ Attained an 80% unit test coverage using Jest, ensuring application reliability and reducing the likelihood of bugs.",
      "➤ Provided leading feature development for various modules, ensuring timely completion and successful project milestones.",
      "➤ Conducted code reviews and resolved front-end bugs to deliver a responsive web application.",
      "➤ Created reusable and modular components, improving development efficiency and code maintainability, resulting in a 30% reduction in development time."
    ]
  }
];

function createExperienceElement(experience) {
  const experienceElement = document.createElement("div");
  experienceElement.innerHTML = `
               <div class="leftInfo">
               <p class="role">${experience.role}</p>
               <img src="${experience.logo}" alt="${
    experience.name
  } Logo" style="max-width: 200px;">
                <h2>${experience.name}</h2>
                <p class="year">${experience.year}</p>
                <p class="location">${experience.location}</p>
                <a class="appLink" href=${
                  experience.application
                } target="_blank"><em>Application : Pravid</em></a>
                <img class="appImage" src="${experience.appLogo}" alt="${
    experience.name
  }">
               </div>
                <ul>
                    ${experience.points
                      .map((point) => `<li>${point}</li>`)
                      .join("")}
                </ul>
            `;
  return experienceElement;
}

const experienceContainer = document.getElementById("experience-container");
experienceDetails.forEach((experience) => {
  const experienceElement = createExperienceElement(experience);
  experienceContainer.appendChild(experienceElement);
});

//education

const educationDetails = [
  {
    name: "Dayananda Sagar University",
    board: "Bachelor Of Technology (B.Tech)",
    course: "Computer Science Engineering",
    year: "Aug 2018 – Jun 2022",
    points: "9.31 CGPA"
  },
  {
    name: "Narayana Junior College",
    board: "Board of Intermediate Education (AP)",
    course: "Classes XI and XII (MPC)",
    year: "Aug 2016 – Jun 2018",
    points: "98.5%"
  },
  {
    name: "RAVINDRA PUBLIC SCHOOL FOR GIRLS",
    board: "Board of Secondary Education (AP)",
    course: "Class X",
    year: "Jun 2016",
    points: "10 GPA"
  }
];

function createEducationDetails(educationData) {
  const educationDetails = document.getElementById("education-details");

  educationData.forEach((edu) => {
    const row = document.createElement("tr");

    const createTableCell = (text, label) => {
      const cell = document.createElement("td");
      cell.textContent = text;
      cell.setAttribute("data-label", label);
      return cell;
    };

    row.appendChild(createTableCell(edu.name, "Name"));
    row.appendChild(createTableCell(edu.board, "Board"));
    row.appendChild(createTableCell(edu.course, "Course"));
    row.appendChild(createTableCell(edu.year, "Year"));
    row.appendChild(createTableCell(edu.points, "Points"));

    educationDetails.appendChild(row);
  });
}

createEducationDetails(educationDetails);

//Scroll To Top
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Add this JavaScript code to your index.js or inside a <script> tag at the end of your HTML body

// Function to add the 'fade-up' class to elements in the viewport
function addFadeUpAnimation(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-up");
      // Once the animation is applied, we don't need to observe this element anymore
      observer.unobserve(entry.target);
    }
  });
}

// Intersection Observer configuration
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin around the viewport
  threshold: 0.3 // Trigger when 30% of the element is in the viewport
};

// Create the Intersection Observer instance
const observer = new IntersectionObserver(addFadeUpAnimation, options);

// Get all elements with the class 'fade-up' and start observing them
const fadeUpElements = document.querySelectorAll(".fade-up");
fadeUpElements.forEach((element) => {
  observer.observe(element);
});
