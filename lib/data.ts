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
    id: "project-dia",
    title: "DEAD INTERNET ARCHIVE",
    description: "Shopify Hydrogen website for a clothing brand. A nostalgic digital experience channeling early 2000s internet aesthetics—CRT scanlines, vaporwave vibes, and meme culture. Explore the archive with a retro monitor interface and stickers-era personality.",
    tech: ["Shopify Hydrogen", "React", "TypeScript", "Tailwind CSS"],
    role: "Creative Developer",
    year: "2026",
    image: "/images/projects/dia-preview.png",
    link: "https://deadinternetarchive.com",
    featured: true,
  },
  {
    id: "project-7",
    title: "FRUIT GAME",
    description: "A web3-enabled game with wallet connection, leaderboard, store, and inventory. Play in a glossy 3D-style interface with vibrant, reflective visuals.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Creative Developer",
    year: "2026",
    image: "/images/projects/fruit-game-preview.png",
    link: "https://fruitgame.chakraportfolio.com",
    featured: true,
  },
  {
    id: "project-1",
    title: "ARK : GENESIS",
    description: "A premium, immersive trading card game concept website featuring full-screen hero with particle effects, 3D card showcases, cinematic pack opening experiences, and scroll-driven lore storytelling. Built with dark UI, glassmorphism, and holographic effects.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Lead Developer & Designer",
    year: "2026",
    image: "/images/projects/ark-preview.png",
    link: "https://ark.chakraportfolio.xyz/",
    featured: true,
  },
  {
    id: "project-2",
    title: "ARCHIVES",
    description: "A futuristic, immersive digital gallery showcasing IRL clothing designs and graphics. Features spatial grid layout, premium interactions with smooth animations and parallax scrolling, full-screen product modals with keyboard navigation, and performance-optimized lazy loading.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "Creative Technologist",
    year: "2026",
    image: "/images/projects/archive.png",
    link: "https://gallery.chakraportfolio.xyz/",
  },
  {
    id: "project-3",
    title: "INCRYPT",
    description: "A web-based steganography application that allows you to hide secret data (files or text messages) within PNG images. Features encode/decode functionality with configurable bit depth, automatic canvas expansion, quality preservation options, and a community feed for sharing encoded images. The hidden data is invisible to the naked eye and can only be extracted using the app's decode function.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Web Workers", "upng-js"],
    role: "Full Stack Developer",
    year: "2025",
    image: "/images/projects/incrypt.png",
    link: "https://incrypt.net",
  },
  {
    id: "project-4",
    title: "EPICFACE",
    description: "A creative digital platform featuring an interactive gallery of Epic Smiles, a customizable PFP generator with multiple layers and accessories, music playlists, and immersive web experiences. Built with a retro-futuristic aesthetic and smooth interactions.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Creative Developer",
    year: "2025",
    image: "/images/projects/epicface-preview.png",
    link: "https://epicsmiley.wtf/",
  },
  {
    id: "project-5",
    title: "Yakub.tech",
    description: "A futuristic web platform featuring a stylized laboratory aesthetic with neon lighting and interactive elements. Includes merchandise store, Solana blockchain integration, and links to trading platforms and social channels.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    role: "Creative Developer",
    year: "2024",
    image: "/images/projects/yakub-preview.png",
    link: "https://www.yakub.tech/",
  },
  {
    id: "project-6",
    title: "WEB 3 FORGE",
    description: "NFT and website generator for web3 projects. Create unique generative NFT collections with layered assets and rarity systems, and build beautiful responsive websites for your Web3 projects with drag-and-drop visual editing.",
    tech: ["blender", "after effects", "AI tools"],
    role: "Creative Developer",
    year: "2025",
    image: "/images/projects/web3forge-preview.png",
    link: "https://web3forge.chakraportfolio.xyz/",
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
  headline: "World Building",
  subheadline: "Art And Digital Experiences",
  intro: "I'm a creative technologist obsessed with the intersection of design, code, and human experience.",
  philosophy: [
    "I believe technology should feel magical, not mechanical.",
    "Every pixel matters. Every millisecond of animation matters.",
    "The best interfaces disappear — leaving only the experience.",
  ],
  bio: "With over a decade of experience crafting digital products, I've worked to create experiences that push the boundaries of what's possible on the web. My work lives at the intersection of creative development, interactive design, and emerging technologies.",
  skills: [
    "Creative Development",
    "WebGL & 3D Graphics",
    "Motion Design",
    "UI/UX Design",
    "Generative Art",
    "Technical Direction",
  ],
  contact: {
    email: "luca47hall@gmail.com",
    twitter: "@nokiademonn",
    github: "github.com/chakra3301",
  },
};
