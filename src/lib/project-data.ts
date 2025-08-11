// src/lib/project-data.ts
export interface Project {
  id: number;
  slug: string;
  title: string;
  problem: string;
  myRole: string;
  process: string;
  solution: string;
  result: string;
  clientFeedback?: string | null;
  imageUrl: string;
  imageHint: string; // Max two words
  tags: string[];
  liveLink?: string;
  repoLink?: string;
}

export const allProjects: Project[] = [
  {
    id: 5,
    slug: "readon",
    title: "ReadOn",
    problem: "Users often struggle to find a single news app that is fast, personalized, works offline, and provides advanced filtering without clutter or unnecessary distractions.",
    myRole: "Handled end-to-end development — from UI/UX design in Next.js and Tailwind CSS to integrating Firebase, AI search, PWA features, and optimized offline-first architecture.",
    process: "I started by designing a clean, responsive UI with Next.js and Tailwind CSS, focusing on an optimal reading experience. I engineered an offline-first architecture by fetching news from the Newsdata.io API, caching it in Firebase Firestore for quick server-side access, and storing it in the browser's IndexedDB for offline availability. I integrated a Genkit-powered AI search to provide intelligent, contextual results. The app was built as a PWA from the ground up to be installable and performant.",
    solution: "I built ReadOn — a modern, intelligent PWA that aggregates news from multiple categories using the Newsdata.io API, caches it in Firebase Firestore for server-side speed, and IndexedDB for offline access. It includes AI-assisted search, advanced filters, bookmark management, and a responsive, installable interface.",
    result: "A clean, fast, and installable news reader that works seamlessly across devices, personalizes content, and functions even without internet connectivity.",
    clientFeedback: null,
    imageUrl: "/readon-cover.png",
    imageHint: "news app",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Firebase",
      "Firestore",
      "IndexedDB",
      "PWA",
      "AI",
      "Google Genkit",
      "Newsdata.io"
    ],
    liveLink: "https://readon-news.netlify.app/",
    repoLink: "https://github.com/MdKasif0/ReadOn"
  },
  {
    id: 4,
    slug: "bytechat",
    title: "ByteChat",
    problem: "Most messaging apps either compromise on security, lack modern features, or don't work seamlessly across devices with a native-like feel.",
    myRole: "Led full-stack development from design to deployment, integrating WebRTC for peer-to-peer communication, Firebase for authentication and real-time data, and Gemini AI for in-app assistance.",
    process: "I started by defining the core pillars of ByteChat: speed, security, and versatility. Using Next.js with the App Router and Tailwind CSS for a sleek, responsive UI, I integrated Firebase for authentication, real-time Firestore updates, and cloud storage. For calls, I implemented PeerJS over WebRTC data channels to enable crystal-clear peer-to-peer voice and video communication. I also integrated an AI assistant powered by Google Gemini for contextual user help. The PWA functionality ensures users can install and use ByteChat offline-ready like a native app. Rigorous testing and iterative improvements refined performance, responsiveness, and UI polish.",
    solution: "I developed ByteChat — a secure, real-time Progressive Web App that supports text messaging, file sharing, HD voice/video calls via WebRTC, and AI-powered assistance. Built with Next.js, Firebase, and PeerJS, it offers customizable profiles, light/dark themes, and a fully responsive, installable PWA experience.",
    result: "A premium, cross-platform messaging app with minimal latency, strong security, and native-like usability.",
    clientFeedback: null,
    imageUrl: "https://bytechat-v3.netlify.app/bytechat-logo.png",
    imageHint: "chat app",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN UI",
      "Firebase",
      "Firestore",
      "Authentication",
      "WebRTC",
      "PeerJS",
      "AI",
      "Google Gemini",
      "PWA"
    ],
    liveLink: "https://bytechat-v3.netlify.app/",
    repoLink: "https://github.com/MdKasif0/ByteChat-V3"
  },
  {
    id: 1,
    slug: "imaginate-ai",
    title: "Imaginate",
    problem: "Creating a seamless web app that allows users to generate high-quality images using text prompts, leveraging AI models while ensuring smooth user experience.",
    myRole: "I independently handled the entire development of the project — from UI/UX design to backend integration with Hugging Face APIs. I also iteratively improved the product based on testing and feedback.",
    process: "I began by outlining the key features of the app, starting with a minimal interface to generate images from text input. Over time, I added more advanced features, enhanced styling, and improved loading feedback. Assistance from ChatGPT and Gemini helped troubleshoot issues and refine functionality.",
    solution: "An AI-powered web app that lets users generate images using text prompts through Hugging Face APIs. The app features a clean UI, responsive design, and dynamic loading states for better user experience.",
    result: "The final product is a fully functional and visually appealing AI image generator. It performs reliably and has been positively received for its simplicity and effectiveness.",
    imageUrl: "https://raw.githubusercontent.com/MdKasif0/HelloKasif/refs/heads/master/public/Images/output_copy_600x400_1.png",
    imageHint: "AI interface",
    tags: ["Html", "CSS", "JavaScript", "Hugging Face"],
    liveLink: "https://imaginate-ai.netlify.app/",
    repoLink: "https://github.com/MdKasif0/Imaginate",
  },
  {
    id: 2,
    slug: "note-it-app",
    title: "Note It",
    problem: "Users needed a simple, efficient way to manage daily notes and tasks without relying on complex third-party applications or cumbersome setups.",
    myRole: "As a personal learning initiative, I undertook the complete design and development of this web application. My goal was to build a practical tool while honing my fundamental web development skills.",
    process: "The project started with a structural outline, focusing on core functionalities like adding, viewing, and deleting notes and tasks. I then iteratively enhanced the user interface and expanded features based on self-testing and usability principles, aiming for an intuitive experience.",
    solution: "A lightweight and responsive note-taking web application built with HTML, CSS, and JavaScript. 'Note It' provides a clean interface for users to effortlessly manage their notes and track tasks.",
    result: "The outcome is a fully functional, aesthetically pleasing, and user-friendly note-taking web app. This self-driven project was instrumental in my learning journey and received positive feedback for its simplicity and utility.",
    clientFeedback: "Not applicable as this was a personal project.",
    imageUrl: "https://raw.githubusercontent.com/MdKasif0/HelloKasif/b6b03e2ca12e6e5bc66fa496c78bab57bf7b3fa4/public/Images/file_00000000d2b061f6a720db46ac426feb_copy_600x400.png",
    imageHint: "notes app", 
    tags: ["HTML", "CSS", "JavaScript", "Web App", "Productivity", "Self Project"],
    liveLink: "https://note-it0.netlify.app/",
    repoLink: "https://github.com/MdKasif0/Note_It.git"
  },
  {
    id: 3,
    slug: "aether-engine",
    title: "Aether Engine",
    problem: "Building immersive and interactive web environments was time-consuming and lacked a standardized approach, leading to inconsistent user experiences.",
    myRole: "Core Framework Developer. Designed and implemented the modular architecture, animation system, and developer APIs for the Aether Engine.",
    process: "Researched existing UI frameworks and game engine principles. Developed a component-based architecture using TypeScript and Web Components. Focused on performance and ease of use for developers.",
    solution: "Aether Engine: A modular UI framework designed for creating highly interactive and immersive web environments with a consistent look and feel.",
    result: "Reduced development time for interactive web features by 30%. Adopted by multiple teams, enhancing product quality and developer productivity across the organization.",
    imageUrl: "/images/projects/aether-engine.png",
    imageHint: "abstract code",
    tags: ["TypeScript", "Web Components", "Animation", "Framework Design"],
    liveLink: "#",
    repoLink: "#",
  },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return allProjects.find(project => project.slug === slug);
};
