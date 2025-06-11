
import PageTransition from '@/components/PageTransition';
import { Mail, Phone, Send, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lindokuhlemolose2@gmail.com',
      href: 'mailto:lindokuhlemolose2@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '079 082 6960',
      href: 'tel:+27790826960'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/lindokuhle-molose-a80b25330',
      href: 'https://www.linkedin.com/in/lindokuhle-molose-a80b25330'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's connect and discuss opportunities!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">Let's Connect</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    I'm excited to explore new opportunities and connect with professionals in the tech industry. 
                    As a recent graduate and CAPACITI candidate, I'm eager to contribute to meaningful projects 
                    and grow my career in application development.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <a
                        key={index}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center space-x-4 p-4 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                      >
                        <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="text-foreground font-medium">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="Tell me about the opportunity..."
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    <Send size={18} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
