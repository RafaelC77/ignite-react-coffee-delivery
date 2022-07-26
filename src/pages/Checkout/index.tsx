import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from "phosphor-react";
import {
  AddressAndPaymentInfo,
  AddressForm,
  AditionalInfo,
  BaseInput,
  ButtonContainer,
  CheckoutComponent,
  CheckoutSummary,
  CityInfo,
  CoffeeInfo,
  ConfirmOrderButton,
  DecrementButton,
  IncrementButton,
  InputFields,
  NumberInput,
  PaymentMethod,
  PaymentOptions,
  PostalCodeInput,
  Price,
  RemoveButton,
  SelectedCoffeesCard,
  SelectedCoffeesInfo,
  StateInfo,
  StreetInput,
  TotalItensPrice,
  TotalPrice,
} from "./styles";

export function Checkout() {
  return (
    <CheckoutComponent>
      <form action="">
        <AddressAndPaymentInfo>
          <h2>Complete seu pedido</h2>
          <AddressForm>
            <header>
              <MapPinLine size={22} />

              <span>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </span>
            </header>

            <InputFields>
              <PostalCodeInput type="text" placeholder="CEP" />
              <StreetInput type="text" placeholder="Rua" />
              <NumberInput type="text" placeholder="Número" />
              <div>
                <AditionalInfo type="text" placeholder="Complemento" />
                <span>Opcional</span>
              </div>
              <BaseInput type="text" placeholder="Bairro" />
              <CityInfo type="text" placeholder="Cidade" />
              <StateInfo type="text" placeholder="UF" />
            </InputFields>
          </AddressForm>

          <PaymentMethod>
            <header>
              <CurrencyDollar size={22} />

              <span>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </span>
            </header>

            <PaymentOptions>
              <button>
                <CreditCard size={16} />
                <span>CARTÃO DE CRÉDITO</span>
              </button>
              <button>
                <Bank size={16} />
                <span>CARTÃO DE DÉBITO</span>
              </button>
              <button>
                <Money size={16} />
                <span>DINHEIRO</span>
              </button>
            </PaymentOptions>
          </PaymentMethod>
        </AddressAndPaymentInfo>

        <SelectedCoffeesInfo>
          <h2>Cafés selecionados</h2>
          <SelectedCoffeesCard>
            <ul>
              <li>
                <img
                  src="src/assets/coffee_images/american_espresso.png"
                  alt=""
                />
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
                <img
                  src="src/assets/coffee_images/american_espresso.png"
                  alt=""
                />
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

            <ConfirmOrderButton type="submit">
              CONFIRMAR PEDIDO
            </ConfirmOrderButton>
          </SelectedCoffeesCard>
        </SelectedCoffeesInfo>
      </form>
    </CheckoutComponent>
  );
}
