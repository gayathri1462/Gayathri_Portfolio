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
    category: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "Python"]
  },
  {
    category: "Libraries / Frameworks",
    items: ["ReactJS", "Redux", "React Router", "Axios", "Redux Saga"]
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
    name: "Quiz App Using React",
    logo: "./images/quizLogo.png",
    websiteLink: "https://jp3jmn.csb.app/",
    projectLink: "https://github.com/gayathri1462/ReactQuizApp",
    technology: "HTML, CSS & ReactJS",
    desc:
      "Developed a quiz application using React, allowing users to participate in an interactive quiz which has a user-friendly interface with multiple-choice questions"
  },
  {
    index: "02",
    name: "User Management App Using React",
    logo: "./images/userApp.png",
    websiteLink: "https://l87ipu.csb.app/",
    projectLink: "https://github.com/gayathri1462/UserManagementApplication",
    technology: "HTML, CSS, ReactJS, Redux & TypeScript",
    desc:
      "Developed a user management web application, featuring CRUD functionalities for efficient user data management and a middleware to handle asynchronous operations."
  }
];

function createProjectElement(project) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project");

  /*
  const projectLogo = document.createElement("img");
  projectLogo.src = project.logo;
  projectLogo.alt = "";
  projectLogo.width = "600";
  projectLogo.height = "300";
  projectLogo.classList.add("project-logo");
  projectContainer.appendChild(projectLogo); */

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
    logo: "../images/saarthiLogo.png",
    role: "Junior Frontend Developer",
    year: "Aug 2022 – Current",
    location: "Bengaluru",
    points: [
      "➤ Developed UI components and optimized performance of the web application.",
      "➤ Collaborated with cross-functional teams to implement new features and enhancements, translating design mockups into functional web pages.",
      "➤ Conducted code reviews, and resolved front-end bugs to deliver high-quality and responsive web application.",
      "➤ Implemented unit tests using Jest framework for application reliability."
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
