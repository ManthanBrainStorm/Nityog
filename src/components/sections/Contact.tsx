import { useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

// ── EDIT: update contact details and Google Form URL ──
const CONTACT = {
  email: "nityog.04@gmail.com",
  phone: "+91 98263 96009",
  instagram: "@nityogstudio",
  location: "Indore, M.P.",
  // Replace with your real Google Form link:
  googleFormUrl: "https://forms.gle/placeholder",
};

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().min(10, "Please tell us how we can help"),
});

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", company: "", phone: "", message: "" },
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {
    try {
      setLoading(true);

      await emailjs.send(
        "service_4xi6yrb",
        "template_yeokexb",
        {
          name: data.name,
          email: data.email,
          company: data.company,
          phone: data.phone,
          message: data.message,
        },
        "Jj0ypocw2Em5vUx8q"
      );

      setSuccess(true);

      form.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      console.error("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Let's create a wellness experience for your team.
            </h2>
            <p className="text-lg text-foreground/70 mb-12">
              Reach out to us for customized programs that truly make a difference.
            </p>
            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", value: CONTACT.email },
                { icon: Phone, label: "Phone", value: CONTACT.phone },
                { icon: Instagram, label: "Instagram", value: CONTACT.instagram },
                { icon: MapPin, label: "Location", value: CONTACT.location },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 text-foreground/80">
                  <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center border border-border">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/50">{label}</p>
                    <p className="font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-background rounded-[2rem] p-8 md:p-10 shadow-sm border border-border">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Your Name</FormLabel>
                      <FormControl><Input placeholder="Jane Doe" className="bg-muted/50 border-transparent focus-visible:ring-primary" {...field} /></FormControl>
                      <FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem><FormLabel>Work Email</FormLabel>
                      <FormControl><Input placeholder="jane@company.com" className="bg-muted/50 border-transparent focus-visible:ring-primary" {...field} /></FormControl>
                      <FormMessage /></FormItem>)} />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField control={form.control} name="company" render={({ field }) => (
                    <FormItem><FormLabel>Company Name</FormLabel>
                      <FormControl><Input placeholder="Acme Corp" className="bg-muted/50 border-transparent focus-visible:ring-primary" {...field} /></FormControl>
                      <FormMessage /></FormItem>)} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone Number</FormLabel>
                      <FormControl><Input placeholder="+91 98765 43210" className="bg-muted/50 border-transparent focus-visible:ring-primary" {...field} /></FormControl>
                      <FormMessage /></FormItem>)} />
                </div>
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>How can we help?</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your team and goals..." className="min-h-[120px] bg-muted/50 border-transparent focus-visible:ring-primary resize-none" {...field} />
                    </FormControl>
                    <FormMessage /></FormItem>)} />


                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span>
                      Thank you! Your enquiry has been sent successfully. We'll contact you soon.
                    </span>
                  </motion.div>
                )}
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
