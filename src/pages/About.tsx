
import PageTransition from '@/components/PageTransition';
import { Code, GraduationCap, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Technical Skills',
      description: 'Passionate about programming and developing innovative applications using various technologies.'
    },
    {
      icon: GraduationCap,
      title: 'Continuous Learning',
      description: 'Always eager to learn new technologies and improve my development skills.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creating solutions that solve real-world problems through technology and creativity.'
    },
    {
      icon: Heart,
      title: 'Dedication',
      description: 'Committed to excellence and passionate about every project I work on.'
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

            <div className="space-y-6 mb-16">
              <h2 className="text-3xl font-bold text-foreground text-center">
                Hi, I'm Lindokuhle Molose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                <p>
                  I'm a recent graduate with a Diploma in ICT Application Development from 
                  Walter Sisulu University (2025). I completed my matric in 2021 at 
                  Mthingwevu S.S.S and am currently a candidate at CAPACITI.
                </p>
                <p>
                  My journey into technology began with a curiosity about how applications work, 
                  and it has evolved into a deep passion for creating digital solutions. 
                  I'm excited to start my career and contribute to meaningful projects.
                </p>
                <p>
                  I believe in the power of technology to solve problems and improve lives. 
                  My approach combines technical knowledge with creativity to build 
                  applications that are both functional and user-friendly.
                </p>
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
