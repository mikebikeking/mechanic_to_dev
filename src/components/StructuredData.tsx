import { useEffect } from 'react';

export const StructuredData: React.FC = () => {
  useEffect(() => {
    // Person schema with enhanced work experience
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Michael King",
      "jobTitle": "Frontend Developer",
      "url": "https://mikeking.dev",
      "email": "Mike@mikeking.dev",
      "telephone": "+1-321-652-3647",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Boston",
        "addressRegion": "MA",
        "addressCountry": "US"
      },
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "Frontend Simplified"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Scrimba"
        }
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certificate",
          "name": "The Frontend Developer Career Path",
          "educationalLevel": "Professional",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Scrimba"
          }
        },
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "certificate",
          "name": "React Course",
          "educationalLevel": "Professional",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Frontend Simplified"
          }
        }
      ],
      "knowsAbout": [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "TailwindCSS",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
        "REST API",
        "Responsive Design",
        "Web Accessibility",
        "WCAG",
        "Framer Motion",
        "Redux",
        "State Management",
        "Performance Optimization",
        "Frontend Development",
        "Web Development",
        "UI/UX Design",
        "Vercel",
        "Vite",
        "npm",
        "Node.js",
        "Agile",
        "Problem Solving"
      ],
      "knowsLanguage": [
        {
          "@type": "Language",
          "name": "English",
          "alternateName": "en"
        }
      ],
      "workExample": [
        {
          "@type": "CreativeWork",
          "name": "E-Port Engineering",
          "description": "Full-stack consulting website with CMS, dynamic service pages, and admin dashboard",
          "url": "https://eportengineering.com",
          "keywords": ["React", "TypeScript", "Firebase", "Firestore", "Tailwind CSS"]
        },
        {
          "@type": "CreativeWork",
          "name": "2Twenty Labs",
          "description": "Interactive frontend for lab services with real-time updates and mobile optimization",
          "url": "https://2twentylabs.com",
          "keywords": ["React", "TypeScript", "Tailwind CSS", "Responsive Design"]
        }
      ],
      "sameAs": [
        "https://github.com/mikebikeking",
        "https://linkedin.com/in/michael-king-804b6037"
      ],
      "seeks": {
        "@type": "JobPosting",
        "title": "Frontend Developer",
        "employmentType": ["FULL_TIME", "CONTRACTOR"],
        "workLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Boston",
            "addressRegion": "MA",
            "addressCountry": "US"
          }
        }
      }
    };

    // Professional service schema
    const professionalServiceSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Michael King - Frontend Development Services",
      "description": "Specialized frontend development services with React, TypeScript, and modern web technologies. 20 years of mechanical precision applied to web development.",
      "provider": {
        "@type": "Person",
        "name": "Michael King"
      },
      "areaServed": "Worldwide",
      "serviceType": [
        "Frontend Development",
        "React Development",
        "TypeScript Development",
        "Web Application Development",
        "UI/UX Implementation"
      ]
    };

    // Website schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Michael King Portfolio",
      "url": "https://mikeking.dev",
      "description": "Frontend Developer portfolio showcasing React, TypeScript, and modern web development projects",
      "author": {
        "@type": "Person",
        "name": "Michael King"
      },
      "inLanguage": "en-US"
    };

    // Create script tags
    const schemas = [personSchema, professionalServiceSchema, websiteSchema];
    const scriptTags: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
      scriptTags.push(script);
    });

    // Cleanup on unmount
    return () => {
      scriptTags.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      });
    };
  }, []);

  return null;
};

