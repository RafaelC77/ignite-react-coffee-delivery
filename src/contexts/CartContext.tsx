import { createContext, ReactNode, useState } from "react";

interface ICoffee {
  image_source: string;
  title: string;
  amount: number;
}

interface IOrder {
  address: {
    street: string;
    number: number;
    city: string;
    state: string;
    neighborhood: string;
  };
  payment_method: string;
}

interface CreateNewOrderData {
  street: string;
  number: number;
  neighborhood: string;
  city: string;
  state: string;
}
interface CartContextType {
  coffeeCart: ICoffee[];
  order: IOrder | null;
  setCoffee: (title: string, url: string, amount: number) => void;
  updateCoffeeCart: (cart: ICoffee[]) => void;
  createNewOrder: (order: CreateNewOrderData) => void;
  resetCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<ICoffee[]>([]);
  const [order, setOrder] = useState<IOrder | null>(null);

  function setCoffee(title: string, url: string, amount: number) {
    setCoffeeCart((prevState) => [
      ...prevState,
      { title, image_source: url, amount },
    ]);
  }

  function updateCoffeeCart(cart: ICoffee[]) {
    setCoffeeCart(cart);
  }

  function resetCart() {
    setCoffeeCart([]);
  }

  function createNewOrder(data: CreateNewOrderData) {
    const newOrder = {
      address: {
        street: data.street,
        number: data.number,
        city: data.city,
        state: data.state,
        neighborhood: data.neighborhood,
      },
      payment_method: "Cartão de Crédito",
    };

    setOrder(newOrder);
  }

  return (
    <CartContext.Provider
      value={{
        coffeeCart,
        setCoffee,
        updateCoffeeCart,
        order,
        createNewOrder,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
