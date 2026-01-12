
import PageTransition from '@/components/PageTransition';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Diploma in ICT Application Development',
      institution: 'Walter Sisulu University',
      location: 'South Africa',
      period: '2022 - 2025',
      description: 'Comprehensive study in ICT Application Development, focusing on programming, software development, and technical skills. Built a strong foundation in various programming languages and development methodologies.',
      achievements: ['Graduated in 2025', 'Specialized in Application Development', 'Gained hands-on experience with various technologies']
    },
    {
      degree: 'National Senior Certificate (Matric)',
      institution: 'Mthingwevu S.S.S',
      location: 'South Africa',
      period: '2021',
      description: 'Completed secondary education with a focus on preparing for higher education in the technology field.',
      achievements: ['Matriculated in 2021', 'Foundation for tertiary studies', 'Developed strong academic discipline']
    }
  ];

  const currentStatus = [
    {
      title: 'AI Developer & Sales Agent',
      issuer: 'CBO Experience',
      date: 'Oct 2025 - Present',
      level: 'Current'
    },
    {
      title: 'AI Developer',
      issuer: 'CAPACITI',
      date: '2025 - Oct 2025',
      level: 'Completed'
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Education
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                My academic journey and learning path
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Award className="mr-3 text-primary" size={32} />
                Academic Background
              </h2>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="lg:flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                        <h4 className="text-xl text-primary font-semibold mb-3">{edu.institution}</h4>
                      </div>
                      
                      <div className="lg:text-right space-y-2">
                        <div className="flex items-center lg:justify-end text-muted-foreground">
                          <Calendar size={16} className="mr-2" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center lg:justify-end text-muted-foreground">
                          <MapPin size={16} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                    
                    <div>
                      <h5 className="font-semibold mb-2 text-foreground">Key Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 flex items-center">
                <Award className="mr-3 text-primary" size={32} />
                Current Status
              </h2>
              
              <div className="grid grid-cols-1 gap-6">
                {currentStatus.map((status, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">{status.title}</h3>
                        <p className="text-primary font-medium">{status.issuer}</p>
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {status.level}
                      </span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={14} className="mr-2" />
                      <span className="text-sm">{status.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;
