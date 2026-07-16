export const SITE = {
  name: "TM Home Detailz",
  legalName: "TM Home Detailz, LLC",
  tagline: "The Detailz Make the Difference",
  phone: "352-602-9854",
  phoneHref: "tel:+13526029854",
  smsHref: "sms:+13526029854",
  email: "tmhomedetailz@gmail.com",
  instagram: "https://www.instagram.com/tmhomedetailz/",
  tiktok: "https://www.tiktok.com/@tmhomedetailz",
  facebook: "https://www.facebook.com/tmhomedetailz",
  google: "https://www.google.com/search?q=TM+Home+Detailz+pressure+washing+Lake+County+FL",
  base: "Lake County, Florida",
  url: "https://www.tmhomedetailz.com",
  founded: "2021",
  rating: { value: "5.0", count: 17 },
  // Leesburg / central Lake County
  geo: { lat: 28.8108, lng: -81.8779 },
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
  faqs: { q: string; a: string }[];
};

/* Order mirrors the company's own lineup, residential-first:
   surface & house washing lead, fleet/heavy iron follow. */
export const SERVICES: Service[] = [
  {
    slug: "surface-cleaning",
    name: "Surface Cleaning",
    short: "Driveways, sidewalks, and pool decks surface-cleaned to an even, like-new finish.",
    headline: "Concrete should be one color. We bring it back.",
    intro:
      "Driveways, sidewalks, pool decks, patios, parking areas — cleaned with professional surface cleaners for even, stripe-free results, with pre-treatment and post-treatment so your concrete stays cleaner longer.",
    image: "/images/sidewalk.jpg",
    imageAlt: "Surface cleaner cutting a clean path through a dirty concrete walkway in Lake County FL",
    bullets: [
      { title: "Pre-treat, clean, post-treat", body: "Chemistry first, then hot water and pressure, then a finishing treatment that slows algae regrowth." },
      { title: "Even, lane-free finish", body: "Rotary surface cleaners — not wand stripes — for a uniform result across every square foot." },
      { title: "Gum, grease & rust", body: "Targeted spot treatments for the stains regular washing can't touch." },
      { title: "Curb-to-door coverage", body: "Driveways, walkways, curbing, and entries — the full path to your front door." },
    ],
    ideal: ["Driveways & sidewalks", "Pool decks & patios", "Paver restoration", "Parking areas", "Community hardscapes"],
    faqs: [
      { q: "How much does driveway pressure washing cost in Lake County, FL?", a: "Every driveway is different, so we quote by size and condition — most residential driveways fall in an affordable flat range. Send us a photo and your address and we'll text back a straight price, usually the same day." },
      { q: "Will pressure washing damage my concrete or pavers?", a: "Not the way we do it. We use rotary surface cleaners at the right pressure with pre- and post-treatment, so the surface comes clean evenly without wand stripes, etching, or blown-out paver sand." },
      { q: "How long does a driveway or pool deck cleaning take?", a: "Most residential surface cleanings finish in 1–3 hours depending on square footage and buildup. You can use the surface again the same day." },
    ],
  },
  {
    slug: "house-washing",
    name: "House & Soft Washing",
    short: "Low-pressure house washing that lifts algae and grime without hurting paint or stucco.",
    headline: "Your home's first impression, back to bright.",
    intro:
      "Florida humidity paints houses green and grey. Our soft wash process uses low pressure and the right chemistry to safely lift algae, mildew, and dirt from stucco, siding, brick, and trim — restoring color without blasting paint, screens, or seals.",
    image: "/images/house-clean.jpg",
    imageAlt: "Bright, freshly soft-washed Florida home with clean sidewalk and driveway",
    bullets: [
      { title: "Soft wash, not blast wash", body: "Low pressure plus detergents kills organic growth at the root — safe for stucco, vinyl, Hardie board, and painted surfaces." },
      { title: "Whole-exterior detail", body: "Walls, soffits, fascia, gutters' exterior faces, entryways, and lanais — the full envelope, not just the front." },
      { title: "Longer-lasting clean", body: "Because soft washing kills the algae instead of smearing it, results hold far longer than pressure alone." },
      { title: "Plant & pet safe process", body: "We pre-wet and rinse landscaping and keep chemistry controlled around the things you love." },
    ],
    ideal: ["Stucco & block homes", "Vinyl & Hardie siding", "Lanais & pool cages", "Gutters & fascia", "HOA-notice fixes"],
    faqs: [
      { q: "What is soft washing and why is it better for houses?", a: "Soft washing cleans with low pressure and specialized detergents instead of raw PSI. It kills algae and mildew at the root, so the house stays cleaner longer — and there's zero risk of stripping paint or forcing water behind siding." },
      { q: "How often should a Florida home be washed?", a: "Most Central Florida homes benefit from a wash every 12–18 months. North-facing walls and shaded sides grow algae fastest — if you can see green, it's time." },
      { q: "Can you get rid of the green and black streaks on my house?", a: "Yes — that's algae and mildew, and it's exactly what soft washing is built for. It typically disappears during the wash and stays gone for a year or more." },
    ],
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    short: "Soft wash roof cleaning for shingle, tile, metal, and commercial TPO — algae gone, warranty safe.",
    headline: "Algae eats roofs. We evict it — gently.",
    intro:
      "Black streaks and algae aren't just ugly — they shorten a roof's life and drive up cooling costs. We clean shingle, tile, metal, and commercial TPO roofing with manufacturer-safe soft wash methods and zero damaging pressure.",
    image: "/images/equipment.jpg",
    imageAlt: "TM technician cleaning a commercial TPO roof at sunrise in Central Florida",
    bullets: [
      { title: "Soft wash treatment", body: "Low-pressure application kills algae, lichen, and mold at the root instead of blasting granules off." },
      { title: "Shingle, tile & metal", body: "The right chemistry and dwell time for each roofing material — no shortcuts, no damage." },
      { title: "Commercial TPO & membrane", body: "Restore reflectivity on flat commercial roofs — a cleaner roof runs cooler and reads newer at inspection." },
      { title: "Warranty-conscious methods", body: "Cleaning that follows manufacturer guidance, so the roof over your head stays covered on paper too." },
    ],
    ideal: ["Shingle & architectural", "Tile & metal roofs", "Commercial flat roofs (TPO)", "HOA-notice fixes", "Pre-sale prep"],
    faqs: [
      { q: "What are the black streaks on my roof?", a: "That's gloeocapsa magma — an airborne algae that feeds on shingle limestone. It spreads fast in Florida humidity and shortens shingle life. Soft washing removes it and keeps it from coming back quickly." },
      { q: "Is roof cleaning safe for shingles?", a: "Soft washing is the method shingle manufacturers themselves recommend. No pressure, no granule loss — just the right chemistry doing the work." },
      { q: "Will a clean roof lower my power bill?", a: "It can help. Dark algae absorbs heat; a clean, reflective roof runs cooler, which matters over a long Florida summer — especially on flat commercial TPO." },
    ],
  },
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
    faqs: [
      { q: "Can you work outside our business hours?", a: "Yes — nights and weekends are normal for us. Most commercial washes are scheduled so your customers never see a hose." },
      { q: "Do you offer recurring commercial maintenance plans?", a: "We do. Monthly and quarterly programs keep storefronts, walkways, and dumpster pads inspection-ready, with documented before/after photos every visit." },
      { q: "Are you equipped for large properties?", a: "Commercial-grade hot water equipment, high-flow machines, and lift access when needed — plazas, offices, and multi-building properties are the core of our commercial work." },
    ],
  },
  {
    slug: "hot-water-sanitation",
    name: "Hot Water Sanitation",
    short: "Steam-level heat for grease, gum, and bacteria that cold water can't kill.",
    headline: "Some grime doesn't rinse. It has to be cooked off.",
    intro:
      "Grease pads, drive-thru lanes, loading docks, dumpster corrals — high-traffic problem areas need heat. Our hot water systems sanitize while they clean, cutting grease and bacteria in a single pass.",
    image: "/images/steam.jpg",
    imageAlt: "Steam rising off concrete during a hot water pressure cleaning pass",
    bullets: [
      { title: "Grease & oil emulsification", body: "Heat breaks down petroleum and cooking grease at the molecular level — no smearing, no residue." },
      { title: "Gum removal", body: "Steam lifts gum off concrete cleanly, without gouging the surface." },
      { title: "Sanitizing clean", body: "High temperatures kill bacteria and knock down odors at the source." },
      { title: "Problem-area programs", body: "Recurring hot-water service for the zones that get ugly fastest." },
    ],
    ideal: ["Restaurant pads & drive-thrus", "Loading docks", "Dumpster corrals", "Grocery & retail entries", "Industrial floors"],
    faqs: [
      { q: "Why does hot water matter for pressure washing?", a: "Grease, oil, and gum don't respond to cold water at any pressure — they smear. Heat breaks them down chemically, which is why our rigs run up to 250°F." },
      { q: "Does hot water cleaning sanitize surfaces?", a: "Yes. High temperatures kill bacteria and cut odors at the source, which is why restaurants and grocery entries book it on a recurring schedule." },
    ],
  },
  {
    slug: "fleet-washing",
    name: "Fleet Washing",
    short: "Hand-washed, hot-water fleet cleaning that keeps your name looking sharp at 70 mph.",
    headline: "Your trucks are rolling billboards. We keep them show-ready.",
    intro:
      "Box trucks, semis, trailers, service vans — washed by hand with commercial-grade soap and hot water when the road film demands it. On your lot, on your schedule, with route-friendly recurring programs.",
    image: "/images/fleet.jpg",
    imageAlt: "Semi truck covered in foam during a TM Home Detailz fleet wash",
    bullets: [
      { title: "Two-step & hand washing", body: "Proper two-step chemistry followed by hand agitation where it counts — no swirl-scarred paint, no missed panels." },
      { title: "Hot water degreasing", body: "Road film, diesel soot, and fifth-wheel grease don't respond to cold water. Ours runs hot." },
      { title: "On-site service", body: "We come to your yard — nights and weekends included — so trucks wash while they're parked, not while they should be earning." },
      { title: "Recurring programs", body: "Weekly, bi-weekly, or monthly washes with consistent, documented results across the whole fleet." },
    ],
    ideal: ["Box trucks & straight trucks", "Semis & trailers", "Service & last-mile vans", "Dump trucks", "Buses & shuttles"],
    faqs: [
      { q: "Do you come to our yard for fleet washing?", a: "Yes — we're fully mobile with our own water. Trucks get washed while they're parked, nights and weekends included, so the fleet never loses road time." },
      { q: "What is two-step washing?", a: "A low-pH presoak followed by a high-pH soap that reacts to lift road film off paint without brushing damage. It's the standard for fleets that care how their name looks at 70 mph." },
    ],
  },
  {
    slug: "heavy-equipment",
    name: "Heavy Equipment",
    short: "Degreased, de-mudded, inspection-ready iron — from excavators to ag equipment.",
    headline: "Clean iron works harder, sells higher, and inspects easier.",
    intro:
      "Caked mud hides leaks. Grease hides cracks. We strip excavators, loaders, dozers, and ag equipment down to clean metal so your mechanics, inspectors, and buyers can actually see the machine.",
    image: "/images/engine-bay.jpg",
    imageAlt: "Semi truck engine bay being degreased during a heavy equipment cleaning",
    bullets: [
      { title: "Undercarriage & tracks", body: "Hot water and high flow blast packed clay and debris out of tracks, rollers, and belly pans." },
      { title: "Engine & hydraulic degreasing", body: "Careful, targeted degreasing that prepares equipment for service work and leak diagnosis." },
      { title: "Pre-sale & pre-inspection", body: "Machines that look maintained appraise better. We make yours look maintained — because after we're done, it is." },
      { title: "DOT & yard programs", body: "Keep the whole yard presentable with scheduled equipment washdowns." },
    ],
    ideal: ["Excavators & loaders", "Dozers & graders", "Dump & vac trucks", "Ag & citrus equipment", "Rental yards"],
    faqs: [
      { q: "Can you degrease engines and hydraulics safely?", a: "Yes — targeted degreasing with controlled pressure and heat, keeping sensitive components protected. Mechanics love us because leaks become visible again." },
      { q: "Do you clean equipment before auctions or inspections?", a: "All the time. Clean iron appraises higher and inspects faster — we'll have the machine looking maintained because, after we're done, it is." },
    ],
  },
];

