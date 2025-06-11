
import PageTransition from '@/components/PageTransition';
import { Code, Palette, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing maintainable, scalable code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Design Thinking',
      description: 'Every pixel matters. I focus on creating intuitive and beautiful user experiences.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Always learning and exploring new technologies to solve complex problems.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'I love what I do and it shows in every project I work on.'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get to know the person behind the code
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  Hi, I'm John Doe
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer with over 5 years of experience creating 
                    digital solutions that matter. My journey began with a curiosity about how 
                    websites work, and it has evolved into a deep love for crafting exceptional 
                    user experiences.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community. 
                    I believe that great software is built by great teams, and I thrive in 
                    collaborative environments.
                  </p>
                  <p>
                    My approach combines technical expertise with creative problem-solving, 
                    ensuring that every project I work on is both functional and beautiful.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 p-1">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop&crop=face" 
                    alt="About me" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div 
                      key={index}
                      className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="text-primary" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
