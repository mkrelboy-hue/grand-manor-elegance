/* ============================================================================
   GRAND MANOR FURNITURE — PRODUCT CATALOG
   ============================================================================

   HOW TO EDIT THIS FILE (read this first!)
   ----------------------------------------
   The catalog is split into SECTIONS (Sofas, Beds, Dining, etc).
   Each section is an array of products. To make changes, just edit the
   section you want — nothing else will be affected.

   1. CHANGE A PRICE
        Find the product, change the `price` number. It's in Rands (ZAR).
        Example:   price: 24999,   →   price: 19999,

   2. CHANGE A TITLE OR DESCRIPTION
        Edit the text between the quotes.

   3. ADD A NEW IMAGE TO A PRODUCT
        Add another URL (in quotes) to the `images: [ ... ]` list.
        Separate each URL with a comma.

   4. REMOVE AN IMAGE
        Delete the line for that image (and its trailing comma).

   5. ADD AN IMAGE FROM YOUR LAPTOP
        a) Drop the photo into the folder:   src/assets/local/
           (create the folder if it doesn't exist)
        b) At the very top of THIS file, add a line like:
              import mySofa from "../assets/local/my-sofa.jpg";
        c) Then use `mySofa` (no quotes) inside the `images: [ ... ]` list:
              images: [ mySofa, "https://...", ... ]

   6. ADD A WHOLE NEW PRODUCT
        Copy one of the existing product blocks, paste it into the right
        section, and change the `id` to a number that isn't used yet.

   7. ADD A WHOLE NEW SECTION
        Copy a section block (the `export const ... = [ ... ];` group),
        rename it, then add it to the `sections` list at the bottom.

   ========================================================================= */


// ---- LOCAL IMAGE IMPORTS (add yours here) ---------------------------------
// Example:
//   import livingRoom1 from "../assets/local/living-room-1.jpg";
//   import diningHero  from "../assets/local/dining-hero.jpg";
// ---------------------------------------------------------------------------


