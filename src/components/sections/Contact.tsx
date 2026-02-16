import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FileText,
  MapPinIcon,
  SendIcon,
} from "lucide-react";
import resume from "../../assets/Michael_King_Resume.pdf";
import { MagneticButton } from "../ui/MagneticButton";

export function Contact() {
  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      url: "https://github.com/mikebikeking",
      color: "gold",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      url: "https://linkedin.com/in/michael-king-804b6037",
      color: "blueprint",
    },
    {
      icon: FileText,
      label: "Resume",
      url: resume,
      color: "torch",
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Information and Form"
      className="py-20 bg-gray-50/80 dark:bg-black/50 backdrop-blur-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            THE PIT STOP
          </h2>

          <p className="text-textSecondary">
            Ready to bring precision and performance to your team
          </p>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blueprint mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column: Email CTA */}
          <div>
            {/* Email CTA */}
            <div className="h-full bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gunmetal dark:to-blueprint/10 border-2 border-blue-200 dark:border-blueprint/30 p-8 md:p-12 flex flex-col">
              <div className="text-center mb-8">
                <MailIcon className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-gold" />
                <h3 className="text-2xl md:text-3xl font-heading text-gray-900 dark:text-textPrimary mb-3">
                  GET IN TOUCH
                </h3>
                <p className="text-gray-600 dark:text-textSecondary font-mono text-sm">
                  Ready to discuss your next project?
                </p>
              </div>

              <MagneticButton
                as="a"
                href="mailto:Mike@mikeking.dev?subject=Let's%20Work%20Together&body=Hi%20Mike,%0D%0A%0D%0AI'd%20like%20to%20discuss..."
                intensity={0.35}
                className="w-full px-6 py-4 min-h-[52px] font-heading text-lg transition-all duration-300 transform flex items-center justify-center gap-2 bg-blue-600 dark:bg-gold text-white dark:text-gunmetal hover:bg-blue-700 dark:hover:bg-torch shadow-lg hover:shadow-xl hover:shadow-blue-600/50 dark:hover:shadow-gold/50"
              >
                <SendIcon size={20} />
                SEND EMAIL
              </MagneticButton>

              <div className="mt-auto pt-6 border-t border-blue-200 dark:border-blueprint/30 space-y-4">
                <div>
                  <p className="text-center text-gray-600 dark:text-textSecondary text-sm font-mono mb-2">
                    Direct Email:
                  </p>
                  <a
                    href="mailto:Mike@mikeking.dev"
                    className="block text-center text-blue-600 dark:text-blueprint hover:text-blue-800 dark:hover:text-gold transition-colors font-mono text-lg font-semibold"
                  >
                    Mike@mikeking.dev
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-textSecondary">
                  <MapPinIcon
                    className="text-blue-600 dark:text-blueprint"
                    size={18}
                  />
                  <span className="font-mono text-sm">
                    Boston, Massachusetts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Beyond the Code */}
          <div>
            {/* Beyond the Code Section */}
            <div className="h-full bg-gradient-to-br from-blue-50/80 to-purple-50/80 dark:from-gunmetal/50 dark:to-blueprint/10 border-2 border-blue-200 dark:border-blueprint/30 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">🚀</span>
                <div>
                  <h3 className="text-xl font-heading text-blue-700 dark:text-gold mb-3">
                    BEYOND THE CODE
                  </h3>
                  <p className="text-gray-700 dark:text-textSecondary leading-relaxed text-sm md:text-base">
                    When I'm not crafting code, you'll still find me in the
                    garage working on{" "}
                    <span className="font-semibold text-blue-600 dark:text-gold">
                      bikes
                    </span>{" "}
                    or making fresh{" "}
                    <span className="font-semibold text-blue-600 dark:text-gold">
                      pasta,
                    </span>{" "}
                    because whether it's bikes, code, or cavatelli, I believe in
                    crafting things from scratch with patience and precision.
                  </p>
                  <p className="text-gray-700 dark:text-textSecondary leading-relaxed text-sm md:text-base mt-3">
                    Based in{" "}
                    <span className="font-semibold text-blue-600 dark:text-gold">
                      Boston
                    </span>
                    , I'm excited to bring my unique perspective to a team that
                    values both innovation and reliability. I'm currently
                    seeking opportunities where I can combine my customer
                    service expertise, mechanical problem-solving skills, and
                    frontend development passion to create exceptional digital
                    experiences.
                  </p>
                  <p className="text-torch dark:text-torch font-semibold text-sm md:text-base mt-3 italic">
                    Let's build something amazing together.
                  </p>
                  <p className="text-gray-700 dark:text-textSecondary leading-relaxed text-sm md:text-base mt-3">
                    <span className="font-semibold text-blue-600 dark:text-gold">
                      STATUS:
                    </span>{" "}
                    🟢 Open to opportunities | Full-time Frontend Developer
                    roles | Boston or Remote
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Social Links - Centered Below */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-heading text-gray-900 dark:text-textPrimary mb-6">
            SOCIAL LINKS
          </h3>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => {
              const colorClasses = {
                gold: "border-yellow-300 dark:border-blueprint/30 hover:border-yellow-600 dark:hover:border-gold hover:shadow-yellow-600/20 dark:hover:shadow-gold/20",
                blueprint:
                  "border-blue-300 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-blueprint hover:shadow-blue-600/20 dark:hover:shadow-blueprint/20",
                torch:
                  "border-orange-300 dark:border-blueprint/30 hover:border-orange-600 dark:hover:border-torch hover:shadow-orange-600/20 dark:hover:shadow-torch/20",
              };
              const iconColorClasses = {
                gold: "text-yellow-600 dark:text-gold",
                blueprint: "text-blue-600 dark:text-blueprint",
                torch: "text-orange-600 dark:text-torch",
              };
              const borderClass =
                colorClasses[social.color as keyof typeof colorClasses];
              const iconClass =
                iconColorClasses[
                  social.color as keyof typeof iconColorClasses
                ];

              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-4 bg-blue-50 dark:bg-gunmetal border-2 ${borderClass} transition-all duration-300 hover:-translate-y-1 min-h-[48px] min-w-[48px] flex items-center justify-center social-link`}
                  aria-label={social.label}
                >
                  <social.icon
                    className={`${iconClass} group-hover:scale-110 transition-transform`}
                    size={24}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-blue-200 dark:border-blueprint/20 text-center">
        <p className="text-gray-600 dark:text-textSecondary text-sm font-mono">
          © {new Date().getFullYear()} Michael King. Engineered with precision.
        </p>
      </div>
    </section>
  );
}
