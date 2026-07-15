/* ============================================================================
   GRAND MANOR FURNITURE — PRODUCT CATALOG
   ============================================================================

   HOW TO EDIT THIS FILE
   ---------------------
   Each product has ONE image by default — the same piece shown on its own.
   To show extra ANGLES of the SAME product, add more photos of that exact
   piece to the `images: [ ... ]` list. Do NOT paste photos of other products
   here — the gallery will show every image in the list as if it were the
   same product.

   1. CHANGE A PRICE            edit the `price` number (Rands, no commas)
   2. CHANGE TITLE / TEXT       edit the text between the quotes
   3. ADD ANOTHER ANGLE         add a new URL (or local import) to `images: [ ]`
   4. REMOVE AN ANGLE           delete that line inside `images: [ ]`
   5. USE A PHOTO FROM LAPTOP
        a) drop it into  src/assets/local/   (create folder if needed)
        b) at the top of this file add:
              import sofaAngle1 from "../assets/local/royal-sofa-1.jpg";
              import sofaAngle2 from "../assets/local/royal-sofa-2.jpg";
        c) use them (no quotes) inside images:
              images: [ sofaAngle1, sofaAngle2 ]
   6. ADD A NEW PRODUCT         copy a product block, change the `id`
   7. HIDE A SECTION            comment out its line in `sections` at the bottom

   ========================================================================= */


// ---- LOCAL IMAGE IMPORTS (add yours here) ---------------------------------
// Example:
//   import royalSofaFront from "../assets/local/royal-sofa-front.jpg";
//   import royalSofaSide  from "../assets/local/royal-sofa-side.jpg";
// ---------------------------------------------------------------------------


// Helper — short Unsplash IDs instead of full URLs.
const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;




/* ===========================================================================
   SECTION 1 — SOFAS
   =========================================================================== */
export const sofas = [

  {
    id: 1,
    title: "Royal Chesterfield Sofa",
    price: 24999,
    description:
      "Hand-tufted leather chesterfield with solid mahogany legs. A statement piece for grand living rooms.",
    images: [
      u("1555041469-a586c61ea9bc"),
    ],
  },

  {
    id: 8,
    title: "Imperial Sectional Sofa",
    price: 34999,
    description:
      "Modular sectional in champagne velvet, seating up to seven in absolute comfort.",
    images: [
      u("1493663284031-b7e3aefcae8e"),
    ],
  },

  {
    id: 14,
    title: "Savoy Two-Seater Sofa",
    price: 16999,
    description:
      "Compact two-seater in slate linen with cushion-soft duck down fill.",
    images: [
      u("1540574163026-643ea20ade25"),
    ],
  },

];




/* ===========================================================================
   SECTION 2 — TABLES
   =========================================================================== */
export const tables = [

  {
    id: 3,
    title: "Monarch Dining Table",
    price: 29999,
    description:
      "Eight-seater walnut dining table with marble inlay and signature gilded edges.",
    images: [
      u("1617806118233-18e1de247200"),
    ],
  },

  {
    id: 10,
    title: "Grand Banquet Table",
    price: 27999,
    description:
      "Twelve-seater banquet table in reclaimed teak with forged iron understructure.",
    images: [
      u("1617104678098-de229db51175"),
    ],
  },

  {
    id: 5,
    title: "Versailles Coffee Table",
    price: 8999,
    description:
      "Carrara marble top resting on a hand-cast bronze base inspired by classical French design.",
    images: [
      u("1554295405-abb8fd54f153"),
    ],
  },

  {
    id: 12,
    title: "Onyx Console Table",
    price: 11999,
    description:
      "Polished onyx console with mirrored backing and slender geometric base.",
    images: [
      u("1567016432779-094069958ea5"),
    ],
  },

  {
    id: 20,
    title: "Manor Nesting Tables",
    price: 6999,
    description:
      "Trio of nesting tables in smoked glass and antiqued gold metal frames.",
    images: [
      u("1532372576444-dda954194ad0"),
    ],
  },

];




/* ===========================================================================
   SECTION 3 — CHAIRS
   =========================================================================== */
export const chairs = [

  {
    id: 4,
    title: "Executive Lounge Chair",
    price: 12999,
    description:
      "Italian leather lounge chair with sculpted oak frame and ergonomic curvature.",
    images: [
      u("1567538096630-e0c55bd6374c"),
    ],
  },

  {
    id: 7,
    title: "Bordeaux Wingback Chair",
    price: 9999,
    description:
      "Deep-buttoned wingback in handwoven jacquard with stained beechwood legs.",
    images: [
      u("1561701984-26ace0ec5e94"),
    ],
  },

  {
    id: 11,
    title: "Belmont Accent Chair",
    price: 7499,
    description:
      "Sculptural accent chair upholstered in mohair velvet with brass-tipped legs.",
    images: [
      u("1519947486511-46149fa0a254"),
    ],
  },

  {
    id: 19,
    title: "Florence Dining Chairs (Set of 4)",
    price: 11999,
    description:
      "Set of four upholstered dining chairs in saddle leather with tapered ash legs.",
    images: [
      u("1554995207-c18c203602cb"),
    ],
  },

  {
    id: 21,
    title: "Windsor Reading Nook",
    price: 10999,
    description:
      "Curved reading chair with integrated side shelf in cognac leather.",
    images: [
      u("1506439773649-6e0eb8cfb237"),
    ],
  },

  {
    id: 17,
    title: "Côte d'Azur Ottoman",
    price: 5499,
    description:
      "Round tufted ottoman in ivory boucle with hand-finished walnut base.",
    images: [
      u("1580229080435-1c7e2c5be0e3"),
    ],
  },

];




