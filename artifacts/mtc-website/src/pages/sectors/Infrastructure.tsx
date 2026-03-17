import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Large-Diameter Pipeline Lowering – Phase 1",
    description:
      "MTC Group's infrastructure teams executed the controlled lowering of a large-diameter steel pipeline into a prepared trench corridor. Utilising side-boom track dozers and precision lifting rigging, the operation was completed within stringent safety parameters.",
    image: "/media/img2.jpg",
    tags: ["Pipeline", "Civil Works", "Heavy Equipment"],
  },
  {
    title: "Cross-Country Pipeline Installation – Aerial Spread",
    description:
      "Spanning several kilometres of open terrain, this pipeline installation project deployed a coordinated spread of side-boom pipe layers. MTC's project management ensured alignment tolerance, anti-corrosion coating integrity, and welding quality throughout the corridor.",
    image: "/media/img3.jpg",
    tags: ["Pipeline", "Cross-Country", "EPC"],
  },
  {
    title: "Trench Pipe Placement – Close-Quarter Operations",
    description:
      "Close-quarter pipeline placement in a narrow earthwork trench required millimetre-level crane coordination. MTC's site engineering team managed loads, slope angles, and strand jack alignment to ensure safe, accurate pipe setting.",
    image: "/media/img10.jpg",
    tags: ["Pipeline", "Trench Works", "Precision Engineering"],
  },
  {
    title: "Multi-Sideboom Pipe Lowering – Long Run",
    description:
      "An extended pipe run was successfully lowered using a fleet of side-boom machines operating in synchronised formation. This project is a testament to MTC's capability in managing complex multi-equipment civil infrastructure operations.",
    image: "/media/img11.jpg",
    tags: ["Pipeline", "Long Run", "Fleet Operations"],
  },
  {
    title: "Pipeline Corridor Development – Desert Terrain",
    description:
      "MTC supported pipeline corridor development through challenging arid desert terrain, managing ground preparation, pipe stringing, bending, and lowering-in operations while maintaining strict environmental and HSE compliance.",
    image: "/media/img6.jpg",
    tags: ["Desert Works", "Terrain Management", "HSE"],
  },
  {
    title: "Pipeline Installation – Video Documentation (Field)",
    description:
      "Recorded on-site field documentation of large-scale pipeline installation activities, capturing the precision of equipment deployment, pipe handling, and crew coordination.",
    video: "/media/vid3.mp4",
    tags: ["Video", "Field Documentation", "Pipeline"],
  },
  {
    title: "Infrastructure Works – Progressive Spread Operations (Video)",
    description:
      "A video record of progressive pipeline spread operations, documenting the advancing pipe-laying front across open-country terrain. Full HSE oversight and quality assurance protocols were maintained.",
    video: "/media/vid4.mp4",
    tags: ["Video", "Spread Operations", "Infrastructure"],
  },
  {
    title: "Pipe Lowering & Welding – Continuous Operations (Video)",
    description:
      "This video covers continuous welding, coating, and lowering-in activities managed by MTC's field infrastructure teams, reflecting project progress and engineering standards.",
    video: "/media/vid5.mp4",
    tags: ["Video", "Welding", "Infrastructure"],
  },
  {
    title: "Heavy Civil Infrastructure – Site Mobilisation (Video)",
    description:
      "Site mobilisation documentary showing the full suite of heavy civil plant, equipment, and crew deployment for infrastructure projects handled by MTC Group.",
    video: "/media/vid6.mp4",
    tags: ["Video", "Mobilisation", "Heavy Civil"],
  },
];

const capabilities = [
  "Large-diameter pipeline construction & installation",
  "Cross-country corridor development",
  "Trench excavation, backfill & reinstatement",
  "Structural steel fabrication & heavy lifts",
  "Roads, bridges & civil earthworks",
  "Multi-discipline EPC project management",
  "HSE management systems for heavy civil works",
  "Equipment fleet management & logistics",
];

export default function Infrastructure() {
  return (
    <SectorDetailLayout
      sectorName="Infrastructure"
      sectorSlug="infrastructure"
      tagline="Building the foundations of tomorrow — from pipeline corridors and heavy civil works to strategic infrastructure development across the region."
      overview="Infrastructure is MTC Group's most established operational domain. Our subsidiaries deliver complete pipeline installation, heavy civil engineering, and large-scale construction across the MENA region. From cross-country pipeline spreads to complex trench-laying operations in desert terrain, MTC's field teams combine seasoned engineering expertise with a modern fleet of heavy plant to deliver infrastructure projects of any complexity. Our pipeline division alone has installed hundreds of kilometres of product, fuel, and utility pipelines, serving national oil companies, industrial developers, and government infrastructure programmes."
      heroImage="/media/img3.jpg"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
