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
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQHnjvvXaI5HyA/profile-displayphoto-shrink_800_800/0/1679595541528?e=1712793600&v=beta&t=2HIhEtAIqKocFezB-a-jls7x_ORc8-kRd1vF62NDSmw",
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
        "Als Software Engineer bij Goedgemerkt speel ik een rol in de ontwikkeling en optimalisatie van zowel front-end als back-end systemen. Ik ben verantwoordelijk voor het ontwikkelen, verbeteren en bijhouden van de webshop, interne productiesystemen en innovatieve marketingtools. Deze werkzaamheden dragen direct bij aan de efficiëntie van bedrijfsprocessen en de versterking van onze online aanwezigheid.",
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
        "Als oprichter van HutsAIO, een geavanceerde automatiseringstool voor de aankoop van gelimiteerde sneakers uit diverse online winkels, heb ik binnen twee jaar een klantenbasis van meer dan 100 abonnees opgebouwd. Middels de inzet van mijn software zijn er meer dan 2000 paar sneakers aangeschaft.",
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
