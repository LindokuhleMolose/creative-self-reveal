
import PageTransition from '@/components/PageTransition';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values,
      });

      if (error) throw error;

      toast.success("Message sent successfully! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <div className="max-w-2xl mx-auto">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Let's Connect</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-center">
                    I'm excited to explore new opportunities and connect with professionals in the tech industry. 
                    As a recent graduate and CAPACITI candidate, I'm eager to contribute to meaningful projects 
                    and grow my career in application development.
                  </p>
                </div>

                {/* Contact Form */}
                <div className="bg-card border border-border rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Send me a message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your.email@example.com" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell me about your project or how we can work together..."
                                className="min-h-[120px]"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
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
                        className="flex items-center space-x-4 p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 group"
                      >
                        <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="text-primary" size={28} />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                          <p className="text-foreground font-medium text-lg">{info.value}</p>
                        </div>
                      </a>
                    );
                  })}
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
