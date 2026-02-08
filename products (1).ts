import productBeast from "@/assets/product-beast.jpg";
import productFunny from "@/assets/product-funny.jpg";
import productSilent from "@/assets/product-silent.jpg";
import productSoft from "@/assets/product-soft.jpg";
import productGeo from "@/assets/product-geo.jpg";
import productGrizzly from "@/assets/product-grizzly.jpg";
import productPaw from "@/assets/product-paw.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "beast" | "funny" | "silent" | "soft";
  description: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: "beast-rage",
    name: "Beast Rage Tee",
    price: 1299,
    image: productBeast,
    category: "beast",
    description: "Unleash your inner beast. Oversized fit with fierce bear graphic.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "funny-cub",
    name: "Funny Cub Tee",
    price: 999,
    image: productFunny,
    category: "funny",
    description: "Keep it light. Cute bear design for the playful soul.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "silent-walk",
    name: "Silent Walk Tee",
    price: 1199,
    image: productSilent,
    category: "silent",
    description: "When words fail, let your tee speak. Deep maroon with bear silhouette.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "soft-hug",
    name: "Soft Hug Tee",
    price: 999,
    image: productSoft,
    category: "soft",
    description: "Softness you can wear. Pastel bear on cream oversized tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "geo-bear",
    name: "Geo Bear Tee",
    price: 1099,
    image: productGeo,
    category: "silent",
    description: "Minimal geometric bear. Clean lines, deep thoughts.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "grizzly-roar",
    name: "Grizzly Roar Tee",
    price: 1399,
    image: productGrizzly,
    category: "beast",
    description: "The roar that shakes the wild. Navy blue with grizzly artwork.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: "paw-print",
    name: "Paw Print Tee",
    price: 1099,
    image: productPaw,
    category: "beast",
    description: "Leave your mark. Bold paw print on olive oversized tee.",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
];
