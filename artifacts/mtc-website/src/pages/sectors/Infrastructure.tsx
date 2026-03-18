import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Road Network Development – National Corridor",
    description:
      "MTC Group's civil engineering teams have delivered large-scale road network development projects across the region, including national highway corridors, access roads, and urban road infrastructure. Works include subgrade preparation, pavement construction, drainage systems, and road furniture.",
    image: "/media/img2.jpg",
    tags: ["Roads", "Civil Works", "National Corridor"],
  },
  {
    title: "Bridge & Overpass Construction",
    description:
      "MTC Group's infrastructure division executes complex bridge and overpass construction projects — from design and piling through deck construction and finishing. Our teams manage structural steel and reinforced concrete bridge works across varied terrain and environmental conditions.",
    image: "/media/img3.jpg",
    tags: ["Bridge", "Structural", "Civil Engineering"],
  },
  {
    title: "Civil Earthworks – Mass Excavation & Grading",
    description:
      "Large-scale earthworks and mass excavation form a core part of MTC's infrastructure capability. Our plant and equipment fleet supports cut-and-fill operations, site levelling, and terrain preparation for major development projects across the MENA region.",
    image: "/media/img10.jpg",
    tags: ["Earthworks", "Excavation", "Terrain"],
  },
  {
    title: "Structural Steel Fabrication & Heavy Lift",
    description:
      "MTC Group's infrastructure teams deliver structural steel fabrication, erection, and heavy lift operations for bridges, buildings, and industrial structures. We deploy a modern fleet of cranes and lifting equipment, managed by certified rigging engineers.",
    image: "/media/img11.jpg",
    tags: ["Structural Steel", "Heavy Lift", "Fabrication"],
  },
  {
    title: "Utility Corridor & Civil Trench Works",
    description:
      "MTC supports utility corridor development and civil trench works for water, drainage, and communications infrastructure. Our teams execute trench excavation, bedding, backfill, and reinstatement to the highest engineering specifications.",
    image: "/media/img6.jpg",
    tags: ["Utility", "Trench Works", "Civil Infrastructure"],
  },
  {
    title: "Civil Infrastructure Works – Site Documentation (Video)",
    description:
      "Field documentation of MTC Group's civil infrastructure project execution, capturing equipment deployment, crew coordination, and progressive site works across road, bridge, and structural construction projects.",
    video: "/media/vid7.mp4",
    tags: ["Video", "Site Operations", "Civil Works"],
  },
  {
    title: "Infrastructure Project Progress (Video)",
    description:
      "A video record of progressive civil infrastructure operations across MTC Group's active construction projects. Full HSE oversight and quality assurance protocols maintained throughout all phases.",
    video: "/media/vid8.mp4",
    tags: ["Video", "Infrastructure", "HSE"],
  },
];

const capabilities = [
  "Road network design, construction & rehabilitation",
  "Bridge and overpass engineering & construction",
  "Civil earthworks — mass excavation, grading & fill",
  "Structural steel fabrication & heavy lifts",
  "Utility corridor construction & trench works",
  "Multi-discipline EPC project management",
  "HSE management systems for civil works",
  "Equipment fleet management & logistics",
];

export default function Infrastructure() {
  return (
    <SectorDetailLayout
      sectorName="Infrastructure"
      sectorSlug="infrastructure"
      tagline="Building the foundations of tomorrow — roads, bridges, civil earthworks, and large-scale structural construction across the region."
      overview="Infrastructure is MTC Group's established civil engineering and construction domain. Our subsidiaries deliver roads, bridges, structural works, and large-scale civil construction across the MENA region. MTC's field teams combine seasoned engineering expertise with a modern fleet of heavy plant to execute infrastructure projects of any scale and complexity — from national highway corridors and bridge structures to mass earthworks and utility corridor development. Infrastructure at MTC Group refers to civil construction: road networks, bridges, overpass structures, civil earthworks, and heavy structural works. Petroleum processing plants, tank farms, oil facilities, refinery assets, and offshore petroleum infrastructure are classified separately under our Energy & Petroleum sector. MTC Group's infrastructure capability serves government programmes, property developers, industrial clients, and national infrastructure authorities across Africa and the Middle East."
      heroImage="/media/img3.jpg"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
