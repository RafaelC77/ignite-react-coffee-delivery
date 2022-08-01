import { createContext, ReactNode, useState } from "react";

interface ICoffee {
  image_source: string;
  title: string;
  amount: number;
}

interface CartContextType {
  coffeeCart: ICoffee[];
  setCoffee: (title: string, url: string, amount: number) => void;
  updateCoffeeCart: (cart: ICoffee[]) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<ICoffee[]>([]);

  function setCoffee(title: string, url: string, amount: number) {
    setCoffeeCart((prevState) => [
      ...prevState,
      { title, image_source: url, amount },
    ]);
  }

  function updateCoffeeCart(cart: ICoffee[]) {
    setCoffeeCart(cart);
  }

  return (
    <CartContext.Provider
      value={{
        coffeeCart,
        setCoffee,
        updateCoffeeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
