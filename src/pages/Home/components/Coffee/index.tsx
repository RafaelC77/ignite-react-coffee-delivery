import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { ChangeAmountButton } from "../../../../components/ChangeAmountButton";
import { CartContext } from "../../../../contexts/CartContext";
import {
  AddToCartButton,
  AddToCartComponent,
  CoffeeComponent,
  PriceTag,
  Tag,
} from "./styles";

interface CoffeeProps {
  image_source: string;
  tags: string[];
  title: string;
  description: string;
}

export function Coffee({
  image_source,
  tags,
  title,
  description,
}: CoffeeProps) {
  const { setCoffee, updateCoffeeCart, coffeeCart } = useContext(CartContext);
  const [coffeeAmount, setCoffeAmount] = useState(1);

  function handleAddCoffee() {
    const newCoffeeCart = [...coffeeCart];

    const coffeeExists = newCoffeeCart.find((coffee) => coffee.title === title);

    if (!!coffeeExists) {
      const coffeeIndex = newCoffeeCart.indexOf(coffeeExists);

      newCoffeeCart[coffeeIndex].amount = coffeeExists.amount + coffeeAmount;
      updateCoffeeCart(newCoffeeCart);

      return;
    }
    setCoffee(title, image_source, coffeeAmount);
  }

  function handleIncreaseCoffee() {
    setCoffeAmount((prevState) => prevState + 1);
  }

  function handleDecreaseCoffee() {
    if (coffeeAmount <= 1) {
      return;
    }
    setCoffeAmount((prevState) => prevState - 1);
  }

  return (
    <CoffeeComponent>
      <img
        src={image_source}
        alt="xícara cheia de café com um pires por baixo vista de cima"
      />
      <div>
        {tags.map((tag) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <AddToCartComponent>
        <PriceTag>
          R$ <strong>9,90</strong>
        </PriceTag>

        <ChangeAmountButton
          decreaseCoffee={handleDecreaseCoffee}
          increaseCoffee={handleIncreaseCoffee}
          coffeeAmount={coffeeAmount}
        />

        <AddToCartButton onClick={handleAddCoffee}>
          <ShoppingCart weight="fill" size={22} />
        </AddToCartButton>
      </AddToCartComponent>
    </CoffeeComponent>
  );
}
