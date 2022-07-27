import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

import { HeaderComponent, InfoBar } from "./styles";

export function Header() {
  return (
    <HeaderComponent>
      <NavLink to="/">
        <img src={coffeeDeliveryLogo} alt="" />
      </NavLink>

      <InfoBar>
        <div>
          <MapPin weight="fill" size={22} />
          <span>Porto Alegre, RS</span>
        </div>

        <NavLink to="/checkout">
          <ShoppingCart size={22} weight="fill" />
          <span>3</span>
        </NavLink>
      </InfoBar>
    </HeaderComponent>
  );
}
