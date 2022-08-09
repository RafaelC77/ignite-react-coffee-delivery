import { Minus, Plus } from "phosphor-react";
import {
  ChangeAmountButtonComponent,
  DecrementButton,
  IncrementButton,
} from "./styles";

interface ChangeAmountButtonProps {
  coffeeAmount: number;
  thin?: boolean;
  increaseCoffee: () => void;
  decreaseCoffee: () => void;
}

export function ChangeAmountButton({
  increaseCoffee,
  decreaseCoffee,
  coffeeAmount,
  thin,
}: ChangeAmountButtonProps) {
  return (
    <ChangeAmountButtonComponent thin={thin}>
      <DecrementButton onClick={decreaseCoffee}>
        <Minus />
      </DecrementButton>
      <input
        type="number"
        id="price"
        step={1}
        placeholder={String(coffeeAmount)}
        readOnly
      />
      <IncrementButton onClick={increaseCoffee}>
        <Plus />
      </IncrementButton>
    </ChangeAmountButtonComponent>
  );
}
