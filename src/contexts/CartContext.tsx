import { createContext, ReactNode, useEffect, useRef, useState } from "react";

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
  paymentMethod: string;
}
interface CartContextType {
  coffeeCart: ICoffee[];
  order: IOrder | null;
  setCoffee: (title: string, url: string, amount: number) => void;
  updateCoffeeCart: (cart: ICoffee[]) => void;
  createNewOrder: (order: CreateNewOrderData) => void;
  resetCart: () => void;
  setPaymentMethod: (payment: string) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeCart, setCoffeeCart] = useState<ICoffee[]>([]);
  const [order, setOrder] = useState<IOrder | null>(null);
  const [payment, setPayment] = useState<string>("");
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

  function setPaymentMethod(payment: string) {
    setPayment(payment);
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
        setPaymentMethod,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
