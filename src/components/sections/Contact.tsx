import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  FileText,
  MapPinIcon,
  SendIcon,
} from "lucide-react";
import resume from "../../assets/Michael-W-King-Resume.pdf";
import { IndustrialButton } from "../ui/IndustrialButton";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/animations";

export function Contact() {
  const socialLinks = [
    {
      icon: GithubIcon,
      label: "GitHub",
      url: "https://github.com/mikebikeking",
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      url: "https://linkedin.com/in/michael-king-804b6037",
    },
    {
      icon: FileText,
      label: "Resume",
      url: resume,
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact Information and Form"
      className="py-20 bg-[var(--color-surface)]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-[var(--color-text-primary)] mb-4">
            Contact Me
          </h2>
          <p className="text-[var(--color-text-secondary)] font-mono text-sm">
            Ready to bring precision and performance to your team
          </p>
          <div className="w-24 h-0.5 bg-safety mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="h-full bg-[var(--color-elevated)] border border-[var(--color-border)] p-8 md:p-12 flex flex-col">
              <div className="text-center mb-8">
                <MailIcon className="w-16 h-16 mx-auto mb-4 text-safety" />
                <h3 className="text-2xl md:text-3xl font-heading text-[var(--color-text-primary)] mb-3">
                  GET IN TOUCH
                </h3>
                <p className="text-[var(--color-text-secondary)] font-mono text-sm">
                  Ready to discuss your next project?
                </p>
              </div>

              <IndustrialButton
                as="a"
                href="mailto:Mike@mikeking.dev?subject=Let's%20Work%20Together&body=Hi%20Mike,%0D%0A%0D%0AI'd%20like%20to%20discuss..."
                variant="primary"
                className="w-full gap-2"
              >
                <SendIcon size={20} />
                SEND EMAIL
              </IndustrialButton>

              <div className="mt-auto pt-6 border-t border-[var(--color-border)] space-y-4">
                <div>
                  <p className="text-center text-[var(--color-text-secondary)] text-sm font-mono mb-2">
                    Direct Email:
                  </p>
                  <a
                    href="mailto:Mike@mikeking.dev"
                    className="block text-center text-safety hover:underline transition-colors font-mono text-lg font-semibold"
                  >
                    Mike@mikeking.dev
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-[var(--color-text-secondary)]">
                  <MapPinIcon className="text-safety" size={18} />
                  <span className="font-mono text-sm">
                    Boston, Massachusetts
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="h-full bg-[var(--color-elevated)] border border-[var(--color-border)] p-6 md:p-8">
              <div>
                <h3 className="text-xl font-heading text-[var(--color-text-primary)] mb-3">
                  BEYOND THE CODE
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base">
                  When I'm not crafting code, you'll still find me in the
                  garage working on{" "}
                  <span className="font-semibold text-safety">bikes</span>{" "}
                  or making fresh{" "}
                  <span className="font-semibold text-safety">pasta,</span>{" "}
                  because whether it's bikes, code, or cavatelli, I believe in
                  crafting things from scratch with patience and precision.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base mt-3">
                  Based in{" "}
                  <span className="font-semibold text-safety">Boston</span>,
                  I'm excited to bring my unique perspective to a team that
                  values both innovation and reliability. I'm currently
                  seeking opportunities where I can combine my customer
                  service expertise, mechanical problem-solving skills, and
                  frontend development passion to create exceptional digital
                  experiences.
                </p>
                <p className="text-safety font-semibold text-sm md:text-base mt-3 italic">
                  Let's build something amazing together.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm md:text-base mt-3">
                  <span className="font-semibold text-safety">STATUS:</span>{" "}
                  Open to opportunities | Full-time Frontend Developer roles | Boston or Remote
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-heading text-[var(--color-text-primary)] mb-6">
            SOCIAL LINKS
          </h3>
          <div className="flex gap-4 justify-center">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 border border-[var(--color-border)] hover:border-safety transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
                aria-label={social.label}
              >
                <social.icon
                  className="text-steel group-hover:text-safety transition-colors"
                  size={24}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
