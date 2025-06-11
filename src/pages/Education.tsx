
import PageTransition from '@/components/PageTransition';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Stanford University',
      location: 'Stanford, CA',
      period: '2018 - 2020',
      description: 'Specialized in Machine Learning and Software Engineering. Graduated Magna Cum Laude with a focus on web technologies and artificial intelligence.',
      achievements: ['Dean\'s List for 4 consecutive semesters', 'Research Assistant in AI Lab', 'Published 2 papers on web optimization']
    },
    {
      degree: 'Bachelor of Science in Computer Engineering',
      institution: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2014 - 2018',
      description: 'Comprehensive study in computer systems, algorithms, and software development. Strong foundation in mathematics and engineering principles.',
      achievements: ['Summa Cum Laude graduate', 'President of Computer Science Club', 'Winner of Annual Coding Competition']
    }
  ];

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      level: 'Professional'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2022',
      level: 'Professional'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      level: 'Professional'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta',
      date: '2021',
      level: 'Advanced'
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
                My academic journey and continuous learning path
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
                Certifications
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                        <p className="text-primary font-medium">{cert.issuer}</p>
                      </div>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {cert.level}
                      </span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar size={14} className="mr-2" />
                      <span className="text-sm">Earned in {cert.date}</span>
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