export const CITIES = [
  "Clermont", "Leesburg", "Mount Dora", "Tavares", "Eustis", "Groveland",
  "Minneola", "Lady Lake", "The Villages", "Mascotte", "Umatilla", "Howey-in-the-Hills",
  "Winter Garden", "Apopka", "Ocoee", "Orlando",
];

/* Hero background footage — swap in one place.
   Options: /videos/hero-wash.mp4 (low-angle jet + mist wall)
            /videos/hero-alt-1.mp4 (close wand jet on concrete, 4K source)
            /videos/hero-alt-2.mp4 (bench + rolling mist)
   Each has a matching poster: same name with -poster.jpg under /images. */
export const HERO_MEDIA = {
  video: "/videos/hero-alt-1.mp4",
  poster: "/images/hero-alt-1-poster.jpg",
  // object-position bias for the desktop jet-cut panel + mobile backdrop
  posDesktop: "62% 60%",
  posMobile: "68% center",
};

export const STATS = [
  { value: 4000, suffix: " PSI", label: "of commercial-grade pressure" },
  { value: 250, suffix: "°F", label: "hot water for grease & sanitation" },
  { value: 8, suffix: " GPM", label: "flow that finishes jobs fast" },
  { value: 100, suffix: "%", label: "family owned & operated" },
];

