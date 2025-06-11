
import PageTransition from '@/components/PageTransition';
import { Mail, Phone, Linkedin, MessageCircle } from 'lucide-react';

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

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Portfolio Chatbot</h2>
                
                <div className="text-center space-y-6">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <MessageCircle className="text-primary mx-auto mb-4" size={48} />
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      Want to know more about my portfolio and experience? Chat with my AI assistant 
                      that can answer questions about my projects, skills, and background!
                    </p>
                  </div>
                  
                  <a
                    href="https://www.chatbase.co/chatbot-iframe/MN1sBVvJuH9UN6RzWm8On"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-medium w-full"
                  >
                    <MessageCircle size={18} />
                    <span>Chat About My Portfolio</span>
                  </a>
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
