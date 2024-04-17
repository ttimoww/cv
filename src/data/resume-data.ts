import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Timo Wernars",
  initials: "TW",
  location: "Amersfoort, Utrecht",
  locationLink: "https://www.google.com/maps/place/amersfoort",
  about:
    "Ondernemende en assertieve software engineer met een grote passie voor TypeScript, ReactJS en NextJS.",
  summary:
    "Als Full Stack Engineer combineer ik technische expertise met een ondernemende mindset om tot innovatieve oplossingen te komen. Met meer dan 5 jaar professionele ervaring en het opzetten van een eigen SaaS bedrijf ben ik in staat om complexe problemen te vertalen naar schaalbare en onderhoudbare software.",
  avatarUrl: "/timo.png",
  personalWebsiteUrl: "https://timowernars.nl",
  contact: {
    email: "ttimoww@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ttimoww",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/timo-wernars/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Hogeschool Windesheim (Deeltijd)",
      degree: "Bachelor's Degree in Software Engineering (HBO-ICT) - Eindcijfer: 9,0",
      start: "2021",
      end: "2023",
    },
    {
      school: "SpiralTrain",
      degree: "ReactJS Certification",
      start: "2019",
      end: "n.v.t",
    },
    {
      school: "OpenClassrooms",
      degree: "Bachelor's level degree, Développeur d'application - Web Development",
      start: "2018",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Goedgemerkt",
      link: "https://goedgemerkt.nl",
      badges: [],
      title: "Software Engineer",
      logo: GitHubIcon,
      start: "2019",
      end: "heden",
      description:
        "Verantwoordelijk voor de ontwikkeling van een e-commerce webshop met Next.js, en interne productiesystemen met React en Nest.js",
      list: ["Meertalige e-commerce website met Next.js",
        "Integreren van headless CMS systemen (Strapi en BigCommerce)",
        "Implementeren van betaalproviders (Stripe en PayPal)",
        "Ontwikkelen van interfaces voor interne productiesystemen met React.js",
        "Ontwikkelen van API’s voor interne productiesystemen met Nest.js",
        "Automatiseren van CI/CD met behulp van GitLab",]
    },
    {
      company: "HutsAIO",
      link: "https://hutsaio.com",
      badges: [],
      title: "Eigenaar",
      logo: GitHubIcon,
      start: "2020",
      end: "2023",
      description:
        "Opzetten, ontwikkelen, en opschalen van een SaaS voor het aankopen van gelimiteerde sneakers (automatiseringssoftware). Binnen twee jaar een klantenbasis van meer dan 100 betalende klanten opgebouwd. Middels de inzet van deze software zijn er meer dan 2000 paar sneakers aangeschaft.",
      list: ["Ontwikkelen van een gebruikersinterface met React.js (react-router)",
        "Authenticatie en facturatie met Nest.js en Stripe",
        "Ontwikkelen van automatiseringsscripts in TypeScript",]
    }
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "NestJS",
    "Tailwind CSS",
    "PostgreSQL",
    "TypeORM",
    "GitLab CI/CD",
    "Prisma",
    "Shadcn/ui"
  ],
  projects: [
    {
      title: "Bring It Alive",
      techStack: [
        "Next.JS",
        "NestJS",
        "TypeScript",
        "Three.js",
        "Augmented Reality"
      ],
      description: "Augmented Reality webapplicatie voor het tot leven brengen van figuurtjes uit de huisstijl van Goedgemerkt.",
      logo: GitHubIcon,
      link: {
        label: "goedgemerkt.bring-to.life",
        href: "https://goedgemerkt.bring-to.life/",
      },
    },
    {
      title: "HutsAIO",
      techStack: ["Browser Extension", "SaaS", "TypeScript", "React"],
      description:
        "Automatiseringssoftware voor het kopen van gelimiteerde sneakers op verschillende webshops",
      logo: GitHubIcon,
      link: {
        label: "hutsaio.com",
        href: "https://hutsaio.com",
      },
    },
  ],
} as const;
