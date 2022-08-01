import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { formatPrice } from "../../../../utils/format";

import {
  SelectedCoffeesInfo,
  SelectedCoffeesCard,
  CoffeeInfo,
  ButtonContainer,
  DecrementButton,
  IncrementButton,
  RemoveButton,
  Price,
  CheckoutSummary,
  TotalItensPrice,
  TotalPrice,
  ConfirmOrderButton,
} from "./styles";

export function SelectedCoffees() {
  const { coffeeCart, updateCoffeeCart } = useContext(CartContext);

  const formattedCart = coffeeCart.map((coffee) => {
    return {
      ...coffee,
      subtotal: formatPrice(coffee.amount * 9.9),
    };
  });

  const total = coffeeCart.reduce((sumTotal, coffee) => {
    return sumTotal + coffee.amount * 9.9;
  }, 0);

  const totalWithFee = total + 3.5;

  function handleIncreaseCoffee(title: string) {
    const newCoffeeCart = [...coffeeCart];
    const selectedCoffee = newCoffeeCart.find(
      (coffee) => coffee.title === title
    );
    const coffeeIndex = newCoffeeCart.indexOf(selectedCoffee!);

    newCoffeeCart[coffeeIndex].amount = selectedCoffee!.amount + 1;
    updateCoffeeCart(newCoffeeCart);
  }

  function handleDecreaseCoffee(title: string) {
    const newCoffeeCart = [...coffeeCart];
    const selectedCoffee = newCoffeeCart.find(
      (coffee) => coffee.title === title
    );
    const coffeeIndex = newCoffeeCart.indexOf(selectedCoffee!);

    if (selectedCoffee!.amount <= 1) {
      return;
    }

    newCoffeeCart[coffeeIndex].amount = selectedCoffee!.amount - 1;
    updateCoffeeCart(newCoffeeCart);
  }

  function handleRemoveCoffee(title: string) {
    const previousCoffeeCart = [...coffeeCart];

    const newCoffeeCart = previousCoffeeCart.filter(
      (coffee) => coffee.title !== title
    );
    updateCoffeeCart(newCoffeeCart);
  }

  return (
    <SelectedCoffeesInfo>
      <h2>Cafés selecionados</h2>
      <SelectedCoffeesCard>
        <ul>
          {formattedCart.map((coffee) => (
            <li key={coffee.title}>
              <img src={coffee.image_source} alt="" />
              <CoffeeInfo>
                <span>{coffee.title}</span>
                <ButtonContainer>
                  <div>
                    <DecrementButton
                      type="button"
                      onClick={() => handleDecreaseCoffee(coffee.title)}
                    >
                      <Minus />
                    </DecrementButton>
                    <input
                      type="amount"
                      id="price"
                      step={1}
                      placeholder={String(coffee.amount)}
                      readOnly
                    />
                    <IncrementButton
                      type="button"
                      onClick={() => handleIncreaseCoffee(coffee.title)}
                    >
                      <Plus />
                    </IncrementButton>
                  </div>

                  <RemoveButton
                    type="button"
                    onClick={() => {
                      handleRemoveCoffee(coffee.title);
                    }}
                  >
                    <Trash />
                    <span>REMOVER</span>
                  </RemoveButton>
                </ButtonContainer>
              </CoffeeInfo>
              <Price>{coffee.subtotal}</Price>
            </li>
          ))}
        </ul>

        <CheckoutSummary>
          <div>
            <span>Total de itens</span>
            <TotalItensPrice>{formatPrice(total)}</TotalItensPrice>
          </div>
          <div>
            <span>Entrega</span>
            <TotalItensPrice>R$ 3,50</TotalItensPrice>
          </div>

          <TotalPrice>
            <span>Total</span>
            <span>{formatPrice(totalWithFee)}</span>
          </TotalPrice>
        </CheckoutSummary>

        <ConfirmOrderButton type="submit">CONFIRMAR PEDIDO</ConfirmOrderButton>
      </SelectedCoffeesCard>
    </SelectedCoffeesInfo>
  );
}
