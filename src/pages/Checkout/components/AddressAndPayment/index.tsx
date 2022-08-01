import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  AddressAndPaymentInfo,
  AddressForm,
  AditionalInfo,
  BaseInput,
  CityInfo,
  InputFields,
  NumberInput,
  PaymentMethod,
  PaymentOptions,
  PostalCodeInput,
  StateInfo,
  StreetInput,
} from "./styles";

export function AddressAndPayment() {
  return (
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
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </span>
        </header>

        <PaymentOptions>
          <button type="button">
            <CreditCard size={16} />
            <span>CARTÃO DE CRÉDITO</span>
          </button>
          <button type="button">
            <Bank size={16} />
            <span>CARTÃO DE DÉBITO</span>
          </button>
          <button type="button">
            <Money size={16} />
            <span>DINHEIRO</span>
          </button>
        </PaymentOptions>
      </PaymentMethod>
    </AddressAndPaymentInfo>
  );
}
