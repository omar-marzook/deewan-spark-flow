import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, User, Building, MessageSquare, Send } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/footer/SocialLinks";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters")
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
      message: ""
    }
  });

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    // Simulate API call
    try {
      console.log("Form data:", data);
      await new Promise(resolve => setTimeout(resolve, 1500));
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
  return <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#edf7f2] to-[#f4faef] via-[#f0f8f3]">
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
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Office Location</h4>
                  <a href="https://maps.app.goo.gl/hQqxRdj2ePUPFvRr6" target="_blank" className="text-deewan-primary hover:underline">Olaya St, Al Olaya, Riyadh 12214, Saudi Arabia</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Email Us</h4>
                  <a href="mailto:support@deewan.sa" className="text-deewan-primary hover:underline">
                    support@deewan.sa
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-deewan-primary/10 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-deewan-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-deewan-dark">Call Us</h4>
                  <a href="tel:+966552889989" className="text-deewan-primary hover:underline">
                    +966 55 288 9989
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-semibold mb-4 text-deewan-dark">Connect With Us</h4>
                <SocialLinks />
            </div>
          </div>
          
          {/* Right column - Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-6 text-deewan-dark">Contact Us</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <FormField control={form.control} name="name" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Your name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="John Doe" className="pl-10 bg-white border border-gray-200" {...field} />
                          <User className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <FormField control={form.control} name="email" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Your Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input placeholder="you@example.com" className="pl-10 bg-white border border-gray-200" {...field} />
                          <Mail className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField control={form.control} name="phone" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Phone Number</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="+966 12 345 6789" className="pl-10 bg-white border border-gray-200" {...field} />
                            <Phone className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                  
                  <FormField control={form.control} name="company" render={({
                  field
                }) => <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700">Company (Optional)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Input placeholder="Your Company" className="pl-10 bg-white border border-gray-200" {...field} />
                            <Building className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>} />
                </div>
                
                <FormField control={form.control} name="message" render={({
                field
              }) => <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Textarea placeholder="How can we help you?" className="pl-10 min-h-[120px] bg-white border border-gray-200" {...field} />
                          <MessageSquare className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>} />
                
              <Button type="submit" className="w-full bg-deewan-primary hover:bg-deewan-primary/90 text-white" transition='no' disabled={isSubmitting}>
                  {isSubmitting ? <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span> : isSuccess ? <span className="flex items-center">
                      <svg className="-ml-1 mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Message Sent!
                    </span> : <span className="flex items-center justify-center">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </span>}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;