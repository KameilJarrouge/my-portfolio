const PROJECTS = [
  {
    title: "Restaurant POS & Inventory System",
    source: "Self-employed",
    stack: ["React", "Laravel", "PHP", "MySQL", "Tailwind CSS"],
    description:
      "Point-of-sale and inventory system for a restaurant, with automated financial reporting that replaced a manual end-of-day reconciliation of about an hour with a process under 5 minutes.",
    highlights: [
      "Table management with active order tracking and customer sessions",
      "Inventory tracking for stock items and external purchases, with automated calculations",
      "Financial reporting dashboard with income, profit and expenses",
      "Itemized bill generation",
      "Automated end-of-day reconciliation, from about an hour of manual work to under 5 minutes",
    ],
    status: "In production for 3+ years at a restaurant.",
    screenshots: [
      { title: "Landing page", src: "/restaurantPOS/landingPage.png" },
      { title: "Order page", src: "/restaurantPOS/OrdersPage.png" },
      { title: "Reports page", src: "/restaurantPOS/Statistics.png" },
    ],
    repos: [
      {
        title: "restaurant-pos-backend",
        url: "https://github.com/KameilJarrouge/restaurant-pos-backend",
      },
      {
        title: "restaurant-pos-frontend",
        url: "https://github.com/KameilJarrouge/restaurant-pos-frontend",
      },
    ],
  },
  {
    title: "Dental Clinic Management System",
    source: "Self-employed",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Prisma",
      "SQLite",
      "Tailwind CSS",
    ],
    description:
      "Patient record management for a dental clinic: visit and treatment tracking, X-ray storage and a custom interactive tooth chart. It handled 50+ visits a month.",
    highlights: [
      "Split architecture: React frontend and an Express.js/TypeScript API",
      "Custom tooth chart component for visual treatment tracking",
      "X-ray image storage and viewing integrated with patient records",
    ],
    status: "In production for 2 years at a dental clinic.",
    diagrams: [{ title: "ERD", src: "/dental/diagrams/ERD.png" }],
    screenshots: [
      { title: "Home page", src: "/dental/screenshots/landingPage.png" },
      { title: "Patient page", src: "/dental/screenshots/patientPage.png" },
      {
        title: "Adding a treatment to a patient",
        src: "/dental/screenshots/dental_NewTreatment.png",
      },
    ],
    repos: [
      {
        title: "dental-clinic-backend",
        url: "https://github.com/KameilJarrouge/dental_clinic_manager_backend",
      },
      {
        title: "dental-clinic-frontend",
        url: "https://github.com/KameilJarrouge/dental_clinic_manager_frontend",
      },
    ],
  },
  {
    title: "Tracking & Attendance System",
    source: "Graduation project",
    stack: ["Python", "Laravel", "React", "Socket.io", "MySQL", "Tailwind CSS"],
    description:
      "Face-recognition attendance system for a university, with real-time attendance logging and admin dashboards.",
    highlights: [
      "Face detection with MTCNN and recognition with FaceNet",
      "Python service with a scheduler thread and per-camera detection and recognition threads connected by queues",
      "Real-time updates over Socket.io",
      "Admin dashboard for managing people and attendance logs",
    ],
    diagrams: [
      { title: "Database representation", src: "/ATMS/diagrams/database.png" },
      { title: "ERD", src: "/ATMS/diagrams/ERD.png" },
      {
        title: "Face detection and recognition flow chart",
        src: "/ATMS/diagrams/pythonFlow.png",
      },
      {
        title: "Recognition and detection unit",
        src: "/ATMS/diagrams/pythonAIFlow.png",
      },
      {
        title: "Information data structure",
        src: "/ATMS/diagrams/pythonInformationStructure.png",
      },
    ],
    screenshots: [
      {
        title: "Browsing, editing and adding people",
        src: "/ATMS/screenshots/peoplePage.png",
      },
      {
        title: "Recognition log for a specific person",
        src: "/ATMS/screenshots/recognitionLog.png",
      },
      {
        title: "A student’s attendance in their classes",
        src: "/ATMS/screenshots/studentAttendance.png",
      },
      {
        title: "Students’ attendance in a specific class",
        src: "/ATMS/screenshots/classAttendance.png",
      },
      {
        title: "Log of a specific camera",
        src: "/ATMS/screenshots/cameraLog.png",
      },
    ],
    repos: [
      {
        title: "Frontend",
        url: "https://github.com/KameilJarrouge/TrackingAndAttendanceSystem_frontend",
      },
      {
        title: "Backend",
        url: "https://github.com/KameilJarrouge/TrackingAndAttendanceSystem_backend",
      },
      {
        title: "Face detection and recognition (Python)",
        url: "https://github.com/KameilJarrouge/TrackingAndAttendance_python",
      },
    ],
  },
  {
    title: "Ophthalmologist Clinic Management System",
    source: "Self-employed · my first project",
    stack: ["Java", "Swing", "MySQL"],
    description:
      "Desktop application for my father’s ophthalmology clinic: patient records, visit tracking and database backup. My first real project, built in 2020.",
    highlights: [
      "Java Swing interface designed for the clinic staff",
      "MySQL storage for patient records and visits, plus database backup",
      "Still running today with a lot of records, and it has needed no fixes over the years",
    ],
    status: "Built in 2020 and still in use today.",
  },
  {
    title: "Personal Manager App",
    source: "Personal project",
    stack: ["React", "SQLite", "Tailwind CSS"],
    description:
      "A productivity suite for my own use: accounts, notes, todos, journal, important dates, calorie tracking and typing practice.",
    highlights: [
      "Modular design with several tools in one app",
      "Offline-friendly, with SQLite for local data storage",
      "Used daily",
    ],
    screenshots: [
      { title: "Home page", src: "/manager/Manager_Home.png" },
      { title: "To-do page", src: "/manager/Manager_TODO.png" },
      { title: "Important dates", src: "/manager/Manager_Dates.png" },
      { title: "Typing practice", src: "/manager/Manager_Typing.png" },
      {
        title: "Calorie tracker, main page",
        src: "/manager/Manager_Calories_Main.png",
      },
      {
        title: "Calorie tracker, days log",
        src: "/manager/Manager_Calories_Log.png",
      },
      {
        title: "Calorie tracker, a specific day",
        src: "/manager/Manager_Calories_Day.png",
      },
      { title: "Journal", src: "/manager/Manager_Journal.png" },
    ],
    repos: [
      { title: "manager", url: "https://github.com/KameilJarrouge/manager" },
    ],
  },
];

export default PROJECTS;
