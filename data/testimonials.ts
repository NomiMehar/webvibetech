export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They shipped like an in-house team—clear rituals, ruthless prioritization, and interfaces that our execs actually complimented.",
    name: "Elena Marchetti",
    role: "VP Product",
    company: "Northbeam Systems",
    rating: 5,
  },
  {
    quote:
      "Our AI assistant went from prototype anxiety to production calm. Instrumentation and guardrails were there from week one.",
    name: "Jordan Okonkwo",
    role: "Head of Engineering",
    company: "Parcellane",
    rating: 5,
  },
  {
    quote:
      "The sticky process made stakeholders feel heard, but velocity never dipped. Rare combo in agency partnerships.",
    name: "Sofia Andersson",
    role: "COO",
    company: "Kitefold",
    rating: 5,
  },
  {
    quote:
      "Design QA was obsessive in the best way—motion, spacing, and accessibility weren’t ‘phase two’.",
    name: "Marcus Lee",
    role: "Creative Director",
    company: "Velvet & Co.",
    rating: 5,
  },
];
