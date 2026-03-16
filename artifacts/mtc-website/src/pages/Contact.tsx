import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message is required (min 10 characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API call since there's no backend for this static site
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    
    toast({
      title: "Inquiry Submitted Successfully",
      description: "Thank you for reaching out. Our team will contact you shortly.",
      variant: "default",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <div className="bg-mtc-navy pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={`${import.meta.env.BASE_URL}images/abstract-bg.png`} 
            alt="Abstract Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Get In Touch</h1>
            <div className="h-1 w-20 bg-mtc-gold mx-auto mb-6" />
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              We welcome strategic partnerships and investment inquiries.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Contact Info Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1 space-y-10"
            >
              <div>
                <h3 className="text-2xl font-serif font-bold text-mtc-navy mb-6">Global Contact Center</h3>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-sm mr-4 text-mtc-gold">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-mtc-navy mb-1">Headquarters</h4>
                      <p className="text-muted-foreground text-sm">Washington Business District,<br/>DC 20001, USA</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-sm mr-4 text-mtc-gold">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-mtc-navy mb-1">Direct Lines</h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p><span className="font-medium">Global:</span> +1 771 240 1273</p>
                        <p><span className="font-medium">UK:</span> +44 747 619 8795</p>
                        <p><span className="font-medium">France:</span> +33 756 756 465</p>
                        <p><span className="font-medium">Lagos:</span> 0700 311 7444</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-sm mr-4 text-mtc-gold">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-mtc-navy mb-1">Digital</h4>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p>info@mtcgroup.com</p>
                        <p>www.mtcgroup.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100">
                <h3 className="text-2xl font-serif font-bold text-mtc-navy mb-8">Send an Inquiry</h3>
                
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-mtc-navy">Full Name *</label>
                      <Input 
                        placeholder="John Doe" 
                        {...form.register("name")} 
                        className={form.formState.errors.name ? "border-destructive" : ""}
                      />
                      {form.formState.errors.name && (
                        <p className="text-xs text-destructive">{form.formState.errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-mtc-navy">Email Address *</label>
                      <Input 
                        placeholder="john@example.com" 
                        {...form.register("email")}
                        className={form.formState.errors.email ? "border-destructive" : ""}
                      />
                      {form.formState.errors.email && (
                        <p className="text-xs text-destructive">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-mtc-navy">Phone Number</label>
                      <Input 
                        placeholder="+1 (555) 000-0000" 
                        {...form.register("phone")}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-mtc-navy">Subject *</label>
                      <select 
                        {...form.register("subject")}
                        className={`flex h-12 w-full rounded-none border bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-mtc-gold ${form.formState.errors.subject ? "border-destructive" : "border-border"}`}
                      >
                        <option value="">Select a subject...</option>
                        <option value="Partnership Inquiry">Partnership Inquiry</option>
                        <option value="Energy Trading">Energy Trading</option>
                        <option value="Investment">Investment</option>
                        <option value="General">General Inquiry</option>
                      </select>
                      {form.formState.errors.subject && (
                        <p className="text-xs text-destructive">{form.formState.errors.subject.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-mtc-navy">Message *</label>
                    <Textarea 
                      placeholder="How can we help you?" 
                      className={`min-h-[150px] ${form.formState.errors.message ? "border-destructive" : ""}`}
                      {...form.register("message")}
                    />
                    {form.formState.errors.message && (
                      <p className="text-xs text-destructive">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                    {!isSubmitting && <Send className="w-4 h-4 ml-2" />}
                  </Button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
