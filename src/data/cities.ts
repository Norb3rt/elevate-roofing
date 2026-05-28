export interface City {
  slug: string;
  name: string;
  county: "Los Angeles County" | "Orange County";
  zip?: string;
  blurb: string;
}

export const cities: City[] = [
  // Los Angeles County
  { slug: "los-angeles", name: "Los Angeles", county: "Los Angeles County", blurb: "From Hollywood Hills to the Westside, we protect LA homes against sun, wind, and seasonal storms." },
  { slug: "long-beach", name: "Long Beach", county: "Los Angeles County", blurb: "Coastal salt air demands sealed flashings and corrosion-resistant materials — our specialty." },
  { slug: "santa-monica", name: "Santa Monica", county: "Los Angeles County", blurb: "Premium roofing systems engineered for ocean-front durability and modern architecture." },
  { slug: "pasadena", name: "Pasadena", county: "Los Angeles County", blurb: "Historic Craftsman, Spanish Revival, and modern homes — we restore and protect every style." },
  { slug: "glendale", name: "Glendale", county: "Los Angeles County", blurb: "Trusted residential and commercial roofing across Glendale's diverse neighborhoods." },
  { slug: "burbank", name: "Burbank", county: "Los Angeles County", blurb: "Fast inspections and licensed installation for Burbank homeowners and studios alike." },
  { slug: "torrance", name: "Torrance", county: "Los Angeles County", blurb: "South Bay roofing experts — repairs, replacements, and storm-ready upgrades." },
  { slug: "inglewood", name: "Inglewood", county: "Los Angeles County", blurb: "Affordable, high-grade roofing solutions for Inglewood's growing residential market." },
  { slug: "beverly-hills", name: "Beverly Hills", county: "Los Angeles County", blurb: "Luxury-grade tile, slate, and standing-seam metal roofing crafted to estate standards." },
  { slug: "culver-city", name: "Culver City", county: "Los Angeles County", blurb: "Modern roof designs and energy-efficient systems for Culver City living." },
  { slug: "manhattan-beach", name: "Manhattan Beach", county: "Los Angeles County", blurb: "Beach-house ready roofing built to withstand marine air and coastal weather." },
  { slug: "redondo-beach", name: "Redondo Beach", county: "Los Angeles County", blurb: "Storm-tested installations and rapid leak response for Redondo Beach homes." },
  { slug: "el-segundo", name: "El Segundo", county: "Los Angeles County", blurb: "Reliable residential and commercial roofing throughout El Segundo." },
  { slug: "hermosa-beach", name: "Hermosa Beach", county: "Los Angeles County", blurb: "Sleek, weather-tight roofs designed for the South Bay lifestyle." },
  { slug: "malibu", name: "Malibu", county: "Los Angeles County", blurb: "Fire-resistant Class A roofing systems built for Malibu's unique climate." },
  { slug: "west-hollywood", name: "West Hollywood", county: "Los Angeles County", blurb: "Designer-grade flat and low-slope roofing for WeHo's modern architecture." },
  { slug: "downey", name: "Downey", county: "Los Angeles County", blurb: "Family-owned craftsmanship delivering long-lasting roofs across Downey." },
  { slug: "whittier", name: "Whittier", county: "Los Angeles County", blurb: "Full-service roofing — from minor repair to total replacement — for Whittier homes." },
  { slug: "lakewood", name: "Lakewood", county: "Los Angeles County", blurb: "Honest pricing and expert installation for Lakewood neighborhoods." },
  { slug: "santa-clarita", name: "Santa Clarita", county: "Los Angeles County", blurb: "Heat-reflective and wildfire-rated roofing for Santa Clarita Valley homes." },

  // Orange County
  { slug: "anaheim", name: "Anaheim", county: "Orange County", blurb: "Reliable roofing service across Anaheim — residential, commercial, and HOA-approved." },
  { slug: "santa-ana", name: "Santa Ana", county: "Orange County", blurb: "Free inspections and durable installations throughout the Santa Ana community." },
  { slug: "irvine", name: "Irvine", county: "Orange County", blurb: "HOA-compliant, master-planned community roofing with premium warranties." },
  { slug: "huntington-beach", name: "Huntington Beach", county: "Orange County", blurb: "Surf City roofs built for coastal weather and Pacific salt exposure." },
  { slug: "newport-beach", name: "Newport Beach", county: "Orange County", blurb: "Estate-quality tile, slate, and standing-seam roofing for Newport homes." },
  { slug: "costa-mesa", name: "Costa Mesa", county: "Orange County", blurb: "Modern roof systems engineered for Costa Mesa's mid-century and new builds." },
  { slug: "fullerton", name: "Fullerton", county: "Orange County", blurb: "Trusted local roofers serving Fullerton with expert craftsmanship." },
  { slug: "orange", name: "Orange", county: "Orange County", blurb: "Old Towne charm meets modern roofing performance throughout Orange." },
  { slug: "garden-grove", name: "Garden Grove", county: "Orange County", blurb: "Affordable, code-compliant roofing for Garden Grove homeowners." },
  { slug: "mission-viejo", name: "Mission Viejo", county: "Orange County", blurb: "South County roofing specialists for tile, shingle, and flat systems." },
  { slug: "lake-forest", name: "Lake Forest", county: "Orange County", blurb: "Family-trusted roofing for Lake Forest neighborhoods and HOAs." },
  { slug: "tustin", name: "Tustin", county: "Orange County", blurb: "Quality replacements and rapid repairs across the Tustin area." },
  { slug: "yorba-linda", name: "Yorba Linda", county: "Orange County", blurb: "Premium tile and architectural shingle installation for Yorba Linda estates." },
  { slug: "laguna-beach", name: "Laguna Beach", county: "Orange County", blurb: "Coastal-grade roofing systems crafted for Laguna's hillside and ocean homes." },
  { slug: "dana-point", name: "Dana Point", county: "Orange County", blurb: "Salt-air-resistant materials and meticulous workmanship for Dana Point." },
  { slug: "san-clemente", name: "San Clemente", county: "Orange County", blurb: "Spanish tile specialists serving San Clemente's signature architecture." },
  { slug: "aliso-viejo", name: "Aliso Viejo", county: "Orange County", blurb: "Master-planned community roofing experts serving Aliso Viejo." },
  { slug: "buena-park", name: "Buena Park", county: "Orange County", blurb: "Honest, licensed roofing service for Buena Park families." },
  { slug: "westminster", name: "Westminster", county: "Orange County", blurb: "Quality residential roofing throughout Westminster." },
  { slug: "fountain-valley", name: "Fountain Valley", county: "Orange County", blurb: "Expert installations and storm repairs in Fountain Valley." },
];

export const findCity = (slug: string) => cities.find((c) => c.slug === slug);
