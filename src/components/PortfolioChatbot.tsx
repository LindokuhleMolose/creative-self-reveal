
import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const PortfolioChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hey there, how can I help you?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const portfolioData = {
    name: "Lindokuhle Molose",
    education: {
      diploma: "Diploma in ICT Application Development from Walter Sisulu University (2025)",
      matric: "Completed matric in 2021 at Mthingwevu S.S.S"
    },
    status: "AI Developer & Sales Agent at CBO Experience (previously AI Developer at CAPACITI)",
    skills: [
      "Microsoft Office Suite", "Microsoft Word", "Microsoft PowerPoint", 
      "Microsoft Teams", "Microsoft Outlook", "Visual Basic", "Technical Programming",
      "Application Development", "Software Development", "Problem Solving",
      "Code Documentation", "Oracle APEX", "Database Design", "SQL",
      "Data Management", "Web Applications", "System Integration",
      "AI Fundamentals", "Chatbot Development", "Portfolio Development"
    ],
    projects: [
      "AI Fundamental Chatbot", "Code Snippet Generator"
    ],
    contact: {
      phone: "079 082 6960",
      email: "lindokuhlemolose2@gmail.com",
      linkedin: "linkedin.com/in/lindokuhle-molose-a80b25330"
    }
  };

  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('education') || message.includes('study') || message.includes('university') || message.includes('diploma')) {
      return `Lindokuhle graduated with a ${portfolioData.education.diploma}. She also completed her matric in 2021 at Mthingwevu S.S.S.`;
    }
    
    if (message.includes('skill') || message.includes('technology') || message.includes('programming')) {
      return `Lindokuhle has skills in: ${portfolioData.skills.slice(0, 8).join(', ')}, and many more! She specializes in Microsoft tools, programming, database management, and AI development.`;
    }
    
    if (message.includes('project') || message.includes('work') || message.includes('built')) {
      return `Lindokuhle has worked on several projects including: ${portfolioData.projects.join(', ')}. These showcase her skills in AI, web development, and application development.`;
    }
    
    if (message.includes('contact') || message.includes('email') || message.includes('phone') || message.includes('linkedin')) {
      return `You can contact Lindokuhle at:\n📧 ${portfolioData.contact.email}\n📱 ${portfolioData.contact.phone}\n💼 ${portfolioData.contact.linkedin}`;
    }
    
    if (message.includes('experience') || message.includes('job') || message.includes('work experience')) {
      return `Lindokuhle is currently an AI Developer & Sales Agent at CBO Experience (since Oct 2025). Previously, she worked as an AI Developer at CAPACITI (2025 - Oct 2025). She has completed several technical projects and continues to build her portfolio.`;
    }
    
    if (message.includes('capaciti')) {
      return `Lindokuhle previously worked as an AI Developer at CAPACITI from 2025 until October 2025. She has since moved on to CBO Experience where she works as an AI Developer & Sales Agent.`;
    }
    
    if (message.includes('about') || message.includes('who')) {
      return `${portfolioData.name} is an ICT Application Development graduate currently working as an AI Developer & Sales Agent at CBO Experience. She previously worked at CAPACITI and is passionate about creating innovative digital solutions.`;
    }
    
    return "I can help you learn about Lindokuhle's education, skills, projects, and contact information. What would you like to know specifically?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: messages.length + 2,
      text: generateResponse(inputMessage),
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputMessage('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 h-96 bg-card border border-border rounded-xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-xl">
            <h3 className="font-semibold">Portfolio Assistant</h3>
            <p className="text-sm opacity-90">Ask me about Lindokuhle's portfolio</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[70%] p-3 rounded-lg ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about education, skills, projects..."
                className="flex-1 px-3 py-2 border border-input rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PortfolioChatbot;
