import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "HORDII KOVALENKO",
  title: "Hi all, I'm Hordii Kovalenko from Ukraine.",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with MERN, MEAN, Python, AI and Cloud Technologies. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "#",
};

export const openSource = {
  githubUserName: "tp817",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:hordii@insurfit.ai",
  phone: "tel:+1 5746355314",
  // linkedin: "https://www.linkedin.com/",
  // github: "https://github.com/tp817",
  // instagram: "https://www.instagram.com/",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Django & Django REST Framework"),
        emoji("⚡ Building AI Apps in React & Python Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          iconifyTag: "vscode-icons:file-type-typescript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        {
          skillName: "Heroku",
          iconifyTag: "logos:heroku-icon",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "JS Frameworks", //Insert stack or technology you have experience in
    progressPercentage: "93", //Insert relative proficiency in percentage
  },
  {
    Stack: "Python Frameworks", //Insert stack or technology you have experience in
    progressPercentage: "88", //Insert relative proficiency in percentage
  },
  {
    Stack: "PHP",
    progressPercentage: "95",
  },
  {
    Stack: "Ruby",
    progressPercentage: "85",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Poltava National Technical Yuri Kondratyuk University",
    subHeader: "Master of Computer Science",
    duration: "September 2009 - April 2015",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer",
    company: "Yalantis",
    companyLogo: "/img/icons/common/yalantis.png",
    date: "Jul 2015 - May 2017",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Fingent",
    companyLogo: "/img/icons/common/fingent.png",
    date: "Jun 2017 - Jun 2020",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
  },
  {
    role: "Full Stack Developer",
    company: "Azumo",
    companyLogo: "/img/icons/common/azumo.png",
    date: "Aug 2020 - Nov 2022",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Senior Full Stack Engineer",
    company: "Infinum",
    companyLogo: "/img/icons/common/infinum.png",
    date: "Dec 2022 - Mar 2024",
    desc: "As a Django developer at Infinum, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "FitPro Figma",
    desc: "Personalised fitness app designed for fitness enthusiasts, health-conscious individuals, and anyone committed to reaching their wellness goals",
    link: "https://www.figma.com/proto/s3QbOg1SXbCw6xztHLOr8w/Fitness_App?page-id=127%3A152&node-id=474-1454&viewport=558%2C365%2C0.11&scaling=scale-down&starting-point-node-id=127%3A153",
  },
  {
    name: "DrivEd",
    desc: "DrivEd is an LMS (learning management system). They help education businesses optimize and manage the learning process. Admins are able to create curriculums and learning materials.",
    link: "https://drived.space/",
  },
  {
    name: "O Mejor Oferta",
    desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
    link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
  },
  {
    name: "Syte",
    desc: "Syte is a visual AI company that specializes in powering visual search and recommendation solutions for e-commerce businesses.",
    link: "https://www.syte.ai/",
  },
  {
    name: "ROCK SOLID",
    desc: "ROCK SOLID can provide your facility managers with a comprehensive cleaning plan that integrates the latest US Centers for Disease Control (CDC) recommended processes and chemicals.",
    link: "https://www.rocksoliddc.rocks/",
  },
  {
    name: "fit2flaunt",
    desc: "A fitness platform through which users can watch videos of their trainer, keep track of their progress, and chat with other users & a social module where users can post, like, and comment",
    link: "https://apps.apple.com/us/app/fit-2-flaunt/id1501799266",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Dan Moscatiello",
    role: "General Manager, The Training Center",
    feedback:
      "You were a wonderful addition to our team, Denys. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Denys bless you with everything you desire.",
  },
  {
    name: "Matt Feeney",
    role: "Director of Projects, Techtel Pty",
    feedback:
      "Denys has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Denys is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Ryan Kenning",
    role: "Project Manager, NEC Financial Services",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
  {
    name: "Justine Wagner",
    role: "Executive Assistant, Security Services Northwest",
    feedback:
      "To date, Fingent has continued to be consistent in their timeliness, and they address any issues along the way. The team allows the internal staff to focus on their vision while Fingent brings the concepts to life. Clear communication and quick responses also stand out.",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "HORDII KOVALENKO",
  description: greetings.description,
  author: "HORDII KOVALENKO",
  // image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://hordii.vercel.app/",
  keywords: [
    "HORDII KOVALENKO",
    "HORDII KOVALENKO",
    "HORDII KOVALENKO",
    "HORDII KOVALENKO",
    "Portfolio",
    "HORDII KOVALENKO Portfolio ",
    "HORDII KOVALENKO Portfolio",
  ],
};
