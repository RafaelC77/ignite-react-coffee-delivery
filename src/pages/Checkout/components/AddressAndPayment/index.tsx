import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CartContext } from "../../../../contexts/CartContext";

import {
  AddressAndPaymentInfo,
  AddressForm,
  AditionalInfo,
  BaseInput,
  CityInfo,
  InputFields,
  NumberInput,
  PaymentContainer,
  PaymentContent,
  PaymentMethod,
  PaymentOptions,
  PostalCodeInput,
  StateInfo,
  StreetInput,
} from "./styles";

export function AddressAndPayment() {
  const { register } = useFormContext();

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
          <PostalCodeInput
            type="text"
            id="postalCode"
            placeholder="CEP"
            {...register("postalCode", { valueAsNumber: true })}
          />
          <StreetInput
            type="text"
            id="street"
            placeholder="Rua"
            {...register("street")}
          />
          <NumberInput
            type="text"
            id="number"
            placeholder="Número"
            {...register("number", { valueAsNumber: true })}
          />
          <div>
            <AditionalInfo
              type="text"
              id="aditionalInfo"
              placeholder="Complemento"
              {...register("aditionalInfo")}
            />
            <span>Opcional</span>
          </div>
          <BaseInput
            type="text"
            id="neighborhood"
            placeholder="Bairro"
            {...register("neighborhood")}
          />
          <CityInfo
            type="text"
            id="city"
            placeholder="Cidade"
            {...register("city")}
          />
          <StateInfo
            type="text"
            id="state"
            placeholder="UF"
            {...register("state")}
          />
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
          <PaymentContainer>
            <input
              type="radio"
              id="credit"
              value="Cartão de Crédito"
              {...register("paymentMethod")}
            />

            <label htmlFor="credit">
              <PaymentContent>
                <CreditCard size={16} />
                <span>CARTÃO DE CRÉDITO</span>
              </PaymentContent>
            </label>
          </PaymentContainer>

          <PaymentContainer>
            <input
              type="radio"
              id="debit"
              value="Cartão de débito"
              {...register("paymentMethod")}
            />

            <label htmlFor="debit">
              <PaymentContent>
                <Bank size={16} />
                <span>CARTÃO DE DÉBITO</span>
              </PaymentContent>
            </label>
          </PaymentContainer>

          <PaymentContainer>
            <input
              type="radio"
              id="cash"
              value="Dinheiro"
              {...register("paymentMethod")}
            />

            <label htmlFor="cash">
              <PaymentContent>
                <Money size={16} />
                <span>DINHEIRO</span>
              </PaymentContent>
            </label>
          </PaymentContainer>
        </PaymentOptions>
      </PaymentMethod>
    </AddressAndPaymentInfo>
  );
}
