import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayouContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayouContainer>
      <Header />
      <Outlet />
    </LayouContainer>
  );
}
