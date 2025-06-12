
import PageTransition from '@/components/PageTransition';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Let's connect and discuss opportunities!
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Let's Connect</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
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
                        className="flex items-center space-x-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                      >
                        <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="text-primary" size={28} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="text-foreground font-medium text-lg">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
