import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { CartContext } from "../../contexts/CartContext";

import { HeaderComponent, HeaderContainer, InfoBar } from "./styles";

export function Header() {
  const { coffeeCart } = useContext(CartContext);
  const coffeeItemsAmount = coffeeCart.length;
  const isCartEmpty = coffeeItemsAmount <= 0;

  return (
    <HeaderComponent>
      <HeaderContainer className="container">
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>

        <InfoBar isCartEmpty={isCartEmpty}>
          <div>
            <MapPin weight="fill" size={22} />
            <span>Porto Alegre, RS</span>
          </div>

          <NavLink to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            <span>{coffeeItemsAmount}</span>
          </NavLink>
        </InfoBar>
      </HeaderContainer>
    </HeaderComponent>
  );
}
