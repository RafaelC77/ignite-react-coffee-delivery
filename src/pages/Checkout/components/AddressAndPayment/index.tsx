import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";

import {
  AddressAndPaymentInfo,
  AddressForm,
  AditionalInfo,
  BaseInput,
  CityInfo,
  ErrorMessage,
  InputFields,
  Neighborhood,
  Number,
  PaymentContainer,
  PaymentContent,
  PaymentErrorMessage,
  PaymentMethod,
  PaymentOptions,
  PostalCode,
  StateInfo,
  Street,
} from "./styles";

export function AddressAndPayment() {
  const { register, formState } = useFormContext<any>();

  const { errors } = formState;

  console.log(errors);
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
          <PostalCode>
            <BaseInput
              type="text"
              id="postalCode"
              placeholder="CEP"
              {...register("postalCode")}
            />
            {errors?.postalCode?.message && (
              <ErrorMessage>{String(errors.postalCode.message)}</ErrorMessage>
            )}
          </PostalCode>
          <Street>
            <BaseInput
              type="text"
              id="street"
              placeholder="Rua"
              {...register("street")}
            />
            {errors?.street?.message && (
              <ErrorMessage>{String(errors.street.message)}</ErrorMessage>
            )}
          </Street>

          <Number>
            <BaseInput
              type="text"
              id="number"
              placeholder="Número"
              {...register("number")}
            />
            {errors?.number?.message && (
              <ErrorMessage>{String(errors.number.message)}</ErrorMessage>
            )}
          </Number>

          <AditionalInfo>
            <BaseInput
              type="text"
              id="aditionalInfo"
              placeholder="Complemento"
              {...register("aditionalInfo")}
            />
            <span>Opcional</span>
          </AditionalInfo>
          <Neighborhood>
            <BaseInput
              type="text"
              id="neighborhood"
              placeholder="Bairro"
              {...register("neighborhood")}
            />
            {errors?.neighborhood?.message && (
              <ErrorMessage>{String(errors.neighborhood.message)}</ErrorMessage>
            )}
          </Neighborhood>
          <CityInfo>
            <BaseInput
              type="text"
              id="city"
              placeholder="Cidade"
              {...register("city")}
            />
            {errors?.city?.message && (
              <ErrorMessage>{String(errors.city.message)}</ErrorMessage>
            )}
          </CityInfo>
          <StateInfo>
            <BaseInput
              type="text"
              id="state"
              placeholder="UF"
              {...register("state")}
            />
            {errors?.state?.message && (
              <ErrorMessage>{String(errors.state.message)}</ErrorMessage>
            )}
          </StateInfo>
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
              value="Cartão de Débito"
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

          {errors?.paymentMethod?.message && (
            <PaymentErrorMessage>
              {String(errors.paymentMethod.message)}
            </PaymentErrorMessage>
          )}
        </PaymentOptions>
      </PaymentMethod>
    </AddressAndPaymentInfo>
  );
}
