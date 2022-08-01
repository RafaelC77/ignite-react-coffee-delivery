import { AddressAndPayment } from "./components/AddressAndPayment";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CheckoutComponent } from "./styles";

export function Checkout() {
  return (
    <CheckoutComponent>
      <form action="/success">
        <AddressAndPayment />

        <SelectedCoffees />
      </form>
    </CheckoutComponent>
  );
}
