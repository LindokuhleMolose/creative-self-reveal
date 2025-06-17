import PageTransition from '@/components/PageTransition';
import { Code, Database, Palette, Bot, Monitor, FileCode } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Microsoft Skills',
      icon: Monitor,
      color: 'text-blue-500',
      skills: [
        'Microsoft Office Suite',
        'Microsoft Word',
        'Microsoft PowerPoint',
        'Microsoft Teams',
        'Microsoft Outlook'
      ]
    },
    {
      title: 'Programming Skills',
      icon: Code,
      color: 'text-green-500',
      skills: [
        'Visual Basic',
        'Technical Programming',
        'Application Development',
        'Software Development',
        'Problem Solving',
        'Code Documentation'
      ]
    },
    {
      title: 'Database & Development Tools',
      icon: Database,
      color: 'text-purple-500',
      skills: [
        'Oracle APEX',
        'Database Design',
        'SQL',
        'Data Management',
        'Web Applications'
      ]
    },
    {
      title: 'AI & Development Projects',
      icon: Bot,
      color: 'text-orange-500',
      skills: [
        'AI Fundamentals',
        'Chatbot Development',
        'Portfolio Development',
        'Code Generation Tools',
        'Project Management',
        'Documentation'
      ]
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Skills & Projects
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technical skills and recent projects I've worked on
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-6">
                      <div className="bg-primary/10 p-3 rounded-lg mr-4">
                        <Icon className={`${category.color}`} size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                          <span className="text-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center flex items-center justify-center">
                <FileCode className="mr-3 text-primary" size={28} />
                My Projects
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://code-spark-snippet-forge.lovable.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <Code className="mr-2" size={18} />
                  Code Snippet Generator
                </a>
                <a
                  href="https://poe.com/TheDiligent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/80 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  <Bot className="mr-2" size={18} />
                  AI Fundamental Chatbot
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
