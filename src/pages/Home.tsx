
import PageTransition from '@/components/PageTransition';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-accent/5">
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent p-1">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/8db38120-c60a-40cf-81b3-ea4fac951c30.png" 
                    alt="Lindokuhle Molose - Graduate" 
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Lindokuhle Molose
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-4">
                ICT Application Development Graduate
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Recent graduate passionate about creating innovative digital solutions. 
                Currently an AI Developer & Sales Agent at CBO Experience, bringing fresh ideas and technical skills to the development world.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <Link 
                to="/about"
                className="group flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
              >
                <span>Learn More About Me</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-primary mb-2">2025</h3>
                <p className="text-muted-foreground">Diploma Graduate</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <h3 className="text-2xl font-bold text-primary mb-2">CBO Experience</h3>
                <p className="text-muted-foreground">AI Developer & Sales Agent</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
