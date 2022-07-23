import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" />
      </Route>
    </Routes>
  );
}
