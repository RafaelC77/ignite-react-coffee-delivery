import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import {
  Address,
  DeliveryInfo,
  Payment,
  SuccessContainer,
  Time,
  Wrapper,
} from "./styles";

export function Success() {
  const { order } = useContext(CartContext);

  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Wrapper>
        <DeliveryInfo>
          <Address>
            <div>
              <MapPin weight="fill" size={16} />
            </div>
            <span>
              Entrega em{" "}
              <strong>
                {order?.address.street}, {order?.address.number}
              </strong>
              <br />
              {order?.address.neighborhood} - {order?.address.city},{" "}
              {order?.address.state}
            </span>
          </Address>
          <Time>
            <div>
              <Timer weight="fill" size={16} />
            </div>
            <span>
              Previsão de entrega
              <br />
              <strong>20 min - 30 min</strong>
            </span>
          </Time>
          <Payment>
            <div>
              <CurrencyDollar size={16} />
            </div>
            <span>
              Pagamento na entrega
              <br />
              <strong>{order?.payment_method}</strong>
            </span>
          </Payment>
        </DeliveryInfo>
        <img
          src="src/assets/success-image.svg"
          alt="Homem em uma moto com uma cesta na garupa"
        />
      </Wrapper>
    </SuccessContainer>
  );
}
