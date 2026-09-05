import React from "react"
import { Code2, Cloud, Workflow, MonitorSmartphone } from "lucide-react"

export interface Capability {
  id: string
  title: string
  icon: React.ReactNode
  problem: string
  solution: string
  deliverables: string[]
  codePreview: string
  longDescription: string
  techStack: string[]
  process: {
    title: string
    description: string
  }[]
}

export const services: Capability[] = [
  {
    id: "engineering",
    title: "Custom Engineering",
    icon: <Code2 className="w-4 h-4 mr-2" />,
    problem: "Off-the-shelf software forces you to change your business logic.",
    solution: "We build bespoke, high-performance web applications tailored precisely to your operational workflows.",
    deliverables: [
      "Custom React / Node.js Architecture",
      "Third-party API & Legacy System Integrations",
      "Role-Based Access Control (RBAC)",
    ],
    longDescription: "Our custom engineering team builds scalable, enterprise-grade web applications that adapt to your unique business processes rather than forcing you to adapt to them. We specialize in complex architectures, real-time data processing, and seamless legacy system integrations.",
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL", "Redis", "GraphQL"],
    process: [
      { title: "Architecture Design", description: "Mapping out system requirements, database schemas, and API contracts." },
      { title: "Iterative Development", description: "Agile sprints delivering core features for stakeholder review." },
      { title: "Security & QA", description: "Comprehensive penetration testing and automated end-to-end testing." },
      { title: "Deployment", description: "Zero-downtime deployment to enterprise cloud infrastructure." }
    ],
    codePreview: `function EnterpriseApp() {
  const { user } = useAuth();
  
  if (!user.hasRole('ADMIN')) {
    return <UnauthorizedView />;
  }

  return (
    <DashboardLayout>
      <DataGridProvider endpoint="/api/v1/metrics">
        <CustomMetricsPanel />
      </DataGridProvider>
    </DashboardLayout>
  );
}`
  },
  {
    id: "turnkey",
    title: "Turnkey Websites",
    icon: <MonitorSmartphone className="w-4 h-4 mr-2" />,
    problem: "Slow, poorly designed websites are hurting your conversion rates.",
    solution: "Deploy premium, lightning-fast marketing sites that look like a million bucks without the enterprise timeline.",
    deliverables: [
      "Sub-second page loads (Lighthouse 95+)",
      "Bespoke animations & micro-interactions",
      "Headless CMS integration for easy updates",
    ],
    longDescription: "We deliver conversion-optimized, visually stunning marketing websites that load instantly. Utilizing modern Jamstack architectures, we ensure your digital storefront reflects the premium nature of your brand while remaining highly editable for your marketing team.",
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS", "Vercel"],
    process: [
      { title: "Brand Alignment", description: "Translating your brand guidelines into a cohesive digital design system." },
      { title: "UI/UX Prototyping", description: "High-fidelity Figma mockups of all core pages." },
      { title: "Frontend Implementation", description: "Pixel-perfect, accessible, and responsive development." },
      { title: "CMS Integration", description: "Connecting your content model so you can publish without touching code." }
    ],
    codePreview: `// next.config.mjs
export default {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    optimizeCss: true,
  }
}

// 99% Lighthouse Score out-of-the-box
// Global CDN Distribution
// Zero-config deployments`
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="w-4 h-4 mr-2" />,
    problem: "Your current infrastructure cannot handle scale without breaking.",
    solution: "We design auto-scaling, secure cloud architectures that guarantee 99.99% uptime.",
    deliverables: [
      "AWS / Vercel Enterprise Infrastructure",
      "Automated CI/CD Pipelines",
      "DDoS Protection & Edge Caching",
    ],
    longDescription: "Stop worrying about servers crashing during peak traffic. We architect, provision, and maintain robust cloud environments designed for high availability, automatic scaling, and impenetrable security perimeters.",
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Cloudflare"],
    process: [
      { title: "Infrastructure Audit", description: "Identifying bottlenecks, vulnerabilities, and cost inefficiencies." },
      { title: "Architecture Planning", description: "Designing a highly-available, multi-zone topology." },
      { title: "Infrastructure as Code", description: "Writing Terraform modules for repeatable, version-controlled provisioning." },
      { title: "CI/CD Implementation", description: "Automating testing and deployment pipelines for rapid releases." }
    ],
    codePreview: `name: Production Deploy
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: pnpm install --frozen-lockfile
      - name: Typecheck & Build
        run: pnpm run build
      - name: Deploy to Edge
        uses: cloudflare/pages-action@v1`
  },
  {
    id: "automation",
    title: "Digital Automation",
    icon: <Workflow className="w-4 h-4 mr-2" />,
    problem: "Manual data entry and disconnected tools waste hundreds of hours.",
    solution: "We connect your disparate systems to automate data flow and eliminate human error.",
    deliverables: [
      "CRM & ERP Data Syncing",
      "Automated Reporting Dashboards",
      "Custom Zapier/Make.com webhooks",
    ],
    longDescription: "We identify operational bottlenecks where humans are doing robot work. By bridging APIs between your existing software tools, we create seamless data pipelines that operate 24/7 without error, freeing your team to focus on high-value tasks.",
    techStack: ["Node.js", "Python", "Zapier", "Make.com", "Webhooks", "REST APIs"],
    process: [
      { title: "Workflow Mapping", description: "Documenting your manual processes step-by-step." },
      { title: "API Evaluation", description: "Assessing the endpoints of your software stack for connectivity." },
      { title: "Pipeline Development", description: "Building robust scripts and webhooks to transfer and transform data." },
      { title: "Monitoring Setup", description: "Implementing alerting systems to catch any failed automations instantly." }
    ],
    codePreview: `app.post('/webhook/stripe', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  const event = stripe.webhooks.constructEvent(
    req.body, sig, webhookSecret
  );

  if (event.type === 'invoice.paid') {
    await crm.updateCustomerStatus(
      event.data.object.customer,
      'ACTIVE'
    );
    await slack.notify('#sales', 'New activation!');
  }
  res.json({ received: true });
});`
  }
]
