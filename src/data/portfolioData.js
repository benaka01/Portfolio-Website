export const portfolioData = {
  personalInfo: {
    name: "Benaka B",
    title: "Java Full Stack Developer",
    location: "Mandya, Karnataka, India",
    email: "benaka.vishwakarma@gmail.com",
    phone: "+91 87925 60868",
    linkedin: "https://linkedin.com/in/benakabrahmalingu",
    github: "https://github.com/benaka01",
    instagram: "https://www.instagram.com/benaka_vishwakarma/?utm_source=qr&r=nametag",
    summary: "Java Full Stack Developer with hands-on experience in developing web applications and software solutions using Java, React.js, MySQL, and MongoDB. Completed internships in Full Stack Development and AI-Integrated MERN Stack Development, gaining practical exposure to modern software development practices. Strong foundation in object-oriented programming, database management, and problem-solving. Experienced in building academic and personal projects across web development and machine learning domains. Passionate about developing scalable applications and continuously learning emerging technologies to deliver innovative software solutions."
  },
  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Java", level: 9, shortLabel: "J" },
        { name: "JavaScript", level: 8, shortLabel: "JS" },
        { name: "SQL", level: 8, shortLabel: "S" }
      ]
    },
    {
      category: "Frontend Technologies",
      items: [
        { name: "React.js", level: 7, shortLabel: "R" },
        { name: "Tailwind CSS", level: 9, shortLabel: "T" },
        { name: "HTML5", level: 9, shortLabel: "H" },
        { name: "CSS3", level: 9, shortLabel: "C" }
      ]
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", level: 8, shortLabel: "DB" },
        { name: "MongoDB", level: 7, shortLabel: "M" }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", level: 7, shortLabel: "G" },
        { name: "GitHub", level: 6, shortLabel: "GH" },
        { name: "Postman", level: 5, shortLabel: "P" },
        { name: "Visual Studio Code", level: 8, shortLabel: "V" },
        { name: "IntelliJ IDEA", level: 8, shortLabel: "I" },
        { name: "Eclipse IDE", level: 9, shortLabel: "E" }
      ]
    },
    {
      category: "Core Concepts",
      items: [
        { name: "Object-Oriented Programming (OOP)", level: 8, shortLabel: "OOP" },
        { name: "DBMS", level: 8, shortLabel: "DB" },
        { name: "SDLC", level: 8, shortLabel: "SD" },
        { name: "Problem Solving", level: 9, shortLabel: "PS" }
      ]
    }
  ],
  internships: [
    {
      role: "AI-Integrated MERN Stack Development Intern",
      company: "Agastya EdTech",
      period: "Feb 2026 – May 2026",
      description: "Contributed to the development of MERN-stack applications with integrated AI capabilities. Designed RESTful APIs, optimized database queries, and implemented dynamic user interfaces to improve end-user interaction."
    },
    {
      role: "Full Stack Development Intern",
      company: "Rushaw Technologies",
      period: "Jan 2023 – Mar 2023",
      description: "Collaborated on building end-to-end web solutions. Handled backend integrations, executed rigorous testing protocols, and maintained database schema consistency across environments."
    }
  ],
  projects: [
    {
      id: 1,
      name: "Accident Severity Prediction",
      category: "Machine Learning",
      description: "Engineered a predictive machine learning pipeline using Python and Scikit-Learn to classify traffic accident severity based on historical collision datasets. Implemented data preprocessing, feature engineering, and model validation techniques to achieve high prediction accuracy.",
      technologies: ["Python", "Machine Learning", "Scikit-Learn", "Pandas"],
      status: "Completed",
      liveDemo: "#",
      github: "https://github.com/benaka01"
    },
    {
      id: 2,
      name: "Portfolio Website",
      category: "React / Frontend",
      description: "Architected a responsive, highly-interactive developer portfolio utilizing React.js and Tailwind CSS. Built custom theming, seamless animations with Framer Motion, and integrated a serverless contact form via Web3Forms API.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      status: "Live",
      liveDemo: "#",
      github: "https://github.com/benaka01"
    },
    {
      id: 3,
      name: "Food Delivery Application",
      category: "Java / Full Stack",
      description: "Developed a comprehensive food ordering platform encompassing user authentication, cart management, and real-time order tracking. Leveraged Java Servlets, JSP, and MySQL to ensure robust backend processing and secure data persistence.",
      technologies: ["Java", "Servlet/JSP", "MySQL", "JDBC", "HTML/CSS"],
      status: "Completed",
      liveDemo: "#",
      github: "https://github.com/benaka01"
    },
    {
      id: 4,
      name: "Tic Tac Toe Game",
      category: "Java / Core",
      description: "Programmed an interactive desktop game using Java Swing to demonstrate core Object-Oriented Programming principles. Implemented win-state algorithms, event listeners, and dynamic UI updates.",
      technologies: ["Core Java", "OOPs Concepts", "Java Swing"],
      status: "Completed",
      liveDemo: "#",
      github: "https://github.com/benaka01"
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering (Computer Science & Engineering)",
      school: "Cauvery Institute of Technology",
      period: "2023 – 2026",
      details: "Focusing on Software Architecture, Advanced Data Structures, Relational Database Management Systems, and Artificial Intelligence concepts."
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      school: "Government Polytechnic Channapatna",
      period: "2021 – 2023",
      details: "Acquired fundamental expertise in C and Java programming, basic networking protocols, and structural hardware maintenance."
    },
    {
      degree: "SSLC (Secondary School Leaving Certificate)",
      school: "Karnataka Public School Besagarahalli",
      period: "2019 – 2020",
      details: "Graduated with distinction, building a strong analytical foundation in mathematics and applied sciences."
    }
  ],
  certifications: [
    { name: "Full Stack Development", issuer: "Infosys Springboard" },
    { name: "HTML5 Certification", issuer: "Infosys Springboard" },
    { name: "Prompt Engineering Hackathon", issuer: "PES Mandya" },
    { name: "National Hackathon Participant", issuer: "GSSS Mysore" }
  ]
};
