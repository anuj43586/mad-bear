import { useState } from "react";
import { products, Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

type Category = "all" | Product["category"];

const Shop = () => {
  const [filter, setFilter] = useState<Category>("all");

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  const categories: { key: Category; label: string }[] = [
    { key: "all", label: "All" },
    { key: "beast", label: "Beast 🔥" },
    { key: "funny", label: "Funny 😄" },
    { key: "silent", label: "Silent 🌙" },
    { key: "soft", label: "Soft 🤍" },
  ];

  return (
    <div className="bg-texture min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-center tracking-wider mb-2">Shop</h1>
        <p className="text-center text-muted-foreground font-body mb-8">Choose your mood. Wear your truth.</p>

        <div className="flex justify-center gap-3 flex-wrap mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 text-sm font-body tracking-widest uppercase rounded border transition-colors ${
                filter === c.key
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground mt-12 font-body">No products in this mood yet.</p>
        )}
      </div>
    </div>
  );
};

export default Shop;
