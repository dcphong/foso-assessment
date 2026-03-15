export type CartItem = {
  id: number;
  title: string;
  image: number;
  price: number;
  createdDate?: number;
  type?: "effect" | "regular";
  quantity?: number;
};
