import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Product } from "@/lib/products";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]); // default L

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow group">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-heading text-base font-semibold">{product.name}</h3>
        <p className="text-xs text-muted-foreground font-body">{product.description}</p>
        <p className="font-heading text-lg font-bold text-primary">₹{product.price}</p>

        <div className="flex gap-1 flex-wrap">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`text-xs px-2 py-1 border rounded transition-colors ${
                selectedSize === s
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <button
          onClick={handleAdd}
          className="w-full mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded text-sm font-body tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
