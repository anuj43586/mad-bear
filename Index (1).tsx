import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Mad Bear Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/50" />
        <div className="relative z-10 text-center space-y-6 px-4">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground tracking-wider">
            MAD BEAR
          </h1>
          <p className="font-heading text-xl md:text-2xl italic text-primary-foreground/90">
            Wear Your Mood.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 tracking-widest uppercase text-sm font-body hover:opacity-90 transition-opacity rounded"
          >
            Shop Now →
          </Link>
        </div>
      </section>

      {/* Brand Intro */}
      <section className="bg-texture py-20">
        <div className="container mx-auto px-4 text-center max-w-2xl space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl font-bold section-divider">Our Story</h2>
          <p className="text-muted-foreground font-body leading-relaxed">
            Mad Bear was born from silence, from unspoken emotions, from the moments where words failed.
            We didn't want trends. We wanted truth. Every oversized tee we create carries a feeling — 
            designed for the new generation that wears their mood, not just their clothes.
          </p>
          <Link
            to="/about"
            className="inline-block border border-primary text-primary px-6 py-2 tracking-widest uppercase text-sm font-body hover:bg-primary hover:text-primary-foreground transition-colors rounded"
          >
            Read More →
          </Link>
        </div>
      </section>

      {/* Shop by Mood */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 section-divider">
            Shop by Mood
          </h2>
          <div className="flex justify-center gap-6 flex-wrap mb-10">
            {(["Beast 🔥", "Funny 😄", "Silent 🌙", "Soft 🤍"] as const).map((mood) => (
              <Link
                key={mood}
                to="/shop"
                className="text-sm font-body tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {mood}
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/shop"
              className="inline-block border border-primary text-primary px-6 py-2 tracking-widest uppercase text-sm font-body hover:bg-primary hover:text-primary-foreground transition-colors rounded"
            >
              View All →
            </Link>
          </div>
        </div>
      </section>

      {/* Join the Pack */}
      <section className="bg-card py-16">
        <div className="container mx-auto px-4 text-center max-w-xl space-y-4">
          <h2 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-widest">
            Join the Pack
          </h2>
          <p className="text-muted-foreground font-body">Become part of the legacy. Early drops, exclusive offers.</p>
          <div className="flex gap-2 max-w-sm mx-auto">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-background border border-border rounded px-4 py-2 text-sm font-body outline-none focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-5 py-2 text-sm font-body tracking-widest uppercase rounded hover:opacity-90 transition-opacity">
              Join
            </button>
          </div>
          <p className="text-xs text-muted-foreground font-body">No spam. Only moods.</p>
        </div>
      </section>
    </div>
  );
};

export default Index;
