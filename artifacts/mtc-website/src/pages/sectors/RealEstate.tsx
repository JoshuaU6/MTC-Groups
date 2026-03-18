import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Commercial Tower – Abuja CBD",
    description:
      "MTC Group's Real Estate division develops and manages a premium-grade commercial tower in Abuja's central business district. Built to Class-A international specifications, the project delivers grade office spaces, retail podiums, and integrated parking for Nigeria's growing corporate market.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=80",
    tags: ["Commercial", "Class-A Office"],
  },
  {
    title: "Mixed-Use Residential Estate",
    description:
      "MTC Group develops and manages master-planned mixed-use estates offering contemporary residential apartments, townhouses, and amenity-rich communal spaces across West Africa. Our residential developments prioritise sustainable design, community integration, and long-term asset value in high-growth urban markets.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&q=80",
    tags: ["Residential", "Mixed-Use"],
  },
  {
    title: "Industrial Logistics Park",
    description:
      "MTC Group develops and operates purpose-built warehousing and logistics infrastructure to serve the growing demand for organised industrial real estate in West Africa. Our logistics parks offer bonded storage, cold chain capability, and heavy vehicle access — designed for trading, distribution, and logistics operators.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1000&q=80",
    tags: ["Industrial", "Logistics"],
  },
  {
    title: "Hospitality & Serviced Apartments",
    description:
      "MTC Group develops and manages branded hospitality assets comprising hotels and fully serviced long-stay apartments, targeting corporate travellers and international investors across Nigeria's growing hospitality market.",
    image: "https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1000&q=80",
    tags: ["Hospitality", "Serviced Apartments"],
  },
];

const capabilities = [
  "Commercial real estate development & asset management",
  "Residential master-planning & construction",
  "Industrial & logistics real estate operations",
  "Hospitality & serviced apartment development",
  "Real estate investment structuring",
  "Property management across the portfolio",
  "Strategic land acquisition & development",
];

export default function RealEstate() {
  return (
    <SectorDetailLayout
      sectorName="Real Estate"
      sectorSlug="real-estate"
      tagline="Developing and managing premium real estate across West Africa — commercial towers, master-planned communities, industrial parks, and hospitality assets."
      overview="MTC Group's Real Estate division develops, owns, and manages a diverse portfolio of commercial, residential, industrial, and hospitality assets across West Africa. Our approach combines strategic land acquisition, international design standards, and disciplined project management to deliver real estate assets that command strong market demand and sustained asset value. MTC Group operates as principal developer across its real estate portfolio — controlling acquisition, design, construction, and asset management through dedicated in-house teams and specialist consultants. Every MTC real estate project reflects the group's commitment to quality construction, sustainable design, and long-term value creation."
      heroImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