/* Field footage — Travis's own clips from TikTok/Instagram */
export const FIELD_CLIPS = [
  {
    id: "driveway",
    src: "/videos/field-driveway.mp4",
    poster: "/images/field-driveway.jpg",
    label: "House exterior soft wash",
    tag: "Residential",
  },
  {
    id: "engine",
    src: "/videos/field-engine.mp4",
    poster: "/images/field-engine.jpg",
    label: "Peterbilt engine bay, degreased",
    tag: "Heavy equipment",
  },
  {
    id: "trailer",
    src: "/videos/field-trailer.mp4",
    poster: "/images/field-trailer.jpg",
    label: "Box trailer — inside & out",
    tag: "Fleet",
  },
  {
    id: "rig",
    src: "/videos/field-rig.mp4",
    poster: "/images/field-rig.jpg",
    label: "The rig rolls out",
    tag: "On the road",
  },
];

/* Poster cards for the bottom social marquee — more variety than the 4 clips,
   pulled from different moments so the scroll never looks repetitive. Each is
   a still that links straight out to the socials. */
export const SOCIAL_CARDS = [
  { poster: "/images/field-driveway.jpg", label: "House exterior soft wash", tag: "Residential" },
  { poster: "/images/social-engine-8.jpg", label: "Peterbilt, degreased", tag: "Heavy equipment" },
  { poster: "/images/field-trailer.jpg", label: "Box trailer — inside & out", tag: "Fleet" },
  { poster: "/images/social-rig-3.jpg", label: "Rig set up on site", tag: "On the road" },
  { poster: "/images/social-driveway-14.jpg", label: "Siding brought back to white", tag: "Residential" },
  { poster: "/images/social-engine-22.jpg", label: "Engine bay detail", tag: "Heavy equipment" },
  { poster: "/images/social-trailer-6.jpg", label: "Trailer wash-down", tag: "Fleet" },
  { poster: "/images/field-rig.jpg", label: "Loaded and rolling", tag: "On the road" },
  { poster: "/images/social-driveway-5.jpg", label: "Soft wash in progress", tag: "Residential" },
  { poster: "/images/social-trailer-20.jpg", label: "Fleet, spotless finish", tag: "Fleet" },
];
