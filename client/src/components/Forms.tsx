import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubscribeNewsletter } from "@/hooks/use-newsletter";
import { useSubmitContact } from "@/hooks/use-contact";
import { useToast } from "@/hooks/use-toast";

// Re-defining schemas for frontend form validation to match backend
const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function ContactSection() {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", message: "" }
  });

  const onSubmit = (data: z.infer<typeof contactSchema>) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "An artisan will be in touch with you shortly.",
          className: "bg-[#0a0a0a] text-[#d4af37] border-[#d4af37]/30",
        });
        form.reset();
      },
      onError: (err) => {
        toast({
          title: "Error",
          description: err.message,
          variant: "destructive"
        });
      }
    });
  };

  return (
    <section id="contact" className="py-32 bg-black relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <h2 className="text-[#d4af37] tracking-[0.2em] text-sm uppercase mb-4">Inquiries & Appointments</h2>
        <h3 className="text-4xl md:text-5xl font-serif text-white mb-12">Contact Our Atelier</h3>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input 
                {...form.register("name")}
                placeholder="Full Name" 
                className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors font-light placeholder:text-gray-600"
              />
              {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
            </div>
            <div>
              <input 
                {...form.register("email")}
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors font-light placeholder:text-gray-600"
              />
              {form.formState.errors.email && <p className="text-red-500 text-xs mt-1">{form.formState.errors.email.message}</p>}
            </div>
          </div>
          <div>
            <textarea 
              {...form.register("message")}
              placeholder="Your Message or Request" 
              rows={4}
              className="w-full bg-transparent border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-[#d4af37] transition-colors font-light placeholder:text-gray-600 resize-none"
            />
            {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
          </div>
          <button 
            type="submit"
            disabled={contactMutation.isPending}
            className="gold-gradient-bg text-black w-full py-4 uppercase tracking-widest text-sm font-semibold hover:brightness-110 transition-all disabled:opacity-50"
          >
            {contactMutation.isPending ? "Sending..." : "Send Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

export function Newsletter() {
  const { toast } = useToast();
  const subscribeMutation = useSubscribeNewsletter();
  
  const form = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" }
  });

  const onSubmit = (data: z.infer<typeof newsletterSchema>) => {
    subscribeMutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Welcome to Reva",
          description: "You have been added to our exclusive list.",
          className: "bg-[#0a0a0a] text-[#d4af37] border-[#d4af37]/30",
        });
        form.reset();
      },
      onError: (err) => {
        toast({
          title: "Subscription Failed",
          description: err.message,
          variant: "destructive"
        });
      }
    });
  };

  return (
    <section className="py-24 bg-[#050505] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-serif text-white mb-4">The Inner Circle</h3>
        <p className="text-gray-400 font-light mb-8 max-w-lg mx-auto">
          Subscribe to receive exclusive access to new collections, private events, and editorial content.
        </p>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <div className="flex-grow text-left">
            <input 
              {...form.register("email")}
              placeholder="Enter your email" 
              className="w-full bg-transparent border border-white/20 px-6 py-4 text-white focus:outline-none focus:border-[#d4af37] transition-colors font-light"
            />
            {form.formState.errors.email && <p className="text-red-500 text-xs mt-1 absolute">{form.formState.errors.email.message}</p>}
          </div>
          <button 
            type="submit"
            disabled={subscribeMutation.isPending}
            className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-[#d4af37] transition-colors disabled:opacity-50 whitespace-nowrap"
          >
            {subscribeMutation.isPending ? "..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}
