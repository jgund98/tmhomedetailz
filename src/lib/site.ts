export const SITE = {
  name: "TM Home Detailz",
  tagline: "The Detailz Make the Difference",
  phone: "352-602-9854",
  phoneHref: "tel:+13526029854",
  email: "tmhomedetailz@gmail.com",
  instagram: "https://www.instagram.com/tmhomedetailz/",
  tiktok: "https://www.tiktok.com/@tmhomedetailz",
  facebook: "https://www.facebook.com/tmhomedetailz",
  base: "Lake County, Florida",
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  headline: string;
  intro: string;
  image: string;
  imageAlt: string;
  bullets: { title: string; body: string }[];
  ideal: string[];
  accent?: string;
};

export const SERVICES: Service[] = [
  {
    slug: "commercial-exterior",
    name: "Commercial Exterior",
    short: "Building washes, walkways, dumpster pads — the whole property, dialed in.",
    headline: "Your property is your first impression. We make it spotless.",
    intro:
      "Storefronts, offices, plazas, HOAs — we wash buildings, walkways, curbing, and dumpster pads with commercial-grade equipment and a technician's eye. Soft wash where surfaces demand it, high pressure where they can take it.",
    image: "/images/roof.jpg",
    imageAlt: "TM technician washing a commercial storefront from a boom lift",
    bullets: [
      { title: "Building & facade washes", body: "Safe, low-pressure washing for stucco, block, brick, and painted surfaces — algae, dust, and rundown gone without damage." },
      { title: "Walkways & entryways", body: "Surface-cleaned concrete with even, lane-free passes. Gum, grime, and grease lifted from high-traffic zones." },
      { title: "Dumpster pad sanitation", body: "Degreased, hot-water washed, and deodorized. The corner of the property nobody wants to deal with — handled." },
      { title: "Scheduled maintenance", body: "Monthly and quarterly programs that keep the property inspection-ready year round." },
    ],
    ideal: ["Retail plazas & storefronts", "Offices & medical", "Restaurants & drive-thrus", "HOAs & communities", "Property managers"],
  },
  {
    slug: "fleet-washing",
    name: "Fleet Washing",
    short: "Hand-washed, hot-water fleet cleaning that keeps your name looking sharp at 70 mph.",
    headline: "Your trucks are rolling billboards. We keep them show-ready.",
    intro:
      "Box trucks, semis, trailers, service vans — washed by hand with commercial-grade soap and hot water when the road film demands it. On your lot, on your schedule, with route-friendly recurring programs.",
    image: "/images/fleet.jpg",
    imageAlt: "Semi truck covered in foam during a TM fleet wash",
    bullets: [
      { title: "Two-step & hand washing", body: "Proper two-step chemistry followed by hand agitation where it counts — no swirl-scarred paint, no missed panels." },
      { title: "Hot water degreasing", body: "Road film, diesel soot, and fifth-wheel grease don't respond to cold water. Ours runs hot." },
      { title: "On-site service", body: "We come to your yard — nights and weekends included — so trucks wash while they're parked, not while they should be earning." },
      { title: "Recurring programs", body: "Weekly, bi-weekly, or monthly washes with consistent, documented results across the whole fleet." },
    ],
    ideal: ["Box trucks & straight trucks", "Semis & trailers", "Service & last-mile vans", "Dump trucks", "Buses & shuttles"],
  },
  {
    slug: "heavy-equipment",
    name: "Heavy Equipment",
    short: "Degreased, de-mudded, inspection-ready iron — from excavators to ag equipment.",
    headline: "Clean iron works harder, sells higher, and inspects easier.",
    intro:
      "Caked mud hides leaks. Grease hides cracks. We strip excavators, loaders, dozers, and ag equipment down to clean metal so your mechanics, inspectors, and buyers can actually see the machine.",
    image: "/images/steam.jpg",
    imageAlt: "Surface cleaner throwing dust and spray off a concrete pad",
    bullets: [
      { title: "Undercarriage & tracks", body: "Hot water and high flow blast packed clay and debris out of tracks, rollers, and belly pans." },
      { title: "Engine & hydraulic degreasing", body: "Careful, targeted degreasing that prepares equipment for service work and leak diagnosis." },
      { title: "Pre-sale & pre-inspection", body: "Machines that look maintained appraise better. We make yours look maintained — because after we're done, it is." },
      { title: "DOT & yard programs", body: "Keep the whole yard presentable with scheduled equipment washdowns." },
    ],
    ideal: ["Excavators & loaders", "Dozers & graders", "Dump & vac trucks", "Ag & citrus equipment", "Rental yards"],
  },
  {
    slug: "surface-cleaning",
    name: "Surface Cleaning",
    short: "Concrete, pavers, and hardscapes surface-cleaned to an even, like-new finish.",
    headline: "Concrete should be one color. We bring it back.",
    intro:
      "Driveways, sidewalks, pool decks, patios, parking garages — cleaned with professional surface cleaners for even, stripe-free results, with pre-treatment and post-treatment so it stays cleaner longer.",
    image: "/images/sidewalk.jpg",
    imageAlt: "Surface cleaner cutting a clean path through a dirty concrete walkway",
    bullets: [
      { title: "Pre-treat, clean, post-treat", body: "Chemistry first, then hot water and pressure, then a finishing treatment that slows algae regrowth." },
      { title: "Even, lane-free finish", body: "Rotary surface cleaners — not wand stripes — for a uniform result across every square foot." },
      { title: "Gum, grease & rust", body: "Targeted spot treatments for the stains regular washing can't touch." },
      { title: "Curb-to-door coverage", body: "Sidewalks, curbing, aprons, and entries — the full path your customers walk." },
    ],
    ideal: ["Driveways & sidewalks", "Pool decks & patios", "Parking garages", "Shopping plazas", "Community hardscapes"],
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    short: "Soft wash roof cleaning for TPO, shingle, tile, and metal — algae gone, warranty safe.",
    headline: "Algae eats roofs. We evict it — gently.",
    intro:
      "Black streaks and algae aren't just ugly — they shorten a roof's life and drive up cooling costs. We clean TPO, membrane, shingle, tile, and metal roofing with manufacturer-safe methods and zero damaging pressure.",
    image: "/images/equipment.jpg",
    imageAlt: "TM technician cleaning a commercial TPO roof at sunrise",
    bullets: [
      { title: "Commercial TPO & membrane", body: "Restore reflectivity on flat commercial roofs — a cleaner roof runs cooler and reads newer at inspection." },
      { title: "Soft wash treatment", body: "Low-pressure application kills algae, lichen, and mold at the root instead of blasting granules off." },
      { title: "Warranty-conscious methods", body: "Cleaning that follows manufacturer guidance, so the roof over your head stays covered on paper too." },
      { title: "Gutters & fascia", body: "Brightened exterior gutter faces and fascia to finish the roofline." },
    ],
    ideal: ["Commercial flat roofs (TPO)", "Shingle & architectural", "Tile & metal", "Warehouses", "Office parks"],
  },
  {
    slug: "hot-water-sanitation",
    name: "Hot Water Sanitation",
    short: "Steam-level heat for grease, gum, and bacteria that cold water can't kill.",
    headline: "Some grime doesn't rinse. It has to be cooked off.",
    intro:
      "Grease pads, drive-thru lanes, loading docks, dumpster corrals — high-traffic problem areas need heat. Our hot water systems sanitize while they clean, cutting grease and bacteria in a single pass.",
    image: "/images/steam.jpg",
    imageAlt: "Steam rising off concrete during a hot water cleaning pass",
    bullets: [
      { title: "Grease & oil emulsification", body: "Heat breaks down petroleum and cooking grease at the molecular level — no smearing, no residue." },
      { title: "Gum removal", body: "Steam lifts gum off concrete cleanly, without gouging the surface." },
      { title: "Sanitizing clean", body: "High temperatures kill bacteria and knock down odors at the source." },
      { title: "Problem-area programs", body: "Recurring hot-water service for the zones that get ugly fastest." },
    ],
    ideal: ["Restaurant pads & drive-thrus", "Loading docks", "Dumpster corrals", "Grocery & retail entries", "Industrial floors"],
  },
];

export const CITIES = [
  "Clermont", "Leesburg", "Mount Dora", "Tavares", "Eustis", "Groveland",
  "Minneola", "Lady Lake", "The Villages", "Mascotte", "Umatilla", "Howey-in-the-Hills",
  "Winter Garden", "Apopka", "Ocoee", "Orlando",
];

export const STATS = [
  { value: 4000, suffix: " PSI", label: "of commercial-grade pressure" },
  { value: 250, suffix: "°F", label: "hot water for grease & sanitation" },
  { value: 8, suffix: " GPM", label: "flow that finishes jobs fast" },
  { value: 100, suffix: "%", label: "family owned & operated" },
];
