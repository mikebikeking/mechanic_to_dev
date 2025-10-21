import React from 'react';
import { GraduationCapIcon, AwardIcon, WrenchIcon } from 'lucide-react';
export function Education() {
  const credentials = [{
    icon: GraduationCapIcon,
    title: 'BS Computer Science',
    institution: 'Southern New Hampshire University',
    year: '2019-2024',
    color: 'gold'
  }, {
    icon: AwardIcon,
    title: 'Meta Front-End Developer Certificate',
    institution: 'Meta',
    year: 'Sep 2025',
    color: 'blueprint'
  }, {
    icon: WrenchIcon,
    title: 'CompTIA A+',
    institution: 'CompTIA',
    year: 'Mar 2025',
    color: 'torch'
  }, {
    icon: WrenchIcon,
    title: 'CompTIA IT Fundamentals',
    institution: 'CompTIA',
    year: 'Feb 2025',
    color: 'gold'
  }];
  return <section className="py-20 bg-gunmetal/70 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-gold mb-4">
            EDUCATION & CERTIFICATIONS
          </h2>
          <div className="w-24 h-1 bg-blueprint mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {credentials.map((cred, index) => <div key={index} className="group p-6 bg-gunmetal border-2 border-blueprint/30 hover:border-gold transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className={`p-3 bg-${cred.color}/20 border border-${cred.color}/30`}>
                  <cred.icon className={`text-${cred.color}`} size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-heading text-textPrimary mb-1 group-hover:text-gold transition-colors">
                    {cred.title}
                  </h3>
                  <p className="text-textSecondary text-sm mb-1">
                    {cred.institution}
                  </p>
                  <p className="text-blueprint text-xs font-mono">
                    {cred.year}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}