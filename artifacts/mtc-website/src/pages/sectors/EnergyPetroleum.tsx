import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Offshore Jacket Platform Fabrication",
    description:
      "MTC Group supported the fabrication and structural preparation of large-scale offshore jacket platforms destined for deepwater installations in the Gulf region. Our teams ensured precision engineering, timely delivery, and full compliance with international offshore standards.",
    image: "/media/img1.jpg",
    tags: ["Offshore", "Fabrication", "Gulf Region"],
  },
  {
    title: "Subsea Jacket Structure – Loadout Operations",
    description:
      "A critical high-tonnage subsea jacket structure was mobilised and prepared for loadout. MTC's operational involvement covered yard management, quality assurance, and coordination with international engineering contractors.",
    image: "/media/img4.jpg",
    tags: ["Subsea", "Heavy Lift", "Engineering"],
  },
  {
    title: "Platform Construction – Team Delivery",
    description:
      "Skilled teams deployed by MTC Group completed a major offshore platform construction milestone, delivering on schedule under challenging environmental conditions. This project showcased MTC's workforce management and HSE excellence.",
    image: "/media/img5.jpg",
    tags: ["Construction", "Workforce", "HSE"],
  },
  {
    title: "Petroleum Infrastructure – Site Operations (Video)",
    description:
      "Field operations video documenting active petroleum infrastructure works, including equipment mobilisation, site preparation, and progress milestones.",
    video: "/media/vid1.mp4",
    tags: ["Petroleum", "Field Operations", "Documentary"],
  },
  {
    title: "Energy Project Works – Progress Documentation (Video)",
    description:
      "A recorded progress documentation for energy sector projects undertaken by MTC Group's subsidiary teams, highlighting commissioning readiness and technical execution quality.",
    video: "/media/vid2.mp4",
    tags: ["Energy", "Commissioning", "Progress"],
  },
];

const capabilities = [
  "Offshore platform fabrication & jacket structural works",
  "Petroleum infrastructure project management",
  "HSE-compliant field operations",
  "Engineering procurement & construction (EPC)",
  "Refinery support services & maintenance",
  "Crude oil and gas midstream logistics",
  "Workforce mobilisation for energy sites",
];

export default function EnergyPetroleum() {
  return (
    <SectorDetailLayout
      sectorName="Energy & Petroleum"
      sectorSlug="energy-petroleum"
      tagline="Powering growth through strategic investments in oil, gas, and offshore energy infrastructure across the MENA region."
      overview="MTC Group's Energy & Petroleum division is at the forefront of upstream and midstream operations in the MENA region. Through its subsidiaries and strategic partnerships, MTC delivers end-to-end solutions encompassing offshore platform fabrication, petroleum infrastructure development, refinery support, and field operations management. With a workforce of seasoned engineers and project managers, MTC brings operational discipline and technical excellence to every energy engagement — from deepwater jacket structures to onshore crude handling facilities."
      heroImage="/media/img1.jpg"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
