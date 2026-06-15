
function projectSearch(data = projectsData) {
    const projectsContainer = document.getElementById("projects-container");
    if(!projectsContainer){
        console.log("Projects not found");
        return;
    }
    
    projectsContainer.innerHTML = "";
    
    data.forEach(function(project){
        const card1 = document.createElement("div");
        card1.className = "p-8 text-center bg-white rounded-3xl shadow-lg";

        const iconBox = document.createElement("div");
        iconBox.className = "w-20 h-20 mx-auto mb-4 bg-green-900 rounded-2xl flex items-center justify-center";

        const iconstatus = document.createElement("span");
        iconstatus.className = "text-2xl text-white font-bold";
        iconstatus.textContent = project.status; // Show status in the box
        
        iconBox.appendChild(iconstatus);

        const projectName = document.createElement("h3");
        projectName.className ="text-xl font-bold mb-2";
        projectName.textContent = project.name;

        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-2";
        projectDescription.textContent = project.description;
    
        const projectTechnology = document.createElement("p");
        projectTechnology.className = "text-sm font-bold text-green-800";
        // .join converts the technology array into a string
        projectTechnology.textContent = project.technologies.join(", ");

        card1.appendChild(iconBox);
        card1.appendChild(projectName);
        card1.appendChild(projectDescription);
        card1.appendChild(projectTechnology);
        projectsContainer.appendChild(card1);
    });
}

// SEARCH BAR LOGIC
const searchInput = document.getElementById("project-search");

searchInput.addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    
    const filtered = projectsData.filter(project => {
        return project.name.toLowerCase().includes(term) || 
               project.category.toLowerCase().includes(term) ||
               project.technologies.some(t => t.toLowerCase().includes(term));
    });

    projectSearch(filtered); // Re-run display with filtered data
});

// Initial Load
document.addEventListener("DOMContentLoaded", () => projectSearch());
