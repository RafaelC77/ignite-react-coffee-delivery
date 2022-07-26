import { MapPinLine } from "phosphor-react";
import {
  AddressAndPaymentInfo,
  AddressForm,
  AditionalInfo,
  BaseInput,
  CheckoutComponent,
  CityInfo,
  InputFields,
  NumberInput,
  PostalCodeInput,
  SelectedCoffeesInfo,
  StateInfo,
  StreetInput,
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
        </AddressAndPaymentInfo>

        <SelectedCoffeesInfo>
          <h2>Cafés selecionados</h2>
        </SelectedCoffeesInfo>
      </form>
    </CheckoutComponent>
  );
}
