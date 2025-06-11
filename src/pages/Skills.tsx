
import PageTransition from '@/components/PageTransition';
import { Code, Database, Palette, Bot, Monitor, FileCode } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Microsoft Skills',
      icon: Monitor,
      color: 'text-blue-500',
      skills: [
        { name: 'Microsoft Office Suite', level: 90 },
        { name: 'Microsoft Word', level: 95 },
        { name: 'Microsoft PowerPoint', level: 88 },
        { name: 'Microsoft Teams', level: 80 },
        { name: 'Microsoft Outlook', level: 85 }
      ]
    },
    {
      title: 'Programming Skills',
      icon: Code,
      color: 'text-green-500',
      skills: [
        { name: 'Visual Basic', level: 85 },
        { name: 'Technical Programming', level: 80 },
        { name: 'Application Development', level: 78 },
        { name: 'Software Development', level: 75 },
        { name: 'Problem Solving', level: 88 },
        { name: 'Code Documentation', level: 82 }
      ]
    },
    {
      title: 'Database & Development Tools',
      icon: Database,
      color: 'text-purple-500',
      skills: [
        { name: 'Oracle APEX', level: 80 },
        { name: 'Database Design', level: 75 },
        { name: 'SQL', level: 78 },
        { name: 'Data Management', level: 80 },
        { name: 'Web Applications', level: 75 },
        { name: 'System Integration', level: 70 }
      ]
    },
    {
      title: 'AI & Development Projects',
      icon: Bot,
      color: 'text-orange-500',
      skills: [
        { name: 'AI Fundamentals', level: 75 },
        { name: 'Chatbot Development', level: 80 },
        { name: 'Portfolio Development', level: 85 },
        { name: 'Code Generation Tools', level: 78 },
        { name: 'Project Management', level: 82 },
        { name: 'Documentation', level: 88 }
      ]
    }
  ];

  const recentProjects = [
    'AI Fundamental Chatbot',
    'Portfolio Related Chatbot', 
    'Code Snippet Generator',
    'ICT Application Development Projects',
    'Database Management Systems',
    'Technical Documentation'
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
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-foreground font-medium">{skill.name}</span>
                            <span className="text-muted-foreground text-sm">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
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
                Recent Projects
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {recentProjects.map((project, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground px-4 py-2 rounded-full border border-border hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {project}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;
