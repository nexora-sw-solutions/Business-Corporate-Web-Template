export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualification: string;
  shortDescription: string;
  fullDescription: string;
  quote: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    qualification: "Ph.D. Computer Science, MIT",
    shortDescription: "Former Principal Architect at AWS. Specializes in distributed systems.",
    fullDescription: "Marcus brings over 15 years of experience in designing hyper-scale distributed systems. Before joining us, he led a core infrastructure team at Amazon Web Services, where he was instrumental in developing next-generation database scaling techniques. He oversees all architectural decisions and ensures our enterprise platforms are built for maximum resilience.",
    quote: "True scalability isn't just about handling traffic; it's about maintaining velocity when complexity inevitably increases.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    id: "elena-rodriguez",
    name: "Elena Rodriguez",
    role: "Head of Engineering",
    qualification: "M.S. Software Engineering, Stanford",
    shortDescription: "Expert in high-frequency trading platforms and financial security.",
    fullDescription: "Elena's background in high-frequency trading systems gives her a unique perspective on latency and absolute data consistency. She leads our engineering squads, bringing rigorous CI/CD practices and uncompromising security standards to every enterprise deployment we ship.",
    quote: "In enterprise software, milliseconds translate directly to revenue, and security is the only currency that matters.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    id: "david-kim",
    name: "David Kim",
    role: "Lead Systems Architect",
    qualification: "B.S. Computer Engineering, Berkeley",
    shortDescription: "Cloud infrastructure specialist. Contributor to Kubernetes.",
    fullDescription: "David is our foremost expert in cloud-native infrastructure. As an active contributor to the Kubernetes ecosystem, he designs the container orchestration strategies that allow our clients to achieve true high-availability. He is passionate about infrastructure as code and immutable deployments.",
    quote: "Infrastructure should be entirely invisible to the business logic, yet robust enough to survive total regional failures.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600&h=600",
  },
  {
    id: "sarah-jenkins",
    name: "Sarah Jenkins",
    role: "Director of Product Strategy",
    qualification: "MBA, Harvard Business School",
    shortDescription: "Bridges the gap between complex engineering and business value.",
    fullDescription: "Sarah ensures that our technical architecture perfectly aligns with the client's core business objectives. With a background in both technical product management and enterprise strategy, she translates complex operational bottlenecks into precise technical roadmaps that deliver measurable ROI.",
    quote: "The most brilliant architecture is useless if it solves the wrong business problem.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600&h=600",
  }
];
