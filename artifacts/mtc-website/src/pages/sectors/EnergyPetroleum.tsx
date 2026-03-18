import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Refinery Operations – Energy & Petroleum",
    description:
      "This section highlights MTC Group's involvement in refinery operations, petroleum processing and downstream energy infrastructure supporting large-scale fuel production and global supply. Our refinery assets are positioned to handle significant volumes of crude, producing refined products for domestic and international markets.",
    image: "/images/hero1.jpg",
    tags: ["Refinery", "Petroleum Processing", "Downstream"],
  },
  {
    title: "Tank Farm & Petroleum Storage Facilities",
    description:
      "MTC Group operates and invests in tank farm infrastructure designed for bulk petroleum storage across strategic port and inland locations. Our facilities provide secure, compliant storage for crude oil, PMS, AGO, and LPG — serving trading operations, national petroleum companies, and commercial distributors.",
    image: "/images/hero2.jpg",
    tags: ["Tank Farm", "Petroleum Storage", "Bulk Storage"],
  },
  {
    title: "Crude Oil Trading & Refinery Offtake",
    description:
      "MTC Group, through MainKey Limited, maintains active crude oil trading operations and offtake agreements with refineries across the MENA region and West Africa. Our team manages complex multi-party transactions covering lifting, logistics, financing, and delivery — serving both sovereign and commercial buyers at scale.",
    image: "/images/hero3.jpg",
    tags: ["Crude Oil", "Refinery Offtake", "MENA & West Africa"],
  },
  {
    title: "MTC Gulf Bay Refinery — Flagship Facility",
    description:
      "MTC Group's Gulf Bay Refinery represents a landmark investment in large-scale, efficient petroleum processing. The facility is designed to handle significant throughput of crude oil, producing refined petroleum products for both domestic distribution and export to regional markets.",
    image: "/images/hero4.jpg",
    tags: ["Refinery", "Processing Plant", "USA"],
  },
  {
    title: "Offshore Energy Infrastructure",
    description:
      "MTC Group supports offshore energy infrastructure through fabrication, structural preparation and project delivery for petroleum and offshore installations. This work is part of the group's wider Energy & Petroleum operations.",
    image: "/media/img4.jpg",
    tags: ["Offshore", "Energy Infrastructure", "Petroleum"],
  },
  {
    title: "Subsea Energy Structure – Loadout Operations",
    description:
      "This section highlights MTC Group's operational support for offshore and subsea energy structures, including mobilisation, loadout coordination and project execution for energy-sector assets.",
    image: "/media/img5.jpg",
    tags: ["Subsea", "Offshore", "Loadout Operations"],
  },
  {
    title: "Energy Project Delivery – Workforce Excellence",
    description:
      "This section reflects MTC Group's workforce capability in delivering energy and petroleum projects through coordinated site execution, safety discipline and technical operations support.",
    image: "/media/img9.jpg",
    tags: ["Workforce", "Energy Projects", "Site Execution"],
  },
  {
    title: "Filling Station Network — 2,300+ Stations",
    description:
      "MTC Group's fuel distribution network includes supply operations to over 2,300 filling stations across our territories. This downstream presence ensures our petroleum products reach end consumers efficiently — supporting retail fuel distribution, price stability, and energy access across communities.",
    image: "/media/img1.jpg",
    tags: ["Fuel Distribution", "Retail Network", "Downstream"],
  },
  {
    title: "Petroleum Site Operations (Video)",
    description:
      "Operational footage documenting active petroleum-related works, including equipment mobilisation, site preparation, process support and execution milestones within MTC Group's Energy & Petroleum activities.",
    video: "/media/vid1.mp4",
    tags: ["Petroleum", "Site Operations", "MTC Group"],
  },
  {
    title: "Energy Project Progress – Operations Video",
    description:
      "A progress documentation section showing MTC Group's energy project readiness, commissioning preparation and technical execution across its energy operations.",
    video: "/media/vid2.mp4",
    tags: ["Energy", "Commissioning", "Operations"],
  },
  {
    title: "Refinery Operations – Energy & Petroleum (Video)",
    description:
      "This section highlights MTC Group's involvement in refinery operations, petroleum processing and downstream energy infrastructure supporting large-scale fuel production and global supply.",
    video: "/media/vid3.mp4",
    tags: ["Refinery", "Petroleum Processing", "MTC Group"],
  },
  {
    title: "Offshore Petroleum Operations (Video)",
    description:
      "This section presents offshore petroleum operations within MTC Group's Energy & Petroleum portfolio, highlighting offshore production support, process infrastructure and marine energy assets.",
    video: "/media/vid4.mp4",
    tags: ["Offshore", "Petroleum", "FPSO"],
  },
  {
    title: "Tank Farm Storage Operations (Video)",
    description:
      "This section highlights MTC Group's tank farm and fuel storage operations, including storage infrastructure, process support and petroleum logistics within the downstream energy value chain.",
    video: "/media/vid5.mp4",
    tags: ["Tank Farm", "Storage", "Petroleum Logistics"],
  },
  {
    title: "Refinery Operations – Petroleum Processing (Video)",
    description:
      "This section highlights MTC Group's refinery operations, petroleum processing and downstream energy infrastructure supporting production, storage and supply of petroleum products.",
    video: "/media/vid6.mp4",
    tags: ["Refinery", "Processing", "Downstream Energy"],
  },
];

const capabilities = [
  "Crude oil trading and international offtake",
  "Petroleum product supply — PMS, AGO, LNG, LPG, Jet A1",
  "Refinery operations and participation",
  "Tank farm development and storage management",
  "Offshore energy infrastructure and project delivery",
  "Filling station network supply (2,300+ stations)",
  "Global fuel distribution and energy logistics",
  "Upstream, midstream and downstream operations",
];

export default function EnergyPetroleum() {
  return (
    <SectorDetailLayout
      sectorName="Energy & Petroleum"
      sectorSlug="energy-petroleum"
      tagline="MTC Group's core business — crude oil trading, petroleum product supply, refinery operations, tank farm storage, fuel distribution and global energy logistics."
      overview="MTC Group's Energy & Petroleum division operates across crude oil trading, petroleum product supply, refinery operations, tank farm storage, fuel distribution and global energy logistics. Through its subsidiaries and strategic assets, the group supports upstream, midstream and downstream activities across multiple international markets. Our petroleum assets include refinery operations, processing plants, offshore energy infrastructure, tank farms, and fuel storage facilities — all classified and managed under the Energy & Petroleum sector. Through MainKey Limited, we engage in large-volume petroleum product trading — supplying PMS, AGO, LNG, LPG, and Jet A1 to sovereign buyers, commercial operators, and fuel networks across Africa, the Middle East, Europe, and Asia. MTC Group's energy operations are designed to the standards of the world's leading integrated energy companies: disciplined, scalable, and globally connected."
      heroImage="/images/hero1.jpg"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
