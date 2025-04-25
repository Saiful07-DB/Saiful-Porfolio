const carousel = document.getElementById('carousel');
let currentIndex = 0;
let projects = [];

// Load JSON and initialize
fetch('project_images.json')
  .then(response => response.json())
  .then(data => {
    // Step 1: Build the full project list with metadata
    const metadata = [
      {
        title: "Airtable Database Architecture Consulting",
        client: "Betafits",
        description: "Create the database and manage all automations in Airtable.",
        tools: "Airtable, Google Sheets",
        folder: "Project 1"
      },
      {
        title: "Inventory Tracking and Management",
        client: "Airplane Inventory",
        description: "Create forms, RO, PO, database, manage automations, dashboard in Airtable Interface.",
        tools: "Airtable",
        folder: "Project 2"
      },
      {
        title: "SQL Data Manipulation Expert Needed",
        client: "Phone E-commerce",
        description: "Troubleshoots complex SQL queries and solves backend issues.",
        tools: "Oracle DB",
        folder: "Project 3"
      },
      {
        title: "SQL Data Manipulation Expert Needed (Copy)",
        client: "Betafits Insurance Company",
        description: "Manage their database for centralization, data dictionary, hierarchy diagrams.",
        tools: "Airtable, Softr, Draw.io",
        folder: "Project 4"
      },
      {
        title: "Airtable Automation Process Specialist Needed",
        client: "Meetings Course",
        description: "Troubleshoots automation issues in Airtable and Make, fixes Outlook meeting sessions.",
        tools: "Airtable, Make, Outlook",
        folder: "Project 5"
      },
      {
        title: "Data Entry and Documentation Tasks",
        client: "Medical Equipment Company",
        description: "Manage PostgreSQL, Google Sheets, and Excel for bulk data entry and tracking.",
        tools: "PostgreSQL, Google Sheets, Excel",
        folder: "Project 6"
      },
      {
        title: "Database Modeling Task",
        client: "Medical Equipment",
        description: "Designed ER diagrams and PostgreSQL relational database models.",
        tools: "GUI4, PostgreSQL, Draw.io",
        folder: "Project 7"
      },
      {
        title: "Airtable Database Architecture Consulting (Rehire)",
        client: "Betafits",
        description: "Manage central database system, data dictionary, hierarchy mapping.",
        tools: "Airtable, Softr, Draw.io",
        folder: "Project 8"
      },
      {
        title: "Airtable Database Architecture and Development",
        client: "NP Licensing",
        description: "Manage USA-wide license data, types, forms, automation, database setup.",
        tools: "Airtable",
        folder: "Project 9"
      },
      {
        title: "Convert SQL Normalizations",
        client: "",
        description: "Run SQL queries and normalize tables into 3NF (Third Normal Form).",
        tools: "MySQL, XAMPP",
        folder: "Project 10"
      },
      {
        title: "Airtable Integration Specialist Needed for CRM Data Intake",
        client: "Cleaner Company (Miami)",
        description: "Create CRM database in Airtable, manage Make.com automations, Stripe API integration.",
        tools: "Airtable, Booking Koala, Make, Stripe API",
        folder: "Project 11"
      },
      {
        title: "Build a Contact Management System for Kids’ Birthday Party Outreach",
        client: "Birthday Management",
        description: "Built database for outreach management in Airtable and automated email flows.",
        tools: "Airtable, Make, Stripe API, Email API, Sawyer",
        folder: "Project 12"
      },
      {
        title: "Airtable/Make Automations Improvement",
        client: "Clave Club (EU, UK, PL, IT)",
        description: "Managed Airtable databases and improved Make.com automations.",
        tools: "Airtable, Make",
        folder: "Project 13"
      }
    ];

    // Step 2: Merge metadata with matching image lists
    metadata.forEach(meta => {
      const images = data[meta.folder];
      if (images && images.length > 0) {
        projects.push({ ...meta, images });
      }
    });

    // Step 3: Start showing
    renderProject(currentIndex);
    setInterval(() => {
      currentIndex = (currentIndex + 1) % projects.length;
      renderProject(currentIndex);
    }, 5000);
  })
  .catch(err => {
    console.error("❌ Failed to load project_images.json:", err);
  });

// Function to display a project
function renderProject(index) {
  const { title, client, description, tools, images } = projects[index];
  const image = images[Math.floor(Math.random() * images.length)];

  carousel.innerHTML = `
    <div class="project-card fade">
      <img src="${image}" alt="${title}">
      <h3>${title}</h3>
      ${client ? `<p><strong>Client/Industry:</strong> ${client}</p>` : ""}
      <p>${description}</p>
      <p><strong>Tools Used:</strong> ${tools}</p>
    </div>
  `;
}
