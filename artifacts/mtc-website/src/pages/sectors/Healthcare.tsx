import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "MTC Regional Specialist Hospital",
    description:
      "MTC Group operates a multi-speciality hospital serving a regional catchment across West Africa. The facility delivers cardiology, oncology, orthopaedic, and maternal health services, built and equipped to international clinical standards.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80",
    tags: ["Hospital", "Multi-Speciality"],
  },
  {
    title: "Diagnostic & Imaging Centre",
    description:
      "MTC Group operates a purpose-built diagnostic hub delivering MRI, CT, ultrasound, laboratory, and pathology services. Our diagnostic facilities bring advanced imaging infrastructure to regional healthcare markets, reducing patient referral gaps and improving clinical outcomes.",
    image: "https://images.unsplash.com/photo-1516069677018-378515003435?w=1000&q=80",
    tags: ["Diagnostics", "Medical Imaging"],
  },
  {
    title: "Primary Healthcare Clinic Network",
    description:
      "MTC Group operates a network of primary care clinics across peri-urban communities, delivering general practice, preventive care, maternal and child health, and pharmacy services. Our clinic network brings structured healthcare access to populations historically underserved.",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1000&q=80",
    tags: ["Primary Care", "Community Health"],
  },
  {
    title: "Medical Equipment Supply & Installation",
    description:
      "MTC Group procures and installs medical equipment across its healthcare facilities and partner hospitals across the region — from surgical theatres and ICU units to laboratory systems — working with globally recognised medical technology manufacturers.",
    image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1000&q=80",
    tags: ["Medical Equipment", "Healthcare Infrastructure"],
  },
];

const capabilities = [
  "Hospital development & operations management",
  "Medical equipment procurement & installation",
  "Specialist clinic & diagnostic centre operations",
  "Primary healthcare network management",
  "Healthcare facility investment & development",
  "Pharmaceutical supply chain management",
  "Healthcare workforce training & development",
];

export default function Healthcare() {
  return (
    <SectorDetailLayout
      sectorName="Healthcare"
      sectorSlug="healthcare"
      tagline="Developing and operating world-class healthcare facilities, diagnostic centres, and medical supply networks across Africa."
      overview="MTC Group's Healthcare division develops, operates, and manages specialist hospital facilities, diagnostic centres, and primary care networks across Africa. Our healthcare infrastructure delivers cardiology, oncology, diagnostics, and community health services to populations across West Africa — built to international clinical standards and managed with operational discipline. MTC Group functions as both developer and operator across its healthcare portfolio, building and managing the facilities, equipment, and workforce capability needed to deliver measurable health outcomes. Our healthcare operations reflect the group's broader commitment to building essential services infrastructure that generates both social impact and long-term investment returns."
      heroImage="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
