
let jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova Pvt Ltd",
    location: "Bangalore",
    description: "Looking for a React developer with 2+ years experience.",
    salary: "$60,000 - $80,000"
  },
  {
    title: "Backend Developer",
    company: "CodeCraft Solutions",
    location: "Hyderabad",
    description: "Node.js + MongoDB developer required.",
    salary: "$70,000 - $90,000"
  },
  {
    title: "Full Stack Developer",
    company: "InnovateTech",
    location: "Pune",
    description: "MERN stack developer with strong API integration skills.",
    salary: "$80,000 - $100,000"
  },
  {
    title: "UI/UX Designer",
    company: "PixelCraft Studios",
    location: "Remote",
    description: "Figma and Adobe XD expert required for product design.",
    salary: "$55,000 - $75,000"
  },
  {
    title: "DevOps Engineer",
    company: "CloudBridge Systems",
    location: "Chennai",
    description: "Experience with AWS, Docker, and CI/CD pipelines.",
    salary: "$90,000 - $120,000"
  },
  {
    title: "Data Analyst",
    company: "Insight Analytics",
    location: "Mumbai",
    description: "Strong knowledge of SQL, Power BI, and data visualization.",
    salary: "$65,000 - $85,000"
  },
  {
    title: "Machine Learning Engineer",
    company: "AI Labs",
    location: "Bangalore",
    description: "Python, TensorFlow, and NLP experience preferred.",
    salary: "$100,000 - $130,000"
  },
  {
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Delhi",
    description: "Knowledge of network security and penetration testing.",
    salary: "$75,000 - $95,000"
  },
  {
    title: "Mobile App Developer",
    company: "AppVerse",
    location: "Remote",
    description: "Flutter or React Native experience required.",
    salary: "$70,000 - $90,000"
  },
  {
    title: "Cloud Architect",
    company: "SkyHigh Technologies",
    location: "Noida",
    description: "Design scalable cloud infrastructure using AWS/Azure.",
    salary: "$120,000 - $150,000"
  },
  {
    title: "Product Manager",
    company: "NextGen Solutions",
    location: "Gurgaon",
    description: "Lead product strategy and roadmap planning.",
    salary: "$95,000 - $120,000"
  },
  {
    title: "QA Engineer",
    company: "TestPro Systems",
    location: "Hyderabad",
    description: "Automation testing using Selenium and Cypress.",
    salary: "$60,000 - $75,000"
  }
];
let users=[];
const container = document.getElementById("jobCardsContainer");
const form = document.getElementById("jobForm");


function displayJobs(job) {
  container.innerHTML = "";

  job.reverse().forEach((job) => {
    const card = document.createElement("div");

    card.innerHTML = `<div class="card">
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p>${job.description}</p>
      <p><strong>Salary:</strong> ${job.salary}</p>
      </div>
    `;

    container.appendChild(card);
  });
}



form.addEventListener("submit", function(e) {
  e.preventDefault();
  const newJob = {
    title: document.getElementById("jobTitle").value,
    company: document.getElementById("companyName").value,
    location: document.getElementById("location").value,
    description: document.getElementById("jobDescription").value,
    salary: document.getElementById("salary").value
  };
  jobs.push(newJob);
  displayJobs();
  form.reset();
  alert("Job posted successfully!");
});
let searchInput = document.getElementById("search-input");

searchInput.addEventListener("input",function (e){
  const value = e.target.value.toLowerCase();
  let f=jobs.filter(job =>
    job.title.toLowerCase().includes(value) ||
    job.company.toLowerCase().includes(value) ||
    job.location.toLowerCase().includes(value)
  );
  displayJobs(f);
});

// searchInput.addEventListener("input", function(e) {
//   const value = e.target.value.toLowerCase();

//   const filteredJobs = jobs.filter(job =>
//     job.title.toLowerCase().includes(value) ||
//     job.company.toLowerCase().includes(value) ||
//     job.location.toLowerCase().includes(value)
//   );

//   displayFilteredJobs(filteredJobs);
// });

// function displayFilteredJobs(filteredJobs) {
//   container.innerHTML = "";

//   filteredJobs.slice().reverse().forEach((job) => {
//     const card = document.createElement("div");

//     card.innerHTML = `<div class="card">
//       <h3>${job.title}</h3>
//       <p><strong>Company:</strong> ${job.company}</p>
//       <p><strong>Location:</strong> ${job.location}</p>
//       <p>${job.description}</p>
//       <p><strong>Salary:</strong> ${job.salary}</p>
//       </div>
//     `;

//     container.appendChild(card);
//   });
// }

displayJobs(jobs);