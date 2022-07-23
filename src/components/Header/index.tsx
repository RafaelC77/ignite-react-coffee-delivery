import { MapPin, ShoppingCart } from "phosphor-react";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

import { HeaderComponent } from "./styles";

export function Header() {
  return (
    <HeaderComponent>
      <img src={coffeeDeliveryLogo} alt="" />

      <div>
        <MapPin weight="fill" size={22} />
        <span>Porto Alegre, RS</span>
      </div>

      <a href="">
        <ShoppingCart size={22} weight="fill" />
        <span>3</span>
      </a>
    </HeaderComponent>
  );
}
