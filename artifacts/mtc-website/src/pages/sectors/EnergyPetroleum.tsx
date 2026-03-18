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
      "MTC Group develops and operates strategic petroleum storage infrastructure across port and inland locations. Our tank farm network manages bulk storage of crude oil and refined petroleum products, supporting trading operations, stock management, national supply systems, and commercial distribution.",
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
      "MTC Gulf Bay Refinery is a flagship refining asset within MTC Group's energy portfolio, built for efficient petroleum processing and large-volume product supply. The facility delivers refining throughput, product distribution, and export-oriented market operations at industrial scale.",
    image: "/images/hero4.jpg",
    tags: ["Refinery", "USA"],
  },
  {
    title: "Offshore Energy Infrastructure",
    description:
      "MTC Group delivers offshore energy infrastructure through fabrication-linked preparation, structural readiness, and coordinated project execution for petroleum and marine energy installations. This capability anchors the Group's offshore and downstream energy platform.",
    image: "/media/img4.jpg",
    tags: ["Offshore", "Energy Infrastructure"],
  },
  {
    title: "Subsea Structure Loadout & Offshore Preparation",
    description:
      "MTC Group manages subsea and offshore structure loadout operations, including mobilisation, coordination, and execution for marine energy assets. These activities are core to the Group's offshore energy infrastructure capability.",
    image: "/media/img5.jpg",
    tags: ["Subsea", "Offshore"],
  },
  {
    title: "Operational Workforce & Project Execution",
    description:
      "MTC Group maintains a disciplined technical workforce delivering energy and petroleum projects through coordinated site execution, strict safety compliance, and operational readiness. Our field teams manage infrastructure deployment, logistics mobilisation, and project delivery across key assets.",
    image: "/media/img9.jpg",
    tags: ["Workforce", "Project Execution"],
  },
  {
    title: "Downstream Fuel Distribution Network",
    description:
      "MTC Group operates a downstream fuel distribution network spanning supply, retail, and delivery operations across commercial and consumer markets. Our distribution platform delivers product accessibility, retail continuity, and downstream market coverage at regional scale.",
    image: "/media/img1.jpg",
    tags: ["Fuel Distribution", "Downstream"],
  },
  {
    title: "Petroleum Site Operations",
    description:
      "MTC Group manages petroleum site operations covering equipment mobilisation, active field coordination, and execution across its Energy & Petroleum portfolio. These operations deliver productivity, safety compliance, and project continuity across all operating environments.",
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
      "MTC Group's downstream energy platform manages petroleum processing, product distribution, and supply chain coordination across key markets. Operations are configured for processing continuity, market reliability, and efficient delivery of refined petroleum products.",
    video: "/media/vid3.mp4",
    tags: ["Petroleum Processing", "Downstream"],
  },
  {
    title: "Offshore Petroleum Operations",
    description:
      "MTC Group operates offshore petroleum activities including FPSO-linked operations, marine energy systems, and offshore production management. Our offshore platform delivers marine-based logistics, process infrastructure, and operational coordination across key energy environments.",
    video: "/media/vid4.mp4",
    tags: ["Offshore", "FPSO"],
  },
  {
    title: "Petroleum Storage & Marine Logistics",
    description:
      "MTC Group operates an integrated petroleum storage and marine logistics platform, managing bulk storage, vessel-linked operations, and coordinated movement of crude and refined products. This capability delivers downstream supply chain continuity at volume and speed.",
    video: "/media/vid5.mp4",
    tags: ["Storage", "Marine Logistics"],
  },
  {
    title: "Petroleum Processing & Downstream Energy",
    description:
      "MTC Group's downstream energy platform manages petroleum processing, storage integration, and supply infrastructure for refined petroleum products. Our facilities deliver production continuity, market distribution, and operational reliability across all target regions.",
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
