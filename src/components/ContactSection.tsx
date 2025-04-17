
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, User, Building, MessageSquare, Send } from "lucide-react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      form.reset();
      
      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#edf7f2] via-[#f0f8f3] to-[#f4faef] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-bold mb-3">
            Let's Get <span className="text-deewan-primary">Started</span>
          </h2>
          <p className="text-lg text-deewan-dark/80 max-w-2xl mx-auto">
            Ready to enhance your communication capabilities? Our team is here to
            help you get started with our solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Left column - Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-10 text-deewan-dark">Get In Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#E5F3EF] p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Office Location</h4>
                  <p className="text-deewan-dark/80">Riyadh, Saudi Arabia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#E5F3EF] p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Email Us</h4>
                  <a href="mailto:info@deewan.com" className="text-deewan-primary hover:underline">info@deewan.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#E5F3EF] p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Call Us</h4>
                  <a href="tel:+966123456789" className="text-deewan-primary hover:underline">+966 12 345 6789</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-semibold mb-4 text-deewan-dark">Connect With Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-sm transition-colors duration-300">
                  <svg className="h-5 w-5 text-[#1DA1F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-sm transition-colors duration-300">
                  <svg className="h-5 w-5 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z" />
                  </svg>
                </a>
                <a href="#" className="bg-white hover:bg-gray-100 p-3 rounded-full shadow-sm transition-colors duration-300">
                  <svg className="h-5 w-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right column - Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-6 text-deewan-dark">Contact Us</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Your name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="John Doe" 
                            className="pl-10 bg-white border border-gray-200"
                            {...field} 
                          />
                          <User className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                        </div>
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
                      <FormLabel className="text-sm font-medium text-gray-700">Your Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input 
                            placeholder="you@example.com" 
                            className="pl-10 bg-white border border-gray-200"
                            {...field} 
                          />
                          <Mail className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="+966 12 345 6789" 
                              className="pl-10 bg-white border border-gray-200"
                              {...field} 
                            />
                            <Phone className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Company (Optional)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input 
                              placeholder="Your Company" 
                              className="pl-10 bg-white border border-gray-200"
                              {...field} 
                            />
                            <Building className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea 
                            placeholder="How can we help you?" 
                            className="pl-10 min-h-[120px] bg-white border border-gray-200"
                            {...field} 
                          />
                          <MessageSquare className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-deewan-primary hover:bg-deewan-primary/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : isSuccess ? (
                    <span className="flex items-center">
                      <svg className="-ml-1 mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
