import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, FileText, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
import resume from '../assets/Michael_King_Resume.pdf';
import { MagneticButton } from './MagneticButton';


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_nnjw6mh';
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_wa84bw7';
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '3xJHrGFTGXPgQMtws';


export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (status !== 'idle') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage('Sending message...');

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    )
      .then(() => {
        setStatus('success');
        setStatusMessage('Message sent successfully! Thanks for reaching out.');
        setFormData({ name: '', email: '', message: '' });
        setIsSending(false);
      }, (error) => {
        console.error('EmailJS FAILED...', error);
        setStatus('error');
        setStatusMessage('Failed to send message. Please try the direct email link.');
        setIsSending(false);
      });
  };

  const socialLinks = [{
    icon: GithubIcon,
    label: 'GitHub',
    url: 'https://github.com/mikebikeking',
    color: 'gold'
  }, {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    url: 'https://linkedin.com/in/michael-king-804b6037',
    color: 'blueprint'
  }, {
    icon: FileText,
    label: 'Resume',
    url: resume,
    color: 'torch'
  }];
  const contactInfo = [{
    icon: MailIcon,
    label: 'Mike@mikeking.dev'
  }, {
    icon: PhoneIcon,
    label: '(321) 652-3647'
  }, {
    icon: MapPinIcon,
    label: 'Boston, Massachusetts'
  }];

  return (
    <section id="contact" className="py-20 bg-gray-50/80 dark:bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-blue-700 dark:text-gold mb-4">
            THE PIT STOP
          </h2>
          <p className="text-xl text-textSecondary font-heading mb-2">
            LET'S BUILD SOMETHING
          </p>
          <p className="text-textSecondary">
            Ready to bring precision and performance to your team
          </p>
          <div className="w-24 h-1 bg-blue-500 dark:bg-blueprint mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-gray-900 dark:text-textPrimary font-heading text-sm mb-2">
                  NAME
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 min-h-[48px] text-base bg-white dark:bg-gunmetal border-2 border-blue-300 dark:border-blueprint/30 text-gray-900 dark:text-textPrimary focus:border-blue-600 dark:focus:border-gold focus:outline-none transition-colors" placeholder="Your name" disabled={isSending} />
              </div>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-gray-900 dark:text-textPrimary font-heading text-sm mb-2">
                  EMAIL
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 min-h-[48px] text-base bg-white dark:bg-gunmetal border-2 border-blue-300 dark:border-blueprint/30 text-gray-900 dark:text-textPrimary focus:border-blue-600 dark:focus:border-gold focus:outline-none transition-colors" placeholder="your.email@example.com" disabled={isSending} />
              </div>
              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-gray-900 dark:text-textPrimary font-heading text-sm mb-2">
                  MESSAGE
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 min-h-[120px] text-base bg-white dark:bg-gunmetal border-2 border-blue-300 dark:border-blueprint/30 text-gray-900 dark:text-textPrimary focus:border-blue-600 dark:focus:border-gold focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." disabled={isSending} />
              </div>
              {/* Submission Button */}
              <MagneticButton
                type="submit"
                intensity={0.35}
                disabled={isSending}
                className={`
                  w-full px-6 py-4 min-h-[52px] font-heading text-lg transition-all duration-300 transform flex items-center justify-center gap-2
                  ${isSending 
                    ? 'bg-blue-400 dark:bg-blueprint text-white dark:text-gunmetal cursor-not-allowed opacity-70' 
                    : 'bg-blue-600 dark:bg-gold text-white dark:text-gunmetal hover:bg-blue-700 dark:hover:bg-torch shadow-lg hover:shadow-xl hover:shadow-blue-600/50 dark:hover:shadow-gold/50'
                  }
                `}
              >
                <SendIcon size={20} />
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </MagneticButton>

              {/* Status Message */}
              {statusMessage && (
                <p 
                  className={`text-center font-mono text-sm pt-2 ${
                    status === 'success' ? 'text-torch' : status === 'error' ? 'text-red-500' : 'text-blueprint'
                  }`}
                >
                  {statusMessage}
                </p>
              )}
            </form>
          </div>
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading text-gray-900 dark:text-textPrimary mb-6">
                CONNECT WITH ME
              </h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => <div key={index} className="flex items-center space-x-3 text-gray-600 dark:text-textSecondary">
                  <info.icon className="text-blue-600 dark:text-blueprint" size={20} />
                  <span className="font-mono text-sm">{info.label}</span>
                </div>)}
              </div>
            </div>
            <div className="blueprint-line my-8"></div>
            <div>
              <h3 className="text-2xl font-heading text-gray-900 dark:text-textPrimary mb-6">
                SOCIAL LINKS
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const colorClasses = {
                    gold: 'border-yellow-300 dark:border-blueprint/30 hover:border-yellow-600 dark:hover:border-gold hover:shadow-yellow-600/20 dark:hover:shadow-gold/20',
                    blueprint: 'border-blue-300 dark:border-blueprint/30 hover:border-blue-600 dark:hover:border-blueprint hover:shadow-blue-600/20 dark:hover:shadow-blueprint/20',
                    torch: 'border-orange-300 dark:border-blueprint/30 hover:border-orange-600 dark:hover:border-torch hover:shadow-orange-600/20 dark:hover:shadow-torch/20'
                  };
                  const iconColorClasses = {
                    gold: 'text-yellow-600 dark:text-gold',
                    blueprint: 'text-blue-600 dark:text-blueprint',
                    torch: 'text-orange-600 dark:text-torch'
                  };
                  const borderClass = colorClasses[social.color as keyof typeof colorClasses];
                  const iconClass = iconColorClasses[social.color as keyof typeof iconColorClasses];
                  
                  return <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`group p-4 bg-blue-50 dark:bg-gunmetal border-2 ${borderClass} transition-all duration-300 hover:-translate-y-1 min-h-[48px] min-w-[48px] flex items-center justify-center social-link`} aria-label={social.label}>
                    <social.icon className={`${iconClass} group-hover:scale-110 transition-transform`} size={24} />
                  </a>;
                })}
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-100/50 to-purple-100/50 dark:from-blueprint/10 dark:to-gold/10 border-2 border-blue-200 dark:border-blueprint/30">
              <p className="text-gray-600 dark:text-textSecondary text-sm leading-relaxed">
                <span className="text-blue-600 dark:text-gold font-heading">AVAILABILITY:</span>{' '}
                Open to full-time frontend development opportunities.
                Specializing in React, TypeScript, and modern web technologies.
                Ready to bring precision engineering to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-blue-200 dark:border-blueprint/20 text-center">
        <p className="text-gray-600 dark:text-textSecondary text-sm font-mono">
          © 2025 Michael King. Engineered with precision.
        </p>
      </div>
    </section>
  );
}