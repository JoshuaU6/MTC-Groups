import { SectorDetailLayout, Project } from "@/components/SectorDetailLayout";

const projects: Project[] = [
  {
    title: "Grain & Commodity Import Programme",
    description:
      "Safwad Limited manages large-scale importation of essential food commodities — including wheat, rice, maize, and edible oils — from major producing regions in South America, Eastern Europe, and Southeast Asia. Our supply chain connects international grain markets with West African distributors and government food security programmes.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1000&q=80",
    tags: ["Grains", "Food Commodities", "Import"],
  },
  {
    title: "Consumer Goods Distribution Network",
    description:
      "Through Safwad Limited, MTC Group distributes fast-moving consumer goods including diapers, baby care products, pampers, and feminine hygiene products across West African markets. Our distribution network reaches wholesalers, retailers, and institutional buyers — ensuring essential products reach communities at scale.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000&q=80",
    tags: ["FMCG", "Consumer Goods", "Distribution"],
  },
  {
    title: "Agricultural Export Programme",
    description:
      "Safwad Limited supports smallholder and commercial farmers in exporting cash crops and agricultural produce to international markets. We manage logistics, quality certification, compliance documentation, and buyer relationships — creating a reliable export pipeline that supports economic development in producing regions.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=1000&q=80",
    tags: ["Export", "Cash Crops", "Agriculture"],
  },
  {
    title: "Sanitary Products Supply Chain",
    description:
      "A critical component of Safwad's operations is the sourcing, importation, and distribution of sanitary and hygiene products. From bulk manufacturing partnerships to last-mile retail distribution, Safwad manages an integrated supply chain that serves hospitals, NGOs, retail chains, and end consumers across multiple African countries.",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80",
    tags: ["Sanitary", "Hygiene", "Healthcare Supply"],
  },
];

const capabilities = [
  "Agricultural commodity import & export",
  "Grain, edible oil, and food commodity trading",
  "Consumer goods and FMCG distribution",
  "Diapers, pampers, and sanitary product supply",
  "International logistics and supply chain management",
  "Wholesale and retail distribution networks",
  "Quality certification and compliance management",
  "Agricultural export facilitation",
];

export default function Agriculture() {
  return (
    <SectorDetailLayout
      sectorName="Agriculture & Consumer Goods"
      sectorSlug="agriculture"
      tagline="Global import, export, and distribution of agricultural commodities and essential consumer goods through Safwad Limited."
      overview="MTC Group's Agriculture & Consumer Goods division, operated through Safwad Limited, is dedicated to ensuring the efficient movement of essential commodities between global producers and regional markets. Safwad specialises in the importation of agricultural products including grains, edible oils, pulses, and sugar, and the distribution of fast-moving consumer goods such as diapers, pampers, and sanitary products. The division maintains a network of logistics partners, warehousing facilities, and distribution relationships across Africa — serving government entities, institutional buyers, retail chains, and wholesale distributors. Safwad's operations support food security, improve access to essential goods, and contribute to the economic development of the communities we serve."
      heroImage="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=1600&q=80"
      projects={projects}
      capabilities={capabilities}
    />
  );
}
