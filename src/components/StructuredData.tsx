import { useEffect } from 'react';

export const StructuredData: React.FC = () => {
  useEffect(() => {
    // Person schema
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
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Frontend Simplified"
      },
      "knowsAbout": [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "TailwindCSS",
        "Frontend Development",
        "Web Development",
        "UI/UX Design"
      ],
      "sameAs": [
        "https://github.com/mikebikeking",
        "https://linkedin.com/in/michael-king-804b6037"
      ]
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

