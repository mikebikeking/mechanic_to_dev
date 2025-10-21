import React, { useState } from 'react';
import { GithubIcon, LinkedinIcon, MailIcon, FileText, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';
// @ts-ignore: allow importing image asset without type declaration
import resume from '../assets/Michael_King_Resume.pdf';


const SERVICE_ID = 'service_nnjw6mh';
const TEMPLATE_ID = 'template_wa84bw7';
const PUBLIC_KEY = '3xJHrGFTGXPgQMtws';


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
    // Clear status when user starts typing again
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
      .then((response) => {
        console.log('EmailJS SUCCESS!', response.status, response.text);
        setStatus('success');
        setStatusMessage('Message sent successfully! Thanks for reaching out.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        setIsSending(false);
      }, (error) => {
        console.error('EmailJS FAILED...', error);
        setStatus('error');
        setStatusMessage('Failed to send message. Please try the direct email link.');
        setIsSending(false);
      });
  };

  // --- Static Data ---
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

  // --- JSX Render ---
  return (
    <section id="contact" className="py-20 bg-black/60 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading text-gold mb-4">
            THE PIT STOP
          </h2>
          <p className="text-xl text-textSecondary font-heading mb-2">
            LET'S BUILD SOMETHING
          </p>
          <p className="text-textSecondary">
            Ready to bring precision and performance to your team
          </p>
          <div className="w-24 h-1 bg-blueprint mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-textPrimary font-heading text-sm mb-2">
                  NAME
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gunmetal border-2 border-blueprint/30 text-textPrimary focus:border-gold focus:outline-none transition-colors" placeholder="Your name" disabled={isSending} />
              </div>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-textPrimary font-heading text-sm mb-2">
                  EMAIL
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gunmetal border-2 border-blueprint/30 text-textPrimary focus:border-gold focus:outline-none transition-colors" placeholder="your.email@example.com" disabled={isSending} />
              </div>
              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-textPrimary font-heading text-sm mb-2">
                  MESSAGE
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 bg-gunmetal border-2 border-blueprint/30 text-textPrimary focus:border-gold focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..." disabled={isSending} />
              </div>
              {/* Submission Button */}
              <button 
                type="submit" 
                className={`
                  w-full px-6 py-4 font-heading text-lg transition-all duration-300 transform flex items-center justify-center gap-2
                  ${isSending 
                    ? 'bg-blueprint text-gunmetal cursor-not-allowed opacity-70' 
                    : 'bg-gold text-gunmetal hover:bg-torch hover:scale-105 hover:shadow-lg hover:shadow-gold/50'
                  }
                `}
                disabled={isSending}
              >
                <SendIcon size={20} />
                {isSending ? 'SENDING...' : 'SEND MESSAGE'}
              </button>

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
              <h3 className="text-2xl font-heading text-textPrimary mb-6">
                CONNECT WITH ME
              </h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => <div key={index} className="flex items-center space-x-3 text-textSecondary">
                  <info.icon className="text-blueprint" size={20} />
                  <span className="font-mono text-sm">{info.label}</span>
                </div>)}
              </div>
            </div>
            <div className="blueprint-line my-8"></div>
            <div>
              <h3 className="text-2xl font-heading text-textPrimary mb-6">
                SOCIAL LINKS
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`group p-4 bg-gunmetal border-2 border-blueprint/30 hover:border-${social.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-${social.color}/20`} aria-label={social.label}>
                  <social.icon className={`text-${social.color} group-hover:scale-110 transition-transform`} size={24} />
                </a>)}
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-br from-blueprint/10 to-gold/10 border-2 border-blueprint/30">
              <p className="text-textSecondary text-sm leading-relaxed">
                <span className="text-gold font-heading">AVAILABILITY:</span>{' '}
                Open to full-time frontend development opportunities.
                Specializing in React, TypeScript, and modern web technologies.
                Ready to bring precision engineering to your team.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-blueprint/20 text-center">
        <p className="text-textSecondary text-sm font-mono">
          © 2025 Michael King. Engineered with precision.
        </p>
      </div>
    </section>
  );
}