/* ===========================================================================
   SECTION 4 — MATS
   =========================================================================== */
export const mats = [

  {
    id: 23,
    title: "Royal Persian Area Rug",
    price: 18999,
    description:
      "Hand-knotted wool Persian rug with intricate medallion pattern in burgundy and gold.",
    images: [
      u("1567226123374-5f2b8a70d5a2"),
    ],
  },

  {
    id: 24,
    title: "Silk Kashan Runner",
    price: 12499,
    description:
      "Luxurious silk hallway runner with detailed floral motifs and a soft sheen finish.",
    images: [
      u("1589820296156-2454b8a1a6e1"),
    ],
  },

  {
    id: 25,
    title: "Modern Geometric Mat",
    price: 3999,
    description:
      "Low-pile contemporary mat in charcoal and cream, perfect for high-traffic living spaces.",
    images: [
      u("1600607686527-6b3b8b1b4c9e"),
    ],
  },

];




/* ===========================================================================
   SECTION 5 — KITCHEN ACCESSORIES
   =========================================================================== */
export const kitchenAccessories = [

  {
    id: 26,
    title: "Crystal Decanter Set",
    price: 4999,
    description:
      "Lead-free crystal decanter with four matching tumblers, finished with a hand-cut diamond pattern.",
    images: [
      u("1565538810643-5b4d4d7e9c0f"),
    ],
  },

  {
    id: 27,
    title: "Marble Serving Board",
    price: 2499,
    description:
      "White Carrara marble board with brass handles, ideal for cheese and charcuterie presentations.",
    images: [
      u("1603193906672-4f0b3c6b1e5a"),
    ],
  },

  {
    id: 28,
    title: "Brass Cutlery Set",
    price: 3499,
    description:
      "24-piece brushed brass cutlery set with weighted handles and a polished gold finish.",
    images: [
      u("1590796146923-2807df65d29e"),
    ],
  },

  {
    id: 29,
    title: "Gold-Rimmed Dinner Set",
    price: 5999,
    description:
      "Fine porcelain 12-piece dinner set with hand-painted gold rims and a glossy glaze.",
    images: [
      u("1556910103-1c02745a30bf"),
    ],
  },

];




/* ===========================================================================
   SECTION 6 — LAMPS & LIGHT FIXTURES
   =========================================================================== */
export const lamps = [

  {
    id: 30,
    title: "Crystal Chandelier",
    price: 45999,
    description:
      "Tiered crystal chandelier with brushed brass arms and warm LED candle bulbs.",
    images: [
      u("1513506003013-110a0046f7e2"),
    ],
  },

  {
    id: 31,
    title: "Brass Arc Floor Lamp",
    price: 8999,
    description:
      "Sculptural arc floor lamp in antique brass with a cream linen drum shade.",
    images: [
      u("1507473885765-e6ed057f782c"),
    ],
  },

  {
    id: 32,
    title: "Marble Table Lamp",
    price: 5999,
    description:
      "Minimalist table lamp with a solid white marble base and a tapered silk shade.",
    images: [
      u("1540932295468-0a8b44b2b6b7"),
    ],
  },

  {
    id: 33,
    title: "Pendant Light Cluster",
    price: 11999,
    description:
      "Cluster of three smoked glass pendant lights with adjustable gold suspension cables.",
    images: [
      u("1600585154340-be6161a56a0c"),
    ],
  },

];




/* ===========================================================================
   SECTIONS LIST — controls the order shown on the Collection page.
   =========================================================================== */
export const sections = [
  { name: "Sofas",              items: sofas              },
  { name: "Tables",             items: tables             },
  { name: "Chairs",             items: chairs             },
  { name: "Mats",               items: mats               },
  { name: "Kitchen Accessories", items: kitchenAccessories },
  { name: "Lamps & Light Fixtures", items: lamps          },
];


// Flat list of every product (used by the product detail page).
export const products = sections.flatMap((s) => s.items);




/* ===========================================================================
   CONTACT LINKS & HELPERS
   =========================================================================== */
export const PHONE_NUMBER = "+27123456789";

export const WHATSAPP_URL =
  "https://wa.me/27123456789?text=Hello%20Grand%20Manor%20Furniture%20I%20am%20interested%20in%20this%20product";

export const PHONE_URL = "tel:+27123456789";

export const formatZAR = (n) =>
  "R" + n.toLocaleString("en-ZA", { minimumFractionDigits: 0, maximumFractionDigits: 0 });