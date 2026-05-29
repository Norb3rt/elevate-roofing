export interface City {
  slug: string;
  name: string;
  county: "Los Angeles County" | "Orange County";
  zip?: string;
  blurb: string;
}

export const cities: City[] = [
  // Los Angeles County
  {
    slug: "agoura-hills",
    name: "Agoura Hills",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Agoura Hills community.",
  },
  {
    slug: "alhambra",
    name: "Alhambra",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Alhambra.",
  },
  {
    slug: "arcadia",
    name: "Arcadia",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving Arcadia homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "artesia",
    name: "Artesia",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving Artesia homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "avalon",
    name: "Avalon",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Avalon community.",
  },
  {
    slug: "azusa",
    name: "Azusa",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Azusa.",
  },
  {
    slug: "baldwin-park",
    name: "Baldwin Park",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Baldwin Park.",
  },
  {
    slug: "bell",
    name: "Bell",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Bell.",
  },
  {
    slug: "bell-gardens",
    name: "Bell Gardens",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Bell Gardens community.",
  },
  {
    slug: "bellflower",
    name: "Bellflower",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand Bellflower's climate and elevate home value.",
  },
  {
    slug: "beverly-hills",
    name: "Beverly Hills",
    county: "Los Angeles County",
    blurb: "Luxury-grade tile, slate, and standing-seam metal roofing crafted to estate standards.",
  },
  {
    slug: "bradbury",
    name: "Bradbury",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Bradbury community.",
  },
  {
    slug: "burbank",
    name: "Burbank",
    county: "Los Angeles County",
    blurb: "Fast inspections and licensed installation for Burbank homeowners and studios alike.",
  },
  {
    slug: "calabasas",
    name: "Calabasas",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Calabasas community.",
  },
  {
    slug: "carson",
    name: "Carson",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Carson.",
  },
  {
    slug: "cerritos",
    name: "Cerritos",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Cerritos community.",
  },
  {
    slug: "claremont",
    name: "Claremont",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Claremont.",
  },
  {
    slug: "commerce",
    name: "Commerce",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Commerce.",
  },
  {
    slug: "compton",
    name: "Compton",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Compton.",
  },
  {
    slug: "covina",
    name: "Covina",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Covina.",
  },
  {
    slug: "cudahy",
    name: "Cudahy",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Cudahy.",
  },
  {
    slug: "culver-city",
    name: "Culver City",
    county: "Los Angeles County",
    blurb: "Modern roof designs and energy-efficient systems for Culver City living.",
  },
  {
    slug: "diamond-bar",
    name: "Diamond Bar",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving Diamond Bar homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "downey",
    name: "Downey",
    county: "Los Angeles County",
    blurb: "Family-owned craftsmanship delivering long-lasting roofs across Downey.",
  },
  {
    slug: "duarte",
    name: "Duarte",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving Duarte homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "el-monte",
    name: "El Monte",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout El Monte.",
  },
  {
    slug: "el-segundo",
    name: "El Segundo",
    county: "Los Angeles County",
    blurb: "Reliable residential and commercial roofing throughout El Segundo.",
  },
  {
    slug: "gardena",
    name: "Gardena",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Gardena.",
  },
  {
    slug: "glendale",
    name: "Glendale",
    county: "Los Angeles County",
    blurb: "Trusted residential and commercial roofing across Glendale's diverse neighborhoods.",
  },
  {
    slug: "glendora",
    name: "Glendora",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Glendora.",
  },
  {
    slug: "hawaiian-gardens",
    name: "Hawaiian Gardens",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Hawaiian Gardens.",
  },
  {
    slug: "hawthorne",
    name: "Hawthorne",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand Hawthorne's climate and elevate home value.",
  },
  {
    slug: "hermosa-beach",
    name: "Hermosa Beach",
    county: "Los Angeles County",
    blurb: "Sleek, weather-tight roofs designed for the South Bay lifestyle.",
  },
  {
    slug: "hidden-hills",
    name: "Hidden Hills",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand Hidden Hills's climate and elevate home value.",
  },
  {
    slug: "huntington-park",
    name: "Huntington Park",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Huntington Park.",
  },
  {
    slug: "industry",
    name: "Industry",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand Industry's climate and elevate home value.",
  },
  {
    slug: "inglewood",
    name: "Inglewood",
    county: "Los Angeles County",
    blurb: "Affordable, high-grade roofing solutions for Inglewood's growing residential market.",
  },
  {
    slug: "irwindale",
    name: "Irwindale",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving Irwindale homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "la-canada-flintridge",
    name: "La Cañada Flintridge",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout La Cañada Flintridge.",
  },
  {
    slug: "la-habra-heights",
    name: "La Habra Heights",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving La Habra Heights homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "la-mirada",
    name: "La Mirada",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving La Mirada homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "la-puente",
    name: "La Puente",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout La Puente.",
  },
  {
    slug: "la-verne",
    name: "La Verne",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the La Verne community.",
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    county: "Los Angeles County",
    blurb: "Honest pricing and expert installation for Lakewood neighborhoods.",
  },
  {
    slug: "lancaster",
    name: "Lancaster",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Lancaster community.",
  },
  {
    slug: "lawndale",
    name: "Lawndale",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Lawndale.",
  },
  {
    slug: "lomita",
    name: "Lomita",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Lomita.",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    county: "Los Angeles County",
    blurb:
      "Coastal salt air demands sealed flashings and corrosion-resistant materials — our specialty.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    county: "Los Angeles County",
    blurb:
      "From Hollywood Hills to the Westside, we protect LA homes against sun, wind, and seasonal storms.",
  },
  {
    slug: "lynwood",
    name: "Lynwood",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Lynwood.",
  },
  {
    slug: "malibu",
    name: "Malibu",
    county: "Los Angeles County",
    blurb: "Fire-resistant Class A roofing systems built for Malibu's unique climate.",
  },
  {
    slug: "manhattan-beach",
    name: "Manhattan Beach",
    county: "Los Angeles County",
    blurb: "Beach-house ready roofing built to withstand marine air and coastal weather.",
  },
  {
    slug: "maywood",
    name: "Maywood",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Maywood.",
  },
  {
    slug: "monrovia",
    name: "Monrovia",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Monrovia.",
  },
  {
    slug: "montebello",
    name: "Montebello",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Montebello.",
  },
  {
    slug: "monterey-park",
    name: "Monterey Park",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving Monterey Park homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "norwalk",
    name: "Norwalk",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand Norwalk's climate and elevate home value.",
  },
  {
    slug: "palmdale",
    name: "Palmdale",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Palmdale.",
  },
  {
    slug: "palos-verdes-estates",
    name: "Palos Verdes Estates",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Palos Verdes Estates.",
  },
  {
    slug: "paramount",
    name: "Paramount",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Paramount.",
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    county: "Los Angeles County",
    blurb:
      "Historic Craftsman, Spanish Revival, and modern homes — we restore and protect every style.",
  },
  {
    slug: "pico-rivera",
    name: "Pico Rivera",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Pico Rivera.",
  },
  {
    slug: "pomona",
    name: "Pomona",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand Pomona's climate and elevate home value.",
  },
  {
    slug: "rancho-palos-verdes",
    name: "Rancho Palos Verdes",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Rancho Palos Verdes.",
  },
  {
    slug: "redondo-beach",
    name: "Redondo Beach",
    county: "Los Angeles County",
    blurb: "Storm-tested installations and rapid leak response for Redondo Beach homes.",
  },
  {
    slug: "rolling-hills",
    name: "Rolling Hills",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Rolling Hills community.",
  },
  {
    slug: "rolling-hills-estates",
    name: "Rolling Hills Estates",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Rolling Hills Estates.",
  },
  {
    slug: "rosemead",
    name: "Rosemead",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand Rosemead's climate and elevate home value.",
  },
  {
    slug: "san-dimas",
    name: "San Dimas",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand San Dimas's climate and elevate home value.",
  },
  {
    slug: "san-fernando",
    name: "San Fernando",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in San Fernando.",
  },
  {
    slug: "san-gabriel",
    name: "San Gabriel",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across San Gabriel.",
  },
  {
    slug: "san-marino",
    name: "San Marino",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across San Marino.",
  },
  {
    slug: "santa-clarita",
    name: "Santa Clarita",
    county: "Los Angeles County",
    blurb: "Heat-reflective and wildfire-rated roofing for Santa Clarita Valley homes.",
  },
  {
    slug: "santa-fe-springs",
    name: "Santa Fe Springs",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Santa Fe Springs.",
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    county: "Los Angeles County",
    blurb: "Premium roofing systems engineered for ocean-front durability and modern architecture.",
  },
  {
    slug: "sierra-madre",
    name: "Sierra Madre",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Sierra Madre.",
  },
  {
    slug: "signal-hill",
    name: "Signal Hill",
    county: "Los Angeles County",
    blurb:
      "Providing certified roofing installations and dependable inspections for the Signal Hill community.",
  },
  {
    slug: "south-el-monte",
    name: "South El Monte",
    county: "Los Angeles County",
    blurb:
      "Dedicated roofing specialists serving South El Monte homeowners with top-tier materials and expert craftsmanship.",
  },
  {
    slug: "south-gate",
    name: "South Gate",
    county: "Los Angeles County",
    blurb:
      "Tailored roofing solutions engineered to withstand South Gate's climate and elevate home value.",
  },
  {
    slug: "south-pasadena",
    name: "South Pasadena",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across South Pasadena.",
  },
  {
    slug: "temple-city",
    name: "Temple City",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Temple City.",
  },
  {
    slug: "torrance",
    name: "Torrance",
    county: "Los Angeles County",
    blurb: "South Bay roofing experts — repairs, replacements, and storm-ready upgrades.",
  },
  {
    slug: "vernon",
    name: "Vernon",
    county: "Los Angeles County",
    blurb:
      "From modern replacements to rapid leak repairs, we protect and enhance properties throughout Vernon.",
  },
  {
    slug: "walnut",
    name: "Walnut",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in Walnut.",
  },
  {
    slug: "west-covina",
    name: "West Covina",
    county: "Los Angeles County",
    blurb:
      "High-quality roofing systems and emergency repair services for residential properties in West Covina.",
  },
  {
    slug: "west-hollywood",
    name: "West Hollywood",
    county: "Los Angeles County",
    blurb: "Designer-grade flat and low-slope roofing for WeHo's modern architecture.",
  },
  {
    slug: "westlake-village",
    name: "Westlake Village",
    county: "Los Angeles County",
    blurb:
      "Your premier choice for durable, weather-ready roofing installations and prompt repairs across Westlake Village.",
  },
  {
    slug: "whittier",
    name: "Whittier",
    county: "Los Angeles County",
    blurb: "Full-service roofing — from minor repair to total replacement — for Whittier homes.",
  },

  // Orange County
  {
    slug: "aliso-viejo",
    name: "Aliso Viejo",
    county: "Orange County",
    blurb: "Master-planned community roofing experts serving Aliso Viejo.",
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    blurb: "Reliable roofing service across Anaheim — residential, commercial, and HOA-approved.",
  },
  {
    slug: "brea",
    name: "Brea",
    county: "Orange County",
    blurb:
      "Premium roofing installations and professional maintenance services for homeowners in Brea.",
  },
  {
    slug: "buena-park",
    name: "Buena Park",
    county: "Orange County",
    blurb: "Honest, licensed roofing service for Buena Park families.",
  },
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    county: "Orange County",
    blurb: "Modern roof systems engineered for Costa Mesa's mid-century and new builds.",
  },
  {
    slug: "cypress",
    name: "Cypress",
    county: "Orange County",
    blurb: "High-grade materials and custom roofing solutions tailored for the Cypress community.",
  },
  {
    slug: "dana-point",
    name: "Dana Point",
    county: "Orange County",
    blurb: "Salt-air-resistant materials and meticulous workmanship for Dana Point.",
  },
  {
    slug: "fountain-valley",
    name: "Fountain Valley",
    county: "Orange County",
    blurb: "Expert installations and storm repairs in Fountain Valley.",
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    blurb: "Trusted local roofers serving Fullerton with expert craftsmanship.",
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    county: "Orange County",
    blurb: "Affordable, code-compliant roofing for Garden Grove homeowners.",
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    county: "Orange County",
    blurb: "Surf City roofs built for coastal weather and Pacific salt exposure.",
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    blurb: "HOA-compliant, master-planned community roofing with premium warranties.",
  },
  {
    slug: "la-habra",
    name: "La Habra",
    county: "Orange County",
    blurb: "High-grade materials and custom roofing solutions tailored for the La Habra community.",
  },
  {
    slug: "la-palma",
    name: "La Palma",
    county: "Orange County",
    blurb:
      "Premium roofing installations and professional maintenance services for homeowners in La Palma.",
  },
  {
    slug: "laguna-beach",
    name: "Laguna Beach",
    county: "Orange County",
    blurb: "Coastal-grade roofing systems crafted for Laguna's hillside and ocean homes.",
  },
  {
    slug: "laguna-hills",
    name: "Laguna Hills",
    county: "Orange County",
    blurb:
      "Premium roofing installations and professional maintenance services for homeowners in Laguna Hills.",
  },
  {
    slug: "laguna-niguel",
    name: "Laguna Niguel",
    county: "Orange County",
    blurb:
      "Enhancing Laguna Niguel homes with weather-resistant roof installations and fast inspections.",
  },
  {
    slug: "laguna-woods",
    name: "Laguna Woods",
    county: "Orange County",
    blurb:
      "Trusted local roofers serving Laguna Woods with energy-efficient systems and reliable repairs.",
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    county: "Orange County",
    blurb: "Family-trusted roofing for Lake Forest neighborhoods and HOAs.",
  },
  {
    slug: "los-alamitos",
    name: "Los Alamitos",
    county: "Orange County",
    blurb:
      "Premium roofing installations and professional maintenance services for homeowners in Los Alamitos.",
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    county: "Orange County",
    blurb: "South County roofing specialists for tile, shingle, and flat systems.",
  },
  {
    slug: "newport-beach",
    name: "Newport Beach",
    county: "Orange County",
    blurb: "Estate-quality tile, slate, and standing-seam roofing for Newport homes.",
  },
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    blurb: "Old Towne charm meets modern roofing performance throughout Orange.",
  },
  {
    slug: "placentia",
    name: "Placentia",
    county: "Orange County",
    blurb:
      "High-grade materials and custom roofing solutions tailored for the Placentia community.",
  },
  {
    slug: "rancho-santa-margarita",
    name: "Rancho Santa Margarita",
    county: "Orange County",
    blurb:
      "Premium roofing installations and professional maintenance services for homeowners in Rancho Santa Margarita.",
  },
  {
    slug: "san-clemente",
    name: "San Clemente",
    county: "Orange County",
    blurb: "Spanish tile specialists serving San Clemente's signature architecture.",
  },
  {
    slug: "san-juan-capistrano",
    name: "San Juan Capistrano",
    county: "Orange County",
    blurb:
      "Trusted local roofers serving San Juan Capistrano with energy-efficient systems and reliable repairs.",
  },
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    blurb: "Free inspections and durable installations throughout the Santa Ana community.",
  },
  {
    slug: "seal-beach",
    name: "Seal Beach",
    county: "Orange County",
    blurb:
      "Premium roofing installations and professional maintenance services for homeowners in Seal Beach.",
  },
  {
    slug: "stanton",
    name: "Stanton",
    county: "Orange County",
    blurb:
      "Expertly crafted roofs designed for Stanton's aesthetic, offering long-lasting protection and beauty.",
  },
  {
    slug: "tustin",
    name: "Tustin",
    county: "Orange County",
    blurb: "Quality replacements and rapid repairs across the Tustin area.",
  },
  {
    slug: "villa-park",
    name: "Villa Park",
    county: "Orange County",
    blurb:
      "Premium roofing installations and professional maintenance services for homeowners in Villa Park.",
  },
  {
    slug: "westminster",
    name: "Westminster",
    county: "Orange County",
    blurb: "Quality residential roofing throughout Westminster.",
  },
  {
    slug: "yorba-linda",
    name: "Yorba Linda",
    county: "Orange County",
    blurb: "Premium tile and architectural shingle installation for Yorba Linda estates.",
  },
];

export const findCity = (slug: string) => cities.find((c) => c.slug === slug);
