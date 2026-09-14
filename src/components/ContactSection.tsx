import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import React from "react";

import {
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "@/components/ui/toast"
import { ToastProvider, ToastViewport } from "@radix-ui/react-toast"


const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  //form submission
  const [result, setResult] = React.useState("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const formRef: any = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "63f18826-dddb-48f2-ba99-d5e75b5dd7a9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("I will get back to you as soon as possible");
      formRef.current.reset();
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setOpen(true);
      setToastContent({
        title: "Project Recieved",
        description: "I will get back to you as soon as possible.",
      });
      e.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      setOpen(true);
      setToastContent({
        title: "Error",
        description: data.message || "Something went wrong.",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "waynemwendwa04@gmail.com",
      href: "mailto:waynemwendwa04@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+254 799 514 443",
      href: "tel:+254799514443"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#"
    }
  ];
  const [open, setOpen] = useState(false);
  const [toastContent, setToastContent] = useState({
    title: "",
    description: "",
  });
  return (

    <ToastProvider>
      <section id="contact" className="py-24 px-6 bg-gradient-luxury relative">
        {/* Ambient background effects */}
        <div className="absolute inset-0 carbon-fiber opacity-5"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-secondary/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-luxury text-4xl md:text-5xl font-bold text-foreground mb-4">
              Something good starts with hello.
            </h2>
            <p className="font-space text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind, a question, or a spark of an idea? I’d love to hear it.
            </p>
            <div className="w-32 h-px bg-gradient-gold mx-auto mt-8 glow-gold"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="glass-luxury p-8 metallic-border">
              <h3 className="font-luxury text-2xl font-semibold text-foreground mb-6">
                Start Your Project
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="font-space text-sm text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      id="contact-name" name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-accent/50 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="font-space text-sm text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="contact-email" name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-accent/50 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-subject" className="font-space text-sm text-muted-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="contact-subject" name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-accent/50 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground"
                    placeholder="Project discussion"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="font-space text-sm text-muted-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="contact-message" name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="bg-accent/50 border-border focus:border-primary focus:ring-primary text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Tell me about your project vision..."
                    required
                  />
                </div>
                <input type="hidden" name="access_key" value="63f18826-dddb-48f2-ba99-d5e75b5dd7a9"></input>
                <Button
                  type="submit"
                  className="w-full luxury-hover glow-primary bg-primary hover:bg-primary/90 text-primary-foreground font-space py-6"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
                
                {/* <span>{result}</span> */}
              </form>
              <Toast open={open} onOpenChange={setOpen}>
                <div className="flex flex-col space-y-1">
                  <ToastTitle>{toastContent.title}</ToastTitle>
                  <ToastDescription>{toastContent.description}</ToastDescription>
                </div>
                <ToastClose />
              </Toast>
              <ToastViewport />
            </Card>
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-luxury p-8 metallic-border">
                <h3 className="font-luxury text-2xl font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.label}
                      className="flex items-center space-x-4 luxury-hover p-4 rounded-lg hover:bg-accent/30 transition-colors cursor-pointer"
                    >
                      <div className="p-3 bg-gradient-primary rounded-lg glow-primary">
                        <info.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <p className="font-space text-sm text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-space text-foreground font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
              {/* Availability */}
              <Card className="glass-luxury p-8 metallic-border">
                <h3 className="font-luxury text-xl font-semibold text-foreground mb-4">
                  Availability
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-secondary rounded-full glow-gold animate-pulse"></div>
                    <span className="font-space text-foreground">
                      Currently accepting new projects
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-primary rounded-full glow-primary"></div>
                    <span className="font-space text-muted-foreground">
                      Response time: Within 24 hours
                    </span>
                  </div>
                </div>
              </Card>
              {/* Quote */}
              <Card className="glass-luxury p-8 metallic-border text-center">
                <blockquote className="font-luxury text-lg italic text-foreground mb-4">
                  "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
                </blockquote>
                <cite className="font-space text-sm text-secondary">
                  — Wayne's Development Philosophy
                </cite>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </ToastProvider>
  );
};

export default ContactSection;