import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Crude Oil Supply & Offtake Agreements",
    description:
      "MainKey Limited has established long-term crude oil offtake agreements with refineries and sovereign energy buyers across Africa and the Middle East. These agreements underpin reliable, large-volume petroleum supply chains that serve both national energy programmes and private sector fuel networks.",
    image: "/images/hero3.jpg",
    tags: ["Crude Oil", "Offtake", "Africa & Middle East"],
  },
  {
    title: "Petroleum Products Distribution Network",
    description:
      "Through MainKey Limited, MTC Group manages the distribution of PMS, AGO, and EN590 diesel to over 2,300 filling stations across our operational territories. Our logistics infrastructure spans bulk terminals, truck fleets, and pipeline access — ensuring consistent and competitive supply to end users.",
    image: "/images/hero4.jpg",
    tags: ["PMS", "Diesel", "Distribution"],
  },
  {
    title: "LNG & LPG Trading Operations",
    description:
      "MTC Group's trading arm actively participates in the LNG and LPG markets, sourcing from major producing regions and delivering to off-grid power operators, industrial consumers, and domestic gas distributors. Our trading desk manages risk, logistics, and contract fulfilment across complex multi-party transactions.",
    video: "/media/vid3.mp4",
    tags: ["LNG", "LPG", "Gas Trading"],
  },
  {
    title: "Aviation Fuel (Jet A1) Supply",
    description:
      "MainKey Limited is an active supplier of Jet A1 aviation fuel to airports and airline operators. Leveraging our refinery relationships and terminal access, we provide competitive, certified aviation fuel on both spot and contract basis — serving commercial carriers and charter operators across Africa.",
    image: "/images/hero2.jpg",
    tags: ["Jet A1", "Aviation Fuel", "Airlines"],
  },
];

const capabilities = [
  "Crude oil purchasing, trading, and offtake",
  "PMS, AGO, EN590 diesel supply and distribution",
  "LNG and LPG international trading",
  "Jet A1 aviation fuel supply",
  "Fertilizer and industrial chemical trading",
  "Refinery relationship management",
  "Energy risk management and hedging",
  "Bulk terminal access and storage agreements",
];

export default function Trading() {
  return (
    <SectorDetailLayout
      sectorName="Trading & Commodities"
      sectorSlug="trading"
      tagline="International energy and commodity trading through MainKey Limited — connecting global markets with reliable, large-scale petroleum and industrial product supply."
      overview="MTC Group's Trading & Commodities division, operated through MainKey Limited, is one of the group's highest-value business activities. We participate in international energy markets as active traders and supply chain operators — sourcing crude oil and petroleum products from global refineries, and distributing them to buyers across Africa, the Middle East, Europe, and Asia. Our trading operation is supported by an extensive network of refinery offtake agreements, terminal partnerships, and logistics arrangements that enable us to deliver at scale and on time. MainKey Limited trades across the full spectrum of petroleum products including crude oil, PMS, AGO, LNG, LPG, Jet A1, and fertilizers — serving national oil companies, commercial distributors, filling station networks, and industrial consumers."
      heroImage="/images/hero3.jpg"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
