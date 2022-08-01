import { AddressAndPayment } from "./components/AddressAndPayment";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutComponent } from "./styles";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

const checkoutFormValidationSchema = zod.object({
  postalCode: zod.number().min(1, "Digite um CEP"),
  street: zod.string().min(5, "Mínimo de 5 caracteres"),
  number: zod.number().min(1, "Digito um número"),
  aditionalInfo: zod.string(),
  neighborhood: zod.string().min(1, "Digite o bairro"),
  city: zod.string().min(1, "Digite a cidade"),
  state: zod.string().min(1, "Digite o estado"),
});

type CheckoutFormData = zod.infer<typeof checkoutFormValidationSchema>;

export function Checkout() {
  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormValidationSchema),
  });

  const { createNewOrder, resetCart } = useContext(CartContext);
  const { handleSubmit, reset, formState } = checkoutForm;
  const { errors } = formState;
  const navigate = useNavigate();

  function handleConfirmOrder(data: CheckoutFormData) {
    createNewOrder(data);
    reset();
    resetCart();
    navigate("/success");
  }

  return (
    <CheckoutComponent>
      <form onSubmit={handleSubmit(handleConfirmOrder)}>
        <FormProvider {...checkoutForm}>
          <AddressAndPayment />

          <SelectedCoffees />
        </FormProvider>
      </form>
    </CheckoutComponent>
  );
}
