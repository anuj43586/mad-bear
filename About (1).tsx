import heroBg from "@/assets/hero-bg.jpg";

const About = () => (
  <div className="bg-texture">
    {/* Hero Banner */}
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      <img src={heroBg} alt="About Mad Bear" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/60" />
      <div className="relative z-10 text-center">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground tracking-wider">
          Our Story
        </h1>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 max-w-3xl space-y-10">
      <div className="space-y-4">
        <h2 className="font-heading text-2xl md:text-3xl font-bold italic">
          Not Just a Brand. A Feeling You Wear.
        </h2>
        <p className="text-muted-foreground font-body leading-relaxed">
          Mad Bear was born from silence, from unspoken emotions, from the moments where words failed.
          We didn't want trends. We wanted truth.
        </p>
        <p className="text-muted-foreground font-body leading-relaxed">
          Every line, every shadow, every symbol on our tees is created to say something real.
          Mad Bear was never meant to follow fashion. It was meant to follow <em className="font-heading">feelings</em>.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold section-divider">How It Started</h2>
        <p className="text-muted-foreground font-body leading-relaxed">
          Founded with a single vision — to create oversized tees that speak for a generation. 
          Mad Bear focuses on the new generation trends for oversized t-shirts, each design carrying
          a mood, a story, a piece of emotion you can wear every day.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="font-heading text-2xl font-bold section-divider">Our Purpose</h2>
        <p className="text-muted-foreground font-body leading-relaxed">
          We create for the bold, the quiet, the funny, and the fierce. Whether you feel like a beast
          or you're having a soft day — there's a Mad Bear tee that gets you. 
          Because fashion should feel like you.
        </p>
      </div>

      {/* Testimonials */}
      <div className="space-y-6">
        <h2 className="font-heading text-2xl font-bold text-center section-divider">What They Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: "Alan", text: "Quality is crazy good." },
            { name: "Priya", text: "Feels like me." },
            { name: "Karan", text: "Every tee has a story." },
          ].map((t) => (
            <div key={t.name} className="bg-card border border-border rounded-lg p-4 text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-accent mx-auto flex items-center justify-center font-heading text-lg font-bold text-accent-foreground">
                {t.name[0]}
              </div>
              <h4 className="font-heading font-semibold">{t.name}</h4>
              <p className="text-xs text-brand-gold">★★★★★</p>
              <p className="text-sm text-muted-foreground font-body italic">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
