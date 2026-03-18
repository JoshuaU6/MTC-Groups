import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Crude Oil Trading & Refinery Offtake",
    description:
      "MTC Group, through MainKey Limited, executes large-scale crude oil trading and refinery offtake transactions across strategic markets in the Middle East and West Africa. Our operations cover sourcing, logistics coordination, financing, vessel scheduling, and delivery to sovereign buyers, refineries, and commercial off-takers.",
    image: "/images/hero3.jpg",
    tags: ["Crude Oil", "Refinery Offtake"],
  },
  {
    title: "Tank Farm & Petroleum Storage Facilities",
    description:
      "MTC Group develops and operates strategic petroleum storage infrastructure across port and inland locations. Our tank farm network is designed for bulk storage of crude oil and refined petroleum products, supporting trading operations, stock management, national supply systems, and commercial distribution.",
    image: "/images/hero2.jpg",
    tags: ["Tank Farm", "Petroleum Storage"],
  },
  {
    title: "Refinery Operations – Energy & Petroleum",
    description:
      "MTC Group operates refinery and downstream petroleum infrastructure supporting crude processing, product manufacturing, storage integration, and market supply. Our refining assets are positioned for high-volume fuel production and dependable domestic and international distribution.",
    image: "/images/hero1.jpg",
    tags: ["Refinery", "Downstream"],
  },
  {
    title: "MTC Gulf Bay Refinery – Flagship Facility",
    description:
      "MTC Gulf Bay Refinery represents a flagship refining asset within MTC Group's energy portfolio, built for efficient petroleum processing and large-volume product supply. The facility supports refining throughput, product distribution, and export-oriented market operations.",
    image: "/images/hero4.jpg",
    tags: ["Refinery", "USA"],
  },
  {
    title: "Offshore Energy Infrastructure",
    description:
      "MTC Group supports offshore energy infrastructure through fabrication-linked preparation, structural readiness, and coordinated project delivery for petroleum and marine energy installations. This capability forms part of the Group's broader offshore and downstream platform.",
    image: "/media/img4.jpg",
    tags: ["Offshore", "Energy Infrastructure"],
  },
  {
    title: "Subsea Structure Loadout & Offshore Preparation",
    description:
      "MTC Group supports subsea and offshore structure loadout operations, including mobilisation, coordination, and execution support for marine energy assets. These activities form part of the Group's broader offshore energy infrastructure capability.",
    image: "/media/img5.jpg",
    tags: ["Subsea", "Offshore"],
  },
  {
    title: "Operational Workforce & Project Execution",
    description:
      "MTC Group maintains a disciplined technical workforce delivering energy and petroleum projects through coordinated site execution, strict safety compliance, and operational readiness. Our field teams support infrastructure deployment, logistics mobilisation, and project delivery across key assets.",
    image: "/media/img9.jpg",
    tags: ["Workforce", "Project Execution"],
  },
  {
    title: "Downstream Fuel Distribution Network",
    description:
      "MTC Group supports downstream fuel distribution through a broad network of supply, retail, and delivery operations serving commercial and consumer markets. This platform strengthens product accessibility, retail continuity, and downstream market presence.",
    image: "/media/img1.jpg",
    tags: ["Fuel Distribution", "Downstream"],
  },
  {
    title: "Petroleum Site Operations",
    description:
      "MTC Group manages petroleum site operations covering equipment mobilisation, active field coordination, and execution support within its Energy & Petroleum portfolio. These operations support productivity, safety, and project continuity across operating environments.",
    video: "/media/vid1.mp4",
    tags: ["Petroleum", "Site Operations"],
  },
  {
    title: "Energy Project Progress",
    description:
      "MTC Group's energy project teams drive commissioning readiness, technical execution, and operational continuity across active energy assets. Field operations reflect the Group's disciplined approach to project delivery and performance management.",
    video: "/media/vid2.mp4",
    tags: ["Energy", "Operations"],
  },
  {
    title: "Petroleum Processing & Downstream Supply",
    description:
      "MTC Group's downstream energy platform manages petroleum processing, product distribution, and supply chain coordination across key markets. Operations are configured to sustain processing continuity, market reliability, and efficient delivery of refined petroleum products.",
    video: "/media/vid3.mp4",
    tags: ["Petroleum Processing", "Downstream"],
  },
  {
    title: "Offshore Petroleum Operations",
    description:
      "MTC Group supports offshore petroleum operations including FPSO-linked activities, marine energy systems, and offshore production support. Our offshore portfolio strengthens the Group's Energy & Petroleum platform through marine-based logistics, process infrastructure, and operational coordination.",
    video: "/media/vid4.mp4",
    tags: ["Offshore", "FPSO"],
  },
  {
    title: "Petroleum Storage & Marine Logistics",
    description:
      "MTC Group integrates tank farm storage with marine petroleum logistics, enabling efficient product transfer, inventory support, and downstream supply chain continuity. This capability supports bulk storage, vessel-linked operations, and coordinated movement of crude and refined products.",
    video: "/media/vid5.mp4",
    tags: ["Storage", "Marine Logistics"],
  },
  {
    title: "Petroleum Processing & Downstream Energy",
    description:
      "MTC Group's downstream energy platform supports petroleum processing, storage integration, and supply infrastructure for refined petroleum products. Our facilities are configured to sustain production continuity, market distribution, and operational reliability across target regions.",
    video: "/media/vid6.mp4",
    tags: ["Processing", "Downstream Energy"],
  },
];

const capabilities = [
  "Crude oil trading and international offtake",
  "Petroleum product supply — PMS, AGO, LNG, LPG, Jet A1",
  "Refinery operations and participation",
  "Tank farm development and storage management",
  "Offshore energy infrastructure and project delivery",
  "Downstream fuel distribution and retail networks",
  "Global energy logistics and marine operations",
  "Integrated upstream, midstream and downstream platform",
];

export default function EnergyPetroleum() {
  return (
    <SectorDetailLayout
      sectorName="Energy & Petroleum"
      sectorSlug="energy-petroleum"
      tagline="Crude oil trading, petroleum product supply, refinery operations, tank farm storage, fuel distribution, and global energy logistics."
      overview="MTC Group's Energy & Petroleum division operates across crude oil trading, petroleum product supply, refinery participation, tank farm storage, fuel distribution, and global energy logistics. Through MainKey Limited and strategic operating assets, the Group maintains an integrated upstream, midstream, and downstream platform serving international energy markets."
      heroImage="/images/hero1.jpg"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