// Small helper so we can write short Unsplash photo IDs instead of full URLs.
const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`;




/* ===========================================================================
   SECTION 1 — SOFAS & SEATING
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
      u("1493663284031-b7e3aefcae8e"),
      u("1567538096630-e0c55bd6374c"),
      u("1540574163026-643ea20ade25"),
      u("1586023492125-27b2c045efd7"),
    ],
  },

  {
    id: 8,
    title: "Imperial Sectional Sofa",
    price: 34999,
    description:
      "Modular sectional in champagne velvet, seating up to seven in absolute comfort.",
    images: [
      u("1555041469-a586c61ea9bc"),
      u("1493663284031-b7e3aefcae8e"),
      u("1567538096630-e0c55bd6374c"),
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
      u("1586023492125-27b2c045efd7"),
      u("1555041469-a586c61ea9bc"),
    ],
  },

];




/* ===========================================================================
   SECTION 2 — BEDS & BEDROOM
   =========================================================================== */
export const beds = [

  {
    id: 2,
    title: "Prestige King Bed",
    price: 39999,
    description:
      "Velvet-upholstered king bed with hand-stitched headboard and brushed brass detailing.",
    images: [
      u("1505693416388-ac5ce068fe85"),
      u("1522771739844-6a9f6d5f14af"),
      u("1540518614846-7eded433c457"),
      u("1505693314120-0d443867891c"),
    ],
  },

  {
    id: 9,
    title: "Astoria Canopy Bed",
    price: 44999,
    description:
      "Four-poster canopy bed in solid oak, finished in espresso with hand-carved detailing.",
    images: [
      u("1522771739844-6a9f6d5f14af"),
      u("1505693416388-ac5ce068fe85"),
      u("1540518614846-7eded433c457"),
    ],
  },

  {
    id: 15,
    title: "Duchess Vanity Set",
    price: 13999,
    description:
      "Three-fold mirrored vanity in cream lacquer with matching upholstered stool.",
    images: [
      u("1551298370-9d3d53740c72"),
      u("1581539250439-c96689b516dd"),
      u("1595428774223-ef52624120d2"),
    ],
  },

];




/* ===========================================================================
   SECTION 3 — DINING
   =========================================================================== */
export const dining = [

  {
    id: 3,
    title: "Monarch Dining Set",
    price: 29999,
    description:
      "Eight-seater walnut dining ensemble with marble inlay and signature gilded edges.",
    images: [
      u("1617806118233-18e1de247200"),
      u("1615874959474-d609969a20ed"),
      u("1554995207-c18c203602cb"),
      u("1583845112203-29329902332e"),
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
      u("1617806118233-18e1de247200"),
      u("1615874959474-d609969a20ed"),
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
      u("1583845112203-29329902332e"),
      u("1617806118233-18e1de247200"),
    ],
  },

];




/* ===========================================================================
   SECTION 4 — CHAIRS & ACCENT SEATING
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
      u("1506439773649-6e0eb8cfb237"),
      u("1519947486511-46149fa0a254"),
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
      u("1580229080435-1c7e2c5be0e3"),
      u("1506439773649-6e0eb8cfb237"),
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
      u("1567538096630-e0c55bd6374c"),
      u("1561701984-26ace0ec5e94"),
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
      u("1506439773649-6e0eb8cfb237"),
      u("1519947486511-46149fa0a254"),
    ],
  },

  {
    id: 21,
    title: "Windsor Reading Nook",
    price: 10999,
    description:
      "Curved reading chair with integrated side shelf in cognac leather.",
    images: [
      u("1561701984-26ace0ec5e94"),
      u("1519947486511-46149fa0a254"),
      u("1567538096630-e0c55bd6374c"),
    ],
  },

];




/* ===========================================================================
   SECTION 5 — TABLES & SURFACES
   =========================================================================== */
export const tables = [

  {
    id: 5,
    title: "Versailles Coffee Table",
    price: 8999,
    description:
      "Carrara marble top resting on a hand-cast bronze base inspired by classical French design.",
    images: [
      u("1554295405-abb8fd54f153"),
      u("1532372576444-dda954194ad0"),
      u("1533090481720-856c6e3c1fdc"),
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
      u("1531973486364-5fa64260d75b"),
      u("1554295405-abb8fd54f153"),
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
      u("1533090481720-856c6e3c1fdc"),
      u("1567016432779-094069958ea5"),
    ],
  },

];




/* ===========================================================================
   SECTION 6 — CABINETS & STORAGE
   =========================================================================== */
export const cabinets = [

  {
    id: 6,
    title: "Heritage Display Cabinet",
    price: 18999,
    description:
      "Glass-fronted display cabinet in burled walnut with internal soft-glow lighting.",
    images: [
      u("1551298370-9d3d53740c72"),
      u("1581539250439-c96689b516dd"),
      u("1595428774223-ef52624120d2"),
    ],
  },

  {
    id: 13,
    title: "Ravello Wardrobe",
    price: 21999,
    description:
      "Eight-door wardrobe in matte ebony with smoked glass inserts and integrated lighting.",
    images: [
      u("1581539250439-c96689b516dd"),
      u("1595428774223-ef52624120d2"),
      u("1551298370-9d3d53740c72"),
    ],
  },

  {
    id: 16,
    title: "Atelier Bookcase",
    price: 14999,
    description:
      "Floor-to-ceiling open bookcase in blackened steel and smoked walnut shelves.",
    images: [
      u("1595428774223-ef52624120d2"),
      u("1551298370-9d3d53740c72"),
      u("1581539250439-c96689b516dd"),
    ],
  },

  {
    id: 18,
    title: "Regent Sideboard",
    price: 19999,
    description:
      "Mid-century inspired sideboard in rosewood with brushed brass hardware.",
    images: [
      u("1567016432779-094069958ea5"),
      u("1551298370-9d3d53740c72"),
      u("1581539250439-c96689b516dd"),
    ],
  },

  {
    id: 22,
    title: "Olympia Bar Cabinet",
    price: 22999,
    description:
      "Lacquered bar cabinet with mirrored interior, glass shelves, and brass fittings.",
    images: [
      u("1595428774223-ef52624120d2"),
      u("1567016432779-094069958ea5"),
      u("1551298370-9d3d53740c72"),
    ],
  },

];




/* ===========================================================================
   SECTIONS LIST — controls the order shown on the Collection page.
   To hide a section, comment its line out with //.
   To reorder, drag the lines around.
   =========================================================================== */
export const sections = [
  { name: "Sofas & Seating",        items: sofas    },
  { name: "Beds & Bedroom",         items: beds     },
  { name: "Dining",                 items: dining   },
  { name: "Chairs & Accent Seating", items: chairs  },
  { name: "Tables & Surfaces",      items: tables   },
  { name: "Cabinets & Storage",     items: cabinets },
];


// Flat list of every product (used by the product detail page).
export const products = sections.flatMap((s) => s.items);




/* ===========================================================================
   CONTACT LINKS & HELPERS — edit the phone number here once and it
   updates everywhere on the site.
   =========================================================================== */
export const PHONE_NUMBER = "+27123456789";

export const WHATSAPP_URL =
  "https://wa.me/27123456789?text=Hello%20Grand%20Manor%20Furniture%20I%20am%20interested%20in%20this%20product";

export const PHONE_URL = "tel:+27123456789";

export const formatZAR = (n) =>
  "R" + n.toLocaleString("en-ZA", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
