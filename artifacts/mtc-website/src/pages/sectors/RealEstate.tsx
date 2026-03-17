import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Commercial Tower Development – Abuja CBD",
    description:
      "MTC Group's real estate division is developing a premium-grade commercial tower in Abuja's central business district. Designed to international Class-A specifications, the project will deliver grade office spaces, retail podiums, and integrated parking for Nigeria's growing business community.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=80",
    tags: ["Commercial", "Nigeria", "Class-A Office"],
  },
  {
    title: "Mixed-Use Residential Estate – West Africa",
    description:
      "A master-planned mixed-use estate offering contemporary residential apartments, townhouses, and amenity-rich communal spaces. MTC Real Estate's approach prioritises sustainable design, community integration, and long-term asset value in high-growth urban markets.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80",
    tags: ["Residential", "Mixed-Use", "Masterplan"],
  },
  {
    title: "Industrial Logistics Park",
    description:
      "Purpose-built warehousing and logistics infrastructure designed to serve the increasing demand for organised industrial real estate in West Africa. The facility offers bonded storage, cold chain capability, and heavy vehicle access.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&q=80",
    tags: ["Industrial", "Logistics", "Warehousing"],
  },
  {
    title: "Hospitality & Serviced Apartments",
    description:
      "MTC Group is developing a flagship hospitality project comprising a branded hotel and fully serviced long-stay apartments, targeting corporate travellers and international investors in Nigeria's growing hospitality market.",
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1000&q=80",
    tags: ["Hospitality", "Hotel", "Serviced Apartments"],
  },
];

const capabilities = [
  "Commercial real estate development & leasing",
  "Residential master-planning & construction",
  "Industrial & logistics real estate",
  "Hospitality & serviced apartment projects",
  "Real estate investment structuring",
  "Property management & asset management",
  "Joint venture partnerships with international developers",
];

export default function RealEstate() {
  return (
    <SectorDetailLayout
      sectorName="Real Estate"
      sectorSlug="real-estate"
      tagline="Delivering premium real estate assets across West Africa — from commercial towers and master-planned communities to industrial parks and hospitality projects."
      overview="MTC Group's Real Estate division is actively developing a diverse portfolio of commercial, residential, industrial, and hospitality assets across West Africa. Our approach blends strategic land acquisition, international design standards, and disciplined project management to deliver real estate products that command strong market demand. We operate both as principal developer and as an investment partner to international developers seeking credible local partners with market insight, regulatory access, and operational capability. Every MTC real estate project reflects our commitment to quality, sustainability, and long-term value creation."
      heroImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
