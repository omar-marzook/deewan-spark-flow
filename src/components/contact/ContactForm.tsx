
import React from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { User, Mail, Phone, Building, Send } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    form.reset();
  };

  return (
    <AnimatePresence>
      <motion.div
        className="backdrop-blur-xl bg-white/40 p-8 rounded-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-deewan-dark">Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input className="pl-10" placeholder="Your full name" {...field} />
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
                  <FormLabel className="text-deewan-dark">Work Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input className="pl-10" type="email" placeholder="your@email.com" {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-deewan-dark">Phone (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input className="pl-10" placeholder="+1 (555) 000-0000" {...field} />
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
                    <FormLabel className="text-deewan-dark">Company Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input className="pl-10" placeholder="Your company" {...field} />
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
                  <FormLabel className="text-deewan-dark">Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      className="min-h-[120px]" 
                      placeholder="How can we help you?" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              transition='no'
              className="w-full bg-deewan-primary hover:bg-deewan-primary/90 text-white"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContactForm;
