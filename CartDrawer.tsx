import { useCart } from "@/lib/cart-context";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { toast } from "sonner";

const CartDrawer = () => {
  const { items, isCartOpen, setIsCartOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }
    // Redirect to a payment page (placeholder — you'd replace with real payment URL)
    const message = items
      .map((i) => `${i.name} (${i.size}) x${i.quantity} - ₹${i.price * i.quantity}`)
      .join("\n");
    const total = `\n\nTotal: ₹${totalPrice}`;
    const encoded = encodeURIComponent(`Order from Mad Bear:\n${message}${total}`);
    // Opens WhatsApp or a payment link — replace with your payment gateway
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
    toast.success("Redirecting to payment...");
  };

  return (
    <>
      <div className="fixed inset-0 bg-foreground/30 z-50" onClick={() => setIsCartOpen(false)} />
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="font-heading text-xl font-bold">Your Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-muted-foreground hover:text-foreground">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-muted-foreground mt-12 font-body">Your cart is empty.</p>
          ) : (
            items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex gap-4 bg-card rounded-lg p-3">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-heading text-sm font-semibold">{item.name}</h3>
                  <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                  <p className="text-sm font-bold text-primary mt-1">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="text-muted-foreground hover:text-foreground">
                      <Minus size={14} />
                    </button>
                    <span className="text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="text-muted-foreground hover:text-foreground">
                      <Plus size={14} />
                    </button>
                    <button onClick={() => removeItem(item.id, item.size)} className="ml-auto text-muted-foreground hover:text-destructive">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-4 space-y-3">
            <div className="flex justify-between font-heading text-lg font-bold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-primary text-primary-foreground py-3 rounded font-body tracking-widest uppercase text-sm hover:opacity-90 transition-opacity"
            >
              Proceed to Payment →
            </button>
            <button
              onClick={clearCart}
              className="w-full text-center text-xs text-muted-foreground hover:text-foreground"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
