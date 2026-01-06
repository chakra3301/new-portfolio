export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  year: string;
  image: string;
  link?: string;
  featured?: boolean;
}

export interface ArtPiece {
  id: string;
  title: string;
  medium: string;
  year: string;
  image: string;
  description?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "NEXUS",
    description: "Real-time collaborative design platform with spatial computing interfaces and AI-assisted workflows.",
    tech: ["React", "Three.js", "WebGL", "Node.js"],
    role: "Lead Developer & Designer",
    year: "2024",
    image: "/images/projects/nexus.jpg",
    link: "#",
    featured: true,
  },
  {
    id: "project-2",
    title: "VOID",
    description: "Immersive audio-visual experience exploring digital consciousness and human-machine symbiosis.",
    tech: ["WebGL", "GLSL", "Web Audio API"],
    role: "Creative Technologist",
    year: "2024",
    image: "/images/projects/void.jpg",
    link: "#",
    featured: true,
  },
  {
    id: "project-3",
    title: "CIPHER",
    description: "Encrypted messaging platform with end-to-end encryption and disappearing messages for secure communication.",
    tech: ["Next.js", "Rust", "WebRTC"],
    role: "Full Stack Developer",
    year: "2023",
    image: "/images/projects/cipher.jpg",
    link: "#",
  },
  {
    id: "project-4",
    title: "PRISM",
    description: "Data visualization dashboard transforming complex datasets into interactive, explorable narratives.",
    tech: ["D3.js", "React", "PostgreSQL"],
    role: "Frontend Architect",
    year: "2023",
    image: "/images/projects/prism.jpg",
    link: "#",
  },
  {
    id: "project-5",
    title: "ECHO",
    description: "Generative music system creating ambient soundscapes based on real-time environmental data.",
    tech: ["Tone.js", "TensorFlow.js", "Canvas"],
    role: "Creative Developer",
    year: "2023",
    image: "/images/projects/echo.jpg",
    link: "#",
  },
  {
    id: "project-6",
    title: "FLUX",
    description: "Motion design toolkit for creating fluid, physics-based animations in the browser.",
    tech: ["TypeScript", "Canvas", "Web Workers"],
    role: "Lead Developer",
    year: "2022",
    image: "/images/projects/flux.jpg",
    link: "#",
  },
];

export const artPieces: ArtPiece[] = [
  {
    id: "art-1",
    title: "Digital Genesis",
    medium: "Generative Art / WebGL",
    year: "2024",
    image: "/images/art/genesis.jpg",
    description: "Exploring the emergence of digital life forms through algorithmic generation.",
  },
  {
    id: "art-2",
    title: "Fragmented Reality",
    medium: "3D Render / Blender",
    year: "2024",
    image: "/images/art/fragmented.jpg",
    description: "A meditation on the intersection of physical and virtual spaces.",
  },
  {
    id: "art-3",
    title: "Neon Requiem",
    medium: "Digital Painting",
    year: "2023",
    image: "/images/art/neon.jpg",
    description: "Cyberpunk-inspired cityscape exploring themes of isolation in hyperconnectivity.",
  },
  {
    id: "art-4",
    title: "Entropy",
    medium: "Generative Art / Canvas",
    year: "2023",
    image: "/images/art/entropy.jpg",
    description: "Visualizing the beautiful chaos of information decay.",
  },
  {
    id: "art-5",
    title: "Singularity",
    medium: "Motion Graphics",
    year: "2023",
    image: "/images/art/singularity.jpg",
    description: "Abstract exploration of technological convergence and emergence.",
  },
  {
    id: "art-6",
    title: "Holographic Dreams",
    medium: "Mixed Media",
    year: "2022",
    image: "/images/art/holographic.jpg",
    description: "Layered compositions blending photography with digital manipulation.",
  },
];

export const aboutContent = {
  headline: "Building Digital Experiences",
  subheadline: "That Feel Like the Future",
  intro: "I'm a creative technologist obsessed with the intersection of design, code, and human experience.",
  philosophy: [
    "I believe technology should feel magical, not mechanical.",
    "Every pixel matters. Every millisecond of animation matters.",
    "The best interfaces disappear — leaving only the experience.",
  ],
  bio: "With over a decade of experience crafting digital products, I've worked with startups, agencies, and Fortune 500 companies to create experiences that push the boundaries of what's possible on the web. My work lives at the intersection of creative development, interactive design, and emerging technologies.",
  skills: [
    "Creative Development",
    "WebGL & 3D Graphics",
    "Motion Design",
    "UI/UX Design",
    "Generative Art",
    "Technical Direction",
  ],
  contact: {
    email: "hello@example.com",
    twitter: "@handle",
    github: "github.com/handle",
  },
};
