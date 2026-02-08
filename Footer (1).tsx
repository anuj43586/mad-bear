import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const Footer = () => (
  <footer className="bg-card border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Mad Bear" className="h-8 w-8 rounded-full object-cover" />
            <span className="font-heading text-lg font-bold tracking-wider">MAD BEAR</span>
          </div>
          <p className="text-sm text-muted-foreground font-body">Wear Your Mood.</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest">Quick Links</h4>
          {["/", "/about", "/shop", "/contact"].map((path) => (
            <Link
              key={path}
              to={path}
              className="block text-sm text-muted-foreground hover:text-primary transition-colors font-body"
            >
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-semibold text-sm uppercase tracking-widest">Contact</h4>
          <p className="text-sm text-muted-foreground font-body">hello@madbear.in</p>
          <p className="text-sm text-muted-foreground font-body">New Delhi, India</p>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground font-body">
        © 2026 Mad Bear. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
