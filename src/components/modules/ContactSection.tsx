// src/components/modules/ContactSection.tsx
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import InteractiveCard from "@/components/interactive/InteractiveCard";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SendHorizonal, Mail } from "lucide-react"; // Using SendHorizonal for a more dynamic feel, added Mail
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters."}).max(100).optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // Simulate API call for form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      console.log("Form data submitted:", data);
      
      toast({
        title: "Message Transmitted!",
        description: "Thank you for reaching out. I'll connect with you shortly.",
        variant: "default", 
      });
      reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Transmission Error",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 animate-in fade-in duration-500">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight animate-in fade-in slide-in-from-bottom-5 duration-700">Let's Connect</h2>
      <InteractiveCard className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
        <CardHeader className="p-6">
          <CardTitle className="text-3xl">Send a Signal</CardTitle>
          <CardDescription className="text-muted-foreground mt-1">
            Have a project, question, or just want to say hello? Drop me a line using the form below, or reach out directly at <a href="mailto:mdkasifuddin123@gmail.com" className="text-primary hover:underline">mdkasifuddin123@gmail.com</a>.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium">Your Name</Label>
                <Input id="name" {...register("name")} placeholder="e.g. Ada Lovelace" className="mt-1 bg-input/50 focus:bg-input/80"/>
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium">Your Email</Label>
                <Input id="email" type="email" {...register("email")} placeholder="ada@example.com" className="mt-1 bg-input/50 focus:bg-input/80"/>
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="subject" className="text-sm font-medium">Subject (Optional)</Label>
              <Input id="subject" {...register("subject")} placeholder="Project Inquiry, Collaboration, etc." className="mt-1 bg-input/50 focus:bg-input/80"/>
              {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject.message}</p>}
            </div>
            <div>
              <Label htmlFor="message" className="text-sm font-medium">Your Message</Label>
              <Textarea 
                id="message" 
                {...register("message")} 
                placeholder="Share your thoughts, ideas, or greetings..." 
                rows={5} 
                className="mt-1 bg-input/50 focus:bg-input/80 min-h-[120px]"
              />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-accent to-purple-600 hover:from-accent/90 hover:to-purple-600/90 text-accent-foreground text-lg py-3 rounded-lg shadow-md hover:shadow-accent/40 transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? "Transmitting..." : (
                <>
                  Send Message <SendHorizonal size={20} className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </InteractiveCard>
    </section>
  );
}
