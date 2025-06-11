
import PageTransition from '@/components/PageTransition';
import { Code, Palette, Server, Database, Smartphone, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'text-blue-500',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'text-green-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'Django', level: 80 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 95 }
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'text-purple-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'AWS', level: 88 },
        { name: 'Google Cloud', level: 82 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'text-pink-500',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'Prototyping', level: 85 },
        { name: 'User Research', level: 80 },
        { name: 'Design Systems', level: 92 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-orange-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Flutter', level: 75 },
        { name: 'iOS Development', level: 70 },
        { name: 'Android Development', level: 72 },
        { name: 'Mobile UI/UX', level: 88 },
        { name: 'App Store Optimization', level: 80 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Globe,
      color: 'text-red-500',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'Linux', level: 88 },
        { name: 'Nginx', level: 80 },
        { name: 'Monitoring', level: 82 },
        { name: 'Testing', level: 90 }
      ]
    }
  ];

  const tools = [
    'VS Code', 'Git', 'Figma', 'Postman', 'Docker', 'Jira', 'Slack', 'Notion', 
    'Adobe Creative Suite', 'Vercel', 'Netlify', 'Firebase', 'Supabase', 'Prisma'
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Skills & Expertise
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
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
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-gradient-to-r from-primary/10 to-accent/10 text-foreground px-4 py-2 rounded-full border border-border hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {tool}
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
