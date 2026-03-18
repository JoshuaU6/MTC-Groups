import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Refinery Operations – Energy & Petroleum",
    description:
      "This section highlights MTC Group's involvement in refinery operations, petroleum processing, and downstream energy infrastructure supporting large-scale fuel production and global supply. Our refinery assets are positioned to handle significant volumes of crude, producing refined products for domestic and international markets.",
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
    title: "Filling Station Network — 2,300+ Stations",
    description:
      "MTC Group's fuel distribution network includes supply operations to over 2,300 filling stations across our territories. This downstream presence ensures our petroleum products reach end consumers efficiently — supporting retail fuel distribution, price stability, and energy access across communities.",
    image: "/media/img1.jpg",
    tags: ["Fuel Distribution", "Retail Network", "Downstream"],
  },
  {
    title: "Petroleum Infrastructure – Field Operations (Video)",
    description:
      "Field documentation of active petroleum infrastructure works, including equipment mobilisation, storage facility commissioning, and operational readiness milestones at MTC Group's energy sites.",
    video: "/media/vid1.mp4",
    tags: ["Petroleum", "Field Operations", "Commissioning"],
  },
  {
    title: "Energy Project Progress – Site Documentation (Video)",
    description:
      "Progress documentation covering energy sector project execution by MTC Group's operational teams, highlighting refinery support activities, tank farm commissioning, and technical delivery milestones.",
    video: "/media/vid2.mp4",
    tags: ["Energy", "Refinery", "Projects"],
  },
];

const capabilities = [
  "Crude oil trading and international offtake",
  "Petroleum product supply — PMS, AGO, LNG, LPG, Jet A1",
  "Refinery operations and participation",
  "Tank farm development and storage management",
  "Petroleum processing plant investment",
  "Filling station network supply (2,300+ stations)",
  "Global fuel distribution and logistics",
  "Midstream and downstream energy operations",
];

export default function EnergyPetroleum() {
  return (
    <SectorDetailLayout
      sectorName="Energy & Petroleum"
      sectorSlug="energy-petroleum"
      tagline="MTC Group's core business — refinery operations, petroleum processing, tank farm infrastructure, and global fuel distribution across Africa, the Middle East, and beyond."
      overview="Energy and Petroleum is the foundation of MTC Group's global business. Our operations span the full value chain: from crude oil trading and international offtake agreements through refinery participation and tank farm infrastructure, to downstream fuel distribution serving over 2,300 filling stations across our territories. Our petroleum assets include refinery operations, processing plants, tank farms, and fuel storage facilities — all classified and managed under the Energy & Petroleum sector. Through MainKey Limited, we engage in large-volume petroleum product trading — supplying PMS, AGO, LNG, LPG, and Jet A1 to sovereign buyers, commercial operators, and fuel networks across Africa, the Middle East, Europe, and Asia. Our flagship Gulf Bay Refinery is a major investment in clean and efficient petroleum processing. MTC Group's energy operations are designed to the standards of the world's leading integrated energy companies: disciplined, scalable, and globally connected."
      heroImage="/images/hero1.jpg"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
