import { createContext, ReactNode, useEffect, useRef, useState } from "react";

interface ICoffee {
  image_source: string;
  title: string;
  amount: number;
}

interface IOrder {
  address: {
    street: string;
    number: string;
    city: string;
    state: string;
    neighborhood: string;
  };
  payment_method: string;
}

interface CreateNewOrderData {
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
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
  const isMounted = useRef(false);

  useEffect(() => {
    const storedState = localStorage.getItem("@ignite:coffee-delivery-1.0.0");

    if (storedState) {
      setCoffeeCart(JSON.parse(storedState));
    }
  }, []);

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeCart);

    if (isMounted.current) {
      localStorage.setItem("@ignite:coffee-delivery-1.0.0", stateJSON);
    } else {
      isMounted.current = true;
    }
  }, [coffeeCart]);

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
      payment_method: data.paymentMethod,
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
