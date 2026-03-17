import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "International School Campus Development",
    description:
      "MTC Group is developing a fully integrated international school campus offering British and IB curricula to students from nursery through to sixth form. The campus features purpose-built science and technology labs, sports facilities, performing arts spaces, and residential boarding provision.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1000&q=80",
    tags: ["International School", "K-12", "Campus Development"],
  },
  {
    title: "Vocational & Technical Training Institute",
    description:
      "Addressing the skills gap in Nigeria's oil & gas, construction, and manufacturing sectors, MTC Group is establishing a vocational training institute offering certified programmes in pipefitting, electrical engineering, welding, and industrial automation.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1000&q=80",
    tags: ["Vocational Training", "TVET", "Skills Development"],
  },
  {
    title: "University Affiliate Research Centre",
    description:
      "In partnership with leading international universities, MTC Group is co-funding a research centre focused on sustainable energy, environmental engineering, and digital infrastructure. The centre bridges academic research with industrial application across MTC's core business sectors.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1000&q=80",
    tags: ["Research", "University", "Innovation"],
  },
  {
    title: "E-Learning & Digital Literacy Programmes",
    description:
      "MTC's Education arm funds the deployment of e-learning platforms and digital literacy programmes across community schools in rural and peri-urban areas, supporting government education mandates and closing the digital divide.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1000&q=80",
    tags: ["E-Learning", "Digital Literacy", "Community"],
  },
];

const capabilities = [
  "International school campus design & development",
  "Vocational & technical training institute management",
  "University partnerships & research centre funding",
  "E-learning platform investment & deployment",
  "Education public-private partnership (PPP) structuring",
  "Educational technology integration",
  "Scholarship & talent development programmes",
];

export default function Education() {
  return (
    <SectorDetailLayout
      sectorName="Education"
      sectorSlug="education"
      tagline="Shaping futures through investment in world-class educational institutions, vocational training, and digital learning infrastructure across Africa."
      overview="MTC Group views education as one of the most transformative investments any organisation can make. Our Education division develops, funds, and manages a range of educational institutions — from international K-12 schools to vocational training institutes and university-affiliated research centres. By combining international academic standards with locally grounded delivery, MTC aims to bridge the skills gap in West Africa's growing economies and equip the next generation of professionals, entrepreneurs, and engineers. MTC's education investments are closely aligned with its core business sectors, including energy, infrastructure, and technology, creating a pipeline of highly skilled talent for both MTC and the broader market."
      heroImage="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
