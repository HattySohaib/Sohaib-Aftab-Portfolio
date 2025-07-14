const projects = [
  {
    name: "The Next ERP",
    img: "solasta.jpg",
    brief:
      "Web-based ERP application built with Next.js and MongoDB. Implemented Server-Actions and SSR for 30% faster load times, built role-based authentication with NextAuth and Google OAuth, and created CRUD operations using Prisma and MongoDB Atlas.",
    link: "",
    source: "",
    hashtag: ["nextjs", "mongodb", "prisma", "oauth"],
    tag: "client, design",
  },
  {
    name: "Bloggest CMS",
    img: "cms.png",
    brief:
      "Open source CMS with dashboard analytics using MUI X-Charts. Implemented API authorization with API keys and access tokens, integrated Jodit for text formatting, and created reusable components published to npm for easy blog integration.",
    link: "",
    source: "https://github.com/HattySohaib/Headless-CMS-Frontend",
    hashtag: ["react", "api", "mongodb", "npm"],
    tag: "project, design",
  },
  {
    name: "Bright Academy",
    img: "ba.jpg",
    brief:
      "Cross-platform learning app built with React Native. Implemented complex navigation with react-navigation, used AsyncStorage for progress tracking, and deployed backend on AWS EC2 with S3 storage for secure file management.",
    link: "",
    source: "https://github.com/HattySohaib/Bright-Academy-RN",
    hashtag: ["react-native", "aws", "navigation", "storage"],
    tag: "project, design",
  },
  {
    name: "Anahata AIIMS",
    img: "anahata.jpg",
    brief:
      "MERN-based application for cultural event registrations used by 1000+ participants. Built admin panel with RESTful APIs for event management, automated QR code generation and email delivery, and implemented real-time ticket validation.",
    link: "https://www.anahataaiimsgkp.in/",
    source: "",
    hashtag: ["react", "express", "mongo", "qr"],
    tag: "client, design",
  },
  {
    name: "Sartha.in",
    img: "sartha.jpg",
    brief:
      "Full-stack web application for online mentorship with REST APIs using Node.js and MongoDB. Implemented secure payment integration with Razorpay and deployed on AWS EC2 with nginx and SSL certification.",
    link: "https://www.sartha.in/",
    source: "",
    hashtag: ["express", "mongo", "aws", "payment"],
    tag: "client, design",
  },
  {
    name: "Get-Pass",
    img: "getpass.jpg",
    brief:
      "Campus entry-exit management system built with Express and MongoDB. Implemented secure OTP-based authentication, created separate interfaces for students and gatekeepers, and integrated Google OAuth for user verification.",
    link: "",
    source: "https://github.com/HattySohaib/getPass",
    hashtag: ["express", "mongo", "oauth", "otp"],
    tag: "project",
  },
];

module.exports = { projects };
