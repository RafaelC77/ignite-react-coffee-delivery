import { Minus, Plus, Trash } from "phosphor-react";

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
  return (
    <SelectedCoffeesInfo>
      <h2>Cafés selecionados</h2>
      <SelectedCoffeesCard>
        <ul>
          <li>
            <img src="src/assets/coffee_images/american_espresso.png" alt="" />
            <CoffeeInfo>
              <span>Expresso Tradicional</span>
              <ButtonContainer>
                <div>
                  <DecrementButton>
                    <Minus />
                  </DecrementButton>
                  <input
                    type="amount"
                    id="price"
                    step={1}
                    placeholder="1"
                    readOnly
                  />
                  <IncrementButton>
                    <Plus />
                  </IncrementButton>
                </div>

                <RemoveButton>
                  <Trash />
                  <span>REMOVER</span>
                </RemoveButton>
              </ButtonContainer>
            </CoffeeInfo>
            <Price>R$ 9,90</Price>
          </li>

          <li>
            <img src="src/assets/coffee_images/american_espresso.png" alt="" />
            <CoffeeInfo>
              <span>Expresso Tradicional</span>
              <ButtonContainer>
                <div>
                  <DecrementButton>
                    <Minus />
                  </DecrementButton>
                  <input
                    type="amount"
                    id="price"
                    step={1}
                    placeholder="1"
                    readOnly
                  />
                  <IncrementButton>
                    <Plus />
                  </IncrementButton>
                </div>

                <RemoveButton>
                  <Trash />
                  <span>REMOVER</span>
                </RemoveButton>
              </ButtonContainer>
            </CoffeeInfo>
            <Price>R$ 9,90</Price>
          </li>
        </ul>

        <CheckoutSummary>
          <div>
            <span>Total de itens</span>
            <TotalItensPrice>R$ 29,70</TotalItensPrice>
          </div>
          <div>
            <span>Entrega</span>
            <TotalItensPrice>R$ 3,50</TotalItensPrice>
          </div>

          <TotalPrice>
            <span>Total</span>
            <span>R$ 33,20</span>
          </TotalPrice>
        </CheckoutSummary>

        <ConfirmOrderButton type="submit">CONFIRMAR PEDIDO</ConfirmOrderButton>
      </SelectedCoffeesCard>
    </SelectedCoffeesInfo>
  );
}
