export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  highlights: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    title: "Frontend Engineer",
    company: "Skinstric AI",
    period: "Apr 2025 - Jun 2025",
    highlights: [
      "Architected and deployed a multi-page AI analysis platform using React and Vercel for a seamless, production-ready Front-end Development demonstration of modern web capabilities",
      "Integrated a cloud-based Machine Learning API via axios to execute real-time Computer Vision facial analysis, predicting demographics (age, gender, ethnicity) with dynamic results visualization",
      "Optimized the user experience (UX) by designing a mobile-responsive interface with TailwindCSS and implementing the AOS library for controlled animations across the application's flow",
    ],
  },
  {
    title: "Frontend Developer & Support",
    company: "Frontend Simplified",
    period: "Mar 2024 - Mar 2025",
    highlights: [
      "Selected as peer mentor after achieving top 5% performance in cohort, providing debugging support and code reviews for 20+ students across React and Next.js projects.",
      "Created learning resources for React and TypeScript",
      "Supported students in building production-ready applications",
    ],
  },
  {
    title: "Assistant Service Manager",
    company: "Village Cycle Center",
    period: "Sep 2022 - Sep 2025",
    highlights: [
      "Diagnosed complex bicycle malfunctions and recommended tailored service solutions to meet individual customer needs, demonstrating strong problem-solving and diagnostic skills.",
      "Managed service department workflow, including efficient scheduling of work orders and meticulous inventory control, showcasing project management and organizational abilities.",
      "Maintained high customer satisfaction through attention to detail",
    ],
  },
  {
    title: "Service Manager & Technician",
    company: "Various Bicycle Shops",
    period: "2006 - 2022",
    highlights: [
      "Leveraged 16 years of continuous progression across retail and service environments, advancing from technical roles (Technician) to senior leadership (Service Manager, Part-Owner)",
      "Managed high-value service department operations and staff, overseeing inventory, workflow, and customer satisfaction, demonstrating scalable business and management skills.",
      "Built reputation for precision and quality craftsmanship",
    ],
  },
];
