import { useState } from "react";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill all fields.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-texture min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center tracking-wider mb-2">Contact Us</h1>
        <p className="text-center text-muted-foreground font-body mb-12">We'd love to hear from you.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="font-heading text-xl font-semibold">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-primary mt-1" />
                <div>
                  <p className="font-body text-sm font-bold">Email</p>
                  <p className="text-sm text-muted-foreground font-body">hello@madbear.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-primary mt-1" />
                <div>
                  <p className="font-body text-sm font-bold">Phone</p>
                  <p className="text-sm text-muted-foreground font-body">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <div>
                  <p className="font-body text-sm font-bold">Address</p>
                  <p className="text-sm text-muted-foreground font-body">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border rounded px-4 py-3 text-sm font-body outline-none focus:ring-1 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card border border-border rounded px-4 py-3 text-sm font-body outline-none focus:ring-1 focus:ring-primary"
            />
            <textarea
              placeholder="Your Message"
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded px-4 py-3 text-sm font-body outline-none focus:ring-1 focus:ring-primary resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded font-body tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
