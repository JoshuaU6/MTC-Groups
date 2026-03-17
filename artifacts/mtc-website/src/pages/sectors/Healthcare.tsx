import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Regional Specialist Hospital Development",
    description:
      "MTC Group is partnering in the development of a multi-speciality hospital serving a regional catchment of over two million people. The facility will include cardiology, oncology, orthopaedic, and maternal health units, designed and equipped to international standards.",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1000&q=80",
    tags: ["Hospital", "Multi-Speciality", "West Africa"],
  },
  {
    title: "Diagnostic & Imaging Centre",
    description:
      "A purpose-built diagnostic hub delivering MRI, CT, ultrasound, laboratory, and pathology services to both outpatient and referred inpatient populations. MTC's investment supports the introduction of digital radiology infrastructure to underserved regional markets.",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1000&q=80",
    tags: ["Diagnostics", "Imaging", "Technology"],
  },
  {
    title: "Primary Healthcare Network Expansion",
    description:
      "MTC Group is investing in the establishment of a network of primary care clinics across peri-urban communities, offering general practice, preventive care, maternal & child health, and pharmacy services to populations with historically limited healthcare access.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=80",
    tags: ["Primary Care", "Community Health", "Social Impact"],
  },
  {
    title: "Medical Equipment Supply & Infrastructure",
    description:
      "Through its procurement arm, MTC Group facilitates the supply and installation of medical equipment to healthcare facilities across the region — from surgical theatres to ICU units — working with globally recognised medical technology manufacturers.",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1000&q=80",
    tags: ["Medical Equipment", "Supply Chain", "Infrastructure"],
  },
];

const capabilities = [
  "Hospital development & project management",
  "Medical equipment procurement & installation",
  "Specialist clinic & diagnostic centre investment",
  "Primary healthcare network development",
  "Public-private partnership (PPP) structuring",
  "Healthcare facility management",
  "Pharmaceutical supply chain solutions",
];

export default function Healthcare() {
  return (
    <SectorDetailLayout
      sectorName="Healthcare"
      sectorSlug="healthcare"
      tagline="Investing in the health of communities — developing world-class healthcare facilities, diagnostic centres, and medical supply chains across West Africa."
      overview="MTC Group recognises healthcare as both a human imperative and a strategic investment opportunity in West Africa's fast-growing economies. Our Healthcare division focuses on developing specialist hospital facilities, diagnostic hubs, and primary care networks that serve populations currently underserved by existing healthcare infrastructure. MTC operates as principal investor and project developer, partnering with international healthcare operators, medical technology providers, and government health agencies to deliver facilities that meet international clinical standards while remaining accessible to local communities. Our investments in healthcare reflect MTC's broader mission to deliver meaningful socioeconomic impact alongside financial returns."
      heroImage="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
