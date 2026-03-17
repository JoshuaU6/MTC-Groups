import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Industrial IoT & Smart Infrastructure Platform",
    description:
      "MTC Group is deploying industrial Internet-of-Things (IoT) systems across its portfolio of infrastructure and energy assets, enabling real-time monitoring, predictive maintenance, and operational efficiency gains. The platform integrates with SCADA and DCS systems across pipeline and facility environments.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&q=80",
    tags: ["IoT", "Smart Infrastructure", "Industrial Tech"],
  },
  {
    title: "Data Centre Development – West Africa",
    description:
      "MTC's Technology division is investing in Tier-III data centre infrastructure to serve the growing demand for cloud hosting, enterprise IT, and government digital services in West Africa. The facility will provide co-location, managed services, and disaster recovery.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000&q=80",
    tags: ["Data Centre", "Cloud", "Digital Infrastructure"],
  },
  {
    title: "Digital Oilfield Solutions",
    description:
      "MTC Group's technology arm is partnering with global software providers to deploy digital oilfield management systems for upstream operators in the MENA region. Solutions include remote sensing, production optimisation, and HSE digital management platforms.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&q=80",
    tags: ["Digital Oilfield", "Upstream", "Software"],
  },
  {
    title: "Fintech & Digital Payment Infrastructure",
    description:
      "Recognising the transformative potential of financial technology in Africa, MTC Group holds strategic interests in fintech ventures facilitating digital payments, mobile banking, and financial inclusion for underbanked populations across sub-Saharan Africa.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000&q=80",
    tags: ["Fintech", "Digital Payments", "Financial Inclusion"],
  },
];

const capabilities = [
  "Industrial IoT & smart monitoring systems",
  "Data centre design, development & operation",
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
      tagline="Harnessing digital innovation to enhance operations, enable smart infrastructure, and drive Africa's technology-enabled future."
      overview="MTC Group's Technology division represents the group's commitment to digital transformation — both within its own portfolio of businesses and across the wider markets it serves. From industrial IoT deployments on energy infrastructure to data centre development and fintech investments, MTC is building a portfolio of technology assets that are strategically aligned with the region's growing digital economy. Our technology investments are distinguished by their focus on practical application and scalable impact: deploying technology that solves real operational challenges, creates new market opportunities, and positions MTC and its partners at the forefront of Africa's digital revolution."
      heroImage="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
