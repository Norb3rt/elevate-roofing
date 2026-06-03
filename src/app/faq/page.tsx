import type { Metadata } from "next";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Have questions about roofing materials, repairs, inspection frequency, or costs? Check our FAQs for answers from local roofing professionals in LA & Orange County.",
  openGraph: {
    title: "Frequently Asked Questions | Elevate Roofing Services",
    description:
      "Got roofing questions? Find clear answers from local roofing experts serving LA & Orange County.",
    url: "/faq",
  },
  alternates: {
    canonical: "/faq",
  },
};

// FAQ Data directly from faq.md
// To add, edit, or remove questions, update this list.
const faqItems = [
  {
    id: "faq-materials",
    question: "What are the most common types of roofing materials used in the area?",
    answer:
      "The most common types of roofing materials used in the area include asphalt shingles, tile, metal, and flat roofing materials like built-up roofing (BUR) or single-ply membranes.",
  },
  {
    id: "faq-inspection-frequency",
    question: "How often should I have my roof inspected?",
    answer:
      "It's recommended to have your roof inspected at least once a year, preferably before the rainy season or after severe weather events.",
  },
  {
    id: "faq-signs-replacement",
    question: "What are the signs that my roof needs repair or replacement?",
    answer:
      "Signs that your roof needs repair or replacement include missing or damaged shingles, leaks, sagging, mold or mildew growth, and granule loss on asphalt shingles.",
  },
  {
    id: "faq-building-codes",
    question: "Are there specific building codes or regulations for roofing?",
    answer:
      "Building codes and regulations for roofing vary by location, so it's important to check with your local building department for specific requirements.",
  },
  {
    id: "faq-rainy-season",
    question: "How can I prepare my roof for the rainy season?",
    answer:
      "To prepare your roof for the rainy season, clean out gutters and downspouts, inspect for any damage, and ensure proper attic ventilation to prevent moisture buildup.",
  },
  {
    id: "faq-extend-lifespan",
    question: "What steps can I take to extend the lifespan of my roof?",
    answer:
      "To extend the lifespan of your roof, perform regular maintenance, promptly repair any damage, and ensure proper attic ventilation to prevent heat and moisture buildup.",
  },
  {
    id: "faq-eco-friendly",
    question: "Are there eco-friendly roofing options available?",
    answer:
      "Eco-friendly roofing options in the area may include cool roofs, which reflect sunlight and reduce heat absorption, or sustainable materials like recycled shingles or clay tiles.",
  },
  {
    id: "faq-contractor-choice",
    question: "How do I choose the right roofing contractor?",
    answer:
      "When choosing a roofing contractor, look for licensed and insured professionals with experience in the type of roofing material you have and positive reviews from past customers.",
  },
  {
    id: "faq-average-cost",
    question: "What is the average cost of roof repair or replacement?",
    answer:
      "The average cost of roof repair or replacement depends on factors such as the size of the roof, the type of material used, and the extent of the damage. It's best to get multiple quotes from reputable contractors for an accurate estimate.",
  },
  {
    id: "faq-solar-panels",
    question: "Can I install solar panels on my roof?",
    answer:
      "Solar panels can be installed on many types of roofs, but it's important to ensure that your roof is structurally sound and properly oriented to maximize solar energy production.",
  },
  {
    id: "faq-project-duration",
    question: "How long does it typically take to complete a roofing project?",
    answer:
      "The time it takes to complete a roofing project depends on factors such as the size of the roof, the type of material used, and weather conditions. On average, a roof replacement can take anywhere from a few days to a few weeks.",
  },
  {
    id: "faq-annual-maintenance",
    question: "What steps should I take to maintain my roof throughout the year?",
    answer:
      "To maintain your roof throughout the year, regularly clean gutters and downspouts, trim overhanging branches, inspect for damage, and promptly repair any issues.",
  },
  {
    id: "faq-flat-roofs",
    question: "Are there any specific considerations for flat roofs?",
    answer:
      "For flat roofs, it's important to ensure proper drainage to prevent water pooling and consider options like single-ply membranes or modified bitumen for waterproofing.",
  },
  {
    id: "faq-prevent-leaks",
    question: "How do I prevent roof leaks?",
    answer:
      "To prevent roof leaks, inspect your roof regularly for signs of damage, maintain caulking and seals around roof penetrations, and promptly repair any damaged shingles or flashing.",
  },
  {
    id: "faq-moss-algae",
    question: "What should I do if I notice moss or algae growth on my roof?",
    answer:
      "If you notice moss or algae growth on your roof, you can clean it with a solution of water and mild detergent or use commercially available moss and algae cleaners. However, it's important to avoid using high-pressure washing, as it can damage the roofing material.",
  },
  {
    id: "faq-warranties",
    question: "Are there any warranties available for roofing materials and labor?",
    answer:
      "Warranties for roofing materials and labor vary by manufacturer and contractor, so be sure to review the warranty terms carefully before purchasing materials or hiring a contractor.",
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Intro Section */}
      <section className="mx-auto max-w-4xl px-6 pt-16 pb-8 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
          Support
        </p>
        <h1 className="mt-3 text-4xl font-bold text-foreground md:text-6xl">
          Frequently Asked
          <br />
          <span className="text-primary/70">Questions</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
          Find clear, professional answers to the most common questions about roofing inspections,
          materials, repairs, and maintenance in Southern California.
        </p>
      </section>

      {/* Accordion Component List */}
      <section className="mx-auto max-w-4xl px-6 pb-24">
        <Accordion type="single" collapsible className="w-full space-y-3">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="border border-border/80 bg-card rounded-2xl px-6 shadow-sm transition-all duration-300 hover:border-primary/30"
            >
              <AccordionTrigger className="text-base md:text-lg font-semibold text-foreground py-5 hover:text-primary hover:no-underline transition-colors data-[state=open]:text-primary text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-5">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Footer />
    </div>
  );
}
