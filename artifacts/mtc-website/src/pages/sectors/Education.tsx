import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "International School Campus",
    description:
      "MTC Group develops and operates an international school campus offering British and IB curricula from nursery through sixth form. The campus features science and technology labs, sports facilities, performing arts spaces, and residential boarding provision, built and managed to international academic standards.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=80",
    tags: ["International School", "K-12"],
  },
  {
    title: "Vocational & Technical Training Institute",
    description:
      "MTC Group operates a vocational training institute offering certified programmes in pipefitting, electrical engineering, welding, and industrial automation. The institute directly supports the skills pipeline for Nigeria's oil & gas, construction, and manufacturing sectors.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1000&q=80",
    tags: ["Vocational Training", "Skills Development"],
  },
  {
    title: "University Research Centre",
    description:
      "MTC Group operates a research centre focused on sustainable energy, environmental engineering, and digital infrastructure, developed in alignment with leading international universities. The centre bridges academic research with industrial application across MTC's core business sectors.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=80",
    tags: ["Research", "Innovation"],
  },
  {
    title: "E-Learning & Digital Literacy Programmes",
    description:
      "MTC Group's Education division deploys e-learning platforms and digital literacy programmes across community schools in rural and peri-urban areas, supporting government education mandates and reducing the digital skills gap across operational communities.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=80",
    tags: ["E-Learning", "Digital Literacy"],
  },
];

const capabilities = [
  "International school campus development & management",
  "Vocational & technical training institute operations",
  "University research centre development",
  "E-learning platform deployment & management",
  "Educational facility investment & construction",
  "Scholarship & talent development programmes",
  "Workforce training for energy & infrastructure sectors",
];

export default function Education() {
  return (
    <SectorDetailLayout
      sectorName="Education"
      sectorSlug="education"
      tagline="Developing and operating world-class educational institutions, vocational training centres, and digital learning infrastructure across Africa."
      overview="MTC Group's Education division develops, operates, and manages a range of educational institutions across Africa — from international K-12 schools and vocational training institutes to university-affiliated research centres. By combining international academic standards with locally grounded delivery, MTC's education operations bridge the skills gap in West Africa's growing economies and equip the next generation of professionals, engineers, and technical specialists. MTC Group's education assets are directly aligned with its core business sectors — energy, infrastructure, and technology — creating a structured pipeline of skilled talent for the group and the broader market."
      heroImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
