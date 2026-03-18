import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Industrial IoT & Smart Infrastructure",
    description:
      "MTC Group deploys industrial Internet-of-Things systems across its portfolio of energy and infrastructure assets, enabling real-time monitoring, predictive maintenance, and operational efficiency. Our IoT platform integrates with SCADA and control systems across energy facilities and pipeline environments.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80",
    tags: ["IoT", "Smart Infrastructure"],
  },
  {
    title: "Data Centre Development – West Africa",
    description:
      "MTC Group's Technology division develops and operates Tier-III data centre infrastructure serving the growing demand for cloud hosting, enterprise IT, and government digital services in West Africa. The facility provides co-location, managed services, and disaster recovery capacity.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80",
    tags: ["Data Centre", "Digital Infrastructure"],
  },
  {
    title: "Digital Oilfield Solutions",
    description:
      "MTC Group deploys digital oilfield management systems for upstream and midstream operators across the MENA region. Our solutions include remote sensing, production optimisation, HSE digital management platforms, and integrated field operations dashboards.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80",
    tags: ["Digital Oilfield", "Upstream"],
  },
  {
    title: "Fintech & Digital Payment Infrastructure",
    description:
      "MTC Group holds strategic interests in fintech platforms facilitating digital payments, mobile banking, and financial inclusion across sub-Saharan Africa. Our fintech operations support underbanked populations and digital commerce growth in high-potential emerging markets.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=80",
    tags: ["Fintech", "Digital Payments"],
  },
];

const capabilities = [
  "Industrial IoT & smart monitoring systems",
  "Data centre development & operations",
  "Digital oilfield technology deployment",
  "ERP & enterprise systems integration",
  "Fintech & digital payment infrastructure",
  "Cybersecurity for critical infrastructure",
  "AI & data analytics for asset management",
];

export default function Technology() {
  return (
    <SectorDetailLayout
      sectorName="Technology"
      sectorSlug="technology"
      tagline="Deploying digital infrastructure, industrial technology, and smart systems across MTC Group's energy, logistics, and commercial operations."
      overview="MTC Group's Technology division drives digital transformation across the group's energy, infrastructure, and commercial portfolio. From industrial IoT deployments on energy assets to data centre development and fintech operations, MTC builds and manages a portfolio of technology assets aligned with the region's growing digital economy. Our technology capability is applied directly to MTC Group's operations — improving efficiency, safety, and performance across refinery, logistics, and infrastructure environments — and extended to third-party clients and market operators seeking scalable digital solutions."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
