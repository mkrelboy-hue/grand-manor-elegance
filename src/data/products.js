// Image URLs from Unsplash (luxury furniture photography)
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;

const productImages = {
  sofa1: ["1555041469-a586c61ea9bc","1493663284031-b7e3aefcae8e","1567538096630-e0c55bd6374c","1540574163026-643ea20ade25","1586023492125-27b2c045efd7"].map(img),
  bed1: ["1505693416388-ac5ce068fe85","1522771739844-6a9f6d5f14af","1540518614846-7eded433c457","1505693314120-0d443867891c","1540518614846-7eded433c457"].map(img),
  dining: ["1617806118233-18e1de247200","1615874959474-d609969a20ed","1554995207-c18c203602cb","1583845112203-29329902332e","1617104678098-de229db51175"].map(img),
  chair: ["1567538096630-e0c55bd6374c","1506439773649-6e0eb8cfb237","1519947486511-46149fa0a254","1561701984-26ace0ec5e94","1580229080435-1c7e2c5be0e3"].map(img),
  coffee: ["1554295405-abb8fd54f153","1532372576444-dda954194ad0","1533090481720-856c6e3c1fdc","1567016432779-094069958ea5","1531973486364-5fa64260d75b"].map(img),
  cabinet: ["1551298370-9d3d53740c72","1581539250439-c96689b516dd","1595428774223-ef52624120d2","1567016432779-094069958ea5","1551298370-9d3d53740c72"].map(img),
};

export const products = [
  { id: 1, title: "Royal Chesterfield Sofa", price: 24999, description: "Hand-tufted leather chesterfield with solid mahogany legs. A statement piece for grand living rooms.", images: productImages.sofa1 },
  { id: 2, title: "Prestige King Bed", price: 39999, description: "Velvet-upholstered king bed with hand-stitched headboard and brushed brass detailing.", images: productImages.bed1 },
  { id: 3, title: "Monarch Dining Set", price: 29999, description: "Eight-seater walnut dining ensemble with marble inlay and signature gilded edges.", images: productImages.dining },
  { id: 4, title: "Executive Lounge Chair", price: 12999, description: "Italian leather lounge chair with sculpted oak frame and ergonomic curvature.", images: productImages.chair },
  { id: 5, title: "Versailles Coffee Table", price: 8999, description: "Carrara marble top resting on a hand-cast bronze base inspired by classical French design.", images: productImages.coffee },
  { id: 6, title: "Heritage Display Cabinet", price: 18999, description: "Glass-fronted display cabinet in burled walnut with internal soft-glow lighting.", images: productImages.cabinet },
  { id: 7, title: "Bordeaux Wingback Chair", price: 9999, description: "Deep-buttoned wingback in handwoven jacquard with stained beechwood legs.", images: productImages.chair },
  { id: 8, title: "Imperial Sectional Sofa", price: 34999, description: "Modular sectional in champagne velvet, seating up to seven in absolute comfort.", images: productImages.sofa1 },
  { id: 9, title: "Astoria Canopy Bed", price: 44999, description: "Four-poster canopy bed in solid oak, finished in espresso with hand-carved detailing.", images: productImages.bed1 },
  { id: 10, title: "Grand Banquet Table", price: 27999, description: "Twelve-seater banquet table in reclaimed teak with forged iron understructure.", images: productImages.dining },
  { id: 11, title: "Belmont Accent Chair", price: 7499, description: "Sculptural accent chair upholstered in mohair velvet with brass-tipped legs.", images: productImages.chair },
  { id: 12, title: "Onyx Console Table", price: 11999, description: "Polished onyx console with mirrored backing and slender geometric base.", images: productImages.coffee },
  { id: 13, title: "Ravello Wardrobe", price: 21999, description: "Eight-door wardrobe in matte ebony with smoked glass inserts and integrated lighting.", images: productImages.cabinet },
  { id: 14, title: "Savoy Two-Seater Sofa", price: 16999, description: "Compact two-seater in slate linen with cushion-soft duck down fill.", images: productImages.sofa1 },
  { id: 15, title: "Duchess Vanity Set", price: 13999, description: "Three-fold mirrored vanity in cream lacquer with matching upholstered stool.", images: productImages.cabinet },
  { id: 16, title: "Atelier Bookcase", price: 14999, description: "Floor-to-ceiling open bookcase in blackened steel and smoked walnut shelves.", images: productImages.cabinet },
  { id: 17, title: "Côte d'Azur Ottoman", price: 5499, description: "Round tufted ottoman in ivory boucle with hand-finished walnut base.", images: productImages.chair },
  { id: 18, title: "Regent Sideboard", price: 19999, description: "Mid-century inspired sideboard in rosewood with brushed brass hardware.", images: productImages.cabinet },
  { id: 19, title: "Florence Dining Chairs (Set of 4)", price: 11999, description: "Set of four upholstered dining chairs in saddle leather with tapered ash legs.", images: productImages.dining },
  { id: 20, title: "Manor Nesting Tables", price: 6999, description: "Trio of nesting tables in smoked glass and antiqued gold metal frames.", images: productImages.coffee },
  { id: 21, title: "Windsor Reading Nook", price: 10999, description: "Curved reading chair with integrated side shelf in cognac leather.", images: productImages.chair },
  { id: 22, title: "Olympia Bar Cabinet", price: 22999, description: "Lacquered bar cabinet with mirrored interior, glass shelves, and brass fittings.", images: productImages.cabinet },
];

export const WHATSAPP_URL = "https://wa.me/27123456789?text=Hello%20Grand%20Manor%20Furniture%20I%20am%20interested%20in%20this%20product";
export const PHONE_URL = "tel:+27123456789";

export const formatZAR = (n) =>
  "R" + n.toLocaleString("en-ZA", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
